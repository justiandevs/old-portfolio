import {Hero} from "@/components/Hero";
import {CopyButton} from "@/components/CopyButton";
import {Metadata} from "next";
import Image from "next/image";
import minecraft from '../../../public/images/2023-02-27_19.09.19.png';

export const metadata: Metadata = {
  title: "Justian.dev's minecraft server - Justian.dev",
  description: "My minecraft server is a server focused on anyone who wants to play fun survival minecraft, the server is on \"hard\" mode and is currently running on version 1.19.3."
}

export default function Minecraft() {
  return (
    <>
      <Hero title="Vanilla minecraft server" description="Whitelisted minecraft 1.19 server for everyone who wants to join" />
      <section className="content">
        <Image className="rounded-xl mb-8" src={minecraft} alt="View on the spawn biome of my minecraft server" />
        <h2>Justian.dev's minecraft server</h2>
        <p className="mt-2">My minecraft server is a server focused on anyone who wants to play fun survival minecraft, the server is on "hard" mode and is currently running on version 1.19.3.</p>
        <p className="mt-6">So do you feel like playing vanilla minecraft occasionally for an evening with a friendly community around you? Then I would recommend contacting me through my <a href="https://discord.gg/53xGDZ5V" target="_blank">discord server</a> to get access to the whitelist.</p>
        <hr className="my-8" />
        <h2>Ip address</h2>
        <div className="px-8 py-4 border border-stone-200 mt-8 bg-green-700 rounded-xl flex flex-row justify-between items-center">
          <h3 className="text-white">play.justian.dev</h3>
          <CopyButton />
        </div>
      </section>
    </>
  )
}
