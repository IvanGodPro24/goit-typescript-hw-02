export type ImageProps = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  alt_description: string;
  likes: number;
};

export type ImagePreviewProps = {
  regular: string;
  alt_description: string;
  name: string;
};

export type ImageGalleryProps = {
  images: ImageProps[];
  onClick: (image: ImagePreviewProps) => void;
};
