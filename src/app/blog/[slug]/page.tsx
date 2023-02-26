import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Blog - Justian.dev',
  description: 'I regularly write blogs about (non) technical topics on such a manner that everybody can understand them',
}

export default function Post() {
  return (
    <h1>Blogpost 😌</h1>
  )
}
