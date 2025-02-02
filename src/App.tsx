import './App.css'
import { Button } from './components/ui/button'

function App() {


  return (
    <div className=" text-white">
      <header className="bg-black p-4 shadow-md">
        <div className='titre'>
          3D Market
        </div>
        <div className='buttons'>
        <Button variant={'outline'}>
          About
        </Button>
        <Button variant={'outline'}>
          Contact
        </Button>
        <Button variant={'outline'}>
          Shop
        </Button>
        
        </div>
        
        
      </header>
      <main className="flex justify-center items-center min-h-[80vh]">
        <Button>Click me</Button>
      </main>
    </div>
  )
}

export default App
