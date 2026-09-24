import About from "../home/About";
import CodeComparison from "../home/CodeComparison";
import CTA from "../home/CTA";
import Hero from "../home/Hero";
import QuickStart from "../home/QuickStart";
import Utilities from "../home/Utilities";
import cyrefPackage from "@cyref/js/package.json";

function Main() {
  return (
    <>
      <Hero version={cyrefPackage.version} />
      <About />
      <CodeComparison />
      <Utilities />
      <QuickStart />
      <CTA />
    </>
  );
}

export default Main;
