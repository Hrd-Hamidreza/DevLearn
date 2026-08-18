//! ---------------------------------------- Import
//! ---------------------------------------- Component (Image)
export default function LoginImage() {
  //! ---------------------------------------- Return
  return (
    <div className="hidden md:block bg-blue-600 p-10 text-white relative">
      <h2 className="text-3xl font-bold leading-tight mb-4">
        Welcome to DevMinds!
      </h2>
      <p className="text-sm text-blue-100 leading-relaxed">
        To access the user panel, please log in to your account. If you don't
        have an account, you can easily register.
      </p>
      <img
        src="/images/login-illustration.svg"
        alt="Login Illustration"
        className="absolute bottom-0 left-0 w-60 opacity-30"
      />
    </div>
  );
}
