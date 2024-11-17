import { redirect } from "next/navigation";

type Props = {
  params: { type: string };
  children: React.ReactNode;
};

export default function Page({ params, children }: Props) {
  const { type } = params;

  if (!type) {
    redirect("/payments/all?sort=recent");
    return null;
  }

  return <section>{children}</section>;
}
