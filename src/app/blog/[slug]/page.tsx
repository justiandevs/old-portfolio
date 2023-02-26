import {Metadata} from "next";
import fs from "fs";
import matter from "gray-matter";

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
  console.log(params);
}

export default async function Post({ params }: { params: IParams }) {
  const post = await getPost(params);

  return (
    <h1>Blogpost 😌</h1>
  )
}
