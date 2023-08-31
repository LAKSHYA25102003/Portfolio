import React from "react";
import Link from "next/link";

const ProjectsLink = () => {
  return (
    <div className="w-[80%] flex flex-col justify-center  mx-auto py-[30px]">
      <h1 className="w-[100%] text-center py-[40px] text-[30px] font-medium">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[70%] m-auto gap-4 py-[7px]">
        <div className="  ">
          <div className="font-bold text-[18px] md:text-[20px]">ConnectUs</div>
          <div className="text-[14px]">
            A social media application where we can chat with friends, and post
            the messages etc.
          </div>
        </div>
        <div className="font-medium text-[18px] ml-[15px] md:text-[20px] hidden md:block">
          :
        </div>
        <div className="font-medium text-[#ff4D41] hover:font-bold text-[18px] md:text-[20px]  underline">
          <Link target={"_blank"} href={"https://connectus.vercel.app/login"}>
            Visit ConnectUs
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[70%] m-auto gap-4 py-[7px]">
        <div className="  ">
          <div className="font-bold text-[18px] md:text-[20px]">
            Algorithm Visualizer
          </div>
          <div className="text-[14px]">
            Developed an Algorithm Visualizer to visualize algorithms like
            Bubble Sort, Quick Sort and Merge Sort etc. Incorporated an
            integrated code editor for users to practice algorithms in different
            languages like C++, Java etc.
          </div>
        </div>
        <div className="font-medium text-[18px] ml-[15px] md:text-[20px] hidden md:block">
          :
        </div>
        <div className="font-medium text-[#ff4D41] hover:font-bold text-[18px] md:text-[20px]  underline">
          <Link target={"_blank"} href={"https://algorithm-visualizer-rust.vercel.app/"}>
            Visit Algorithm Visualizer
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[70%] m-auto gap-4 py-[7px]">
        <div className="  ">
          <div className="font-bold text-[18px] md:text-[20px]">iNoteBook</div>
          <div className="text-[14px]">
            An application in which we can make the list of works and notes as
            well.
          </div>
        </div>
        <div className="font-medium text-[18px] ml-[15px] md:text-[20px] hidden md:block">
          :
        </div>
        <div className="font-medium text-[#ff4D41] hover:font-bold text-[18px] md:text-[20px]  underline">
          <Link target={"_blank"} href={"https://inotebook-five.vercel.app"}>
            Visit iNoteBook
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[70%] m-auto gap-4 py-[7px]">
        <div className="  ">
          <div className="font-bold text-[18px] md:text-[20px]">YMusic</div>
          <div className="text-[14px]">
            A project, in which we can save youtube videos and can be seen later
            according to category. We can make bucket for example education
            video, entertainment video etc. History will be saved and it can be
            deleted if we want. We can change the category of video and we can
            edit the details of video as well, dynamically.
          </div>
        </div>
        <div className="font-medium text-[18px] ml-[15px] md:text-[20px] hidden md:block">
          :
        </div>
        <div className="font-medium text-[#ff4D41] hover:font-bold text-[18px] md:text-[20px]  underline">
          <Link target={"_blank"} href={"https://ymusic.vercel.app/"}>
            Visit YMusic
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLink;
