import { useQuery } from "react-query";
import fetchWord from "../api/fetchWord";

const WordOfTheDay = () => {
  const { data, error, isLoading } = useQuery("mot", fetchWord);

  if (error) return <div>Nous sommes désolé, une erreur est survenue</div>;
  if (isLoading) return <div>Chargement...</div>;

  return (
    <div>
      <h2>{data?.mot}</h2>
      <p>
        {data?.definitions.map((mot) => (
          <>
            <p key={mot.index}>
              {mot.nature} - {mot.definition}
            </p>
          </>
        ))}
      </p>
    </div>
  );
};

export default WordOfTheDay;
