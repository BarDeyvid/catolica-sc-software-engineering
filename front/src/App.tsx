import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-gray-200 flex flex-col gap-6 p-6 h-full'>
        <h1 className='text-2xl font-bold'>Zorin OS</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste ab consectetur eligendi impedit consequatur. Veritatis ab accusamus laborum maxime sit molestiae incidunt eum vitae veniam tempora. Asperiores, praesentium vitae!</p>
        <img src="./desktop.png" alt="" className='p-8 w-screen border-2 border-white bg-white rounded-md hover:border-black transition duration-200 ease-in-out'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quasi repudiandae veritatis quo aspernatur? Neque adipisci natus debitis sequi provident quod animi saepe reiciendis, distinctio aspernatur aperiam ullam ea! Voluptatibus.</p>
        <img src="./screens.png" alt="" className='p-8 w-screen border-2 border-white bg-white rounded-md hover:border-black transition duration-200 ease-in-out'/>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='p-2 bg-white w-fit text-black rounded-md hover:scale-110 hover:text-blue-300 transition ease-in-out'>💿 Instalação</label>
          <label htmlFor="" className='p-2 bg-white w-fit rounded-md hover:scale-110 hover:text-blue-300 transition ease-in-out'>📖 Documentação</label>
        </div>
      </div>
    </>
  )
}

export default App
