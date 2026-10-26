"use client";

import { useState } from "react";

export default function HelpPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Help & Support</h1>
      {sent ? (
        <p className="mt-4 text-sm text-[#177A3D]">Request sent. We will reply in the app.</p>
      ) : (
        <>
          <label className="mt-4 block text-xs text-[#6D7A70]">
            Subject
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              maxLength={120}
              className="mt-1 w-full rounded-xl border px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
            />
          </label>
          <label className="mt-3 block text-xs text-[#6D7A70]">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              rows={4}
              className="mt-1 w-full rounded-xl border px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
            />
          </label>
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-[#12532F] py-3 font-semibold text-white"
            onClick={() => {
              if (subject.trim() && message.trim()) setSent(true);
            }}
          >
            Send request
          </button>
        </>
      )}
    </div>
  );
}
