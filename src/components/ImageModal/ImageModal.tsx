import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";
import { useMemo } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, onClose, image }: ImageModalProps) => {
  const customStyles = useMemo(
    () => ({
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    }),
    []
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
      overlayClassName={css.overlay}
    >
      <img
        src={image?.regular}
        alt={image?.alt_description}
        className={css.image}
      />
      <div className={css.container}>
        <p className={css.text}>{image?.alt_description}</p>
        <p className={css.text}>Author: {image?.name}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
