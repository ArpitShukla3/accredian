import { useState } from "react";

export default function Locator() {
  const list: readonly string[] = ["Refer", "Benifits", "FAQs", "Support"];
  const [index, setindex] = useState(0);
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex justify-center  text-2xl bg-blue-100 rounded-3xl mx-auto">
        {list.map((element: string, idx: number) => {
          return idx == index ? (
            <div className="px-16 py-3 cursor-pointer" key={idx}>
              <div className="text-blue-500 ">{element}</div>
            </div>
          ) : (
            <div
              key={idx}
              onClick={() => setindex(idx)}
              className="text-gray-600 px-16 py-3 cursor-pointer"
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
