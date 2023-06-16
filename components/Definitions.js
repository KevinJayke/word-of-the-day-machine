const Definitions = ({ definitions }) => {
  return (
    <div>
      <h2 className="text-xl font-sans font-bold uppercase pt-5">
        {definitions?.length > 0 ? "définitions" : "définition"}
      </h2>
      {definitions?.map((text, index) => (
        <div key={index} className="py-4">
          {text.nature && (
            <h3 className="text-lg font-sans pb-1">({text.nature})</h3>
          )}
          <h3 key={index} className="text-xl font-sans">
            {text?.definition}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Definitions;
