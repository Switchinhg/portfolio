import Image from "next/image";
import PersonCard from "./components/PersonCard/PersonCard";
import Grid from "./components/Grid/Grid";

export default function Home() {
  return (
    /* Root main page */
    <div className="main_page_wrap">
      {/* About me */}
      <PersonCard />
      {/* Cards (grid) */}
      <Grid />
    </div>
  );
}
