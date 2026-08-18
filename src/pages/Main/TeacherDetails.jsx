//! ---------------------------------------- Import
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import NotFound from "/src/pages/Main/NotFound";
import Profile from "/src/components/Teachers/Details/Profile";
import Skills from "/src/components/Teachers/Details/Skills";
import Courses from "/src/components/Teachers/Details/Courses";
import { useQuery } from "@tanstack/react-query";
import { getTeacherDataByIdFn } from "/src/services/teacherService";
//! ---------------------------------------- Component (TeacherDetails)
export default function TeacherDetails() {
  //! ---------------------------------------- Hooks
  const { id } = useParams();
  //! ---------------------------------------- Query
  const { data: teacher, isLoading } = useQuery({
    queryKey: ["teacher"],
    queryFn: () => getTeacherDataByIdFn(id),
  });
  //! ---------------------------------------- Return
  return isLoading || teacher ? (
    <div className="bg-gray-200 flex flex-col gap-10 shadow-md w-6xl mx-auto rounded-3xl overflow-hidden my-15 p-5">
      {/* Profile Card */}
      <Profile {...(!isLoading && { teacher })} />
      {/* Skills */}
      <Skills {...(!isLoading && { teacher })} />
      {/* Courses */}
      <Courses {...(!isLoading && { teacher })} />
    </div>
  ) : (
    <NotFound />
  );
}
