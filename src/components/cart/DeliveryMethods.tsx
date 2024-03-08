'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const deliveryMethods = [
  {
    label: 'Pickup in Eastvale CA',
    description: 'Address will be sent after your order',
  },
  {
    label: 'Delivery',
    description: 'Fees will be calculate at checkout',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function DeliveryMethods() {
  const [selected, setSelected] = useState(deliveryMethods[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4">
        {deliveryMethods.map(method => (
          <RadioGroup.Option
            key={method.label}
            value={method}
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
                      className="mb-1 font-medium text-gray-900"
                    >
                      {method.label}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">
                        {method.description}
                      </span>
                    </RadioGroup.Description>
                  </span>
                </span>
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
