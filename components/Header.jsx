import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
          src="data:image/png;base64,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"
          width={120}
          height={40}
        />
        <form
          className="flex-grow flex w-full px-6 py-3 ml-10 mr-5 border border-gray-100 rounded-full shadow-lg max-w-3xl items-center"
          onSubmit={search}
        >
          <input
            type="text"
            ref={searchInputRef}
            className="outline-none focus:outline-none flex-grow w-full"
          />
          {/* Cross svg */}

          <svg
            onClick={() => (searchInputRef.current.value = "")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {/* Cross svg */}

          {/* Microphone svg */}

          <svg
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>

          {/* Microphone svg */}

          {/* Search svg */}
          <svg
            onClick={(e) => {
              console.log("clicked");
              // e.prevent.default();
              const term = searchInputRef.current.value;

              if (!term) return;

              router.push(`/search?term=${term}`);
            }}
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
          <button type="submit" onClick={search}></button>
          {/* Search svg */}
        </form>
        <Avatar
          postiton="ml-auto"
          url="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
