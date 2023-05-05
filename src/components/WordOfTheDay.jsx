import { useQuery } from "react-query";
import fetchWord from "../api/fetchWord";
import { v4 as uuidv4 } from "uuid";

const WordOfTheDay = () => {
  const { data, error, isLoading } = useQuery("mot", fetchWord);

  if (error) return <div>Nous sommes désolé, une erreur est survenue !</div>;
  if (isLoading) return <div>Chargement...</div>;

  return (
    <div>
      <h2>{data?.mot}</h2>
      <div>
        {data?.definitions.map((mot) => (
          <p key={uuidv4()}>
            {mot.nature} - {mot.definition}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WordOfTheDay;
