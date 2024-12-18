import PlantiFit from "./(components)/planti-fit";
import PlantiForest from "./(components)/planti-forest";
import PlantiFunding from "./(components)/planti-funding";
import PlantiPay from "./(components)/planti-pay";
import PlantiPrompt from "./(components)/planti-prompt";
import PlantiCTA from "./(components)/plantify-cta";
import ScrollFeature from "./scroll-features";

export default function Page() {
  return (
    <>
      <ScrollFeature>
        <PlantiPay />
        <PlantiFunding />
        <PlantiFit />
        <PlantiForest />
        <PlantiPrompt />
        <PlantiCTA />
      </ScrollFeature>
    </>
  );
}
