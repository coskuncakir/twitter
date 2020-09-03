import Layout from "../components/layout";
import Tweet from "../components/tweet";

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Coskun Cakir"
        slug="coscakir"
        datetime={new Date("2020-08-31")}
        text={`LO LO LO LO LONEEEELY`}
      />
      <Tweet
        name="Coskun Cakir"
        slug="coscakir"
        datetime={new Date("2020-08-31")}
        text={`Well, my brother has his sword and I have my mind. And a mind needs books like a sword needs a whetstone.`}
      />
    </Layout>
  );
}

export default HomePage;
