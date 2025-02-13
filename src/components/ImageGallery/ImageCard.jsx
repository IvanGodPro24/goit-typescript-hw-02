import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";

const ImageCard = ({ card, description, likes, onClick }) => {
  return (
    <div>
      <img
        src={card}
        alt={description}
        className={css.image}
        onClick={() => onClick({ card, description })}
      />
      <div className={css.container}>
        <FcLike />
        <p>{likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
