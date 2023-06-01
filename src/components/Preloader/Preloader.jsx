// import React from 'react'
import { useEffect } from "react"
import "./preloader.styles.scss"
import { preLoaderAnim } from "../../animations"

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, [])

  return (
    <div className="preloader">
        <div className="texts-container">
        <span>Developer, </span>
        <span> Designer, </span>
        <span>Vibe</span>

        </div>
    </div>

  )
}

export default Preloader
