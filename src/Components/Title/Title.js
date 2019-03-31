import React from "react";
import "./Title.css";

const Title = () => {
  var title = "M o n t y           H a l l           G a m e".split(" ")

  return (
    <div className="header">
      {title.map((letter) => 
        (<span class="letter" data-letter={letter}>
          {letter}
        </span>)
      )}
    </div>
  );
};

export default Title;
