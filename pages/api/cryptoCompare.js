// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCryptoFromAPI } from '../../lib/getCryptoFromAPI';

export default async function cryptoCompare(req, res) {
  const result = await getCryptoFromAPI();
  res.status(200).send(result);

}
