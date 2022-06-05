import { API } from '../Utility/Apiservice'
//import {dispatch } from 'redux'
import Type from '../Redux/constant'

export const Allblogpost = async (dispatch, token) => {
 // console.log("###############",blog)
  const res = await fetch(
    API.BLOGPOST_GET,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(requestOptions),
    }
  )
    .then((response) => {
  
      if (response.status == 200) {

        const result = response.json()
        .then((res) =>{
          console.log("###############",res)
          dispatch({
            type: Type.SET_ALL_BLOGS,
            payload: res.posts

          })
        })
        
      } else {
        dispatch({
          type: Type.SET_ALL_BLOGS,
          payload: ["error"]
        })
      }


    }


    )
  // .then((result) => {
  //   console.log("$$$$$$$$$$$$",result)
  //   dispatch({
  //     type : Type.SET_ALL_BLOGS,
  //     payload : result.posts
  //   })

  // });

  // return res
}

export const blogdetailapi = async (dispatch, id, token) => {


  var requestOptions = {
    jwt: token,
  };


  const res = await fetch(
    `https://fill-easy.com/blog/1?device=mobie&lang=en`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(requestOptions),
    }
  )
    .then((response) => JSON.parse(response))
    .then((result) => {


      // dispatch({
      //   type : Type.SET_ALL_BLOGS,
      //   payload : result.posts
      // })

    });

}