import { useEffect, useState } from "react";
import { ke2dairanization } from "ke2daira";

const useKe2daira = (str: string): string => {
  const [ke2dairanized, setKe2dairanized] = useState<string>("");

  useEffect(() => {
    let canceled = false;
    const promise = ke2dairanization(str);
    promise.then((ke2dairanized) => {
      if (canceled) {
        return;
      }
      setKe2dairanized(ke2dairanized);
    });

    return () => {
      canceled = true;
    };
  }, [str]);

  return ke2dairanized;
};

export default useKe2daira;
