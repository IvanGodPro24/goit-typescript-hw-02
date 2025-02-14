import axios from "axios";
import { ImageProps } from "./components/ImageGallery/ImageGallery.types";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

async function fetchImages(query: string, page: number): Promise<ImageProps[]> {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        page,
        per_page: 9,
        query,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchImages;
