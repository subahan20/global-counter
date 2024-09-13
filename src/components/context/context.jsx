import { useContext } from "react"
import { GlobalCounter } from "../../navigation/navigation"
import { decrementAction, incrementAction, resetAction } from "../../navigation/counterHelper"
import withCount from "../hoc/with-count"





const CustomContext = ({count,incrementCount}) => {
    const { current, dispatch } = useContext(GlobalCounter)

    const incrementHandler = () =>{
        dispatch(incrementAction)
    }

    const decrementHandler = () =>{
        if(current.count >= 1){
            dispatch(decrementAction)
        }
    }

    const resetHandler = () =>{
        dispatch(resetAction)
    }
    console.log(current)
    return (
        <div>
            <h1>{current.count}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
            <h2>{count}</h2>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}
export default withCount(CustomContext)