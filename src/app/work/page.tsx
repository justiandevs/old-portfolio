import {Metadata} from "next";
import fs from "fs";
import matter from "gray-matter";
import {Hero} from "@/components/Hero";
import Link from "next/link";

export const dynamic = 'error';

export const metadata: Metadata = {
  title: 'My client work and private projects - Justian.dev',
  description: 'A short overview from the projects I worked on, differs between client work and personal opensource projects',
}

async function getAllProjects() {
  const projects = fs.readdirSync('./projects');

  const sortedProjects = projects.map((slug: string) => {
    const source = fs.readFileSync('./projects/' + slug, 'utf-8');

    const { data } = matter(source);
    const time = fs.statSync('./projects/' + slug).mtime.getTime();
    const date = fs.statSync('./projects/' + slug).mtime.toLocaleDateString('nl-NL');
    const type = data.type;

    return { data, time, date, type };
  }).sort((a, b) => b.time - a.time)

  return {
    featured: sortedProjects.filter((project) => project.type === "featured"),
  }
}

export default async function Work() {
  const { featured } = await getAllProjects();

  return (
    <>
      <Hero title="My work 🎨" description="I like to build on awesome projects" />
      <section className="content">
        <h2>My projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-6">
          {featured.map((project) => {
            return (
              <Link href={`/work/${project.data.slug}`} key={project.data.slug} className="post border border-stone-200 rounded-xl px-8 py-4 flex flex-col gap-2">
                <h3>{project.data.title}</h3>
                <p>{project.data.description}</p>
                <p className="font-bold underline text-green-700">View more</p>
              </Link>
            )
          })}
          <Link href="/contact" className="post border border-stone-200 rounded-xl px-8 py-4 flex flex-col gap-2 opacity-70">
            <h3>Your project here?</h3>
            <p>Need a full-stack developer? I stay open for working on new cool projects.</p>
            <p className="text-green-700 font-bold underline">Hire me</p>
          </Link>
        </div>
      </section>
    </>
  )
}
