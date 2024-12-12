import { CategoryType } from "@/types/api/funding";

export default function getCategoryName(category: CategoryType) {
  switch (category) {
    case "ENVIRONMENT":
      return "환경";
    case "ANIMAL":
      return "동물";
    case "CHILDREN":
      return "아동•청소년";
    case "DISABILITY":
      return "장애";
    case "ELDERLY":
      return "노인";
    case "SOCIAL":
      return "사회";
    default:
      return "등록되지 않은 이름";
  }
}
