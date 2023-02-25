import './globals.css'
import Head from "next/head";
import {NavBar} from "@/components/NavBar";

export const metadata = {
  title: 'Justian.dev',
  description: 'I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since start 2023 a freelance full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gwp1pxd.css" />
      </Head>
      <body className="max-w-4xl mx-auto xl:px-0 px-4 grid lg:grid-cols-12 grid-cols-1 lg:pt-32 lg:gap-8">
        <NavBar />
        <div className="col-span-1 lg:col-span-10">
          <main>
            {children}
          </main>
          <footer>
            Blob
          </footer>
        </div>
      </body>
    </html>
  )
}
