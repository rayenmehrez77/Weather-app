import Highlight from "../components/Highlight";
import Sidebar from "../components/Sidebar";
import Status from "../components/status";
import Weather from "../components/Weather";

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="flex-auto bg-blue-darkest">
        <div className="flex items-center justify-end p-6 px-8">
          <div className="mr-6 bg-gray-lightest h-8 cursor-pointer w-8 font-bold flex items-center justify-center rounded-full">
            °C{" "}
          </div>
          <div className="bg-gray-dark text-gray-lightest  cursor-pointer h-8 w-8 font-bold flex items-center justify-center rounded-full">
            °F{" "}
          </div>
        </div>
        <div className="mx-auto my-12 mx-14">
          <div className="flex items-center justify-between flex-wrap">
            <Weather />
            <Weather />
            <Weather />
            <Weather />
            <Weather />
          </div>
          <div>
            <h1 className="mb-4 text-gray-light font-bold tracking-wider">
              Today's Highlights
            </h1>
            <div className="grid grid-cols-4 gap-2 grid-rows-3">
              <Status />
              <Highlight />
              <Highlight />
              <Highlight />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
