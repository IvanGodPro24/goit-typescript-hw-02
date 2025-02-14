import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";
import { useCallback } from "react";

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements.namedItem("image") as HTMLInputElement;
      const value = input.value.trim();

      if (!value) {
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

      form.reset();
    },
    [onSubmit]
  );

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
