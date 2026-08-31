# Lume

Consumer BBQ exhaust hood. Charcoal-capable. First crate: Argentina and Spain.

Brand idea: fire, without the fight.

## Brand book

Working file: [Lume Brand Book](https://www.figma.com/design/YY8oBll09e9wuyqoXpTY1Q)

Web frames live on page **13 Web**.

Source of truth in this repo:

- `brand/tokens.json` — colour, type, space
- `brand/voice.md` — name, voice, Spanish rules
- `brand/claims.md` — what we will and will not say
- `brand/consorcio.md` — one-pager for the building (A4, Neutral Spanish)
- `brand/story.md` — the story we tell to sell (No te despidas)

## Site

Waitlist story, no cart. Default language is Argentine Spanish (`vos`) at `/`. English is `/en`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Waitlist addresses are appended to `data/waitlist.jsonl` (gitignored). In production, set `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` so contacts land in a Resend audience. Never log the address.

The consorcio note is Neutral Spanish at `/consorcio`, with a PDF at `/consorcio.pdf`.

## GitHub Pages

Every push to `main` publishes a static build. Live: [https://torresmanu.github.io/lume/](https://torresmanu.github.io/lume/). Argentine story at `/es-AR/`, English at `/en/`.

GitHub Pages cannot run `POST /api/waitlist`. Locally and on a Node host, the waitlist still persists to `data/waitlist.jsonl` (and Resend when configured).

