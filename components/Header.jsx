import Image from "next/image";
import User from "../svg/user";
import Search from "../svg/search";
import ShoppingCart from "../svg/shopingcart";
import Bars from "./Bars";
import Link from "next/link";
import Router from "next/router";

export default function Header() {
  return (
    <div className="w-full z-50 pt-2 fixed top-0 bg-white px-2 flex items-center shadow-md justify-between">
      <div className="flex items-center justify-between">
        <div
          className="p-1 cursor-pointer"
          onClick={() => {
            Router.push("/");
          }}
        >
          <div className="hidden md:block lg:hidden">
            <Image
              src="https://furniture.superfast.shop/static/shop-logo.svg"
              width={207}
              height={84}
              objectFit="contain"
            />
          </div>
          <div className="md:hidden lg:block">
            <Image
              src="https://furniture.superfast.shop/static/shop-logo.svg"
              width={110}
              height={40}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="hidden ml-10 space-x-3 mb-2 text-xl justify-between lg:flex">
          <Link href="/shop">
            <a className="hover:underline">Shop</a>
          </Link>
          <Link href="/stories">
            <a className="hover:underline">Stories</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </div>
      </div>
      <div className="flex space-x-2 justify-end items-center">
        <div className="h-full">
          <select className="hover:bg-gray-100 w-auto h-9 cursor-pointer focus:outline-none px-3">
            <option value="ENGLISH-US">ENGLISH-US</option>
          </select>
        </div>
        <div className="cursor-pointer w-5 sm:w-9 hover:bg-gray-100 rounded-md">
          <User />
        </div>
        <div className="cursor-pointer w-5 sm:w-9 hover:bg-gray-100 rounded-md">
          <Search />
        </div>
        <div className="cursor-pointer relative w-5 sm:w-9 hover:bg-gray-100 rounded-md">
          <div className="absolute flex justify-center items-center top-0 sm:top-0.5 right-0 sm:right-0.5 text-xs sm:text-base w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-black text-white">
            0
          </div>
          <ShoppingCart />
        </div>
        <div className="w-5 sm:w-9 lg:hidden">
          <Bars />
        </div>
      </div>
    </div>
  );
}
