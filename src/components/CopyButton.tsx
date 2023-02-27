"use client";

export const CopyButton = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("play.justian.dev");
  }

  return (
    <button onClick={() => copyToClipboard() } role="button" className="post rounded-xl bg-white text-green-700 px-4 py-2">
      Copy IP
    </button>
  )
}
