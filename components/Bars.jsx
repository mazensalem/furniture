import { useState } from "react";
import Link from "next/link";

export default function Bars() {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setisopen(!isopen);
        }}
        className={`z-30 h-8 w-full cursor-pointer ${
          isopen ? "relative" : "space-y-2 py-1"
        }`}
      >
        <div
          className={`h-1 w-full transition-all bg-black transform ${
            isopen && "rotate-45 mt-4 top-0 left-0 absolute"
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-black transition-all transform ${
            isopen && "-rotate-45 mt-4 top-0 left-0 absolute"
          }`}
        ></div>
        <div
          className={`h-1 w-4/5 bg-black float-right transition-all ${
            isopen && "opacity-0"
          }`}
        ></div>
      </div>
      <div
        className={`${
          isopen ? "absolute text-2xl font-bold" : "hidden"
        } pt-20 space-y-3 top-0 left-0 w-screen h-screen p-0 m-0 bg-gray-100 z-10`}
      >
        <div className="text-center">
          <Link href="/shop">
            <a className="hover:underline">Shop</a>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/stories">
            <a className="hover:underline">Stories</a>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </div>
      </div>
    </>
  );
}
