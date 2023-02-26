import {Metadata} from "next";
import fs from "fs";
import matter from "gray-matter";
import {Hero} from "@/components/Hero";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import 'highlight.js/styles/atom-one-dark.css'
import {FaArrowRight} from "react-icons/fa";

export const dynamic = 'error';
export const dynamicParams = false;

type IParams = {
  slug: string;
}

export async function generateStaticParams() {
  const projects = fs.readdirSync('./projects');

  return projects.map((slug: string) => {
    const source = fs.readFileSync('./projects/' + slug, 'utf-8');

    const { data } = matter(source);

    return { slug: data.slug };
  });
}

async function getProject(params: IParams) {
  const source = fs.readFileSync('./projects/' + params.slug + '.mdx', 'utf-8');

  const date = fs.statSync('./projects/' + params.slug + '.mdx').mtime.toLocaleDateString('nl-NL');

  const { data, content } = matter(source);

  return {
    data,
    content,
    date
  }
}

export async function generateMetadata({ params }: { params: IParams }): Promise<Metadata> {
  const { data } = await getProject(params);

  return { title: data.title, description: data.description }
}


export default async function Post({ params }: { params: IParams }) {
  const { data, content, date } = await getProject(params);

  const mdxOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  }

  return (
    <>
      <Hero title={data.title} description={date} button iconRight={<FaArrowRight />} link={data.button_link} text={data.button_text} />
      <section className="content">
        <div className="max-w-none prose-p:text-black prose-li:text-black prose prose-headings:font-sans prose-p:mt-2 prose-p:mb-6 prose-headings:my-0 prose-p:leading-6 prose-p:text-[1rem] prose-base:font-sans prose-headings:font-bold prose-h1:text-[2rem] prose-h2:text-[1.5rem] prose-h3:text[1.25-rem] prose-strong:text-gray-600 prose-em:text-gray-600 prose-a:text-green-700 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-black prose-img:w-full prose-img:rounded-xl prose-li:my-0 prose-ul:mt-2 prose-blockquote:pl-4 prose-blockquote:py-0 prose-blockquote:text-black prose-blockquote:border-green-700 prose-blockquote:font-light">
          {/* @ts-expect-error Server Component */}
          <MDXRemote compiledSource={content} source={content} options={mdxOptions} />
        </div>
      </section>
    </>
  )
}
