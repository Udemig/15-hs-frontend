import { Link } from "react-router-dom";
import { collapsedNavItems, navItems } from "../../utils/constants";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar-context";

const Sidebar = () => {
  const { isCollapsed } = useContext(SidebarContext);

  if (isCollapsed) {
    return (
      <div className="w-20 h-[calc(100vh-56px)] sticky max-sm:hidden">
        <div className="py-3">
          {collapsedNavItems.map((item, key) => (
            <Link to={item.path} key={key} className="grid place-items-center py-4 px-2 mx-2 rounded-lg hover:bg-grey">
              <span className="text-xl mb-2">{item.icon}</span>
              <span className="text-[10px] text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Küçük sidebar genişliğinde boş bir div oluşturduk arayüz kaymasını engellemek için */}
      <div className="w-20 max-sm:hidden"></div>

      <aside className="w-60 fixed h-[calc(100vh-56px)] top-14 z-20 bg-black overflow-y-auto slide-in shadow-xl ">
        <div className="py-3">
          {navItems.map((category, key) => (
            <div key={key} className="border-b border-grey py-4 px-3">
              {category.title && <h2 className="font-semibold mb-2">{category.title}</h2>}

              <div>
                {category.items.map((item, key) => (
                  <Link to={item.path} key={key} className="flex gap-4 items-center p-2 hover:bg-dark rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
