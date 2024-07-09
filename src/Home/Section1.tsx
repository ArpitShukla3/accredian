import heroImage from "../assets/image.png";
export default function Section1() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-blue-100 m-7 flex justify-center items-center rounded-3xl shadow-2xl">
        <div className="p-9  flex flex-col justify-around gap-8">
          <h1 className="font-bold text-6xl">Let's learn & Earn</h1>
          <h3 className="text-4xl">Get a chance to win up to </h3>
          <h2 className="font-bold text-5xl text-blue-500">Rs. 15,000</h2>
          <div className="">
            <button className="text-white bg-blue-500 rounded-md py-2 px-12 text-2xl font-light">
              Refer Now
            </button>
          </div>
        </div>
        <div className="w-[60%]">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
