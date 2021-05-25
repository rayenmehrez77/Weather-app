import { ArrowsExpandIcon } from "@heroicons/react/outline";

function Status() {
  return (
    <div className="rounded text-gray-light bg-blue-dark mb-8 flex flex-col items-center justify-between py-4 col-span-2 ">
      <span>Wind Status</span>
      <h1>
        7<span>mph</span>
      </h1>
      <div className="flex items-center">
        <ArrowsExpandIcon className="bg-gray-darkest " />
        <span>WSW</span>
      </div>
    </div>
  );
}

export default Status;
