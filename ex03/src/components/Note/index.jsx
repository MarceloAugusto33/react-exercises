import './Note.css'
import { FiCheck,FiX  } from 'react-icons/fi'

export function Note({ title, del, index, complet }) {
    return(
        <div className='card-note' id={index}>
            <div className="title">
                <p>{title}</p>
            </div>
            <button onClick={del}><FiX /></button>
        </div>
    )
}