import "../styles/globals.css";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import DefaultLayout from "../layouts/defaults";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.layout || DefaultLayout;
  const Title = Component.title || null;

  return (
    <Fragment>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Layout title={Title} key={router.route}>
          <main className="">
            <Component {...pageProps} />
          </main>
          <Toaster />
        </Layout>
      </AnimatePresence>
    </Fragment>
  );
}

export default MyApp;
