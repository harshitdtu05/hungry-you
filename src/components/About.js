import User from "./User";
import { useState } from "react";

const About = ()=> {
    const [count, setCount] = useState(0);

    return(
    <div className="about">
        <h3>Count : {count}</h3>
        <button className="count-btn" onClick={
            () => {
                return setCount(count + 1);
            }
        }>
            Count increase
        </button>
        <h1> KhaoPiyo™ </h1>
        <User/>
    </div>
    );
};

export default About;