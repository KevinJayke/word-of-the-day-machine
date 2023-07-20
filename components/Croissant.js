import Image from "next/image";
import croissant from "../library/img/croissant.png";

function Croissant() {
  return (
    <Image
      className="fixed -top-[300px] -right-[300px]"
      src={croissant}
      width={800}
      height={800}
      alt="drawing of a croissant"
    />
  );
}

export default Croissant;
