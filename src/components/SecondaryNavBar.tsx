/* eslint-disable max-len */
import React, { useState } from "react";
import styled from "styled-components";
import { LeftNavLinkItems, RightNavLinkItems } from "./../const/links";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const SecondaryNavBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <Container className="bg-red-700 p-18 sticky top-0 z-50 shadow-lg rounded-b-3xl">
      <LeftNavLinks>
        {LeftNavLinkItems.map((item) => (
          <li key={item.name} className="mr-6">
            <Link to={item.link} className="text-white hover:underline">
              {item.Title}
            </Link>
          </li>
        ))}
      </LeftNavLinks>
      <RightNavLinks>
        {RightNavLinkItems.map((item) => (
          <li key={item.name} className="mr-6">
            <Link to={item.link} className="text-white hover:underline">
              {item.Title}
            </Link>
          </li>
        ))}
        {/* <input type="search" name="search" id="main-search" /> */}
        <div className="relative flex items-center w-40 h-2">
          <div
            className="text-gray-600 absolute ml-2 rounded-full bg-slate-100 p-2 font-semibold"
            onMouseEnter={handleInputFocus}
            onMouseLeave={handleInputBlur}>
            <BsSearch />
          </div>
          {
            (isFocused || searchText) ? (
              <input
                type="text"
                className={`h-8 pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 ${isFocused || searchText ? "border-blue-500" : ""}`}
                placeholder="Search..."
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onMouseEnter={handleInputFocus}
                onMouseLeave={handleInputBlur}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            ) : null
          }
        </div>
      </RightNavLinks>
    </Container>
  );
};

export default SecondaryNavBar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`;

const LeftNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 500;
`;

const RightNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-weight: 300;
`;