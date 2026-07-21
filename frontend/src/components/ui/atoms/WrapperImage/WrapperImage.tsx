import type { ImageWrapperProps } from "./types";

const WrapperImage = ({
  name,
  address,
  size = { width: 100, height: 100 },
  className,
}: ImageWrapperProps) => {
  return (
    <img
      className={className}
      src={address}
      alt={name}
      width={size.width}
      height={size.height}
    />
  );
};

export default WrapperImage;
