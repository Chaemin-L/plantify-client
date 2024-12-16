import { MONEYGRAPHY_PIXEL } from "@/styles/fonts/fonts";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function FeatureLayout({ title, description, children }: Props) {
  return (
    <div className=" h-screen w-full mx-auto py-28 px-4 ">
      <div className="w-full h-full relative">
        <div className="space-y-4">
          <h1
            className={`${MONEYGRAPHY_PIXEL.variable} ${MONEYGRAPHY_PIXEL.className} text-[36px]`}
          >
            {title}
          </h1>
          <p className="whitespace-pre text-t2">{description}</p>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
