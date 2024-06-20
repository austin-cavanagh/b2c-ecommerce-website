// Feature not yet functional

import { updatePersonalInformation } from '@/actions/updatePersonalInformation';

type PersonalInformationProps = {
  fullName: string;
  email: string;
};

export default function PersonalInformation({
  fullName,
  email,
}: PersonalInformationProps) {
  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Personal information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <form className="md:col-span-2" action={updatePersonalInformation}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <div className="mt-2">
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name"
                disabled
                defaultValue={fullName || ''}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:bg-white/5 dark:text-white dark:text-white dark:ring-white/10 dark:disabled:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                disabled
                defaultValue={email || ''}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:bg-white/5 dark:text-white dark:text-white dark:ring-white/10 dark:disabled:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div> */}
      </form>
    </div>
  );
}
