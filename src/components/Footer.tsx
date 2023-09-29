/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-wrap">
        <div id="left" className="w-full bg-red-700 text-white py-10 px-32 md:w-2/3 lg:w-2/3 px-4 mb-4 md:flex-grow">
          <div className="md:flex">
            <div className="w-1/2 md:pr-4">
              <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((item) => (
                  <div key={item.name} className="text-sm">
                    <Link to={item.link}>{item.Title}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 md:pl-4">
              <h3 className="text-xl font-bold mb-4">STUDY AT AURAK</h3>
              <ul className="list-none text-sm">
                <li className="py-1"><Link to="#">Bachelors</Link></li>
                <li className="py-1"><Link to="#">Masters</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <ul className="list-none">
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">LinkedIn</Link></li>
              <li><Link to="#">Instagram</Link></li>
            </ul>
            <div className="mt-6 text-xs text-red-100">
              Copyright &copy; 2023 American University of Ras al-Khaimah. All rights reserved
            </div>
          </div>
        </div>

        <div id="right" className="w-full bg-slate-200 py-10 px-32 md:w-1/3 lg:w-1/3 px-4 mb-4">
          <h3 className="text-xl font-semibold mb-4">AURAK CAMPUS</h3>
          <address className="mb-4">
            <p className="font-semibold">Aurak</p>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
          </address>
          <div className="flex mb-4">
            <p className="mr-4">Phone: (123) 456-7890</p>
            <p>Fax: (123) 456-7890</p>
          </div>
          <hr className="border-t-2 border-gray-600 my-4" />
          <div className="flex mb-4">
            <p className="mr-4">Email: info@example.com</p>
            <p>Admissions: admissions@example.com</p>
          </div>
        </div>

      </div>
    </footer>



  );
};

export default Footer;

const quickLinks = [
  {
    "name": "enquire-now",
    "Title": "ENQUIRE NOW",
    "link": "/enquire-now"
  },
  {
    "name": "leadership",
    "Title": "LEADERSHIP",
    "link": "/leadership"
  },
  {
    "name": "apply-now",
    "Title": "APPLY NOW",
    "link": "/apply-now"
  },
  {
    "name": "alumni",
    "Title": "ALUMNI",
    "link": "/alumni"
  },
  {
    "name": "student-portal",
    "Title": "STUDENT PORTAL",
    "link": "/student-portal"
  },
  {
    "name": "campus-directory",
    "Title": "CAMPUS DIRECTORY",
    "link": "/campus-directory"
  },
  {
    "name": "faculty-portal",
    "Title": "FACULTY PORTAL",
    "link": "/faculty-portal"
  },
  {
    "name": "library",
    "Title": "LIBRARY",
    "link": "/library"
  },
  {
    "name": "about-aurak",
    "Title": "ABOUT AURAK",
    "link": "/about-aurak"
  },
  {
    "name": "academic-calendar",
    "Title": "ACADEMIC CALENDAR",
    "link": "/academic-calendar"
  }
];