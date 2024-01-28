import { useState } from "react"
import './App.css'

export function App() {

  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="container">
      <button
        onClick={() => setViewModal(true)}
      >
        Abrir Modal
      </button>

      {
        viewModal &&
        <div className="modal">
          <div className="modal__card">
            <button
              onClick={() => setViewModal(false)}
            >
              Fechar modal
            </button>
            <h3>modal</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloribus incidunt ab facilis alias inventore temporibus aliquam placeat eos beatae labore fugit, illum, sunt tempore laudantium, in omnis asperiores ducimus.</p>
          </div>
        </div>
      }

    </div>
  )
}