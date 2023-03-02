import {Hero} from "@/components/Hero";
import profile from '../../../public/images/profile.jpg';
import Image from "next/image";
import typescript from '../../../public/images/typescript.png';
import javascript from '../../../public/images/javascript.png';
import nest from '../../../public/images/nest.png';
import react from '../../../public/images/react.png';
import next from '../../../public/images/nextjs.png';
import jetbrains from '../../../public/images/jetbrains.png';
import notion from '../../../public/images/notion.png';
import git from '../../../public/images/git.png';
import adobexd from '../../../public/images/adobexd.png';
import figma from '../../../public/images/figma.png';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Who am I and what I do on daily basis - Justian.dev',
  description: 'I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since start 2023 a freelance full stack developer',
}

export default function Page() {
  return (
    <>
      <Hero title={"Who am I 🤨"} description={"Developer in heart, learning about interaction development"} />
      <section className="content">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          <div className="col-span-3">
            <p>
              I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since mid 2021 I have been studying computer science in Utrecht, the Netherlands. At this moment I work as a freelance full stack developer and in addition, I love to explore and learn new techniques by working on my own projects.
            </p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <Image src={profile} alt={"A photo of myself taken in Luxembourg city"} className="rounded-xl"></Image>
          </div>
        </div>
        <h2 className="mt-8 md:mt-0">My daily life</h2>
        <p className="mt-2">I am currently doing an internship at <a href="https://mrboost.nl" target="_blank">MrBoost</a>, completing year 2 of my degree. At MrBoost I am fully focusing on becoming better in interaction development. I am doing this through learning about techniques such as GSAP and ThreeJS and building great projects with both of them.</p>
        <p className="mt-6">Besides wanting to become a better interaction developer, I am also always trying out (new) techniques and building cool projects with them, either for myself, or for others. I am always open to new challenges and in addition, I am not a quitter and like to work on finding solutions to deep technical problems.</p>
        <p className="mt-6">In my daily life, I otherwise enjoy spending time in nature, by taking walks or biking. I can also be found in the gym almost every day and for me this is the perfect combination with sitting at my desk most of the day as a programmer.</p>
        <h2 className="mt-8"><span className="line-through">Dreaming about you</span> My dreams</h2>
        <p className="mt-2">
          As an interaction developer I would love to win an <a href="https://awwwards.com" target="_blank">awwward</a>. Being a programmer, I would think it would be really cool to work at a company in the future, or work for myself, on a piece of software which preferably solves a social problem. In my private life, I would like to create the opportunity for myself to leave my childhood home and continue working on my software developer career somewhere on my own. In addition, I would like to grow further in the strength sports I am currently involved in almost daily.
        </p>
        <div className="py-8">
          <hr />
          <h2 className="mt-8">My skills</h2>
          <p className="mt-2">I have a good to very good command of all the skills listed below and can build complex systems with them. I also have a large number of reasonable skills such as small javascript libraries and various other programming languages. However, I do not have enough experience with these to list them below.</p>
          <div className="pt-6 pb-8 flex flex-row flex-wrap gap-4">
            <a href="https://www.typescriptlang.org/" target="_blank" className="post p-3 rounded-xl border border-stone-200">
              <Image src={typescript} alt={"Typescript logo"} />
            </a>
              <a href="https://www.javascript.com/" target="_blank"  className="p-3 rounded-xl border border-stone-200">
              <Image src={javascript} alt={"Javascript logo"} />
            </a>
            <a href="https://nestjs.com/" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={nest} alt={"NestJS logo"} />
            </a>
            <a href="https://reactjs.org" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={react} alt={"React logo"} />
            </a>
            <a href="https://nextjs.org" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={next} alt={"NextJS logo"} />
            </a>
            <a href="https://jetbrains.com" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={jetbrains} alt={"Jetbrains logo"} />
            </a>
            <a href="https://notion.com" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={notion} alt={"Notion logo"} />
            </a>
            <a href="https://git-scm.com" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={git} alt={"Git logo"} />
            </a>
            <a href="https://adobe.com" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={adobexd} alt={"Adobe XD logo"} />
            </a>
            <a href="https://figma.com" target="_blank" className="p-3 rounded-xl border border-stone-200">
              <Image src={figma} alt={"Figma logo"} />
            </a>
          </div>
          <hr />
        </div>
        <div>
          <h2>Education and work experiences</h2>
          <p className="mt-2">A few things that I have done to gain experience in my field.</p>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-row gap-2 items-start">
              <div className="rounded-full bg-green-700 h-3 min-w-[12px] mt-2"></div>
              <div>
                <h3>MrBoost - Internship</h3>
                <p className="font-thin text-[0.875rem]">2023 - Current</p>
                <p className="mt-2">At MrBoost I am currently following an internship focused on becoming a better interaction developer. I am trying to learn ThreeJS and GSAP here by just practical experiments.</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-start">
              <div className="rounded-full bg-green-700 h-3 min-w-[12px] mt-2"></div>
              <div>
                <h3>University of Applied Sciences - Computer Science</h3>
                <p className="font-thin text-[0.875rem]">2021 - Current</p>
                <p className="mt-2">At the University of Applied Sciences in Utrecht, I am doing a study called OPEN-ICT. What this basically means is that I have 4 different periods per year where I work with a fixed group on a project per period. For the rest everything is relatively open: for example, I can choose what programming language I want to use and what user stories I want to tackle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
