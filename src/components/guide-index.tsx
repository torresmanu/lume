import { Link } from "@/i18n/navigation";
import type { Guide } from "@/content/guides";

type GuideIndexProps = {
  guides: readonly Guide[];
  label: string;
  heading?: string;
  lead?: string;
  empty: string;
};

export function GuideIndex({ guides, label, heading, lead, empty }: GuideIndexProps) {
  if (guides.length === 0) {
    return <p className="body">{empty}</p>;
  }

  return (
    <nav aria-label={label} className="stack">
      {heading ? <h2 className="h2">{heading}</h2> : null}
      {lead ? <p className="body">{lead}</p> : null}
      <ul className="guide-list">
        {guides.map((guide) => (
          <GuideListItem key={guide.slug} guide={guide} />
        ))}
      </ul>
    </nav>
  );
}

function GuideListItem({ guide }: { guide: Guide }) {
  return (
    <li>
      <Link className="text-link" href={`/guias/${guide.slug}`}>
        {guide.h1}
      </Link>
      <p className="legal-note">{guide.summary}</p>
    </li>
  );
}
