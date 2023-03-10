import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import Avatar from "../components/Avatar";
import Cross from "../components/Cross";
import { useRouter } from "next/router";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  // console.log(text);

  // const searchInputRef = useRef();
  const search = (e) => {
    e.preventDefault();
    const SearchTerm = text;
    if (!SearchTerm) return;

    router.push(`/search?term=${SearchTerm}`);

    // console.log("search clicked");
    // console.log(SearchTerm);
  };
  // const SearchTerm = searchInputRef.current.value;         using useRef
  // console.log(SearchTerm);

  const onCross = () => {
    setText("");
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <header className="flex w-full justify-between p-5 text-sm text-gray-700 items-center">
        <div
          className="flex
         space-x-4 lg:text-md"
        >
          <p
            className="link"
            onClick={() => {
              router.push("https://about.google/");
            }}
          >
            About
          </p>
          <p
            className="link"
            onClick={() => {
              router.push("https://store.google.com/?pli=1&hl=en-GB");
            }}
          >
            Store
          </p>
        </div>

        <div className="flex space-x-4 items-center lg:text-md">
          <p
            className="link"
            onClick={() => {
              router.push(
                "https://accounts.google.com/v3/signin/identifier?dsh=S487211508%3A1671537079211458&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeAAQh7F3xhQTKJ5rTv15JDjhNwSll-1Usrs1D9Mn8-q-oTVRmUh1CTz6gM8ruj71dYyR4Ia4QAE&osid=1&passive=1209600&service=mail"
              );
            }}
          >
            Gmail
          </p>
          <p
            className="link"
            onClick={() => {
              router.push("https://images.google.com");
            }}
          >
            Images
          </p>
          <div className="flex cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>

          <Avatar url="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=800" />
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-2 w-4/5">
        <Image
          className="cursor-pointer mb-7"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={200}
          height={30}
          alt="Google"
        />

        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-100 px-4 py-3 sm:max-w-lg lg:max-w-2xl">
          <svg
            className="text-gray-700 h-6 w-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            onChange={handleChange}
            onClick={() => setText("")}
            value={text}
            className="outline-none flex-grow"
          />
          {/* ref={searchInputRef}          useRef could also be used */}
          {text.length > 0 && <Cross />}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>

        <div className="flex flex-col w-1/2 mt-8 space-y-2 justify-center sm:flex-row sm:space-y-0 sm: space-x-4">
          <button onClick={search} type="submit" className="btn">
            Google Search
          </button>
          <button
            onClick={() => {
              router.push("https://google.com/doodles");
            }}
            className="btn"
          >
            I am feeling Lucky!
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="mt-8 mb-4">
        <p>Made with ????????</p>
      </footer>
    </div>
  );
}
