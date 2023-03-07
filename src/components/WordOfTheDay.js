import { useQuery } from "react-query";
import fetchWord from "../api/fetchWord";

const WordOfTheDay = () => {
  const { data, error, isLoading } = useQuery("mot", fetchWord);

  if (error) return <div>Une erreur est survenue</div>;
  if (isLoading) return <div>Chargement...</div>;

  console.log(data);
  return <div>{data?.mot}</div>;
};

export default WordOfTheDay;
