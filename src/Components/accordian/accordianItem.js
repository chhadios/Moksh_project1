import { useRef } from "react";
import { useState } from "react";
import AccordionLevel2 from "./accrdianLevel2";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AccordionItem = ({ faq }) => {


  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>

        <div style={{ width: "30%" }}>
          {faq.text}
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

        <div className="answer"><AccordionLevel2 Level2={faq.Level2} /></div>
      </div>
    </li>
  );
};

export default AccordionItem;


