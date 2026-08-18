//! ---------------------------------------- Import
import { memo } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaClock, FaSignal, FaUserGraduate } from "react-icons/fa";
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
  FaLock,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";
//! ---------------------------------------- Component (MyIcons)
const MyIcons = (prop) => {
  //! ---------------------------------------- Switch
  switch (prop.type) {
    //! -------------------- Case (cart)
    case "cart":
      return <FaCartShopping {...prop} />;
    //! -------------------- Case (signOut-1)
    case "signOut-1":
      return <CiLogout {...prop} />;

    //! -------------------- Case (user)
    case "user":
      return <FaUser {...prop} />;

    //! -------------------- Case (date)
    case "date":
      return <MdOutlineDateRange {...prop} />;

    //! -------------------- Case (category)
    case "category":
      return <FaTag {...prop} />;

    //! -------------------- Case (instagram)
    case "instagram":
      return <FaInstagram {...prop} />;

    //! -------------------- Case (linkedin)
    case "linkedin":
      return <FaLinkedin {...prop} />;

    //! -------------------- Case (twitter)
    case "twitter":
      return <FaTwitter {...prop} />;
    //! -------------------- Case (delete)
    case "delete":
      return <FaTrash {...prop} />;
    //! -------------------- Case (period)
    case "period":
      return <FaClock {...prop} />;
    //! -------------------- Case (level)
    case "level":
      return <FaSignal {...prop} />;
    //! -------------------- Case (teacher)
    case "teacher":
      return <FaUserGraduate {...prop} />;
    //! -------------------- Case (profile)
    case "profile":
      return <FaBook {...prop} />;
    //! -------------------- Case (courses)
    case "courses":
      return <FaUser {...prop} />;
    //! -------------------- Case (transactions)
    case "transactions":
      return <FaCog {...prop} />;
    //! -------------------- Case (notifications)
    case "notifications":
      return <FaCreditCard {...prop} />;
    //! -------------------- Case (settings)
    case "settings":
      return <FaBell {...prop} />;
    //! -------------------- Case (signOut-2)
    case "signOut-2":
      return <FaSignOutAlt {...prop} />;
    //! -------------------- Case (email)
    case "email":
      return <FaEnvelope {...prop} />;
    //! -------------------- Case (password)
    case "password":
      return <FaLock {...prop} />;
    //! -------------------- Case (search)
    case "search":
      return <FaSearch {...prop} />;
  }
};
//! ---------------------------------------- Export
export default memo(MyIcons);
