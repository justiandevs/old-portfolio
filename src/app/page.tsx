import {Hero} from "@/components/Hero";
import {FaArrowRight, FaGit, FaGithub, FaKeyboard, FaPen, FaRocket} from "react-icons/fa";
import Link from "next/link";
import {Metadata} from "next";
import fs from "fs";
import matter from "gray-matter";

export const dynamic = "error";

export const metadata: Metadata = {
  title: 'Full stack freelance developer from the Netherlands - Justian.dev',
  description: 'I am Justian Spijkerbosch. A full stack developer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since start 2023 a freelance full stack developer',
}

async function getLastThreeProjects() {
  const projects = fs.readdirSync('./projects');

  return projects.map((slug: string) => {
    const source = fs.readFileSync('./projects/' + slug, 'utf-8');

    const { data } = matter(source);
    const time = fs.statSync('./projects/' + slug).mtime.getTime();
    const date = fs.statSync('./projects/' + slug).mtime.toLocaleDateString('nl-NL');
    const type = data.type;

    return { data, time, date, type };
  }).sort((a, b) => b.time - a.time).slice(0, 3);
}

export default async function Home() {
  const projects = await getLastThreeProjects();

  return (
    <>
      <Hero title="Justian Spijkerbosch 😄" description="Freelance full stack developer" />
      <section className="content">
        <p>
          Welcome in my digital garden 👋. I am a highly motivated computer science student from the Netherlands and a freelance full stack developer. I am mainly focused on developing projects I like and building great user friendly experiences around them.
        </p>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 rounded-xl border border-stone-200 text-green-700 px-4 py-4 flex flex-row gap-3 items-center">
            <FaGithub className="icon" />
            1000+ commits
          </div>
          <div className="col-span-1 rounded-xl border border-stone-200 text-green-700 px-4 py-4 flex flex-row gap-3 items-center">
            <FaRocket className="icon" />
            3 projects
          </div>
          <div className="col-span-1 rounded-xl border border-stone-200 text-green-700 px-4 py-4 flex flex-row gap-3 items-center">
            <FaKeyboard className="icon" />
            10000+ lines
          </div>
        </div>
        <p>
          In my daily life, I am mainly busy with school, for which I am currently doing an internship at <a href="https://mrboost.nl" target="_blank">MrBoost</a>. In addition, as an indie hacker / solo entrepreneur I like to build <Link href={"/work"}>my projects</Link>. To finance this I am also active as a freelancer, for which you can <Link href={"/contact"}>hire me</Link>.
        </p>
        <hr className="my-8" />
        <h2>My recent work</h2>
        {/* TODO: Implement recent work */}
        <div className="mt-8 grid grid-cols-1 gap-6">
          {projects.map((project) => {
            return (
              <Link href={`/work/${project.data.slug}`} key={project.data.slug} className="post border border-stone-200 rounded-xl px-8 py-4 flex flex-col gap-2">
                <h3>{project.data.title}</h3>
                <p>{project.data.description}</p>
                <p className="font-bold underline text-green-700">View more</p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
