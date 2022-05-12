export const getdataActivity = async (dispatch) =>{
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgyIiwidXNlcm5hbWUiOiJJbW8iLCJlbWFpbCI6ImxtbzE1OTQ3QG16aWNvLmNvbSIsInZlcmlmaWVkIjoxLCJtZXNzYWdlIjoiWW91IGFyZSBsb2dnZWQgaW4hIiwibG9naW5fbWVzc2FnZSI6IlBhc3NlZCIsImlhdCI6MTY1MjM1NTUzNSwiZXhwIjoxNjUyMzU5MTM1fQ.x9mR2cUcv8pTkLUXLM-hI0OwINAbCOfqpYxym-dwOYY"
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
        // .then((result) => 
        // {
    

        //   dispatch({
        //     type : "GET_ACTIVITY",
        //     payload : result
        //   })
        // });

       // return res
}