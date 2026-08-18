//! ---------------------------------------- Import
import LoginForm from "/src/components/Login/Main/LoginForm";
import LoginImage from "/src/components/Login/Main/LoginImage";
//! ---------------------------------------- Component (Login)
export default function Login() {
  //! ---------------------------------------- Retrun
  return (
    <div className="flex items-center justify-center overflow-hidden shadow-2xl my-15">
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <LoginImage />
        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
}
