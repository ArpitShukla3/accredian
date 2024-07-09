import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Switch } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import BasicModal from "./Modal";
import BasicTable from "./BasicTable";
export default function Section3() {
  const list: string[] = [
    "All Programs",
    "Product Management ",
    "Strategy & Leadership",
    "Buisness Management",
    "Fintech",
    "Senior Management",
    "Data Sciene",
    "Digital transformation",
    "Business Analytics",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center py-10 shadow-lg">
      <h1 className="text-2xl font-medium">
        What are the <span className="text-blue-400">Referral Benifits ?</span>
      </h1>
      <div className="w-full flex justify-end items-center">
        Enrolled
        <Switch defaultChecked size="small" />
      </div>
      <div className="flex gap-8 py-12">
        <div className="flex flex-col uppercase rounded-lg  shadow-slate-500 shadow-lg h-fit">
          {list.map((element: string, idx: number) => {
            return idx == index ? (
              <div key={idx} className="cursor-pointer bg-blue-400 ">
                <div className="flex justify-between items-center gap-4 text-white rounded-md px-8 py-2 r">
                  {element}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <Divider />
              </div>
            ) : (
              <div
                key={idx}
                onClick={() => setIndex(idx)}
                className="cursor-pointer "
              >
                <div className="flex justify-between px-8 py-4 gap-4">
                  {element}
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
        <div>
          <BasicTable />
        </div>
      </div>
      <div className="w-full flex justify-end items-center px-14">
        <Button variant="outlined">
          Show More
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      </div>
      <div>
        <BasicModal/>
      </div>
    </div>
  );
}
