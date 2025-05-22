import { useEffect, useState } from "react";

interface Content1Props {
  text: string;
  setText: (value: string) => void;
  textSpaces: boolean;
  setTextSpaces: (value: boolean) => void;
}

export const Content1 = ({
  text,
  textSpaces,
  setText,
  setTextSpaces,
}: Content1Props) => {
  const [setLimit, setSetLimit] = useState(false);

  useEffect(() => {
    if (setLimit) {
      setText(text.slice(0, 200));
    }
  }, [setLimit]);

  return (
    <div className="content1">
      <div className="input-text">
        <textarea
          placeholder="Type here..."
          value={text}
          maxLength={setLimit ? 200 : undefined}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="grid-text">
        <label>
          <input
            type="checkbox"
            checked={textSpaces}
            onChange={(e) => setTextSpaces(e.target.checked)}
          />
          Exclude spaces
        </label>
        <label>
          <input
            type="checkbox"
            checked={setLimit}
            onChange={(e) => setSetLimit(e.target.checked)}
          />
          Set character limit
        </label>
        <p>
          Approx. reading time: {Math.ceil(text.split(" ").length / 200)} min
        </p>
      </div>
    </div>
  );
};
