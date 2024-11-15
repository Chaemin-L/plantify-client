import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function kdayjs(params?: any) {
  return dayjs(params).tz("Asia/Seoul");
}
