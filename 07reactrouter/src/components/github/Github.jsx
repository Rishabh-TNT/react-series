import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((d) => {
  //         console.log("data: ", d);
  //         setData(d);
  //       });
  //   }, []);
  //   console.log("data outside fetch: ", data);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Profile pic" width={300} />
    </div>
  );
}

export const GithubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/hiteshchoudhary");
  return data.json();
};
