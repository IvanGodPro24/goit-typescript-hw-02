import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "wbNIyYVq1CHoPcaC_pNCju_Jsuzw1cv635lrUq5lK98";

async function fetchImages(query, page) {
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
}

export default fetchImages;
