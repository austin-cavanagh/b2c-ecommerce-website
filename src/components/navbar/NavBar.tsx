'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/20/solid';

import { signIn, signOut } from 'next-auth/react';
import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

type NavbarProps = {
  session: ExtendSession | null;
};

export default function Navbar({ session }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a href="/" className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Crafts by Jules logo</span>
            <img
              className="h-9 w-auto"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD40lEQVR4nO2Y72tbVRjHz4bOH/SF4I8moi+m4Ju91I3mJs01apc8p92cYMV/wLG0zZotTTfyYndbsTbnhOreKBPBJl27NllqV6VzkyXLOQM7KIiigiIizi5dBWEDV8q0R07N1Zpdm7S9STq4X3je5N77nOdznud77iUIWbJkydKGV++VPQ/HLjfvpgwoZfg85fA95fCbDMJglnCYIgy/F2U+VRPaZrQR1Me92yjDxwnHXxGGFynHoryAKzEGz9S6ftQ9po51pdzi2KdNgpRd/D9xtT/ntRvl1bLqPYTBG5RBhnD4lTK4SRn+gTAYjfHmvW9nX37IFABNoM2BU8r8vg8bROewS2iTLwnKYDUQ7xbnPDHpu48wfKHEc/OU4/djuZ1PrhuiK62elAB6SJCeC01lARAGPxXnIwx6VrEB84RDv/TfmgEiaa/dP/AvgB4Hk42iN+stAYCvGwD8sspRFDIPZb5X1wwRHHHOFgPI8McdIjLhkTttvDCHT5bnEQJtohzfLlkwx6Lns50ictYjgiMu0Z5QRGhUjSOBNq0JoCvt/sAIQI/9Q05x/M6xuk0YOItzUQZf/F/hb2a8IjLuEYFTyn+7nXKfQ+tR6GzTVqMxKo7wGbfou+RbKj7KfXuNclGOXysaD3Fk8kVxYMRlmLNjULmlJVu3oPUqeNo1UwpARlvcId7K+uT4TL3z+a765Tm06ZYHKcNHCMM3ejNecegjVbQnHCvmO5x270dm6FD6+Ug5ADKil/DVpR1mwOSZL5/v581PEY6/kb9HcyDK6Wjnadcdp9i61DnsvFFq0Y5BZUG+wCiH/BJEDodlJwiHHwvGng6PeU6UyuOPNyyGx9XnTAU4PKa2ysQrLdyVcl+U98YY7CnM+RxleKhQfE7LqvcHhpSeUgChVGMSVULdafWYf8B4btsTykIo3fSYfmTqI7P0HcXg9+jl3Y/La/sSjtdXKj447Px5zUdmOQqPv+A5ONr4ZUdCWZAwbXHHn8HRxu+6U85ty++jHI4Sg8+KA8mGB9oSjpuGxQ85Z0Pn/96EmotyAP24jDJoWX4tMKA8HRxxfdsWd/zhH2hYDAwqt0JJ9xnd9BtCNLdrqw4gTyF0t0n7unWLDtA39coT6G4ULQCcnH72XrRRlN1RJyoZyAIoIasDO2o9QtvrLlaqC5ntdRlUDeWhvuUatgszI4/rm1G1dB0/ajMbYM77iOHfMBXTDLZfMw0AbDNVLb4A8LF5HbBNVB8A7EdNBNCqDmCmkfPVNHAljDxXbQObamSogYHNNbJtonYAphjZVn0Dm2nkfC0MbKaR52plYEuWLFlCZugvyIar3mjBGL4AAAAASUVORK5CYII="
              alt=""
            />
          </a>
          {/* <span className="text-primary ml-1 text-[20px] font-semibold">
            Crafts by Jules
          </span> */}

          <div className="ml-8 hidden lg:flex lg:gap-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Button on Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Displays Based on User Signed In */}
        {!session ? (
          <div className="hidden space-x-3 lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => signIn()}
              className="rounded-full bg-primary px-4 py-3 font-semibold leading-6 text-white"
            >
              Log in
            </button>
            <Link
              href={'/create-account'}
              className="rounded-full bg-[#e9e9e9] px-4 py-3 font-semibold leading-6 text-[#111111]"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="hidden items-center space-x-4 lg:flex lg:justify-end">
            <Link href={'/cart'} className="flex">
              <ShoppingCartIcon
                className="h-6 w-6 flex-shrink-0 text-[#767676] group-hover:text-gray-500"
                aria-hidden="true"
              />

              <span className="sr-only">items in cart, view bag</span>
            </Link>

            <Link
              href={'/account/settings'}
              className="-m-2 p-2 text-[#767676] hover:text-gray-500"
            >
              <span className="sr-only">Account</span>
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </Link>

            <button
              onClick={() => signOut({ redirect: false })}
              className="rounded-full bg-primary px-4 py-3 font-semibold leading-6 text-white"
            >
              Sign out
            </button>
          </div>
        )}
      </nav>
      {/* Mobile View */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Displays Based on User Signed In */}
              {!session ? (
                <div className="py-6">
                  <button
                    onClick={() => signIn()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </button>
                  <Link
                    href={'/create-account'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div className="py-6">
                  <button
                    onClick={() => signOut()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
