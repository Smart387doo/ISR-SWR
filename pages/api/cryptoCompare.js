// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCryptoFromAPI } from '../../lib/getCryptoFromAPI';

export default async function cryptoCompare(req, res) {
  console.log('are we here at all?');
  const result = await getCryptoFromAPI();
  console.log('iz pravog apija', result);
  res.status(200).send(result);

}
