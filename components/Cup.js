import Image from "next/image";
import cafe from "../library/img/cafe.png";

function Cafe() {
  return (
    <Image
      className="fixed -bottom-[100px] -left-[100px]"
      src={cafe}
      width={600}
      height={600}
      alt="drawing of a cup of coffee"
    />
  );
}

export default Cafe;
