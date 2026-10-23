import { Link } from "@/i18n/navigation";

type Crumb = {
  label: string;
  href?: "/" | "/guias";
};

type BreadcrumbsProps = {
  label: string;
  items: readonly Crumb[];
};

export function Breadcrumbs({ label, items }: BreadcrumbsProps) {
  return (
    <nav aria-label={label}>
      <ol className="crumbs">
        {items.map((item) => (
          <CrumbItem key={item.label} item={item} />
        ))}
      </ol>
    </nav>
  );
}

function CrumbItem({ item }: { item: Crumb }) {
  if (!item.href) {
    return (
      <li>
        <span aria-current="page">{item.label}</span>
      </li>
    );
  }

  return (
    <li>
      <Link className="text-link" href={item.href}>
        {item.label}
      </Link>
    </li>
  );
}
