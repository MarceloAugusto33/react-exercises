import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'

export function App() {

    const [style, setStyle] = useState(true)

    function changeStyle() {
        setStyle(prev => !prev)
    }

    return (
        <div>
            <h2>Componente</h2>
            <Button
                title="Clique-me"
                onClick={changeStyle}
                style={style}
            />
        </div>
    )
}