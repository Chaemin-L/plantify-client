import KakaoLogin from "./kakao-login";

interface Props {
  searchParams: Promise<{ code: string }>;
}
export default async function Page({ searchParams }: Props) {
  const { code } = await searchParams;

  return <KakaoLogin code={code} />;
}
