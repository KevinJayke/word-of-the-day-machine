import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shadow from "@/components/Shadow";
import WordApi from "@/library/fetchWord";

export default function Page() {
  return (
    <div
      id="frame"
      className="relative bg-slate-50 max-w-sm p-10 m-10 flex-1 w-fit">
      <Shadow />
      <div className="divide-y-2 divide-black divide-dashed">
        <Header />
        <WordApi />
        <WordApi isDefinition={true} />
        <Footer />
      </div>
    </div>
  );
}
