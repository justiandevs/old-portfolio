'use client'

import Image from "next/image";
import myself from "../../public/images/mask.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";
import {FaChartLine, FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaTwitter} from "react-icons/fa";
import {MenuButton} from "@/components/MenuButton";
import {easeIn, motion} from "framer-motion";

export const NavBar = () => {
  const [artist, setArtist] = useState();
  const [isOpen, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const fetchRecentTrack = async () => {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=justiandev&api_key=${process.env.NEXT_PUBLIC_API_KEY_MUSIC}&format=json`);

      const json = await response.json();

      setArtist(json.recenttracks.track[0].artist["#text"]);
    }

    fetchRecentTrack()
      .catch(console.error);
  }, [])

  const variants = {
    open: { translateX: "0%", transition: { duration: 0.3, ease: "easeIn", staggerChildren: 0.05, delayChildren: 0.5 } },
    closed: { translateX: "100%", transition: { duration: 0.3, ease: "easeOut" } }
  }

  const push = {
    open: { translateY: "0%", scale: 1, translateX: "0%", rotate: 0, transition: { duration: 0.3 } },
    closed: { translateY: "100%", scale: 0, translateX: "-25%", rotate: 45, transition: { duration: 0.3 } },
  }

  return (
    <nav className="lg:col-span-2 col-span-1 flex flex-row lg:flex-col gap-8 py-8 lg:py-0 justify-between lg:justify-start items-center lg:items-start">
      <Image src={myself} alt="profile picture of myself" priority={true} className="rounded-full h-20 w-20 lg:w-24 lg:h-24 border-2 border-green-900" />
      <div className="block md:hidden rounded-full border border-stone-200 p-4 z-50">
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth={2}
        />
      </div>
        <motion.div
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="fixed w-full left-0 top-0 bottom-0 h-full flex flex-col bg-stone-50 z-10 items-center justify-center gap-4 text-2xl hover:text-green-700 overflow-hidden">
          <div className="overflow-y-hidden h-auto">
            <motion.div
              variants={push}
            >
              <Link href={"/"} className={`nav__item ${pathname === "/" ? "nav__item-active" : ""}`}>
                Home
              </Link>
            </motion.div>
          </div>
          <div className="overflow-y-hidden h-auto">
            <motion.div
              variants={push}
            >
              <Link href={"/about"} className={`nav__item ${pathname === "/about" ? "nav__item-active" : ""}`}>
                About
              </Link>
            </motion.div>
          </div>
          <div className="overflow-y-hidden h-auto">
            <motion.div
              variants={push}
            >
              <Link href={"/work"} className={`nav__item ${pathname === "/about" ? "nav__item-active" : ""}`}>
                My work
              </Link>
            </motion.div>
          </div>
          <div className="overflow-y-hidden h-auto">
            <motion.div
              variants={push}
            >
              <Link href={"/blog"} className={`nav__item ${pathname === "/about" ? "nav__item-active" : ""}`}>
                Blog
              </Link>
            </motion.div>
          </div>
          <div className="overflow-y-hidden h-auto">
            <motion.div
              variants={push}
            >
              <Link href={"/contact"} className={`nav__item ${pathname === "/about" ? "nav__item-active" : ""}`}>
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      <div className="hidden md:flex flex-row lg:flex-col items-start gap-4 lg:gap-1">
        <Link href={"/"} className={`nav__item ${pathname === "/" ? "nav__item-active" : ""}`}>
          Home
        </Link>
        <Link href={"/about"} className={`nav__item ${pathname === "/about" ? "nav__item-active" : ""}`}>
          About
        </Link>
        <Link href={"/work"} className={`nav__item ${pathname === "/work" ? "nav__item-active" : ""}`}>
          My work
        </Link>
        <Link href={"/blog"} className={`nav__item ${pathname === "/blog" ? "nav__item-active" : ""}`}>
          Blog
        </Link>
        <Link href={"/contact"} className={`nav__item ${pathname === "/contact" ? "nav__item-active" : ""}`}>
          Contact
        </Link>
      </div>
      <div className="hidden lg:flex flex-col gap-2">
        <hr />
        <div className="flex flex-row gap-2 mt-2">
          <FaSpotify className="icon" />
          <p className="little">Listening to <span>{artist ? artist : 'loading...'}</span></p>
        </div>
        <div className="flex flex-row gap-2 mb-2">
          <FaChartLine className="icon" />
          <p className="little">Working on <a className="working-on underline" href="https://justian.dev">Justian.dev</a></p>
        </div>
        <hr />
      </div>
      <div className="hidden lg:flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/justian-spijkerbosch-a4b74118b/" className="flex flex-row gap-2 social-media transition duration-300 hover:text-green-700">
          <FaLinkedin className="icon" />
          <p className="little">LinkedIn</p>
        </a>
        <a href="https://twitter.com/Justiandev" className="flex flex-row gap-2 social-media transition duration-300 hover:text-green-700">
          <FaTwitter className="icon" />
          <p className="little">Twitter</p>
        </a>
        <a href="https://github.com/justiandevs" className="flex flex-row gap-2 social-media transition duration-300 hover:text-green-700">
          <FaGithub className="icon" />
          <p className="little">Github</p>
        </a>
        <a href="https://instagram.com/justianspijkerbosch" className="flex flex-row gap-2 social-media transition duration-300 hover:text-green-700">
          <FaInstagram className="icon" />
          <p className="little">Instagram</p>
        </a>
        <a href="https://www.polywork.com/justiandev" className="flex flex-row gap-2 social-media transition duration-300 hover:text-green-700">
          <svg width={20} height={20} className="ml-[0.15rem]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z" fill="#15803d"/></svg>
          <p className="little">Polywork</p>
        </a>
      </div>
    </nav>
  )
}
