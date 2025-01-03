import { FaUserCircle } from "react-icons/fa";
const Loader = () => {
  const arr = new Array(20).fill("..");
  return arr.map((i, key) => (
    <div key={key} className="animate-pulse">
      <div className="bg-gray-600 h-[220px] md:h-48 mb-4 rounded"></div>
      <div className="flex gap-3 items-center">
        <FaUserCircle className="text-5xl text-gray-600 self-start" />

        <div className="w-full">
          <div className="w-[90%] h-2.5 bg-gray-600 rounded-full "></div>
          <div className="w-[60%] h-2.5 bg-gray-600 rounded-full my-4"></div>
          <div className="flex gap-2 items-center text-gray-600 ">
            <div className="w-16 h-2 bg-gray-600 rounded-full"></div>*
            <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
