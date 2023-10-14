'use client';

//Bibliotecas
import Image from 'next/image'

//Folhas de estilo
import '@//app/globals.css'
import './style.css'

export default function nav_bar() {
    
    return (
        <div>
            <container>
                <Image
                    src="/images/start-banner-2.jpg"
                    width={0}
                    height={0}
                    sizes='100vw'
                    alt="Banner"
                    />
                <div className='div-background'>
                    <h2>Seu pet merece o melhor cuidado!</h2>
                    <p>Na nossa clínica veterinária, nós cuidamos da saúde e bem-estar do seu animal de estimação. Temos uma equipe de profissionais qualificados e experientes, que tratam cada pet com carinho e respeito. Oferecemos consultas, vacinas, exames, cirurgias, internações, e muito mais. Venha nos visitar e conheça nossas instalações. Estamos esperando por você e pelo seu pet!</p>
                </div>
            </container>
        </div>
    )
}