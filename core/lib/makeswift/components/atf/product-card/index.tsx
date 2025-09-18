import { Image } from '~/components/image';
import { Link } from '~/components/link';

interface CardProps {
  className?: string;
  image?: string;
  alt: string;
  heading: string;
  description: string;
  link: {
    href: string;
    target?: '_blank' | '_self';
  };
  linkText: string;
}

const defaultIcon = '/default-icon.png';

export function ProductCard({
  className,
  image = defaultIcon,
  alt,
  heading,
  description,
  link,
  linkText,
}: CardProps) {
  return (
    <div className={className}>
      {!!image && <Image alt={alt} height={100} src={image} width={100} />}
      <div>
        <h3>{heading}</h3>
        <p>{description}</p>
        <Link href={link.href} target={link.target}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}
