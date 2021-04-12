import React, { useMemo, useState } from "react";
import { SearchButton } from "../SearchButton";
import { InputWithDropDown } from "../InputWithDropDown";
import { matchWords } from "../MatchWords";

export const Search: React.FC = () => {
  const [text, setText] = useState("");
  const matches = useMemo(() => matchWords(text), [text]);

  return (
    <div className="container">
      <InputWithDropDown
        text={text}
        setText={setText}
        matches={matches}
      ></InputWithDropDown>
      <SearchButton text={text} />
    </div>
  );
};
