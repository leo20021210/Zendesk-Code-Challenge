import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Error from "./Error"
const Id = props => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])
  const [error, setError] = useState(0)
  const id = useParams()
  const real_id = parseInt(id.id)
  console.log(`http://localhost:3001/ticket/${real_id}`)
  // the following side-effect will be called once upon initial render
  useEffect(() =>{
    axios(`http://localhost:3001/ticket/${real_id}`)
    .then(response => {
        // extract the data from the server response
        console.log(response.data)
        setData(response.data.ticket)
    })
    .catch(err => {
      console.log("oops")
      setError(1)
    })
  }, [])
  if(error == 0){
    return (
      <div className="Id">
        <p>id: {data.id}</p>
        <p>subject: {data.raw_subject}</p>
      </div>
    )
  }else{
    return(
      <Error/>
    )
  }
}

export default Id