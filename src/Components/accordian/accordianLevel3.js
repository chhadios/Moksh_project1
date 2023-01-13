import React,{useState,useEffect} from 'react';
import AccordionItemLevel3 from './accordianItemLevel3';
import Papa from "papaparse";
import axios from 'axios';

const AccordionLevel3 = ({Level3}) => {
  return (
    <ul className="accordion">
      {Level3.map((Level3, index) => (
          <AccordionItemLevel3 key={index} faq={Level3} />
      ))}
    </ul>
  );
};

export default AccordionLevel3;