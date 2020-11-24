import useSWR, { responseInterface } from "swr";
import { ke2dairanization } from "ke2daira";

const useKe2daira = (str: string): responseInterface<string, never> =>
  useSWR(["ke2daira", str], (_: unknown, str: string) => ke2dairanization(str));

export default useKe2daira;
