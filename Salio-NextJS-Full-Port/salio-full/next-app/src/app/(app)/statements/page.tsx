import type { Metadata } from "next";

export const metadata: Metadata = { title: "Statements · Salio" };

/** Placeholder – full PDF unlock stays on-device (NFR-010); wire pdf.js like the HTML prototype */
export default function StatementsPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Statements</h1>
      <p className="mt-2 text-sm text-[#6D7A70]">
        Choose an M-Pesa statement PDF. The password is entered on this device
        only and is never sent to the server.
      </p>
      <div className="mt-6 rounded-2xl border-2 border-dashed border-[#D9A431] bg-[#F8EBC2]/40 p-8 text-center">
        <p className="font-medium text-[#4a3a05]">Choose PDF file</p>
        <p className="mt-1 text-xs text-[#6D7A70]">
          PDF.js unlock flow from the HTML prototype should be wired here next.
        </p>
      </div>
    </div>
  );
}
