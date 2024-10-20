import Image from "next/image";
import PersonCard from "./components/PersonCard";

export default function Home() {
  return (
    /* Root main page */
    <div >
      {/* About me */}
      <PersonCard />
      {/* Cards (grid) */}
    </div>
  );
}
