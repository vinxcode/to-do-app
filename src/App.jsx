import { useState } from 'react'
import Header from './Header'

function App() {
  const [tasks, setTasks] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState("")

  const handleChange = (event) => {
    setNuevaTarea(event.target.value)
  }

  const handlesubmit = () => {
    setTasks([...tasks, nuevaTarea])
    setNuevaTarea("")
  }
  const handleEliminar = (indice) => {
    const nuevoArray = tasks.filter((task, index) => index !== indice);
    setTasks(nuevoArray)
  }

  return (
    <div>
      <Header />
      <div className='bg-gray-100 w-[850px] mx-auto p-10 flex flex-col justify-center gap-5 mt-10 rounded-2xl'>

        <div className=' flex justify-center items-center gap-4'>
          <input type="text" name="texto" id="texto" value={nuevaTarea}
            onChange={handleChange}
            className='border border-solid border-gray-300 w-[400px] rounded-xl m-3 h-10' />
          <input type="button" value="Agregar tarea"
            className='h-10 bg-green-500 rounded-xl w-[200px] cursor-pointer'
            onClick={handlesubmit} />
        </div>
        <div>
          <ul className='flex flex-col gap-2'>
            {
              tasks.map((task, index) => (
                <li key={index} className='flex justify-between items-center w-[600px] mx-auto'>
                  <p>{task}</p>
                  <button className='bg-red-600 rounded-xl text-white p-2'
                    onClick={() => handleEliminar(index)}>Eliminar</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
