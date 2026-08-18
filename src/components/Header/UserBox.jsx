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
    <div className="flex items-center gap-2">
      {/* سبد خرید */}
      <Link to={"cart"} className="relative cursor-pointer">
        <MyIcons type={"cart"} className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cart?.courses?.length}
        </span>
      </Link>
      {/* دکمه‌ها */}
      {account?.user?.name ? (
        <>
          <Link
            to={`/dashboard`}
            className="btn-outline-primary flex items-center justify-center py-2 gap-3"
          >
            <img
              className="rounded-full flex w-6 h-6 object-contain"
              src={account?.user?.avatar}
            />
            <span className="flex">{`${account?.user?.name} عزیز خوش آمدید.`}</span>
          </Link>
          <MyIcons
            type={"signOut-1"}
            onClick={(event) => exit(event)}
            title="خروج از حساب کاربری"
            className="w-8 h-8 cursor-pointer text-red-500 p-1"
          />
        </>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <Link to={"login"} className="btn-outline-primary">
            ورود
          </Link>
          <Link to={"register"} className="btn-primary">
            ثبت‌ نام
          </Link>
        </div>
      )}
    </div>
  );
};
//! ---------------------------------------- Export
export default memo(UserBox);
