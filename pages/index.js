import Head from 'next/head';
import Image from 'next/image';
import useSWR, { SWRConfig } from 'swr';
import { getCryptoFromAPI } from '../lib/getCryptoFromAPI';

const fetcher = (url) => fetch(url).then((res) => res.json());
function Crypto() {
  console.log('evo nas u crypto');
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR('/api/cryptoCompare', fetcher);

  return (
    <>
      {console.log('data', data)}
      {data.map((single, index) => (
        <div key={index}>
          <span>{single.coin}</span>
          <span>{single.price}</span>
        </div>
      ))}
      <h1></h1>
    </>
  );
}

export default function Home({ fallback }) {
  console.log('evo nas u Home');
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
