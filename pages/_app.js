import '../styles/globals.css'
import {configure} from "mobx";

configure({
    enforceActions: "never",
})


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
