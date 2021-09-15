import React from 'react'
import { useRouteMatch } from "react-router-dom"; 

function Home() {
    let match=useRouteMatch();
    console.log(match);
    return (
        <div>
            <h3>Inside Home Component</h3>
        </div>
    )
}

export default Home
