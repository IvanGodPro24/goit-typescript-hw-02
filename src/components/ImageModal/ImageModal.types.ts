import { ImagePreviewProps } from "../ImageGallery/ImageGallery.types";

export type ImageModalProps = {
  modalIsOpen: boolean;
  image: ImagePreviewProps | null;
  onClose: () => void;
};
