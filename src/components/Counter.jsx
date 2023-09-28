import { useState, useEffect } from "react";

const Counter = () => {

    const [ count, setCount ] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("El componente funcional se montó")

        return console.log("El componente funcional se desmontó")
    }, [count])

    return (
        <div>
            <h1>Contador con componente funcional</h1>
            <h2>{count}</h2>
            <button onClick={handleClick}>Aumentar</button>
        </div>
    )
}

export default Counter;