import React from 'react';

 interface CounterProps {
count:number;
onIncrement:()=>void;
onDecrement:()=>void
}

/* class Counter extends React.Component {
    
    render () {
        const {count,onIncrement,onDecrement}=this.props
        return (
            <div>
        <button onClick={onIncrement}>
            <h1>вверх</h1>
        </button>
        <div>{count}</div>
        <button onClick={onDecrement}>
        <h1>вниз</h1>
        </button>
        </div>
        )
    }
}
handleIncrementClick=()=>{
    this.setState({count:this.state.count+1)
}
*/
type CounterType=React.FunctionComponent<CounterProps>;
const Counter:CounterType=({count,onIncrement,onDecrement}:CounterProps)=>(
    <div>
        <button onClick={onIncrement}>
            <h1>вверх</h1>
        </button>
        <div>{count}</div>
    <button onClick={onDecrement}>
        <h1>вниз</h1>
    </button>
    </div>
);



export default Counter
//export class Counter extends React.Component