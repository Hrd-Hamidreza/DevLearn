//! ---------------------------------------- Import
import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import HeadCourse from "../components/Course/Details/HeadCourse";
import InfoBoxCourse from "../components/Course/Details/InfoBoxCourse";
import TeacherBoxCourse from "../components/Course/Details/TeacherBoxCourse";
import OutlineCourse from "../components/Course/Details/OutlineCourse";
import EnrollCourse from "../components/Course/Details/EnrollCourse";
import NotFound from "./NotFound";
//! ---------------------------------------- Component (CourseCard)
const CourseDetails = () => {
  const { id } = useParams();
  const chosen = courses.find((course) => +course.id === +id);
  if (!chosen) {
    return <NotFound />;
  } else {
    return (
      <div className="bg-gray-200 shadow-md w-6xl mx-auto rounded-3xl overflow-hidden my-15">
        {/* Course Banner */}
        <div className="w-full">
          <img
            src={chosen.image}
            alt={chosen.title}
            className="w-full h-100 object-cover"
          />
        </div>
        <div className="p-8">
          {/* Title + Desc */}
          <HeadCourse chosen={chosen} />
          {/* Info Box */}
          <InfoBoxCourse chosen={chosen} />
          {/* Instructor Box */}
          <TeacherBoxCourse chosen={chosen} />
          {/* Outline */}
          <OutlineCourse chosen={chosen} />
          {/* Enroll Section */}
          <EnrollCourse chosen={chosen} />
        </div>
      </div>
    );
  }
};

export default CourseDetails;
