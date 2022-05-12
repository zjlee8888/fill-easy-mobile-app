import {API} from '../Utility/Apiservice'

export const formfill =  async(dispatch,data  ,token) => {

    var requestOptions = {
        Servicelinecheckbox: data,
        jwt: token,
      };
  
     const res =  await fetch(
        API.COMPANY_FORM,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestOptions),
        }
      )
        .then((response) => response.json())
        .then((result) => 
        {
          dispatch({
            type : "COMPANY_LIST",
            payload : result
          })
          return result
        });

       return res
}