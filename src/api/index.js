const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/";
const cohortName = "2206-FTB-ET-WEB-FT/";

export const fectchAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL + cohortName}routines/`);
    const result = await response.json();
    const routinesData = result.data.routines
    
    return routinesData;
  } catch (error) {
    console.error(error, "something broke");
  }
};
// demo code from previous project need to update