export default function Loading() {
  return (
    <div className="h-full w-full place-content-center">
      <div className="flex justify-center items-center h-full">
        <div className=" w-fit h-full my-auto flex place-content-center">
          <span className="w-12 h-12 border-[5px] border-accent-green rounded-full border-b-transparent inline-block box-border animate-[spin_1s_infinite]" />
        </div>
      </div>
    </div>
  );
}
