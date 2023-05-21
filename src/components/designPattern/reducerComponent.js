import { useReducer } from "react"

const INITIAL_STATE = {
    count : 0
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'INCREASE': {
            return {count: state.count + 1}
        }
    case 'DECREASE': {
        return {count: state.count - 1}
    }
}
}

function ReducerComponent() {
    return(
        <Counter stateReducer={reducer}></Counter>
    )
}

function Counter({stateReducer}) {
    const[state,dispatch] = useReducer(stateReducer, INITIAL_STATE);
    const increment = () => {
        dispatch({type: 'INCREASE'})
    }
    const decrement = () => {
        dispatch({type: 'DECREASE'})
    }    
    return(
        <div>
            <button onClick={decrement}>-</button>
            {state?.count}
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ReducerComponent;