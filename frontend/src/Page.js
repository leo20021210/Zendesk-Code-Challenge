import React, { useState, useEffect } from "react"
import axios from "axios"
import Error from "./Error"
const Page = props => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])
  const [page, setPage] = useState(props.page)
  const [prev, setPrev] = useState()
  const [next, setNext] = useState()
  const [error, setError] = useState(0)
  // the following side-effect will be called once upon initial render
  useEffect(() => {
    axios("http://localhost:3001/page/"+page)
      .then(response => {
        // extract the data from the server response
        setData(response.data.tickets)
        setPrev(response.data.previous_page)
        setNext(response.data.next_page)
      })
      .catch(err => {
        console.error(err)
        setError(1)
      })
  }, [page])
  if(error == 0){
    return (
      <div className="List">
        <ul>
          {data.map(item => (
            <li>id: {item.id}; subject:{item.raw_subject}</li>
          ))}
        </ul>
        <p><button onClick = {() => {setPage(prev)}}>previous_page</button></p>
        <p><button onClick = {() => {setPage(next)}}>next_page</button></p>
      </div>
    )
  }else{
    return(
      <Error/>
    )
  }
}

export default Page