
export const getdataActivity = async ( token , dispatch) =>{
  const token1 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgyIiwidXNlcm5hbWUiOiJJbW8iLCJlbWFpbCI6ImxtbzE1OTQ3QG16aWNvLmNvbSIsInZlcmlmaWVkIjoxLCJtZXNzYWdlIjoiWW91IGFyZSBsb2dnZWQgaW4hIiwibG9naW5fbWVzc2FnZSI6IlBhc3NlZCIsImlhdCI6MTY1MjY5OTQ0MywiZXhwIjoxNjUyNzAzMDQzfQ.ww8QdVaXprI6IV49iuPMJqWp2MOYWVjrN4jb3_WxA8Q"
    var requestOptions = {
      jwt: token1,
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
              console.log("^^^^^^^^^^^",res)
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