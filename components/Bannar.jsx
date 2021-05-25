import Link from "next/link";

export default function Bannar() {
  return (
    <>
      <div className="w-10/12 bg-red-400 mt-20 md:mt-28 mx-auto relative">
        <p className="absolute z-20 md:w-2/4 ml-10 text-white top-0 md:top-1/4">
          <h2 className="text-lg md:text-4xl mb-1 md:mb-4">
            Color your livingroom rad
          </h2>
          <p className="text-xs md:text-xl mb-2">
            Dont be a <em>negative</em> person, add some colors to your life.
            Check our collection of posters.
          </p>
          <Link href="/posters">
            <a className="bg-white text-black text-sm rounded-md md:px-3 md:py-1 p-0 font-bold md:text-lg">
              See all posters
            </a>
          </Link>
        </p>
        <div className="bg-black opacity-50 z-10 w-full h-full absolute top-0"></div>
        <img
          loading="lazy"
          className="w-full mt-10"
          src="/color-your-livingroom-rad.jpg"
        />
      </div>
    </>
  );
}
