import clsx from "clsx";

interface Props {
  percent: number;
}

export default function Progressbar({ percent }: Props) {
  return (
    <div className="relative w-full h-3 bg-shadow-200 rounded-full">
      <div
        className={`absolute  h-3 bg-red rounded-full left-0 top-0`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
