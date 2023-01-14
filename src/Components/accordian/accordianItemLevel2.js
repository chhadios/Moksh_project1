import { useEffect, useRef } from "react";
import { useState } from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccordionLevel3 from "./accordianLevel3";

const AccordionItemLevel2 = ({ SNO, faq }) => {

  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
 
 
  return (
    <li className={`accordion_itemLevel2 ${clicked ? "active" : ""}`}>
      <button className="buttonLevel2" onClick={handleToggle}>

        <div style={{ width: "30%" }}>
          {faq.text}({faq.sentiments})
          <p style={{ fontSize: "13px", fontStyle: "italic", fontWeight: "normal" }}>
            Any end user description Mentioned in the Reviews
          </p>
        </div>

        <div style={{ width: "30%" }}>Mean Rating: {Math.round(faq.reviewRating * 100) / 100}</div>
        <div style={{ width: "30%" }}>Num Reviews: {faq.reviewCount}</div>
        <span className="control">
          {clicked ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
        </span>
      </button>

      <div
        className="answer_wrapper"
        style={
          clicked
            ? {}
            : { height: "0px" }
        }
      >

        <div className="answer"><AccordionLevel3 Level3={faq.Level3} /></div>
      </div>
    </li>
  );
};

export default AccordionItemLevel2;