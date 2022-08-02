const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/";

export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/routines/`);
    const result = await response.json();
    // const routinesData = result.data.routines
    return result;
  } catch (error) {
    console.error(error, "something broke");
  }
};
// demo code from previous project need to update
