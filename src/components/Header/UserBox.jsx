//! ---------------------------------------- Import
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyIcons from "/src/components/Icons/MyIcons";
import { logOut } from "/src/features/user/userSlice";
//! ---------------------------------------- Component (UserBox)
const UserBox = () => {
  //! ---------------------------------------- Redux
  const { cart, account } = useSelector((store) => store);
  //! ---------------------------------------- Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //! ---------------------------------------- Functions
  const exit = (event) => {
    dispatch(logOut());
    navigate("login");
  };
  //! ---------------------------------------- Return
  return (
    <div className="flex items-center gap-3 h-full">
      {/* Cart*/}
      <Link
        to={"cart"}
        className="relative cursor-pointer h-full justify-center items-center flex"
      >
        <MyIcons type={"cart"} className="text-2xl" />
        <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cart?.courses?.length}
        </span>
      </Link>
      {/* Buttons */}
      {account?.user?.name ? (
        <>
          <Link
            to={`/dashboard`}
            className="btn-outline-primary flex items-center justify-center gap-3 h-full"
          >
            <img
              className="rounded-full flex w-6 h-auto object-contain"
              src={account?.user?.avatar}
            />
            <span className="flex gap-1">
              <strong className="font-semibold">
                Welcome <span className="text-red-500"> Dear</span>
              </strong>
              <strong className="font-bold">{` ${account?.user?.name}`}</strong>
            </span>
          </Link>
          <MyIcons
            type={"signOut-1"}
            onClick={(event) => exit(event)}
            title="Log out of account"
            className="w-8 h-8 cursor-pointer hover:text-red-500 transition-colors ease-in-out p-1"
          />
        </>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <Link to={"login"} className="btn-outline-primary border-0">
            Login
          </Link>
          <Link to={"register"} className="btn-primary">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};
//! ---------------------------------------- Export
export default memo(UserBox);
