const Word = ({ word }) => {
  return (
    <h1
      lang="fr"
      className="break-words hyphens-auto text-6xl font-sans capitalize py-5">
      {word ? word : "erreur"}
    </h1>
  );
};

export default Word;
