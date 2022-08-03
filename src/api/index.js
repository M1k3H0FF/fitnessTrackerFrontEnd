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
        });
        const result = await response.json();
        return result
  } catch (error){
    console.log(error)
  }
};

export async function loginUser(Username, Password) {
  try{
    console.log(Username, Password)
    const response = await 
      fetch(`${BASE_URL}api/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: Username,
          password: Password
        })
      });
      const result = await response.json();
      return result;

  } catch (error){
  (console.error);
  }
}

export async function makeNewActivity(name, description){
  try{
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}api/activities`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      description: description
    })
  })
    const result = await response.json();
    return result

  } catch (error) {

    }
};

export async function getAllActivities () {
  try{ 
  const response = await fetch(`${BASE_URL}api/activities`, {
  headers: {
    'Content-Type': 'application/json',
  },
  }) 
  const result = await response.json()
  return result;
    } catch (error){
      console.error(error, "your getAllActivities function is breaking");
    }
 
}



// demo code from previous project need to update
