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
      <main >
        <div className='image' style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url('/4yxeoawe.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1 className='oswald'>3D Market</h1>
          <div className='image-texte'>
          <p className='texte-image Kanit'>Build your own world.</p>
          </div>
          <Button className='Kanit' variant={"secondary"}>Shop</Button>
        </div>
        <div className='description'>
          <div>
            <img src="3D2.png" alt="Image 2" className='image-desc' />
          </div>
          <div>
            <p style={{width: '500px', padding: '30px', fontSize: '25px', lineHeight: '40px'}}>Des modèles 3D profesionnels pour petit et grand créateur. Une vaste collection de personnages, véhicules, et environnements soigneusement conçus.</p>
          </div>
        </div>
        <div className="image-wall">
          <div className='row1'>
            <img src="3D1.png" alt="Image 1" className="wall-image" />
            <img src="3D2.png" alt="Image 2" className="wall-image" />
          </div>
          <div className='row1'>
            <img src="3D3.png" alt="Image 3" className="wall-image" />
            <img src="3D4.png" alt="Image 4" className="wall-image" />
          </div>
          
          
        </div>

        
      </main>
    </div>
  )
}

export default App
