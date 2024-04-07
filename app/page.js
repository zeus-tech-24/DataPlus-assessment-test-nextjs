import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-yellow-500 flex flex-col items-center justify-center min-h-screen antialiased px-4">
      <div className="border-b-2 border-t-2 shadow-2xl rounded-lg mb-6">
        <h1 className="text-slate-100 sm:text-3xl lg:text-4xl headfont font-bold py-4 mb-4 h-12 px-4 text-center">
          JOE'S AIRTIME & DATA BUNDLE MINI-SHOP
        </h1>
      </div>
      <h3 className="text-3xl font-medium text-white text-center mt-5 mb-4">
        What would you like to buy?
      </h3>
      <div className="flex flex-col gap-4">
        <Link
          href="/bundle"
          className="bg-red-500 hover:bg-red-700 text-white text-center font-bold py-12 px-16 lg:px-52 rounded-2xl shadow-2xl"
        >
          Buy Data Bundles
        </Link>

        <Link
          href="/airtime"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-center py-12 px-16 lg:px-52 rounded-2xl shadow-2xl"
        >
          Buy Airtime
        </Link>
      </div>
    </div>
  );
};

export default Home;
