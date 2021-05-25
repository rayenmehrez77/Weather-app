import Image from "next/image";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/outline";

function Sidebar() {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-blue-dark w-96">
      {click ? (
        <div className="px-6 py-8">
          <div className="relative">
            <img
              onClick={() => setClick(false)}
              className="mb-8 cursor-pointer absolute right-2 top-2"
              src="/images/close.svg"
              alt="close icon"
              width="30px"
              height="30px"
            />
          </div>
          <form className="mt-16 flex items-center justify-around">
            <div className="flex items-center  border border-gray-default focus:ring-2">
              <SearchIcon className="w-5 h-5 text-gray-dark mx-2" />
              <input
                className="font-normal py-2 bg-transparent focus:outline-none text-gray-dark"
                type="text"
                placeholder="Search location"
              />
            </div>
            <button className="SearchBtn">Search</button>
          </form>
          <div className="">
            <div className="flex items-center justify-between w-full mt-12 p-5 hover:border hover:border-gray-default cursor-pointer h-12">
              <span className="text-lg text-gray-light">Monastir</span>
              <ChevronRightIcon className="w-5 h-5 text-gray-dark" />
            </div>
            <div className="flex items-center justify-between w-full mt-12 p-5 hover:border hover:border-gray-default cursor-pointer h-12">
              <span className="text-lg text-gray-light">Tunis</span>
              <ChevronRightIcon className="w-5 h-5 text-gray-dark" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex pt-6 px-6 items-center justify-between">
            <button className="search" onClick={() => setClick(true)}>
              Search for places
            </button>
            <div className="bg-gray-dark h-10 w-10 flex items-center justify-center rounded-full">
              <Image src="/images/location.svg" width="24px" height="24px" />
            </div>
          </div>
          <div className="relative mt-20">
            <img
              src="/images/cloud-background.png"
              className="w-screen h-45 opacity-5"
            />
            <img src="/images/thunderstorm.png" className="center w-32" />
          </div>
          <div className="text-gray flex flex-col items-center mt-20 h-32 justify-between">
            <h1 className="text-8xl mb-8 text-gray-light font-medium">
              15<span className="text-gray-darkest font-thin">℃</span>
            </h1>
            <span className="text-3xl mb-4 text-gray-dark">Shower</span>
            <div className="flex flex-col items-center justify-center">
              <span className="mb-2 text-gray-dark my-2">
                Today * Fri, 5 Jun
              </span>
              <div className="flex flex-row items-center mt-4">
                <img src="/images/location.svg" className="w-8 " />
                <span className="text-gray-dark">Tunisia</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
