import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="px-2 py-4 sm:px-4 flex justify-between items-center z-10 fixed bg-[#0f0f0f] w-full ">
      <Link to="/" className="flex gap-2">
        <img src="/youtube.png" alt="youtube logo" className="w-10 sm:w-12" />
        <h1 className="text-xl sm:text-2xl font-mono">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden max-w-[200px] w-full mx-5 md:max-w-[500px] "
      >
        <input
          type="text"
          className="bg-[#0f0f0f] px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-400 focus-visible:border-r-0  rounded-l-[20px] w-full"
          defaultValue={query}
        />
        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400" />
        <MdVideoLibrary className="hover:text-gray-400" />
        <IoMdVideocam className="hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
