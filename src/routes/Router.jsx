//! ---------------------------------------- Import
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "/src/pages/Main/Home";
import Course from "/src/pages/Main/Course";
import Article from "/src/pages/Main/Article";
import Teacher from "/src/pages/Main/Teacher";
import About from "/src/pages/Main/About";
import Cart from "/src/pages/Main/Cart";
import Login from "/src/pages/Main/Login";
import Register from "/src/pages/Main/Register";
import CourseDetails from "/src/pages/Main/CourseDetails";
import NotFound from "/src/pages/Main/NotFound";
import Dashboard from "/src/pages/Main/Dashboard";
import ArticleDetails from "/src/pages/Main/ArticleDetails";
import TeacherDetails from "/src/pages/Main/TeacherDetails";
import CourseCard from "/src/components/Cards/CourseCard";
import MainPeak from "/src/pages/Main/MainPeak";
import RegisterGaurd from "/src/utils/Guard/RegisterGaurd";
import LoginGaurd from "/src/utils/Guard/LoginGaurd";
import DashboardGaurd from "/src/utils/Guard/DashboardGaurd";
import Courses from "/src/pages/Dashboard/Courses";
import Profile from "/src/pages/Dashboard/Profile";
import Settings from "/src/pages/Dashboard/Settings";
import Transactions from "/src/pages/Dashboard/Transactions";
import Notifications from "/src/pages/Dashboard/Notifications";
//! ---------------------------------------- Component (Router)
export default function Router() {
  //! ---------------------------------------- Return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPeak />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="article" element={<Article />} />
          <Route path="article/:id" element={<ArticleDetails />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="teacher/:id" element={<TeacherDetails />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="register"
            element={
              <RegisterGaurd>
                <Register />
              </RegisterGaurd>
            }
          />
          <Route
            path="login"
            element={
              <LoginGaurd>
                <Login />
              </LoginGaurd>
            }
          />
          <Route
            path="dashboard"
            element={
              <DashboardGaurd>
                <Dashboard />
              </DashboardGaurd>
            }
          >
            <Route index element={<Navigate to={"profile"} replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
