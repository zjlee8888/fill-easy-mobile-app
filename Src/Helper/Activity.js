
export const getdataActivity = async ( token , dispatch) =>{
  const token1 = token
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