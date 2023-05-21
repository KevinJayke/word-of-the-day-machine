const Header = () => {
  return (
    <header className="flex justify-between items-end pb-10">
      <h1 className="text-6xl font-title">Mot du jour</h1>
      <div className="text-right text-xl leading-4">
        <h2 className="font-sans pt-2 uppercase">date</h2>
        <h2 className="font-sans pt-2">10 mai 2023</h2>
      </div>
    </header>
  );
};

export default Header;
