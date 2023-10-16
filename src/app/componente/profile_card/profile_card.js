'use client';

//Bibliotecas
import Image from 'next/image'

//Folhas de estilo
import '@//app/globals.css'
import './style.css'

export default function profile_card(props) {

    return (
        <div className='profileCard'>
            <Image
                src={props.picture}
                width={200}
                height={200}
                alt="Profile"
                
            />
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}