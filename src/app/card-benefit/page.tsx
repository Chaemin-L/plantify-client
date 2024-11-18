import { PATH } from "@/lib/_shared/paths";
import { redirect } from "next/navigation";

export default function Page() {
  return redirect(PATH.CARD_BENEFIT_DEFAULT);
}
