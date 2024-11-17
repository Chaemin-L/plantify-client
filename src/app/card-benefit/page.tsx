import { PATH } from "@/lib/paths";
import { redirect } from "next/navigation";

export default function Page() {
  return redirect(PATH.CARD_BENEFIT_DEFAULT);
}
