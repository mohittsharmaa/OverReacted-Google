import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link
          rel="png"
          type="image/png"
          href="../assets/682665_favicon_google_logo_new_icon.png"
        />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || 0;

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
