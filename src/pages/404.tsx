import '../app/globals.css';
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center py-32">
      <h1>Sorry, that page doesn't exist 😪</h1>
      <p className="mt-2">Return <Link href={"/"}>back</Link> to the homepage.</p>
    </section>
  )
}
