'use client';

//Bibliotecas
import Image from 'next/image'
import Link from 'next/link'
import Head from '../head/head'
import { usePathname } from 'next/navigation';

//Folhas de estilo
import '@//app/globals.css'
import './style.css'

export default function nav_bar() {

    const currentRoute = usePathname()
    
    return (
        <div>

            <Head/>

            <main>
                <nav>

                    <Image
                        src="/images/logotipo.jpg"
                        width={166}
                        height={50}
                        alt="Logo"
                    />

                    <ul>
                        <li>
                            <Link className={currentRoute == '/' ? 'pageSelected' : ''} href="/">
                                Inicio 
                            </Link>
                        </li>
                        <li>
                            <Link className={currentRoute == '/sobre' ? 'pageSelected' : ''} href="/sobre">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link className={currentRoute == '/contato' ? 'pageSelected' : ''} href="/contato">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>

        </div>
    )
}