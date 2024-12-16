import { BenefitCategory } from "@/types/card";

export default function getBenefitCategory(category: BenefitCategory) {
  switch (category) {
    case "traffic":
      return "교통";
    case "communication":
      return "통신";
    case "travel":
      return "여행";
    case "oiling":
      return "주유";
    case "mart":
      return "마트/편의점";
    case "shopping":
      return "쇼핑";
    case "cafe":
      return "카페/디저트";
    case "culture":
      return "문화";
    case "hospital":
      return "병원";
    case "finance":
      return "금융";
    default:
      return "기타";
  }
}
