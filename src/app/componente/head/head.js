'use client';

//Bibliotecas
import Head from 'next/head'

export default function nav_bar() {
    
        // const [uri, setUri] = useState(window.location.href)
        const uri = window.location.href != '' ? '-'+window.location.href : ''

    return (
        <div>

            <Head>
                <title>Preserve{uri}</title>
            </Head>

        </div>
    )
}