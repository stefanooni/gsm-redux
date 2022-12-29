import { FC } from "react";

export const SkeletonTile: FC = () => (
  <div className="p-3 w-full rounded-md bg-slate-200 animate-pulse flex flex-col items-center">
    <span className="block w-[30px] h-[30px] rounded-md bg-slate-300 animate-pulse self-end mb-6" />
    <span className="block w-[100px] h-[100px] rounded-full bg-slate-300 animate-pulse mb-3" />
    <span className="block p-5 rounded-2xl max-w-[80%] bg-slate-300 animate-pulse w-full mb-3" />
    {Array(4)
      .fill(null)
      .map((_, index) => (
        <span
          className="block p-2 rounded-2xl mb-2 bg-slate-300 animate-pulse w-full"
          key={index}
        />
      ))}
  </div>
);
