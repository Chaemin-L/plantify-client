import { Sheet } from "react-modal-sheet";

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  snapPoints: number[];
  children: React.ReactNode;
}
export default function BottomSheet({
  isOpen,
  setOpen,
  snapPoints,
  children,
}: Props) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={snapPoints}
      className="w-full max-w-[500px] mx-auto rounded-t-2xl  "
    >
      <Sheet.Backdrop onTap={() => setOpen(false)} />
      <Sheet.Container
        className="*:bg-shadow-800 text-white"
        style={{ background: "transparent" }}
      >
        <Sheet.Header className=" rounded-t-2xl " />
        <Sheet.Content className=" px-8 py-4">{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
