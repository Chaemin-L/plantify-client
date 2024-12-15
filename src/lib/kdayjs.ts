import dayjs, { ConfigType } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

export function kdayjs(params?: ConfigType) {
  return dayjs(params).tz("Asia/Seoul");
}
