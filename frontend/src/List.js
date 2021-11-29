import React, { useState, useEffect } from "react"
import axios from "axios";
import Error from "./Error";
const List = (props)  => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])
  const [error, setError] = useState(0)
  // the following side-effect will be called once upon initial render
  useEffect(() => {
    axios.get("http://localhost:3001/")
      .then((response) => {
        console.log(response.data)
        // extract the data from the server response
        setData(response.data.tickets)
        console.log(data)
      })
      .catch(err => {
        console.error(err)
        setError(1)
      })
  }, [])

  if(error == 1){
    return (
      <div className="List">
        <ul>
          {data.map(item => (
            <li>id: {item.id}; subject:{item.raw_subject}</li>
          ))}
        </ul>
      </div>
    )
  }else{
    return (
      <Error/>
    )
  }
}

export default List
