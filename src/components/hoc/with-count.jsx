import { Component, useState } from "react";





const withCount = (Component) =>{
    return () =>{

        const [count,setCount]=useState(0)

        const incrementHandler = () =>{
            setCount(count+1)
        }

        return <Component count={count} incrementCount={incrementHandler}/>
    }
}
export default withCount