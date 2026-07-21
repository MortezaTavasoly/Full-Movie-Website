import { Link } from "react-router-dom";

import { WrapperText } from "@/components/ui/atoms/WrapperText";

const CategoryMenu = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Link to="/">
        <WrapperText
          className="cursor-pointer hover:text-[var(--theme-primary-200)] transition"
          type={{ name: "title", level: 3 }}
          text="Home Page"
        />
      </Link>

      <WrapperText
        className="cursor-pointer hover:text-[var(--theme-primary-200)] transition"
        type={{ name: "title", level: 3 }}
        text="Movies"
      />
      <WrapperText
        className="cursor-pointer hover:text-[var(--theme-primary-200)] transition"
        type={{ name: "title", level: 3 }}
        text="Series"
      />
      <WrapperText
        className="cursor-pointer hover:text-[var(--theme-primary-200)] transition"
        type={{ name: "title", level: 3 }}
        text="New and Popular"
      />
      <WrapperText
        className="cursor-pointer hover:text-[var(--theme-primary-200)] transition"
        type={{ name: "title", level: 3 }}
        text="My List"
      />
    </div>
  );
};

export default CategoryMenu;
