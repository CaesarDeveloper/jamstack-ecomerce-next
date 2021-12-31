import '../styles/globals.css'
import Layout from '../layouts/layout'
import fetchCategories from '../utils/categoryProvider'

function Ecommerce({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
      <div id="mwsms-app"></div>
      <button class="button--cta-md--mwsms" id="btnCTAMWButton--mwsms" data-modal="modal-one"></button>
      <script dangerouslySetInnerHTML={{ __html: `(function (w,d,s,o,f,js,fjs) {
        w['MWSMS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
        js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
      }(window, document, 'script', 'mw', 'https://smsmasivos.s3.us-west-1.amazonaws.com/tools/widgetform/widget.js'));
      mw('init', { apikey: "mwsms-sr7qwmvbp5" });`}}></script>
    </Layout>
  )
}

Ecommerce.getInitialProps = async () => {
  const categories = await fetchCategories()
  return {
    categories
  }
}

export default Ecommerce