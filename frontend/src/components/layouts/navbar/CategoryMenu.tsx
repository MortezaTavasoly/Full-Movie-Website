import { WrapperText } from "@/components/ui/atoms/wrapperText";

const CategoryMenu = () => {
  return (
    <div className="flex justify-between items-center gap-4 ">
      <WrapperText
        classes="cursor-pointer"
        type={{ name: "title", level: 3 }}
        text="Home Page"
      />
      <WrapperText
        classes="cursor-pointer"
        type={{ name: "title", level: 3 }}
        text="Movies"
      />
      <WrapperText
        classes="cursor-pointer"
        type={{ name: "title", level: 3 }}
        text="Series"
      />
      <WrapperText
        classes="cursor-pointer"
        type={{ name: "title", level: 3 }}
        text="New and Popular"
      />
      <WrapperText
        classes="cursor-pointer"
        type={{ name: "title", level: 3 }}
        text="My List"
      />
    </div>
  );
};

export default CategoryMenu;
