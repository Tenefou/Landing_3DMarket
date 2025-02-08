import { useRef } from 'react';
import './App.css'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './components/ui/carousel'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';
import { Input } from './components/ui/input';
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  const about = useRef<HTMLDivElement | null>(null);

  const contact = useRef<HTMLDivElement | null>(null);
  
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
        <Button onClick={() => scrollToSection(about)} variant={'outline'}>
          About
        </Button>
        <Button onClick={() => scrollToSection(contact)}  variant={'outline'}>
          Contact
        </Button>
        <Button variant={'outline'}>
          Shop
        </Button>
        
        </div>
        
        
      </header>
      <main >
        <div className='image' style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url('/4yxeoawe.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
          <motion.h1 initial={{scale:0}}  whileInView={{scale:1}} className='oswald'>3D Market</motion.h1>
          <div className='image-texte'>
          <motion.p initial={{scale:0}}  whileInView={{scale:1}} className='texte-image Kanit'>Build your own world.</motion.p>
          </div>
          <Button className='Kanit' variant={"secondary"}>Shop</Button>
        </div>
        <div className='description' ref={about}>
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
        <motion.div className='about-us' initial={{scale:0}}  whileInView={{scale:1}} ref={contact}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop:'100px', paddingBottom:'20px'}}>
              <h1 className='Kanit'  style={{fontSize:'40px'}}>Wanna collaborate?</h1>
            </div>
            <Card className="w-[90vh]" style={{padding: '10px'}}>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
               </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5" style={{paddingBottom:'10px'}}>
                      <Input id="name" placeholder="Email" style={{borderRadius: '7px'}} />
                    </div>
                      <div className="flex flex-col space-y-1.5">
                        <textarea
                          id="multiline"
                          placeholder="Type here..."
                          rows={10}
                          className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          style={{ width: '100%', resize: 'vertical', borderRadius:'7px' }} // Permet le redimensionnement vertical uniquement
                        />
                      </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex" style={{justifyContent: 'end'}}>

                <Button style={{borderRadius: '7px'}}>Send</Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
        <div className='footer'>
          <div className='footer-items'>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className='footer-items'>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className='footer-items'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </div> 
        </div>

        
      </main>
    </div>
  )
}

export default App
