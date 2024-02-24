import React, { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Password
      </label>
      <div className="relative mt-2">
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, -1, 0, 0)"
              stroke="#9CA3AF"
              className="h-5 w-5"
            >
              {/* Eye Closed */}
              <g
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 2L22 22"></path>
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884"></path>
                <path d="M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"></path>
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"></path>
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              {/* Eye Open */}
              <g
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"></path>
                <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;

{
  /* <div>
<label
  htmlFor="password"
  className="block text-sm font-medium leading-6 text-gray-900"
>
  Password
</label>
<div className="mt-2">
  <input
    id="password"
    name="password"
    type="password"
    autoComplete="current-password"
    required
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  />
</div>
</div> */
}

{
  /* <svg
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
transform="matrix(1, 0, 0, -1, 0, 0)"
stroke="#000000"
>
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  {' '}
  <path
    d="M2 2L22 22"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>{' '}
  <path
    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>{' '}
  <path
    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>{' '}
</g>
</svg> */
}

{
  /* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  stroke-linecap="round"
  stroke-linejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  {' '}
  <path
    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>{' '}
  <path
    d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>{' '}
  <circle
    cx="12"
    cy="12"
    r="3"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></circle>{' '}
</g>
</svg> */
}
