//! ---------------------------------------- Import
//! ---------------------------------------- Component (Image)
export default function RegisterImage() {
  //! ---------------------------------------- Return
  return (
    <div className="hidden md:flex bg-gradient-to-tr from-blue-500 to-indigo-600 p-10 text-white relative">
      <div>
        <h2 className="text-3xl font-bold leading-tight mb-4">
          Join the DevMinds family!
        </h2>
        <p className="text-sm text-blue-100">
          Membership is free! It only takes a few seconds to enter the world of
          professional learning.
        </p>
        <img
          src="/images/register-illustration.svg"
          alt="Register Illustration"
          className="absolute bottom-0 left-0 w-60 opacity-30"
        />
      </div>
    </div>
  );
}
