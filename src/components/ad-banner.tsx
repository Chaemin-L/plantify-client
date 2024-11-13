export default function AdBanner() {
  return (
    <aside className="max-xl:hidden w-[500px] flex flex-col justify-center">
      <div className="flex flex-col justify-between gap-[150px]">
        <div>
          <span className="text-[40px] leading-none">나만의 숲 만들기</span>
          <h1 className="text-[64px] font-bold ">PLANTIFY</h1>
        </div>
        <ul className="flex gap-5">
          {["기부", "펀딩", "숲꾸"].map((category) => (
            <div
              key={category}
              className="px-7 py-2 rounded-3xl bg-white text-t1"
            >
              {category}
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
}
