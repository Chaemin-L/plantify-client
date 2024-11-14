import clsx from "clsx";

interface Props {
  isShort?: boolean;
  percent: number;
}

export default function Progressbar({ isShort, percent }: Props) {
  return (
    <div
      className={clsx(
        isShort ? "h-2" : "h-3",
        "relative w-full bg-shadow-200 rounded-full"
      )}
    >
      <div
        className={clsx(
          isShort ? "h-2" : "h-3",
          "absolute  h-3 bg-accent-red rounded-full left-0 top-0"
        )}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
