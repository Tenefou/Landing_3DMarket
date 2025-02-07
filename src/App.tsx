import { useRef } from 'react';
import './App.css'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './components/ui/carousel'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';

function App() {

  const section1Ref = useRef<HTMLDivElement | null>(null);

  
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        const yOffset = -50;
        const y = sectionRef.current!.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className=" text-white">
      <header className="bg-black p-4 shadow-md">
        <div className='titre'>
          3D Market
        </div>
        <div className='buttons'>
        <Button onClick={() => scrollToSection(section1Ref)} variant={'outline'}>
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
        <div className='image' style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url('/4yxeoawe.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
          <h1 className='oswald'>3D Market</h1>
          <div className='image-texte'>
          <p className='texte-image Kanit'>Build your own world.</p>
          </div>
          <Button className='Kanit' variant={"secondary"}>Shop</Button>
        </div>
        <div className='description' ref={section1Ref}>
          <div>
          <Carousel className='carousel-image'>
            <CarouselContent>
              <CarouselItem>
                <img src="3D1.png" alt="Image 1" className="carousel-image" />
              </CarouselItem>
              <CarouselItem>
                <img src="3D2.png" alt="Image 2" className="carousel-image" />
              </CarouselItem>
              <CarouselItem>
                <img src="3D3.png" alt="Image 3" className="carousel-image" />
              </CarouselItem>
              <CarouselItem>
                <img src="3D4.png" alt="Image 3" className="carousel-image" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
          <div>
            <p className='Kanit' style={{width: '500px', padding: '30px', fontSize: '30px', lineHeight: '50px', textAlign: 'center'}}>Professional 3D models for small and large creators. A vast collection of carefully crafted characters, vehicles, and environments.

</p>
          </div>
        </div>
        <div className='description'>
          <div>
            <p className='Kanit' style={{width: '500px', padding: '30px', fontSize: '30px', lineHeight: '50px', textAlign: 'center'}}>Game-ready animations. Give life to your models with our variety of animations built by professionals.</p>
          </div>
          <div>
            <Carousel className='carousel-image'>
              <CarouselContent>
                <CarouselItem>
                  <img src="voc-voice_of_chernobyl.gif" alt="Image 1" className="carousel-image" />
                </CarouselItem>
                <CarouselItem>
                  <img src="sonic-cry-about-it.gif" alt="Image 2" className="carousel-image" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className='about-us'>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        
      </main>
    </div>
  )
}

export default App
