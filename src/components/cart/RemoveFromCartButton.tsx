'use client';

import { removeFromCart } from '@/actions/removeFromCart';

export default function RemoveFromCartButton({ itemId }: { itemId: number }) {
  return (
    <button
      type="button"
      className="text-sm font-medium text-primary hover:brightness-90"
      onClick={async () => {
        await removeFromCart(itemId);
      }}
    >
      <span>Remove</span>
    </button>
  );
}
