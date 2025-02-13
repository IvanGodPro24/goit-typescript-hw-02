import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.list}>
      {images.map(
        ({
          id,
          urls: { small, regular },
          user: { name },
          alt_description,
          likes,
        }) => (
          <li key={id}>
            <ImageCard
              card={small}
              description={alt_description}
              likes={likes}
              onClick={() => onClick({ regular, alt_description, name })}
            ></ImageCard>
          </li>
        )
      )}
    </ul>
  );
};

export default ImageGallery;
