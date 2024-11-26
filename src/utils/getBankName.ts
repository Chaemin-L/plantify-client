// @deprecated
export default function getBankName(bankId: string) {
  switch (bankId) {
    case "hana":
      return "하나";
    case "ibk":
      return "IBK";
    case "kakao":
      return "카카오";
    case "kb":
      return "KB";
    case "kbank":
      return "케이뱅크";
    case "nonghyup":
      return "농협";
    case "sc":
      return "SC제일";
    case "shinhan":
      return "신한";
    case "toss":
      return "토스";
    case "woori":
      return "우리";
    default:
      return null;
  }
}
