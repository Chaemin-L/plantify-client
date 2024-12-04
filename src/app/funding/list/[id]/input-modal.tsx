import { Button } from "@/app/(_components)/bottom-fixed-button";
import { Sheet } from "react-modal-sheet";

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
export default function InputModal({ isOpen, setOpen }: Props) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={[250]}
      className="w-full max-w-[500px] mx-auto rounded-t-2xl  "
    >
      <Sheet.Backdrop onTap={() => setOpen(false)} />
      <Sheet.Container
        className="*:bg-shadow-800 text-white"
        style={{ background: "transparent" }}
      >
        <Sheet.Header className=" rounded-t-2xl " />
        <Sheet.Content className=" px-8 py-4  ">
          <form className="h-full flex flex-col justify-between">
            <label htmlFor="funding_amount" className="text-t3">
              기부 금액
            </label>
            <div className="flex gap-2 items-center">
              <input
                id="funding_amount"
                type="number"
                className="flex-1 outline-0 text-bd1 bg-transparent border-b border-shadow-600 focus:border-accent-green text-center"
              />
              <span>원</span>
            </div>
            <Button>확인</Button>
          </form>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
