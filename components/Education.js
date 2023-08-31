import React from "react";

const Education = () => {
  return (
    <div className="w-[80%] flex flex-col justify-center  mx-auto">
      <h1 className="w-[100%] text-center py-[40px] text-[30px] font-medium">
        Education
      </h1>
      <div className="flex flex-col gap-8 w-[100%]">
        <div>
          <div className="text-[20px] font-bold text-center md:text-start">
            Secondary
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 mt-[10px]">
            <div className="font-bold">School</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Jawahar Navodaya Vidyalaya Sambhal, Uttar Pradesh, India
            </div>
            <div className="font-bold">Board</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">CBSE</div>
            <div className="font-bold">Marks Percentage</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">96.6%</div>
            <div className="font-bold">Year</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">2018</div>
          </div>
        </div>
        <div className="bg-gray-300 w-full h-[1px]"></div>
        <div>
          <div className="text-[20px] font-bold text-center md:text-start">
            Senior Secondary
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 mt-[10px]">
            <div className="font-bold">School</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Jawahar Navodaya Vidyalaya Prayagraj, Uttar Pradesh, India
            </div>
            <div className="font-bold">Board</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">CBSE</div>
            <div className="font-bold">Marks Percentage</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">94.2%</div>
            <div className="font-bold">Year</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">2020</div>
          </div>
        </div>
        <div className="bg-gray-300 w-full h-[1px]"></div>
        <div>
          <div className="text-[20px] font-bold text-center md:text-start">
            B.Tech.
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 mt-[10px] ">
            <div className="font-bold">College</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Indian Institute of Technology Guwahati Assam, India
            </div>
            <div className="font-bold">Major</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">Mechanical Engineering</div>
            <div className="font-bold">Major CGPA</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">8.82</div>
            <div className="font-bold">Minor</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Electronics and Communication Engineering
            </div>
            <div className="font-bold">Minor CGPA</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">9.75</div>
            <div className="font-bold">Year</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">2020-2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
