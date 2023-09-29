/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { BsArrowUpRightCircle, BsSearch } from "react-icons/bs";

const ExploreOurPrograms = () => {
  return (
    <ExploreContainer className="w-full flex">
      <ParallaxBackgroundLeft className="w-1/2  flex justify-end items-end">
        <div className="w-1/3 bg-gray-500 h-16 flex justify-around items-center text-white rounded-l-full mb-16 shadow-lg cursor-pointer">
          <BsArrowUpRightCircle className="text-4xl" />
          <span className="text-2xl font-bold">Bachelors</span>
        </div>
      </ParallaxBackgroundLeft>
      <ParallaxBackgroundRight className="w-1/2 flex justify-start items-end">
        <div className="w-1/3 bg-red-700 h-16 flex justify-around items-center text-white rounded-r-full mb-16 shadow-lg cursor-pointer">
          <span className="text-2xl font-bold">Masters</span>
          <BsArrowUpRightCircle className="text-4xl" />
        </div>
      </ParallaxBackgroundRight>
      <ParallaxText>
        <span className="text-6xl font-bold text-white">EXPLORE OUR PROGRAMS</span>
      </ParallaxText>
      <SearchProgram>
        <div className="relative flex items-center">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <BsSearch className=" text-red-600 font-bold text-2xl" />
          </div>
          <input
            type="text"
            className={"pl-16 pr-3 border py-5 border-gray-300 rounded-l-full focus:outline-none text-black placeholder:text-black font-bold"}
            placeholder="Search Program here..."
          />
        </div>

      </SearchProgram>
    </ExploreContainer>
  );
};

export default ExploreOurPrograms;

const ExploreContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ParallaxBackgroundLeft = styled.div`
  background-image: url('https://images.pexels.com/photos/6344239/pexels-photo-6344239.jpeg');
  background-size: cover;
  background-position: center;
  z-index: -1; 

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(to bottom, rgb(255 255 255 / 0%), rgba(0, 0, 0, 0.7));
    
  }
`;
const ParallaxBackgroundRight = styled.div`
  background-image: url('https://images.pexels.com/photos/6208709/pexels-photo-6208709.jpeg');
  background-size: cover;
  background-position: center;
  z-index: -1; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));    
  }
`;

const ParallaxText = styled.div`
  position: absolute;
  top: 15%;
  left: 38%;
  max-width: 400px;
  text-align: center;
`;

const SearchProgram = styled.div`
  position: absolute;
  right: 0;
  bottom: 18%;
  max-width: 400px;
  text-align: center;
`;