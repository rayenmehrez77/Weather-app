import Image from "next/image";
import { useState } from "react";

function Sidebar() {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-blue-dark w-96 relative">
      {click ? (
        <button className="search">Search for places</button>
      ) : (
        <>
          <div
            className="flex pt-6 px-6 items-center justify-between"
            onClick={() => setClick(true)}
          >
            <button className="search">Search for places</button>
            <div className="bg-gray-dark h-10 w-10 flex items-center justify-center rounded-full">
              <Image src="/images/location.svg" width="24px" height="24px" />
            </div>
          </div>
          <div className="relative mt-36">
            <img
              src="/images/cloud-background.png"
              className="w-screen h-45 opacity-5"
            />
            <img src="/images/thunderstorm.png" className="center w-32" />
          </div>
          <div className="text-gray flex flex-col items-center mt-20 h-80 justify-between">
            <h1 className="text-8xl ">15℃</h1>
            <span className="text-3xl mb-4">Shower</span>
            <div className="flex flex-col items-center justify-center">
              <span className="mb-2 text-gray-dark">Today * Fri, 5 Jun</span>
              <div className="flex flex-row items-center">
                <img src="/images/location.svg" className="w-8 " />
                <span>Tunisia</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
