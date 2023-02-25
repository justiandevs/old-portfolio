import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

type HeroProps = {
  title: string,
  description: string,
  button?: boolean,
  text?: string,
  link?: string,
  iconLeft?: JSX.Element,
  iconRight?: JSX.Element
}

export const Hero = ({ title, description, button = false, text = "", link = "", iconLeft, iconRight }: HeroProps) => {
  return (
    <section className="lg:h-24 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 md:items-center">
      <div className="flex flex-col justify-center">
        <h1>{ title }</h1>
        <p className="italic font-thin -mt-1 text-green-700 text-[1.125rem]">{ description }</p>
      </div>
      {button &&
        <Link href={link} className="button">
          {iconLeft && iconLeft}
          {text}
          {iconRight && iconRight}
        </Link>
      }
    </section>
  )
}
