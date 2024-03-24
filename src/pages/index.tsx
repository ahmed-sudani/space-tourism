import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen overflow-auto flex flex-col text-white bg-no-repeat bg-fixed bg-center bg-cover bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] xl:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header />
      <main className="p-6 md:p-10 xl:pl-40 xl:px-36 md:pb-0 flex flex-col xl:flex-row justify-between items-center overflow-auto flex-grow gap-8 md:gap-[60px]">
        <div className="md:max-w-[450px]">
          <p className="font-sans text-gray-500 max-xl:text-center xl:text-[28px] xl:tracking-[4.72px] md:text-xl md:tracking-[3.38px] text-base tracking-[2.7px]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-serif max-xl:text-center md:text-[150px] md:leading-[150px] xl:leading-normal leading-[100px] text-[80px]">
            SPACE
          </h1>
          <p className="x:text-lg max-xl:text-center md:text-base text-sm md:leading-[28px] leading-[25px] xl:leading-[32px] text-gray-300">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          className="md:w-64 md:h-64 w-40 h-40 bg-white rounded-full text-center md:leading-[256px] leading-[160px] hover:outline-8 outline outline-white text-black font-serif text-xl tracking-[1.25px] md:tracking-[2px] md:text-[32px]"
          to="/destination"
        >
          EXPLORE
        </Link>
      </main>
    </div>
  );
}
