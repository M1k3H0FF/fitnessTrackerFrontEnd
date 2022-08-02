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


export async function registerUser(registerUsername, registerPassword){
  try{ 
    console.log(registerUsername, registerPassword)
    const response = await 
        fetch(`${BASE_URL}api/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
              username: registerUsername,
              password: registerPassword
          })
        });const result = await response.json();
          return(result.token)
        
        
  } catch (error){
    console.log(error)
  }
};



// demo code from previous project need to update
