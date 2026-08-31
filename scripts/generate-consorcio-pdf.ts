import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { consorcioNote } from "../src/lib/consorcio-note";

const CHARCOAL = rgb(0.11, 0.098, 0.09);
const INK = rgb(0.165, 0.141, 0.125);
const EMBER = rgb(0.769, 0.361, 0.149);
const SMOKE = rgb(0.541, 0.518, 0.486);

async function main() {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const margin = 64;
  const width = page.getWidth() - margin * 2;
  let y = page.getHeight() - 72;

  function pdfSafe(text: string): string {
    return text.replace(/[—–]/g, "-").replace(/·/g, "-");
  }

  function wrap(text: string, font: typeof regular, size: number): string[] {
    const words = pdfSafe(text).split(" ");
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) > width && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }
    if (current) {
      lines.push(current);
    }
    return lines;
  }

  function writeLines(
    text: string,
    font: typeof regular,
    size: number,
    color: ReturnType<typeof rgb>,
    lineHeight: number,
  ) {
    for (const line of wrap(text, font, size)) {
      page.drawText(line, { x: margin, y, size, font, color });
      y -= lineHeight;
    }
  }

  page.drawRectangle({
    x: margin,
    y: y + 8,
    width: 32,
    height: 3,
    color: EMBER,
  });
  y -= 28;

  writeLines(consorcioNote.eyebrow, regular, 10, SMOKE, 16);
  y -= 8;
  writeLines(consorcioNote.title, bold, 22, CHARCOAL, 28);
  y -= 12;
  writeLines(consorcioNote.lead, regular, 12, INK, 18);
  y -= 16;

  for (const section of consorcioNote.sections) {
    writeLines(section.heading, bold, 13, CHARCOAL, 18);
    y -= 4;
    writeLines(section.body, regular, 11, INK, 16);
    y -= 14;
  }

  writeLines(consorcioNote.legal, regular, 9, SMOKE, 13);
  y -= 10;
  writeLines(consorcioNote.footer, regular, 9, SMOKE, 13);

  const bytes = await pdf.save();
  const outDir = path.join(process.cwd(), "public");
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "consorcio.pdf"), bytes);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "PDF generation failed";
  process.stderr.write(`${message}\n`);
  process.exit(1);
});
