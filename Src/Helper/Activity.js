export const getdataActivity = async () =>{
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgyIiwidXNlcm5hbWUiOiJJbW8iLCJlbWFpbCI6ImxtbzE1OTQ3QG16aWNvLmNvbSIsInZlcmlmaWVkIjoxLCJtZXNzYWdlIjoiWW91IGFyZSBsb2dnZWQgaW4hIiwibG9naW5fbWVzc2FnZSI6IlBhc3NlZCIsImlhdCI6MTY1MjI2NTE2OSwiZXhwIjoxNjUyMjY4NzY5fQ.CYQj7pmf1EAt-JyLeaMZdHL3JRwGFEqbDifzddLaBpQ"
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
        .then((response) => console.log("@@@@",response))
        .then((result) => 
        {
        return result
        });

       // return res
}