/* components/ui/LiveChatButton.tsx */
"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function LiveChatSupoort() {
  /* -------- state -------- */
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>(["How may I help you?"]);
  const inputRef = useRef<HTMLInputElement>(null);

  /* focus the input when chat opens */
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  /* handle send */
  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, input.trim()]);
    setInput("");
    /* TODO: hook into real backend / bot here */
  };

  return (
    <>
      {/* floating button */}
      <button
        aria-label="Live chat"
        onClick={() => setOpen((o) => !o)}
        className="
          fixed bottom-5 right-5
          h-14 w-14 rounded-full bg-emerald-500 text-white
          shadow-lg hover:bg-emerald-600
          flex items-center justify-center
          transition-colors
          z-20
        "
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* chat panel */}
      {open && (
        <div
          className="
            fixed bottom-24 right-5
            w-72 max-h-[70vh]
            bg-white shadow-lg rounded-lg
            flex flex-col
            border
            z-20
          "
        >
          {/* header */}
          <div className="px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-t-lg flex justify-between items-center">
            Live&nbsp;Chat
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          {/* messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded px-2 py-1 ${
                  i === 0
                    ? "bg-gray-100 text-gray-700 self-start"
                    : "bg-emerald-100 text-emerald-900 self-end"
                }`}
              >
                {m}
              </div>
            ))}
          </div>

          {/* input bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t px-2 py-1 flex items-center gap-1"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-sm px-2 py-1 rounded border focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              className="p-1 rounded text-emerald-600 hover:bg-gray-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
