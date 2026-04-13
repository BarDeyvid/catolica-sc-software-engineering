import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-gray-200 p-2 rounded-md'>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste ab consectetur eligendi impedit consequatur. Veritatis ab accusamus laborum maxime sit molestiae incidunt eum vitae veniam tempora. Asperiores, praesentium vitae!</p>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='p-2 bg-white w-fit text-black rounded-md hover:scale-110 hover:text-blue-300 transition ease-in-out'>💿 Instalação</label>
          <label htmlFor="" className='p-2 bg-white w-fit rounded-md'>📖 Documentação</label>
        </div>
      </div>
    </>
  )
}

export default App
