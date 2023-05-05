import { format } from "date-fns";

const fetchWord = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await fetch(
    `${baseUrl}/motdujour?date=${today}&api_key=${apiKey}`
  );
  return response.json();
};

export default fetchWord;
