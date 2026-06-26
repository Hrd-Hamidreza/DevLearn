//! ---------------------------------------- Import
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import teachers from "/src/data/teachers.js";
import NotFound from "/src/pages/Main/NotFound";
import Profile from "../../components/Teachers/Details/Profile";
import Skills from "../../components/Teachers/Details/Skills";
import Courses from "../../components/Teachers/Details/Courses";
//! ---------------------------------------- Component (Router)
const TeacherDetails = () => {
  const { id } = useParams();
  const chosen = teachers.find((teacher) => +teacher.id === +id);
  if (!chosen) {
    return <NotFound />;
  } else {
    return (
      <div className="bg-gray-200 shadow-md w-6xl mx-auto rounded-3xl overflow-hidden my-15 p-5">
        {/* Profile Card */}
        <Profile chosen={chosen} />
        {/* Skills */}
        <Skills chosen={chosen} />
        {/* Courses */}
        <Courses chosen={chosen} />
      </div>
    );
  }
};

export default TeacherDetails;
