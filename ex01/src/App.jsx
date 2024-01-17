import { useState } from 'react'
import './App.css'


export function App(){
    const [contador, setContador] = useState(0);

    return (
        <main>
            <h1>Contador REACT</h1>
            <h2>{contador}</h2>
            <div>
                <button 
                    onClick={() => setContador(e => e + 1)}
                > 
                    Aumentar + 
                </button>
                <button 
                    onClick={() => setContador(e => e -1)}
                >
                    Diminuir -
                </button>
            </div>
        </main>
            
    )
}