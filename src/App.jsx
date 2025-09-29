import { useState } from 'react'
import './App.css'
import cp500 from './assets/cp-500.png'
import cp2500 from './assets/cp-2500.webp'
import cp5000 from './assets/cp-5000.png'
import logo from './assets/logo.png'
import earncp from './assets/earn cp.gif'

import whatsapp from './assets/whatsapp.svg'
import instagram from './assets/instagram.svg'
import discord from './assets/discord.svg'
import youtube from './assets/youtube.svg'

import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={cp500} alt="" className="img-card" />
              <h2 className="titulo-card">500 CoD Points</h2>
              <p className="desc">A quantidade equivalente ao Starter Pack.</p>
              <p className="preco">R$ 40,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={cp2500} alt="" className="img-card" />
              <h2 className="titulo-card">2500 CoD Points</h2>
              <p className="desc">Uma bolsa suficiente para comprar um Battlepass.</p>
              <p className="preco">R$ 150,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 25%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={cp5000} alt="" className="img-card" />
              <h2 className="titulo-card">5000 Cod Points</h2>
              <p className="desc">Consegue comprar tudo da loja!</p>
              <p className="preco">R$ 340,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <img src={earncp}></img>

        </section>
        
        <footer>

          <img src={logo} alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src={whatsapp} alt="" id="whatsapp" />
            </div>
            <div className="icon">
              <img src={discord} alt="" id="discord" />
            </div>
            <div className="icon">
              <img src={instagram} alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src={youtube} alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
