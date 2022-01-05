import React, { useState } from "react";
import Button from "./button.js";
import "../assests/css/styles.css";

export default function HomePage(props) {
    const [count, setCount] = useState(0);
    
    let incrementCount = () => {
        setCount(count + 1);
    };
      
    let decrementCount = () => {
        setCount(count - 1);
    };
    return (
        <div className="app">
            <div>
            <h1>Counter App</h1>
                <div class="buttons">
                    <div><Button title={"-"} action={decrementCount} /></div>
                    <div class="count">
                        <h1 className={count > 100 ? 'count-text--isOver100' : (count < 5 ? 'count-text--isless5' : 'count-text' )}>{count}</h1>
                    </div>
                    <div><Button title={"+"} action={incrementCount} /></div>
                </div>
            </div>
        </div>
    )
}