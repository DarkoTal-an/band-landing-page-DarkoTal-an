import React from 'react';
import {useLocation} from "react-router-dom"
import "../../App.css"

export default function PageNotFound() {
    let location = useLocation();
    return (
        <div className = "page-not-found">
            <h1>The page <em className="url-style">{`"${location.pathname}"`}</em> doesn't exist...&#128556; please try again! </h1>
        </div>
    )
}
