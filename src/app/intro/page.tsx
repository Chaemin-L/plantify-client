import PlantiForest from "./(components)/planti-forest";
import PlantiFunding from "./(components)/planti-funding";
import PlantiPay from "./(components)/planti-pay";
import PlantiProfit from "./(components)/planti-profit";
import PlantiPrompt from "./(components)/planti-prompt";
import PlantiCTA from "./(components)/plantify-cta";
import ScrollFeature from "./scroll-features";

export default function Page() {
  return (
    <>
      <ScrollFeature>
        <PlantiPay />
        <PlantiFunding />
        <PlantiProfit />
        <PlantiForest />
        <PlantiPrompt />
        <PlantiCTA />
      </ScrollFeature>
    </>
  );
}
