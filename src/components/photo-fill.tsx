import Image from "next/image";

type PhotoFillProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function PhotoFill({ src, alt, sizes, priority }: PhotoFillProps) {
  return (
    <div className="media-zoom">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={90}
      />
    </div>
  );
}
