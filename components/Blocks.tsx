import blocks from '../styles/Blocks.module.css'
import Image from 'next/image'


export default function Blocks(props: any) {  
  return (
    <div>
      <div className={blocks.container_blocks_location}>
        <Image
          className={blocks.img}
          src={props.img}
          alt={props.alt}
          width={384}
          height={153}
        />
        <h2 className={blocks.container_title}>
          {props.title}
        </h2>
        <p className={blocks.container_description}>
          {props.description}
        </p>
        <div className={blocks.container_location}>
          <Image
            className={blocks.img}
            src={"/location.svg"}
            alt={"Busca por nome"}
            width={24}
            height={24}
          />
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  );
}
