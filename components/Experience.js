import React from "react";

const Experience = () => {
  return (
    <div className="w-[80%] flex flex-col gap-5 justify-center  mx-auto">
      <h1 className="w-[100%]  text-center py-[40px] text-[30px] font-medium">
        Freelance Experience
      </h1>
      <div className="flex flex-col gap-8 w-[100%]">
        <div>
          <div className="text-[23px] font-bold text-center md:text-start">
            Shakespeare AE
          </div>
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">About Company</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Shakespeare is company based in San Francisco that converts
              businesses into a Metaverse Businesses. The parent company of
              Shakespeare, Electroshoe - based in San Francisco, has been
              featured in India times, New York times and also on TEDx.
            </div>
          </div>
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">Role</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">Freelance Full-Stack Developer</div>
          </div>
          <div className=" grid grid-cols-3 mt-[10px]">
            <div className="font-bold">Timeline</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">May 2023 - June 2023</div>
          </div>
          <div className=" grid grid-cols-3 mt-[10px]">
            <div className="font-bold">Projects</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              <div className="font-bold">Billing System for Admin,</div>
              <div className="font-bold">Inventory Management</div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 mt-[10px]">
            <div className="font-bold">Billing System for Admin</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Billing system is an admin board of restaurant,where he can track
              sells, billing , running orders and employees etc. All sells are
              shown using charts. Menu management, employee management, summary
              reports about all the items, these things can be checked and
              edited by admin using this dashboard.
            </div>
            <div className="font-bold">Tech-stack</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              MongoDB, Express, React, Node.js, Socket.io.
            </div>
          </div>
          <br />
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">Inventory Management</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Inventory management is also created by me from scratch itself.
              Admin can track the consumption of all the items, raw materials
              left in stock and waste management very easily. He can see summary
              of purchase orders, and stocks.
            </div>
            <div className="font-bold">Tech-stack</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              MongoDB, Express, React, Node.js, Socket.io.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"></div>
      <h1 className="w-[100%]  text-center py-[40px] text-[30px] font-medium">
        Internship Experience
      </h1>
      <div className="flex flex-col gap-8 w-[100%]">
        <div>
          <div className="text-[23px] font-bold text-center md:text-start">
            Agrivision4U
          </div>
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">About Company</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              AgriVision4U is an educational platform imparting quality
              education in the field of Agro, Food and Allied domain. Working
              towards the upliftment of food technology graduates and reducing
              the gap between industry, researchers, and students in the sector.
            </div>
          </div>
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">Role</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">Frontend Developer</div>
          </div>
          <div className=" grid grid-cols-3 mt-[10px]">
            <div className="font-bold">Timeline</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">June 2023 - August 2023</div>
          </div>
          <div className=" grid grid-cols-3 mt-[10px]">
            <div className="font-bold">Projects</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              <div className="font-bold">
                Refactored old website with responsive design,
              </div>
              <div className="font-bold">GRAIN Magazine</div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 mt-[10px]">
            <div className="font-bold">Old Website</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Built responsive UI of old website and added feature to report for
              wrong questions in tests. Developed new pages to show category
              wise courses and test series with animated loading of cards.
            </div>
            <div className="font-bold">Tech-stack</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">Tailwind CSS, React.js</div>
          </div>
          <br />
          <div className=" grid grid-cols-1  md:grid-cols-3 mt-[10px]">
            <div className="font-bold">GRAIN Magazine</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">
              Worked in a team to develop a new website using Next.js for GRAIN
              Magazine. Users can access magazines month wise and submit
              articles for upcoming editions.
            </div>
            <div className="font-bold">Tech-stack</div>
            <div className="hidden md:block">:</div>
            <div className="text-gray-600">Tailwind CSS, React.js, Next.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
