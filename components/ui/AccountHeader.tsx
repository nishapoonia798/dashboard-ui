'use client';
import { ChevronDown } from 'lucide-react';

export default function AccountHeader() {
  return (
    /* fixed because the sidebar itself is fixed */
    <div className="w-64 fixed bg-white border-r z-20">
      <div className="px-4 pt-5 pb-3 border-b">
        {/* username */}
        <h2 className="text-lg font-semibold text-black">John Doe</h2>

        {/* account switcher */}
        <button
          className="
            mt-2 flex items-center justify-between w-full
            rounded-md border px-3 py-2 text-sm
            hover:bg-gray-100
          "
        >
          <span className="flex items-center gap-2">
            {/* theme-color badge; change bg-blue-500 as needed */}
            <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600" />

            amazon.com
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
