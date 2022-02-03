import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('call');
        document.title = `Vous avez cliqué ${count} fois`;
    })
    
    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );
}

export default Counter;