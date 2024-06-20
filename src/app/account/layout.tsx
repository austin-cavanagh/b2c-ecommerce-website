import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <div className="">
          <main>
            <h1 className="sr-only">Account Settings</h1>

            {/* Navigation Bar */}
            <header className="border-b border-white/5">
              <nav className="flex overflow-x-auto py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
                >
                  <li>
                    <Link href="/account/settings" className="text-indigo-400">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/orders">Orders</Link>
                  </li>
                  <li>
                    <Link href="/account/integrations">Integrations</Link>
                  </li>
                </ul>
              </nav>
            </header>

            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
