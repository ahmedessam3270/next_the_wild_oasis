import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[3fr_4fr] gap:5 md:gap-20 border border-primary-800 py-3 mb-4 md:px-10 md:mb-24">
      <div className="relative md:scale-[1.15] md:-translate-x-3 -translate-y-2 md:translate-y-0">
        <Image
          fill
          className="object-cover"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="p-4 md:p-0 -translate-y-28 md:translate-y-0 ">
        <h3 className="text-accent-100 font-black text-5xl md:text-7xl translate-x-[-2rem] md:translate-x-[-254px] bg-primary-950 p-2 md:p-6 pb-1 w-[100%] md:w-[150%] mb-14 md:mb-0">
          Cabin {name}
        </h3>

        <p className="md:text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
