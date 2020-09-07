import Head from 'next/head'
import {Container} from 'react-bootstrap'

export default function Home() {
    return (
        <Container className="md-container">
            <Head>
                <title>ReactJS with react-bootstrap</title>
                <link rel="icon" href="/favicon-32x32.png"/>
            </Head>
            <Container>
            </Container>

            <footer className="cntr-footer">
                <a
                    href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo"/>
                </a>
            </footer>
        </Container>
    )
}
