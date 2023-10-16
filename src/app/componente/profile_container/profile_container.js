'use client';

//Folhas de estilo
import '@//app/globals.css'
import './style.css'

//components
import ProfileCard from '../profile_card/profile_card'

export default function profile_container(props) {

    const array = [
        {
            'picture'     : '/images/pic-profile.jpg',
            'name'        : 'Dr. Veterinario Matheus',
            'description' : 'Apaixonado por Gatos'
        },
        {
            'picture'     : '/images/pic-profile2.jpg',
            'name'        : 'Dr. Veterinario Rogerio',
            'description' : 'Apaixonado por Cães'
        },
        {
            'picture'     : '/images/pic-profile3.jpg',
            'name'        : 'Dra. Veterinaria Maria',
            'description' : 'Apaixonada por Coelhos'
        },
    ]

    return (
        
        <div className='profileContainer'>
            {array.map(profile => {
                return <ProfileCard picture={profile.picture} name={profile.name} description={profile.description} />
            })}
        </div>
    )
}