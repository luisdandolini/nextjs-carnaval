import form from '../styles/Form.module.css'
import Image from 'next/image'

export default function Form() {
  return(
    <div className={form.container_form}>
    <form className={form.form}>
      <fieldset className={form.search}>
        <Image className={form.icon} src={'/search.svg'} alt={'Busca por nome'} width={24} height={24}/>
        <input type="text" placeholder='Pesquise por nome'/>
      </fieldset>
      <fieldset className={form.location}>
        <Image className={form.icon_location} src={'/location.svg'} alt={'Busca por cidade'} width={24} height={24}/>
        <select className={form.option} name='selectCity'>
          <option value="Selecione uma cidade">Selecione uma cidade</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="RS">RS</option>
        </select>
      </fieldset>
      <button className={form.button}>Buscar Agora</button>
    </form>
  </div>
  )
}