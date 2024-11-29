import { useMemo } from "react";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";

import bannerImg from "../assets/live-striming.png";

const Hero = ({
  listUser = [
    {
      name: "End Users Annually",
      number: "500+ Million",
      icon: "/images/icons/heroicons_sm-user.svg",
    },
    {
      name: "Countries and Regions",
      number: "212+",
      icon: "/images/icons/gridicons_location.svg",
    },
    {
      name: "Service Uptime",
      number: "99.99%",
      icon: "/images/icons/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-xl px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div className="justify-center text-center font-bold text-xl"> Vivek R. Dudhatra</motion.div>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-4xl font-semibold text-black-600 leading-normal">
              Build Interactive Live Streaming and Reach{" "}
              <span className="text-blue-600">Millions Globally</span>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Embed scalable interactive live streaming into your platforms with
              our fully customizable and easy-to-integrate live SDK.
            </p>
            <button className="bg-[#7a1be7] hover:bg-indigo-600 py-3 px-8 text-white font-semibold rounded-md hover:-translate-y-2 transition-all duration-200 ease-in">
              Get Started
            </button>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img src={bannerImg} alt="" />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
