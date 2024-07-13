import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";
export const ENQUIRE_COURSE = "ENQUIRE_COURSE";
export const SUBMIT_INQUIRY = "SUBMIT_INQUIRY";

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/courses"); // Replace with your API URL
    dispatch({ type: FETCH_COURSES, payload: response.data });
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

export const enquireCourse = (courseId) => ({
  type: ENQUIRE_COURSE,
  payload: courseId,
});

export const submitInquiry = (inquiryData) => async (dispatch) => {
  try {
    // Simulate saving to a file (replace with real API call if needed)
    console.log("Submitted inquiry:", inquiryData);
    dispatch({ type: SUBMIT_INQUIRY, payload: inquiryData }); // For potential UX updates
  } catch (error) {
    console.error("Error submitting inquiry:", error);
  }
};
