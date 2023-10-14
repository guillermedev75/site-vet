'use client';

//Bibliotecas
import Image from 'next/image'
import Link from 'next/link'
// import React, { useState } from 'react'
import Head from '../head/head'

//Folhas de estilo
import '@//app/globals.css'
import './style.css'

export default function nav_bar() {

    
    
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
                            <Link href="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/sobre">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="/contato">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>

        </div>
    )
}