//! ---------------------------------------- Import
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import teachers from "/src/data/teachers";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Teacher)
const Teacher = () => {
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow max-w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <h2 className="text-4xl font-bold text-center mb-12">مدرسین ما</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-3xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition justify-between gap-3"
          >
            <Link to={`/teacher/${teacher.id}`}>
              <img
                src={teacher.image}
                alt={teacher.name}
                className="rounded-full w-32 h-32 object-cover border-4 border-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{teacher.name}</h2>
            </Link>
            <p className="text-gray-600 mb-4">{teacher.bio}</p>

            <div className="flex gap-4 text-blue-600 text-lg">
              {teacher.social.instagram && (
                <a
                  className="cursor-pointer"
                  href={teacher.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              )}
              {teacher.social.linkedin && (
                <a
                  className="cursor-pointer"
                  href={teacher.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {teacher.twitter && (
                <a
                  href={teacher.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
