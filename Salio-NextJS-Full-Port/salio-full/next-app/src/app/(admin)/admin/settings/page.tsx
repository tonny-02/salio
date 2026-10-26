export default function AdminSettingsPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">App settings</h1>
      <label className="mt-4 block text-xs text-[#6D7A70]">
        Application name
        <input
          defaultValue="Salio"
          className="mt-1 w-full rounded-xl border px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        />
      </label>
      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-[#12532F] py-3 font-semibold text-white"
      >
        Save settings
      </button>
    </div>
  );
}
