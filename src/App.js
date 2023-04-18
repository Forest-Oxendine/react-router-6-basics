import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HTMLCourses, CSSCourses, JSCourses } from './data/courses';
// BrowserRouter, Route, Routes

// App componenets
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import CourseContainer from './components/courses/CourseContainer';
import NotFound from './components/NotFound';
import Featured from './components/Featured';
// Link, NavLink - links components/pagees together


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" >
          <Route index element={<Teachers />} />
          <Route path=":topic/:name" element={<Featured />} />
        </Route>

        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace to="html" />} />
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="javascript" element={<CourseContainer data={JSCourses} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
