/* components/ui/LiveChatButton.tsx */
"use client";

import { MessageCircle } from "lucide-react";

export default function LiveChatSupoort() {
  return (
    <button
      aria-label="Live chat"
      className="
        fixed bottom-5 right-5   /* position */
        h-14 w-14 rounded-full   /* circle */
        bg-emerald-500          /* solid green fill */
        text-white              /* white icon */
        shadow-lg hover:bg-emerald-600
        flex items-center justify-center
        transition-colors
      "
    >
    <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white">
        <MessageCircle className="h-5 w-5 text-emerald-500" />
    </span>
    </button>
  );
}
