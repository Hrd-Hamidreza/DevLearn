//! ---------------------------------------- Import
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Course from "../pages/Course";
import Article from "../pages/Article";
import Teachers from "../pages/teachers";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDetails from "../pages/CourseDetails";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
import Dashboard from "../pages/Dashboard";
import ArticleDetails from "../pages/ArticleDetails";
import TeacherDetails from "../pages/TeacherDetails";
//! ---------------------------------------- Component (Router)
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="article" element={<Article />} />
          <Route path="article/:id" element={<ArticleDetails />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teacher/:id" element={<TeacherDetails />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
