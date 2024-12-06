import FeatureLayout from "./(components)/feature-layout";

export default function PlantiPay() {
  return (
    <FeatureLayout
      title="PlantiPay"
      description={`나만의 페이, 피피\n한 번의 터치로 한 번의 결제`}
    >
      <div className="bg-shadow-800 w-full aspect-video rounded-2xl mb-5" />
      <span className="text-bd2">*최대 포인트 1.5% 적립 </span>
    </FeatureLayout>
  );
}
