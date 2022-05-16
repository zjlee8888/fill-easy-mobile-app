export const getdataActivity = async (dispatch , token) =>{
  //const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjciLCJ1c2VybmFtZSI6ImJibTIiLCJlbWFpbCI6Im1hdHRoZXdsZWVAZmlsbC1lYXN5LmNvbSIsInZlcmlmaWVkIjoxLCJtZXNzYWdlIjoiWW91IGFyZSBsb2dnZWQgaW4hIiwibG9naW5fbWVzc2FnZSI6IlBhc3NlZCIsImlhdCI6MTY1MjY5MzUwOCwiZXhwIjoxNjUyNjk3MTA4fQ.5wtjkezjot5LQvlY4bjMczRYxLxBDN-xMSBgxsQFOUc"
    var requestOptions = {
      jwt: token,
      };
  
     const res =  await fetch(
        "https://fill-easy.com/users/activity-records",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestOptions),
          
        }
      )
        .then((response) => {
          if (response.status == 200) {
            const result = response.json()
            .then((res)=>{
    
              dispatch({
                type : "GET_ACTIVITY",
                payload: res
              })
            })
         
          } else {
            dispatch({
              type : "GET_ACTIVITY",
              payload: ["error"]
            })
          }
        })
      
}