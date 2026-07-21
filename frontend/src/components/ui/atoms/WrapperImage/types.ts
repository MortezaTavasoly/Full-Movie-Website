export interface ImageWrapperProps {
  name: string;
  address: string;
  className?: string;
  size?: ImageSize;
}

type ImageSize = {
  width: number;
  height: number;
};
