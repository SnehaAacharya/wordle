import React, { JSX, useEffect } from "react";

type passedVariables = {
  correctLetters: string[];
  unplacedLetters: string[];
  wrongLetters: string[];
};
export default function WordleKeyboard({
  correctLetters,
  unplacedLetters,
  wrongLetters,
}: passedVariables) {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="keyboardBase">
      {alphabet.map((letter, i): JSX.Element => {
        const isCorrectLetter = correctLetters.includes(letter);
        const isunplacedLetters = unplacedLetters.includes(letter);
        const isWrongLetter = wrongLetters.includes(letter);

        return (
          <div
            className="key"
            id={letter}
            key={i}
            style={{
              backgroundColor: isCorrectLetter
                ? "green"
                : isunplacedLetters
                ? "yellow"
                : isWrongLetter
                ? "gray"
                : "white",
            }}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}
