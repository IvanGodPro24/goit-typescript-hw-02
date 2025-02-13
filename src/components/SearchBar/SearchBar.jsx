import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.image.value;

    if (value.trim() === "") {
      toast.error("Please enter search term!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    onSubmit(value);

    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          className={css.input}
          placeholder="Search images and photos"
        />
        <button>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
