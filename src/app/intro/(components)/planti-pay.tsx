import PayCard from "../../(_components)/pay-card";
import FeatureLayout from "./feature-layout";

export default function PlantiPay() {
  return (
    <FeatureLayout
      title="PlantiPay"
      description={`나만의 페이, 피피\n한 번의 터치로 한 번의 결제`}
    >
      <div>
        <PayCard pay={data} points={{ pointBalance: data.points }} />
      </div>
      <span className="text-bd2">*최대 포인트 1.5% 적립 </span>
    </FeatureLayout>
  );
}

const data = {
  payNum: 372618274430,
  balance: 34200,
  points: 32,
};
