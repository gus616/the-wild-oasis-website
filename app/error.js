"use client";

export default function Error() {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">
        Something went wrong. Please try again later.
      </h1>
      <p className="text-lg">Error!</p>

      <button className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg">
        Try again
      </button>
    </main>
  );
}
