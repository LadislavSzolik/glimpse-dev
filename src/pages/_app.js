import Container from '../common/components/elements/container';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
