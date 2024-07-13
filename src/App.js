import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./actions/actions"; // Import actions
import CourseList from "./CourseList";
import Inquiries from "./Inquiries"; // Add Inquiries component

const App = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses) || [];

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on app mount
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Course List</h1>
      <CourseList courses={courses} />
      <Inquiries /> {/* Add Inquiries component */}
    </div>
  );
};

export default App;
