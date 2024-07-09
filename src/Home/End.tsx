import { Button, Divider } from "@mui/material";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
export default function End() {
  const list: string[] = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Project Management",
    "Strategy & leadership",
    "Senior Management",
    "Fintech",
  ];
  const list2: string[] = [
    "About",
    "Career",
    "Blog",
    "Admission Policy ",
    "Referral Policy",
    "Privacy Policy",
    "Terms of Service",
    "Master FAQs",
  ];
  return (
    <div className="bg-[#282828] py-16">
      <div className="flex flex-row justify-between h-16 p-4">
        <img src={logo} />
        <Button variant="contained"> Schedule 1-on-1 Call Now</Button>
      </div>
      <Divider sx={{color:"white"}}/>
      <div className="flex flex-row justify-center gap-20 py-40 ">
        <div className="flex flex-col gap-4">
          {list.map((element: string, idx: number) => {
            return (
              <div className="text-white flex justify-between" key={idx}>
                {element}
                <FontAwesomeIcon icon={faAdd} style={{ color: "#ffffff" }} />
              </div>
            );
          })}
        </div>
        <div className="text-white">
          <h1 className="text-2xl">Contact Us</h1> <br/>
          Email us (For Data Science Queries): admissions@accredian.com <br />
          Email us (For Product Management Queries):pm@accredian.com <br />
          Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM) <br />
          Product Management Admission Helpline: +91 9625811095 <br />
          Enrolled Student Helpline: +91 7969322507 <br />
          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
          Gurugram, Haryana 122015 <br />
          Why Accredian <br />
          Follow Us <br />
        </div>
        <div className="text-white flex flex-col gap-2">
          <h1 className="text-2xl">Accredian</h1>
          {list2.map((element:string,idx:number)=>{
            return <div key={idx}>{element}</div>
          })}
        </div>
      </div>
      <h4 className="text-white text-center">
        ©2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </h4>
    </div>
  );
}
