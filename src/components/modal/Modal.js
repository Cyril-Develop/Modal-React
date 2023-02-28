import './modal.css'
import { useState } from 'react'

export default function Modal() {

    const [toggle, setToggle] = useState(false)

  return (
    <div className='modal'>
        {toggle ? 
        <div className='modal_content'>
            <h1>Modal</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde illum incidunt deleniti, dignissimos veniam iure ratione dolores eligendi eveniet atque error. Quaerat commodi velit consequatur optio earum possimus suscipit quod illo error omnis perspiciatis, repellat laborum odio perferendis autem!</p>
            <button onClick={() => setToggle(false)}>Fermer</button> 
         </div>    
            :
            <button onClick={() => setToggle(true)}>Plus d'infos</button> 
        } 
    </div>
  )
}
