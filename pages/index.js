import Head from "next/head";
import WeatherInput from "../components/WeatherInput";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherInput />
    </div>
  );
};

export default Home;
