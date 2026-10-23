import { Link } from "@/i18n/navigation";

type ArticleActionsProps = {
  consorcioCta: string;
  waitlistCta: string;
};

export function ArticleActions({ consorcioCta, waitlistCta }: ArticleActionsProps) {
  return (
    <div className="actions-row">
      <Link href="/consorcio" className="ghost-link">
        {consorcioCta}
      </Link>
      <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
        {waitlistCta}
      </Link>
    </div>
  );
}
