import Image from "next/image";
import { FC } from "react";
import type { Beer as BeerType } from "../../../types/beer.types";
import { Bookmarker } from "..";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/_global";

export const Beer: FC<BeerType> = (beer) => {
  const searchTerm = useSelector((state: RootState) => state.search.value);

  return (
    <div className="p-5 rounded-md bg-slate-200 flex flex-col items-center relative min-h-full">
      <Bookmarker beer={beer} />
      <div className="w-[150px] h-[150px]">
        {beer.image_url ? (
          <Image
            src={beer.image_url}
            alt={beer.name}
            width={150}
            height={150}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAcVGRjJIAAAMHSURBVHja7d29jdtAEMVxksEGzO8ClsAqVMIFPhfBKlQCAxfAgAeIW6UBw7Ao8cOR3pvD/l8D+4PEmV0Og60qQgghhBBCCCGEkO+ct88/+eFa/z3/zS/P+nX+l4sF0N4BswUw3AGLBZCz9z9o1oDRAEhrwOR9BnO+GQCdG9CvAYsbkEsEvP28L//1WXkbgaMNPACmMgEJgPs8AKAF4N2NAwA6AIEAS5mAHkAgQC4TMACIBLBMqTIAAKtcDevXAEIBHCOSBgAA97Q8AQCwBjhmNC2A4gFd8Z/tAPDlFACAwf3xGoAdkGMBLgDKA9SPgCuA8gBNMMAIoDxACgaYAJQHaIMBZgDe+QQAx4wGQA/gEbCUBxgABAPk8gAZQDbPaIoH1ACeAdfSAA2AcICxNEACEA6gntG0AAA8A9Qzmg4AgGeAekbTAyge8DyfkM9o4gHUE4ocD6B9Pa4DArTvZs0WoD2Xpy1AeyZrtwDtftxtAdpe3G8B2la4bYTiTrSzvrQR1HuA0VuF2jps9wA3bxFoy2CvCJRlsPsMKsug2QeM3iJQlkG7D9BtR90+4OatQmUd7lehsA4P1pfVYX0EuHrbgA6QjgCjtw3oOtEhYPb2IV0n6o8Ai7kPyQD5MHbAxdsIVZ2ocQPSMWB0AyZvI1QBumPA7AZoenHvBgzHgMUN0PTiHBmg2Azq0ADFZtCEBih2oxQaoNiN2tAAxXbYhQYotsMewBlAcSAYAGTziSQDMAPqc8AFgBvw+kNhAwBAcMDrXwwSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcA7gOiE7wH6tWPX6xAbYL1i0X7KpuGi19TbC/7RCxYXLtbkITp9Czc3vJ7ftThJAcjbi8/9g1qx//BOIfoCqet9f/6MihBBCCCGEEEII+Y75DTXZG2egQ2rOAAAAAElFTkSuQmCC"
            className="max-h-full w-auto mx-auto"
          />
        ) : (
          <Image
            src={"/beer-bottle.png"}
            alt="Bottle image not found"
            width={150}
            height={150}
            className="max-h-full w-auto mx-auto opacity-60"
          />
        )}
      </div>
      <h2 className="font-semibold text-xl mt-4">{beer.name}</h2>
      <p className="mt-3">{beer.description}</p>
      <Link
        href={`/${searchTerm}/${beer.id}`}
        className="inline-block py-2 px-5 bg-blue-500 hover:bg-blue-400 text-white mt-auto rounded-lg shadow-md"
      >
        More info
      </Link>
    </div>
  );
};
