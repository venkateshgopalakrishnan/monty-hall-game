import React from "react";
import "./Title.css";

const Title = () => {
  var title = "M o n t y           H a l l           G a m e".split(" ");
  var count = 0;
  return (
    <div className="header">
      {title.map(letter => {
        count = count + 1;
        return (
          <span key={count} className="letter" data-letter={letter}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default Title;
