import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
export default function Bus() {
  const { key } = useParams()
  console.log("hi");
  return (
    <div>
        <Navbar />
        <h1>this is {key} bus.</h1>
    </div>
  )
}
