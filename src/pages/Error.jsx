import './App.css'; 

export function Error() {
  return (
    <div className="flex flex-col items-center p-8 bg-neutral-900 relative max-w-1200 mx-20 my-5 rounded-2xl">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404 Not Found</h1>
      <a href="https://genevat.github.io/rewards/" className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2">
        Return Home
      </a>
    </div>
  );
}
