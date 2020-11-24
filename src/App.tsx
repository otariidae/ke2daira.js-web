import React, { FC, Fragment, useState } from "react";
import useKe2daira from "./useKe2daira";

const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const { data: ke2dairanized } = useKe2daira(input);
  return (
    <Fragment>
      <style>{`
        body {
          text-align: center;
        }
        h1 {
          font-weight: normal;
          font-family: serif;
        }
        input {
          max-width: 100%;
          padding: 1em;
          box-sizing: border-box;
          border-style: none;
          border-radius: 0.2em;
          box-shadow: 0 0.2em 0.7em rgba(0, 0, 0, 0.3);
          font-size: 1.5rem;
        }
        input:focus {
          outline-style: none;
        }
        output {
          display: block;
          margin-top: 3rem;
          font-size: min(calc(100vw / 6), 9rem);
          font-weight: 700;
          line-height: 1.2;
        }
      `}</style>
      <h1>ke2daira.js</h1>
      <input
        placeholder="例：松平 健"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        data-testid="name-input"
      />
      <output data-testid="ke2daira-output">{ke2dairanized}</output>
    </Fragment>
  );
};

export default App;
