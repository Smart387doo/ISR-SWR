import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Crypto = () => {
  // `data` will always be available as it's in `fallback`.
  const { data, error } = useSWR("/api/cryptoCompare", fetcher);

  return (
    <>
      {data.map((single, index) => (
        <div key={index} className="flex px-8 border-b divide-x-2">
          <div className="w-1 mr-4">{index == 0 ? " " : index}</div>
          <div className="w-32 px-4 mx-4 truncate sm:w-44">{single.coin}</div>
          <div className="px-4">{single.price}</div>
        </div>
      ))}
      <h1></h1>
    </>
  );
};

export default Crypto;
