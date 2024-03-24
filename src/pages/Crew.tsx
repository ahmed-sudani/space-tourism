import Header from "../components/Header";
import { crew } from "../../data/data.json";
import { useState } from "react";
import useCarousel from "../hooks/useCarousel";
import { Helmet } from "react-helmet";

const TITLE = "Space Tourism | Crew";
export default function Crew() {
  const [active, setActive] = useState(0);
  const { setPause } = useCarousel(setActive, crew.length);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="flex flex-col h-screen overflow-auto bg-no-repeat bg-fixed bg-center bg-cover bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] xl:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
        <Header />
        <main className="p-6 md:p-10 xl:pl-40 xl:pr-36 md:pb-0 flex flex-col items-start flex-grow gap-8 md:gap-[60px] xl:gap-0">
          <h5 className="uppercase text-base md:text-xl mx-auto md:mx-0 text-white">
            <strong className="text-gray-500">02 </strong> Meet your crew
          </h5>
          <div className="flex flex-col xl:flex-row-reverse flex-grow w-full h-full xl:m-0 gap-8 md:gap-10 xl:justify-between max-auto items-center  md:flex-col-reverse">
            <img
              onMouseOver={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
              className="w-[327px] h-[223px] border-b md:block object-contain flex-grow-0 md:w-auto xl:w-[30%] md:h-auto self-end  md:border-0 mx-auto xl:mx-0"
              src={crew[active].images.png}
            />
            <div className=" flex flex-col md:flex-col-reverse items-center xl:items-start gap-8 md:gap-10 xl:p-0 xl:gap-[120px]">
              <ul className="list-none flex gap-4 cursor-pointer md:gap-9">
                {crew.map((_member, i) => (
                  <li
                    key={i}
                    className={`w-[10px] h-[10px] bg-gray-500 rounded-full ${
                      active === i && "bg-white"
                    }`}
                    onClick={() => setActive(i)}
                  ></li>
                ))}
              </ul>
              <div
                onMouseOver={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="flex flex-col gap-4 xl:gap-7"
              >
                <div className="flex flex-col gap-2 xl:gap-4 items-center xl:items-start uppercase font-sans">
                  <p className="text-base md:text-2xl xl:text-[32px] text-gray-500">
                    {crew[active].role}
                  </p>
                  <h5 className="text-2xl md:text-[40px] xl:text-6xl text-white font-serif">
                    {crew[active].name}
                  </h5>
                </div>
                <p className="text-center xl:text-start x:text-lg md:text-base text-sm md:leading-[28px] leading-[25px] xl:leading-[32px] text-gray-300 xl:h-32 xl:w-[444px]">
                  {crew[active].bio}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
