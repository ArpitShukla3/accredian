import Locator from "./Locator";
import Navbar from "./Navbar";
import Section1 from "./Section1.tsx";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Locator/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}
