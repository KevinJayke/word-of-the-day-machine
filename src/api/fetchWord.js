import { format } from "date-fns";

const fetchWord = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const res = await fetch(
    `${baseUrl}/motdujour?date=${today}&api_key=${apiKey}`
  );
  return res.json();
};

export default fetchWord;
