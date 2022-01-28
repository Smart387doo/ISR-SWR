import { SWRConfig } from 'swr';
import { getCryptoFromAPI } from '../lib/getCryptoFromAPI';
import Crypto from '../components/Crypto';



export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Crypto />
    </SWRConfig>
  );
}


export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const crypto = await getCryptoFromAPI();
  return {
    props: {
      fallback: {
        '/api/cryptoCompare': crypto
      }
    }, revalidate: 10,
  };
}
