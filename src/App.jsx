import React, { useState } from "react"
import "./App.css"

// Rick roll em
export default function App({urlToRedirect}) {  
  const [timePassedIsOverGivenAmountOfSeconds, setTimePassed] = useState(false) 

  setTimeout(() => setTimePassed(true), 3561) // 3561 is constant, but I plan to make it random for the sake of realistic loading times.

  // Redirect when there's been enough time
  if (timePassedIsOverGivenAmountOfSeconds) window.location.href = `${urlToRedirect}` 

  return (
    <div className="loading-container">
      <h1 className="loading">Loading...</h1>
    </div>
  )
}