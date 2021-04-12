import React from "react";

type InputWithDropDownProps = {
  text: string;
  setText: (value: string) => void;
  matches: string[];
};

type DropDownProp = {
  values: string[];
  text: string;
};

const DropDown: React.FC<DropDownProp> = ({ values, text }) => {
  if (values.length === 0) {
    return null;
  }
  return (
    <ul className="dropDown">
      {values.map((value: string) => {
        const splitster = value.split(text);
        return (
          <li>
            <span>{splitster[0]}</span>
            <span className="matchedFragment">{text}</span>
            <span>{splitster[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const InputWithDropDown: React.FC<InputWithDropDownProps> = ({
  text,
  setText,
  matches,
}) => (
  <div className="inputContainer">
    <input
      className="input matchedFragment"
      value={text}
      onChange={(event) => setText(event.target.value)}
      placeholder={"First Name"}
    />
    <DropDown values={matches} text={text} />
  </div>
);
