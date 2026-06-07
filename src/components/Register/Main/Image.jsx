//! ---------------------------------------- Import
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
//! ---------------------------------------- Component (Image)
export default function Image() {
  return (
    <div className="hidden md:flex bg-gradient-to-tr from-blue-500 to-indigo-600 p-10 text-white relative">
      <div>
        <h2 className="text-3xl font-bold leading-tight mb-4">
          به خانواده DevMinds بپیوند!
        </h2>
        <p className="text-sm text-blue-100">
          عضویت رایگانه! فقط چند ثانیه طول می‌کشه تا وارد دنیای یادگیری حرفه‌ای
          بشی.
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
