import { getBreads, getTips } from "@/lib/services";
import TopBreeds from "./TopBreeds";
import QuickTips from "./QuickTips";

const ExtraSections = async () => {
  const tips = await getTips();
  const breeds = await getBreads();
  // console.log(breads);

  return (
    // parent
    <div className="max-w-6xl mx-auto">
      {/* quick tips */}
      <QuickTips tips={tips}></QuickTips>
      {/* top breeds */}
      <TopBreeds breeds={breeds}></TopBreeds>
    </div>
  );
}

export default ExtraSections;