import React from "react";

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button
            onClick={() => console.log("Enquire about course:", course.id)}
          >
            Enquire
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
