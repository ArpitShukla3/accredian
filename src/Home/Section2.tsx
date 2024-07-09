import { faFilePen, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import Refer from "../assets/image copy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section2() {
  const list: Object[] = [
    {
      icon: faUser,
      text: "Submit referrals easily via our website's referral section.",
    },
    {
      icon: faFilePen,
      text: " Earn rewards once your referral joins an Accredian program.",
    },
    {
      icon: faWallet,
      text: "Both parties receive a bonus 30 days after a program enrollment.",
    },
  ];
  return (
    <div className="p-4 shadow-slate-400 shadow-2xl">
      <div className="flex flex-col justify-center items-center bg-blue-100 rounded-lg p-3 relative">
        <div className="font-medium text-2xl">
          How do I <span className="text-blue-500">Refer ?</span>
        </div>
        <div className="z-0">
          <img src={Refer} alt="" />
          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="text-white text-2xl font-bold flex items-center justify-center gap-x-40">
              {list.map((element: Object, idx: number) => 
                {return <div key={idx} className="flex flex-col items-center w-[15%] mt-[15%]">
                    <FontAwesomeIcon icon = {element.icon} style={{color:"1a63e0"}} size="2xl"/>
                    <div className="text-center text-black font-medium text-base">{element.text}</div>
                </div>}
            )}
            </div>
          </div>
        </div>
        <div>
          <button className="bg-blue-600 text-white font-normal text-xl px-12 py-4 rounded-lg mt-10">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
}
