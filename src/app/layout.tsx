import './globals.css'
import Head from "next/head";
import {NavBar} from "@/components/NavBar";
import {Metadata} from "next";
import {Analytics} from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'Justian.dev',
  description: 'I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since start 2023 a freelance full stack developer',
  generator: 'Justian.dev',
  applicationName: 'Justian.dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Freelance', 'developer', 'Apeldoorn', 'full stack', 'Justian', 'Spijkerbosch', 'Nederland', 'Netherlands', 'NextJS', 'React', 'NestJS', 'TypeScript', 'Javascript', 'Performance', 'UX', 'Interaction Design', 'Interaction Development'],
  authors: [{ name: 'Justian Spijkerbosch '}],
  colorScheme: "light",
  themeColor: "white",
  creator: "Justian Spijkerbosch",
  publisher: "Justian Spijkerbosch",
  openGraph: {
    title: "Justian.dev",
    description: "I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since start 2023 a freelance full stack developer",
    url: "https://justian.dev",
    siteName: "Justian.dev",
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: 'summary',
    title: 'Justian.dev',
    description: 'I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands',
    creator: '@justiandev'
  }
}

const getMostRecentArtist = async () => {
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=justiandev&api_key=${process.env.API_KEY_MUSIC}&format=json&limit=1`);
  const json = await response.json();
  return json.recenttracks.track[0].artist["#text"];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const artist = await getMostRecentArtist();

  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gwp1pxd.css" />
      </Head>
      <body className="body max-w-4xl mx-auto xl:px-0 px-4 grid lg:grid-cols-12 grid-cols-1 lg:pt-32 lg:gap-8">
        <NavBar artist={artist} />
        <div className="col-span-1 lg:col-span-10">
          <main>
            {children}
          </main>
          <footer className="opacity-70 py-16">
            Copyright © 2022 - {new Date().getFullYear()} | CoC: 89274482 | VAT-ID: NL004712093B24
          </footer>
        </div>
      <Analytics />
      </body>
    </html>
  )
}
