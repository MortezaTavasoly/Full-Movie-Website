import { WrapperText } from "@/components/ui/atoms";

function UserInformations() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      <div className="flex justify-start items-end gap-2">
        <WrapperText
          text="Username:"
          type={{ level: 1, name: "body", weight: "bold" }}
          className="text-[var(--theme-primary-300)]/80"
        />
        <WrapperText
          text={"test user name"}
          type={{ level: 3, name: "title", weight: "bold" }}
          className="text-[var(--theme-base-white)]"
        />
      </div>
      <div className="flex justify-start items-end gap-2">
        <WrapperText
          text="Email:"
          type={{ level: 1, name: "body", weight: "bold" }}
          className="text-[var(--theme-primary-300)]/80"
        />
        <WrapperText
          text={"vector.1475225963@gmail.com"}
          type={{ level: 3, name: "title", weight: "bold" }}
          className="text-[var(--theme-base-white)]"
        />
      </div>
      <div className="flex justify-start items-end gap-2">
        <WrapperText
          text="Created Date:"
          type={{ level: 1, name: "body", weight: "bold" }}
          className="text-[var(--theme-primary-300)]/80"
        />
        <WrapperText
          text={"16/12/1379"}
          type={{ level: 3, name: "title", weight: "bold" }}
          className="text-[var(--theme-base-white)]"
        />
      </div>
      <div className="flex justify-start items-end gap-2">
        <WrapperText
          text="Role:"
          type={{ level: 1, name: "body", weight: "bold" }}
          className="text-[var(--theme-primary-300)]/80"
        />
        <WrapperText
          text={"user"}
          type={{ level: 3, name: "title", weight: "bold" }}
          className="text-[var(--theme-base-white)]"
        />
      </div>
    </div>
  );
}

export default UserInformations;
