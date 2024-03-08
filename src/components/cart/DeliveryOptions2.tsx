'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const plans = [
  {
    name: 'Pickup in Eastvale CA',
    ram: 'Address will be sent after your order',
    cpus: '4 CPUs',
    // disk: '160 GB SSD disk',
    // price: '$40',
  },
  {
    name: 'Delivery',
    ram: 'Fees will be calculate at checkout',
    cpus: '6 CPUs',
    // disk: '256 GB SSD disk',
    // price: '$80',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4">
        {plans.map(plan => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ active }) =>
              classNames(
                active
                  ? 'border-indigo-600 ring-2 ring-indigo-600'
                  : 'border-gray-300',
                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label
                      as="span"
                      className="font-medium text-gray-900"
                    >
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">{plan.ram}</span>
                      {/* <span
                        className="hidden sm:mx-1 sm:inline"
                        aria-hidden="true"
                      >
                        &middot;
                      </span>{' '} */}
                      {/* <span className="block sm:inline">{plan.disk}</span> */}
                    </RadioGroup.Description>
                  </span>
                </span>
                {/* <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                >
                  <span className="font-medium text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
                </RadioGroup.Description> */}
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-600' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
