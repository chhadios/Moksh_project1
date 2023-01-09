import { useEffect, useRef } from "react";
import { useState } from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AccordionItemLevel2 = ({ SNO, faq }) => {

  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
 
 
  return (
    <li className={`accordion_itemLevel2 ${clicked ? "active" : ""}`}>
      <button className="buttonLevel2 " onClick={handleToggle}>
        <div style={{ width: "30%", }}>{faq.text}
        </div>
        <div style={{ width: "30%" }}>Phrase Rating :&nbsp;{Math.round(faq.PhraseRating * 100) / 100}</div>
        <div style={{ width: "30%" }}>Number of Phrases: &nbsp;
            {faq.PhraseCount} &nbsp; &nbsp;</div>
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
        <div className="answer">
          {
            faq.Level3.map((item, index) => {
              return (
                <div className="Level3" key={index}>
                  {item.text}
                </div>
              )
            })}
        </div>
      </div>
    </li>
  );
};

export default AccordionItemLevel2;