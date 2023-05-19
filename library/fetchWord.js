import axios from "axios";
import { format } from "date-fns";

const fetchWord = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const apiKey = process.env.API_KEY;
  const baseUrl = process.env.BASE_URL;

  try {
    const response = await axios.get(`${baseUrl}/motdujour`, {
      params: {
        date: today,
        api_key: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching the word:", error);
    return null;
  }
};

export default fetchWord;
