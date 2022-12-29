import { FC } from "react";
import { Beer } from "..";
import type { Beer as BeerType } from "../../../types/beer.types";
import { gridClass } from "../../Results/Results/Results";

export const BeerList: FC<{ beers: BeerType[] }> = ({ beers }) => {
  return (
    <div className={`${gridClass} items-center flex-wrap`}>
      {beers.map((beer) => (
        <Beer key={beer.id} {...beer} />
      ))}
    </div>
  );
};
