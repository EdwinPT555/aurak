import React from "react";
import styled from "styled-components";


const Rank = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 bg-red-700  p-28 flex justify-center">
        <div className="flex justify-center items-start flex-col">
          <span className="text-xl font-bold text-white">Ranked</span>
          <div className="flex justify-center items-center">
            <span className="text-6xl font-bold text-white">#11</span>
            <StyledSpan className="w-10 mx-5"></StyledSpan>
            <span className="text-white font-semibold">RS Ranking 2022</span>
          </div>
          <span className="text-white font-semibold">IN THE UNITED ARAB EMIRATES</span>
        </div>
      </div>
      <div className="w-1/2 bg-gray-500  p-28 flex justify-center">
        <div className="flex justify-center items-start flex-col">
          <span className="text-xl font-bold text-white">Ranked</span>
          <div className="flex justify-center items-center">
            <span className="text-6xl font-bold text-white">#49</span>
            <StyledSpan className="w-10 mx-5"></StyledSpan>
            <span className="text-white font-semibold">RS Ranking 2022</span>
          </div>
          <span className="text-white font-semibold">IN THE ARAB REGION</span>
        </div>
      </div>
    </div>
  );
};

export default Rank;

const StyledSpan = styled.span`
  color: white;
  border: solid 1px white;
`;