//! ---------------------------------------- Import
import RegisterImage from "/src/components/Register/Main/RegisterImage";
import RegisterForm from "/src/components/Register/Main/RegisterForm";
//! ---------------------------------------- Component (Register)
export default function Register() {
  //! ---------------------------------------- Return
  return (
    <div className="flex items-center justify-center overflow-hidden shadow-2xl my-15">
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <RegisterImage />
        {/* Form */}
        <RegisterForm />
      </div>
    </div>
  );
}
