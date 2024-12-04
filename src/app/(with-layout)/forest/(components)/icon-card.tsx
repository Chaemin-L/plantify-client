import Link from "next/link";

interface Props {
  title: string;
  href: string;
  thumbnail: string;
}

export default function IconCard({ title, href, thumbnail }: Props) {
  return (
    <Link href={href} className="flex-1 card h-full flex flex-col ">
      <h1 className="card-title">{title}</h1>
      <img src={thumbnail} className="self-end w-1/2 " alt={title} />
    </Link>
  );
}
