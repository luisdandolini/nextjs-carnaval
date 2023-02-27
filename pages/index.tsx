import home from '../styles/Home.module.css'
import Form from '@/components/Form'

export default function Home() {
  return (
    <>
      <header className={home.header}>
        <div className={home.container_search}>
          <h2 className={home.title}>Find Your Block</h2>
          <p className={home.blocks}>Encontre os <span className={home.blocks_top}>melhores blocos</span> de carnaval de 2023</p>
        </div> 

        <Form />
      </header>

    </>
  )
}
