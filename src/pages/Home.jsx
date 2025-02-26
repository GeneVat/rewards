import './App.css';

export function Main() {
  return (
    
    <div className="flex flex-col items-center p-8 bg-neutral-900 relative max-w-full mx-5 my-5 rounded-2xl">
      <h1 className="text-3xl font-semibold mb-4 text-center">Pick Version</h1>
      <div className="space-x-4 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <a
          href="#/eu"
          className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2 sm:bg-red-500"
        >
          European Countries
        </a>
        <a
          href="#/na"
          className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2"
        >
          US + Canadian States
        </a>
      </div>
    </div>
  );
}
