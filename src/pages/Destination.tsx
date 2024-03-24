import Header from "../components/Header";
import { destinations } from "../../data/data.json";
import { useState } from "react";
import useCarousel from "../hooks/useCarousel";

export default function Destination() {
  const [active, setActive] = useState(0);
  const { setPause } = useCarousel(setActive, destinations.length);

  return (
    <div className="h-screen overflow-auto flex flex-col text-white bg-no-repeat bg-fixed bg-center bg-cover bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Header />
      <main className="p-6 md:p-10 xl:pl-40 md:pb-0 flex flex-col items-start gap-8 xl:gap-16">
        <h5 className="uppercase text-base md:text-xl mx-auto md:mx-0 text-white">
          <strong className="text-gray-500">01 </strong> Pick your destination
        </h5>

        <div className="flex flex-col xl:flex-row w-full items-center mx-auto xl:gap-44">
          <img
            loading="lazy"
            onMouseOver={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            className="w-[170px] rounded-full h-[170px] md:w-[300px] md:h-[300px] mx-auto xl:mx-0 xl:w-[445px] xl:h-[445px] animate-rotate"
            src={destinations[active].images.png}
          />

          <div
            onMouseOver={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            className=" flex flex-col items-center xl:items-start mt-[26px] md:p-14 xl:p-0 xl:w-[445px]"
          >
            <ul className="list-none flex gap-7 md:gap-9">
              {destinations.map((destination, i) => (
                <li
                  key={i}
                  className={`text-sm font-sans md:text-base pb-2 text-gray-300 uppercase cursor-pointer hover:border-b-[3px] hover:border-gray-500 ${
                    active === i && "border-b-[3px] text-white border-white"
                  }`}
                  onClick={() => setActive(i)}
                >
                  {destination.name}
                </li>
              ))}
            </ul>

            <h2 className="mt-5 uppercase font-serif xl:text-[100px] md:text-[80px] text-[56px]">
              {destinations[active].name}
            </h2>

            <div className="flex flex-col items-center xl:items-start gap-8">
              <p className="text-center text-gray-300 xl:text-start x:text-lg md:text-base text-sm md:leading-[28px] leading-[25px] xl:leading-[32px]">
                {destinations[active].description}
              </p>
              <hr className="w-full h-3" />

              <div className="flex flex-col items-center xl:items-start gap-8 md:flex-row">
                <div className="flex flex-col items-center xl:items-start gap-3 uppercase">
                  <p className="text-gray-300">AVG. DISTANCE</p>
                  <h5 className="font-sans xl:text-[28px] xl:tracking-[4.72px] md:text-xl md:tracking-[3.38px] text-base tracking-[2.7px]">
                    {destinations[active].distance}
                  </h5>
                </div>

                <div className="flex flex-col items-center xl:items-start gap-3 uppercase">
                  <p className="text-gray-300">Est. travel time</p>
                  <h5 className="font-serif xl:text-[28px] md:text-xl text-base">
                    {destinations[active].travel}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
