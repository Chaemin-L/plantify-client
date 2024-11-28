import clsx from "clsx";

interface Props {
  isShort?: boolean;
  percent: number;
}

export default function Progressbar({ isShort, percent }: Props) {
  return (
    <div
      className={clsx(
        isShort ? "h-0.5" : "h-1",
        "relative w-full bg-shadow-200 rounded-full"
      )}
    >
      <div
        className={clsx(
          isShort ? "h-0.5" : "h-1",
          "absolute bg-accent-red rounded-full left-0 top-0"
        )}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
