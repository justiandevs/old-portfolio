import {Metadata} from "next";
import fs from "fs";
import matter from "gray-matter";
import {Hero} from "@/components/Hero";
import {MDXRemote} from "next-mdx-remote/rsc";

export const dynamic = 'error';

export const metadata: Metadata = {
  title: 'Blog - Justian.dev',
  description: 'I regularly write blogs about (non) technical topics on such a manner that everybody can understand them',
}

type IParams = {
  slug: string;
}

export async function generateStaticParams() {
  const posts = fs.readdirSync('./posts');

  return posts.map((slug: string) => {
    const source = fs.readFileSync('./posts/' + slug, 'utf-8');

    const { data } = matter(source);

    return { slug: data.slug };
  });
}

async function getPost(params: IParams) {
  const source = fs.readFileSync('./posts/' + params.slug + '.mdx', 'utf-8');

  const date = fs.statSync('./posts/' + params.slug + '.mdx').mtime.toLocaleDateString('nl-NL');

  const { data, content } = matter(source);

  return {
    data,
    content,
    date
  }
}

export default async function Post({ params }: { params: IParams }) {
  const { data, content, date } = await getPost(params);

  return (
    <>
      <Hero title={data.title} description={date} />
      <section className="content">
        <div className="max-w-none prose-code:px-2 prose-code:py-1 prose-code:rounded-xl prose-code:bg-stone-200 prose prose-headings:font-sans prose-p:mt-2 prose-p:mb-6 prose-headings:my-0 prose-p:leading-6 prose-p:text-[1rem] prose-base:font-sans prose-headings:font-bold prose-h1:text-[2rem] prose-h2:text-[1.5rem] prose-h3:text[1.25-rem] prose-strong:text-gray-600 prose-em:text-gray-600 prose-p:text-gray-600 prose-a:text-green-700 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-black prose-img:w-full prose-img:rounded-xl prose-li:my-0 prose-ul:mt-2 prose-blockquote:pl-4 prose-blockquote:py-0 prose-blockquote:text-black prose-blockquote:border-green-700 prose-blockquote:font-light">
          {/* @ts-expect-error Server Component */}
          <MDXRemote compiledSource={content} source={content} />
        </div>
      </section>
    </>
  )
}
