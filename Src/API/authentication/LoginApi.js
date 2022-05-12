export  const  Login  = async(email,password)=>{
    var raw = JSON.stringify({
        username: email,
        password: password,
        device: "mobile",
        lang: "en",
      });
    await  fetch("https://fill-easy.com/login-post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: raw,
      })
      .then((response) => response.text())
      .then((result) => {
         parsedData =  JSON.parse(result);
 
      })
     .catch((error) => console.log("error", error));

    return parsedData;
}

const validEmail = (token) => {
    var requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch(
      `https://fill-easy.com/email-validation?token=${token}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

      })
      .catch((error) => console.log("error", error));
  };
export const userRegistration = async(remail,username,rpass)=>{
    var userData = {
          username: username,
          email: remail,
          password: rpass,
          device: "mobile",
        };
         await fetch("https://fill-easy.com/register-post", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
       
              responseSend = data;
              validEmail(data);
          });
    return responseSend;
}