import home from '../styles/Home.module.css'
import Form from '@/components/Form'
import Blocks from '@/components/Blocks'
import { useState } from 'react'

export default function Home() {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggled = () => {
    setIsToggled(prevState => !prevState);
  }

  return (
    <>
      <header className={home.header}>
        <div className={home.container_search}>
          <h2 className={home.title}>Find Your Block</h2>
          <p className={home.blocks}>Encontre os <span className={home.blocks_top}>melhores blocos</span> de carnaval de 2023</p>
        </div> 
        <Form />
      </header>

      <main>
        <section>
          <div className={home.container_blocks}>
            <h1 className={home.title_blocks}>Blocos recomendados</h1>

            <button className={home.button_blocks} onClick={handleToggled}>
              {isToggled ? 'Lista': 'Mapa'}
            </button>
          </div>

          <div className={home.container_blocks_locations}>
            <Blocks title="O Python do vovô não sobe mais" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo2.png"} alt={"Bloco O Python do vovô não sobe mais"} location={"São Paulo - SP"} />
            <Blocks title="Todo mundo null" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo1.png"} alt={"Bloco Todo mundo null"} location={"Florianópolis - SC"} />
            <Blocks title="Hoje dou exception" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo3.png"} alt={"Bloco Hoje dou expection"} location={"Curitiba - PR"} />
          </div>

          <div className={home.container_blocks_locations}>
            <Blocks title="Manda Node" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo4.png"} alt={"Bloco Manda Node"} location={"Salvador Bahia - BA"} />
            <Blocks title="Só no back-end null" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo5.png"} alt={"Bloco back-end"} location={"São Paulo - SP"} />
            <Blocks title="Esse anel não é de Ruby" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo6.png"} alt={"Bloco Esse anel não é de Ruby"} location={"São Paulo - SP"} />
          </div>

          <div className={home.container_blocks_locations}>
            <Blocks title="Pimenta no C# dos outros é refresco" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo7.png"} alt={"Bloco Pimenta no C# dos outros é refresco"} location={"Porto Alegre - RS"} />
            <Blocks title="EnCACHE aqui" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo8.png"} alt={"Bloco EnCACHE aqui"} location={"Rio de Janeiro - RJ"}/>
            <Blocks title="Não valho nada mas JAVA li" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." img={"/photo1.png"} alt={"Bloco Não valho nada mas JAVA li"} location={"São Paulo - SP"} />
          </div>
          
        </section>
      </main>

    </>
  )
}
