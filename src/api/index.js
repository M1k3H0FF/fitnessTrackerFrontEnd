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

export async function getAllActivities() {
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
export async function updateActivity(name, description, act_ID){
  try{
    console.log(act_ID, 'line 95')
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}api/activities/${act_ID}`,
     {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      description: description
    }),
  });
  const result = await response.json()
  return result;
    } catch (error){
      console.error(error, "your updateActivity function is breaking");
    }
  }

export async function updateRoutine(name, goal, routineID){
    try{
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}api/routines/${routineID}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: name,
    goal: goal
  })
});
  const result = await response.json()
  return result
    } catch (error) {
      console.log(error, "your updateRoutine is breaking")
    }

}

export async function makeNewRoutine(name, goal){
  try{
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}api/routines`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: true
    })
  })
    const result = await response.json();
    return result

  } catch (error) {

    }
};

export async function getUserInfo(token){
  try{
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}api/users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
})
  const result = await response.json()
  return result
} catch (error){
  console.log(error, "your getUserInfo function is breaking")
  }
}

export async function getRoutinesByUsername(username){
  try{
    const response = await fetch(`${BASE_URL}api/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    return result

  }catch (error){
    console.error
  }

}

// demo code from previous project need to update
