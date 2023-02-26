import {Metadata} from "next";
import * as fs from "fs";
import matter from "gray-matter";
import {Hero} from "@/components/Hero";
import Link from "next/link";

export const dynamic = 'error';

export const metadata: Metadata = {
  title: 'Blog - Justian.dev',
  description: 'I regularly write blogs about (non) technical topics on such a manner that everybody can understand them',
}

async function getAllPosts() {
  const posts = fs.readdirSync('./posts');

  return posts.map((slug: string) => {
    const source = fs.readFileSync('./posts/' + slug, 'utf-8');

    const { data } = matter(source);
    const time = fs.statSync('./posts/' + slug).mtime.getTime();
    const date = fs.statSync('./posts/' + slug).mtime.toLocaleDateString('nl-NL');

    return { data, time, date };
  }).sort((a, b) => b.time - a.time)
}

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <Hero title="Blog" description="I just like to write about the things I think are interesting" />
      <section className="content">
        <div className="flex flex-col gap-8">
          {posts.map((post) => {
            return (
              <Link href={'/blog/' + post.data.slug} key={post.data.slug} className="post w-full rounded-xl border border-stone-200 px-8 py-4 flex flex-col-reverse md:flex-row md:gap-8 justify-between">
                <div className="flex flex-col gap-2">
                  <h3>{post.data.title}</h3>
                  <p>{post.data.description}</p>
                  <p className="text-green-700 underline font-bold">View more</p>
                </div>
                <div>
                  <p className="little">{post.date}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
