//! ---------------------------------------- Import
import React from "react";
import Image from "../components/Register/Main/Image";
import Form from "../components/Register/Main/Form";
//! ---------------------------------------- Component (Dashboard)
const Register = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden shadow-2xl my-15">
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <Image />
        {/* Form */}
        <Form />
      </div>
    </div>
  );
};

export default Register;
