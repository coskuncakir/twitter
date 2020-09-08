import useSWR from "swr";
import Layout from "../components/layout";
import Tweet from "../components/tweet";
import fetcher from "../lib/fetcher";
import Loading from "../components/loading";

function HomePage() {
  const { data, error } = useSWR("/api/tweets", fetcher);

  if (error) return <Layout>Failed to load</Layout>;
  if (!data)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      {data?.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Layout>
  );
}

export default HomePage;
