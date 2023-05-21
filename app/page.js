import Header from "@/components/Header";
import WordApi from "@/library/fetchWord";

export default function Page() {
  return (
    <div className="bg-white max-w-sm p-10 flex-1 w-fit">
      <div className="divide-y-2 divide-black divide-dashed">
        <Header />
        <WordApi />
        <WordApi isDefinition={true} />
      </div>
    </div>
  );
}
