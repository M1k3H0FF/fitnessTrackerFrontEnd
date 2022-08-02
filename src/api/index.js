const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const cohortName = "2206-FTB-ET-WEB-FT/";

export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}posts/`);
    const result = await response.json();
    const postsData = result.data.posts;

    return postsData;
  } catch (error) {
    console.error(error, "something broke");
  }
};
// demo code from previous project need to update