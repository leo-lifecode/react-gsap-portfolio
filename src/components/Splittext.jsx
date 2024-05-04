const SplitText = ({ text, parclass }) => {
  return text.split("").map((char, index) => {
    return char === " " ? (
      <div key={index} className={parclass}>
        &nbsp;
      </div>
    ) : (
      <div key={index} className={parclass}>
        {char}
      </div>
    );
  });
};

export default SplitText;
