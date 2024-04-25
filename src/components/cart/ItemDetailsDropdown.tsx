'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export type VisibleCustomizations = {
  [key: number]: boolean;
};

export type Customization = {
  label: string;
  value: string;
};

export type ItemDetailsDropdownProps = {
  itemId: number;
  dimensions: string;
  customizations: Customization[];
};

export function ItemDetailsDropdown({
  itemId,
  customizations,
  dimensions,
}: ItemDetailsDropdownProps) {
  const [visibleCustomizations, setVisibleCustomizations] =
    useState<VisibleCustomizations>({});

  const toggleCustomizations = (itemId: number) => {
    setVisibleCustomizations(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <>
      <div className="text-right">
        <button
          onClick={() => toggleCustomizations(itemId)}
          className="mt-2 flex items-center text-xs text-gray-500"
          aria-expanded={visibleCustomizations[itemId]}
        >
          {visibleCustomizations[itemId] ? (
            <ChevronDownIcon className="mr-2 h-4 w-4" />
          ) : (
            <ChevronUpIcon className="mr-2 h-4 w-4" />
          )}
          Details
        </button>
      </div>

      {/* Item Details List */}
      {visibleCustomizations[itemId] ? (
        <ul className="ml-6 mt-1 space-y-1 text-xs text-gray-500">
          <li>{`- Dimensions: ${dimensions}`}</li>
          {customizations.map((customization: Customization, index: number) => (
            <li key={index}>
              {`- ${customization.label}: ${customization.value}`}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
