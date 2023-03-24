import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout "
import Modal from "../components/Modal"
import LoginModal from "../components/modals/LoginModal"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <><LoginModal/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
