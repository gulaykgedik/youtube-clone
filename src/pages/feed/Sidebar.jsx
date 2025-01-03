import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../utils/constants";

const Sidebar = () => {
  const [params] = useSearchParams();
  const selected = params.get("category");
  return (
    <aside className="p-1 md:p-4 m-5">
      {categories.map((i) => (
        <Link key={i.name} to={i.path == "/" ? "/" : `/?category=${i.path}`}>
          <div
            className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition"
            style={{
              background:
                (selected === i.path || (i.name === "Anasayfa" && !selected)) &&
                "#242424",
            }}
          >
            <span className="max-md:text-2xl">{i.icon}</span>
            <span className="max-md:hidden">{i.name}</span>
          </div>
          {i.divider && <hr />}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
