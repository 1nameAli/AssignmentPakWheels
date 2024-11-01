
function HeroSection() {
    return (
      <div className="relative flex flex-col items-center p-6  ">

        <h2 className="relative mt-10 text-2xl font-semibold text-gray-800">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>
  
        <div className=" mt-5 flex items-center gap-6 border py-10 border-gray-300 rounded-lg bg-white shadow-md pr-24">

          <div className="flex flex-col   p-6 ">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Post your Ad on PakWheels</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li> <span className="text-green-500">✔</span> Post your Ad for Free in 3 Easy Steps</li>
              <li> <span className="text-green-500">✔</span> Get Genuine offers from Verified Buyers</li>
              <li> <span className="text-green-500">✔</span> Sell your car Fast at the Best Price</li>
            </ul>
            <button className="bg-red-400 text-white py-2 px-4 rounded-lg w-48 hover:bg-red-700 transition-all">Post Your Ad</button>
          </div>
  
          <span className="text-gray-500 font-semibold">OR</span>
  

          <div className="flex flex-col  p-6 ">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Try PakWheels Sell It For Me</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li> <span className="text-green-500">✔</span> Dedicated Sales Expert to Sell your Car</li>
              <li> <span className="text-green-500">✔</span> We Bargain for you and share the Best Offer</li>
              <li> <span className="text-green-500">✔</span> We ensure Safe & Secure Transaction</li>
            </ul>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-lg w-48 hover:bg-blue-700 transition-all">Register Your Car</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSection