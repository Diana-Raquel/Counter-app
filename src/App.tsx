import { useMemo, useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Content1 } from "./components/Content1";

function App() {
  const [text, setText] = useState("");
  const [textSpaces, setTextSpaces] = useState(false);

  const characterCount = useMemo(() => {
    return textSpaces ? text.replace(/\s/g, "").length : text.length;
  }, [text, textSpaces]);

  const wordCount = useMemo(() => {
    return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  }, [text]);

  const sentenceCount = useMemo(() => {
    return text
      ? text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;
  }, [text]);

  return (
    <div className="">
      <h1 className="header">Character Counter</h1>
      <div className="container">
        <h2 className="subtitle"> Analyze your text in real time</h2>
      </div>
      <Content1
        text={text}
        setText={setText}
        textSpaces={textSpaces}
        setTextSpaces={setTextSpaces}
      />
      <Box total={characterCount} word={wordCount} sentence={sentenceCount} />
      <div className="Density">
        <h3>Letter Density</h3>
      </div>
    </div>
  );
}

export default App;
