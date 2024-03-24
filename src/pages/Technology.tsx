import { useState } from "react";
import { technology } from "../../data/data.json";
import Header from "../components/Header";
import useCarousel from "../hooks/useCarousel";

export default function Technology() {
  const [active, setActive] = useState(0);
  const { setPause } = useCarousel(setActive, technology.length);

  return (
    <div className="flex flex-col h-screen overflow-auto bg-no-repeat bg-fixed bg-center bg-cover bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      <Header />
      <main className="pt-6 md:pt-10 xl:pl-40 xl:pr-0 md:pb-0 flex flex-col items-start flex-grow gap-8 md:gap-[60px] xl:gap-0">
        <h5 className="py-4 px-6 xl:p-0 uppercase text-base md:text-xl mx-auto md:mx-0 text-white">
          <strong className="text-gray-500">03 </strong> SPACE LAUNCH 101
        </h5>
        <div className="flex flex-col xl:flex-row-reverse flex-grow w-full h-full xl:m-0 gap-8 md:gap-10 xl:justify-between max-auto items-center">
          <img
            loading="lazy"
            onMouseOver={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            className="w-full h-[170px] md:h-1/2 object-cover xl:hidden"
            src={technology[active].images.landscape}
          />
          <img
            loading="lazy"
            onMouseOver={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            className="w-[515px] h-[90%] object-cover hidden xl:block"
            src={technology[active].images.portrait}
          />
          <div className="flex p-6 md:p-10 flex-col xl:flex-row items-center xl:items-start gap-8 md:gap-10 xl:p-0 xl:gap-[120px]">
            <ul className="list-none flex gap-4 md:gap-9 xl:flex-col">
              {technology.map((_member, i) => (
                <li
                  key={i}
                  className={`py-4 px-6 cursor-pointer bg-gray-500 rounded-full hover:bg-white ${
                    active === i && "bg-white"
                  }`}
                  onClick={() => setActive(i)}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
            <div
              onMouseOver={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
              className="flex flex-col gap-4 xl:gap-7"
            >
              <div className="flex flex-col gap-2 xl:gap-4 items-center xl:items-start uppercase font-sans">
                <p className="text-base text-gray-500">the technology ...</p>
                <h5 className="text-2xl md:text-[40px] xl:text-6xl text-white font-serif">
                  {technology[active].name}
                </h5>
              </div>
              <p className="text-center xl:text-lg text-gray-300 xl:h-32 xl:w-[444px] xl:text-start x:text-lg md:text-base text-sm md:leading-[28px] leading-[25px] xl:leading-[32px]">
                {technology[active].description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
