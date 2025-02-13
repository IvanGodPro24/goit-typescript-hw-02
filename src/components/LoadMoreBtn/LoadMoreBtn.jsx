import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoad }) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
};

export default LoadMoreBtn