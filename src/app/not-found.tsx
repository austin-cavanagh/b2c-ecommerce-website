function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="text-center text-base text-gray-600">
        Sorry, we could not find the page you are looking for
      </p>
      <a
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back home
      </a>
    </div>
  );
}

export default NotFound;
