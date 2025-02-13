import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./image-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoader(true);

        const data = await fetchImages(query, page);

        if (data.length === 0) {
          toast.error("No images found for your query!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }

        setImages((prevImages) =>
          page === 1 ? data : [...prevImages, ...data]
        );

        setHasMore(data.length > 0);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onClick={(image) => openModal(image)}
        ></ImageGallery>
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}

      <ImageModal
        modalIsOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      {images.length > 0 && hasMore && <LoadMoreBtn onLoad={nextPage} />}
    </>
  );
}

export default App;
