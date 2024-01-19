import './App.css'
import { FiCalendar, FiPlus } from 'react-icons/fi'
import { Note } from './components/Note'
import { useState } from 'react'

export function App() {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    function handleAddNote() {
        if (!newNote) {
            return
        }
        setNotes(prevState => [...prevState, newNote])
        setNewNote("")
    }

    function handleRemoveNote(e) {
        setNotes(notes.filter(note => note !== e))
    }

    return (
        <>
            <header>
                <h1>NOTES</h1>
            </header>
            <main>
                <div className="container">
                    <section className='header-note'>
                        <h2>ENSIRA UMA TAREFA</h2>
                        <div className="wrapper-input">
                            <FiCalendar />
                            <input
                                type="text"
                                placeholder='Titulo da Tarefa'
                                onChange={e => setNewNote(e.target.value)}
                            />
                            <button onClick={handleAddNote}>
                                <FiPlus />
                            </button>
                        </div>
                    </section>
                    <h3>TAREFAS</h3>
                    <section className='main-note'>
                        {
                            notes &&
                            notes.map((note, index) => (
                                <Note
                                    title={note}
                                    key={String(index)}
                                    del={() => handleRemoveNote(note)}
                                    index={String(index)}
                                />
                            ))
                        }
                    </section>
                </div>
            </main>
        </>
    )
}

