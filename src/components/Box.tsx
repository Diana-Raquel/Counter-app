interface BoxProps {
  total: number;
  word: number;
  sentence: number;
}

export const Box = ({ total, word, sentence }: BoxProps) => {
  return (
    <div className="grid-container">
      <div className="box1">
        <h3>{total}</h3>
        <p>Total Characters</p>
      </div>
      <div className="box2">
        <h3>{word}</h3>
        <p>Word Count</p>
      </div>
      <div className="box3">
        <h3>{sentence}</h3>
        <p>Sentence Count</p>
      </div>
    </div>
  );
};
