import { Button } from "@mui/material";
import { useState } from "react";
import AccordionUsage from "./AccordionUsage";
export default function FAQs() {
  const list: string[] = ["Eligibility", "How to Use ?", "Terms & Conditions"];
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center mt-40 shadow-slate-500 shadow-lg pb-36">
      <div className="text-2xl font-medium py-8 ">
        Frequently Asked <span className="text-blue-400 ">Questions</span>
      </div>
      <div className="flex justify-center items-center gap-12">
        <div className="flex flex-col gap-8">
          {list.map((element: string, idx: number) => {
            return idx === index ? (
              <Button key={idx} variant="contained" size="large">
                {element}
              </Button>
            ) : (
              <Button
                key={idx}
                variant="outlined"
                onClick={() => setIndex(idx)}
                size="large"
              >
                {element}
              </Button>
            );
          })}
        </div>
        <div>
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
}
