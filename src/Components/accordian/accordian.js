// import  Level1 from './data'
import React,{useState,useEffect} from 'react';
import AccordionItem from "./accordianItem";
import Papa from "papaparse";
import axios from 'axios';

// fetch the csv file 



const Accordion = ({Level1}) => {
  return (
    <ul className="accordion">
      {Level1.map((Level1, index) => (
          <AccordionItem key={index} faq={Level1} />
      ))}
    </ul>
  );
};

export default Accordion;