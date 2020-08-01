import Head from 'next/head';
import React from 'react';
import {NewCommandeFormBootstrap} from "../components/form/new-commande-form-bootstrap";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>

            <main>
                <h1 className="title">
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <NewCommandeFormBootstrap />

                <footer>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
                    </a>

                </footer>
            </main>
        </div>
    )
}
