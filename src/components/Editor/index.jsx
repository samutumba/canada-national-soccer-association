import { useState } from "react"
//import { connection } from "../../utils/connection"
import { TextField, Button } from "@mui/material"
//import ReactJson from 'react-json-view'

export const MySQLEditor = () => {
 const [query, setQuery] = useState('')
 const [result, setResult] = useState({})
 const [field, setField] = useState()

 const submitQuery = () => {
  // connection.connect()
   
  // connection.query(query, function (error, results, fields) {
  //  if (error) {
  //   setResult({
  //    error: error
  //   })
  //   return;
  //  };
  //  setResult(results)
  //  if (fields) {
  //   setResult({ ...result, fields })
  //  }
  // });
   
  setQuery('')
  //connection.end()
 }

 return (<div className="flex px-12 flex-col gap-4 justify-center">
  <TextField id="outlined-basic" value={query} onChange={(e) => {
   setQuery(e.target.value)
  }} label="Query" variant="outlined" />
  <Button variant="contained" onClick={submitQuery}>Submit</Button>
 </div>)
}