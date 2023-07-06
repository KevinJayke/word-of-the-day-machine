import { format } from "date-fns";
import { frCA } from "date-fns/locale";

const Header = () => {
  const today = format(new Date(), "dd MMM yyyy", { locale: frCA });
  return (
    <header className="flex justify-between items-end pb-10">
      <h1 className="sm:text-6xl text-5xl font-title">Mot du jour</h1>
      <div className="text-right  text-lg leading-4">
        <h2 className="font-sans pt-2 uppercase">Date</h2>
        <h2 className="font-sans pt-2">{today}</h2>
      </div>
    </header>
  );
};

export default Header;
