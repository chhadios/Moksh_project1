import AccordionItemLevel2 from "./accordianItemLevel2";

const AccordionLevel2 = ({Level2}) => {
  return (
    <ul className="accordion">
      {Level2.map((Level1, index) => (
        <AccordionItemLevel2 key={index} SNO={index} faq={Level1} />
      ))}
    </ul>
  );
};

export default AccordionLevel2;