import {Hero} from "@/components/Hero";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaNewspaper, FaPhone,
  FaTwitter,
  FaWarehouse
} from "react-icons/fa";

export default function Page() {
  return (
    <>
      <Hero title="Contact" description="Want to hire me? Or just a question? Don't hesitate to contact me" />
      <section className="content">
        <p>
          If you are looking for a full stack website, app or web app. Or just have a question about me or one of my projects. You can always email me or say hi at one of the social networks listed below.
        </p>
        <div className="my-8">
          <h2>Contact information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-row gap-3">
              <div className="min-w-[3rem] h-12 bg-stone-100 rounded-full flex items-center justify-center">
                <FaWarehouse className="icon -mt-0.5" />
              </div>
              <div>
                <p className="font-medium">89274482</p>
                <p className="font-thin">CoC number</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="min-w-[3rem] h-12 bg-stone-100 rounded-full flex items-center justify-center">
                <FaNewspaper className="icon -mt-0.5" />
              </div>
              <div>
                <p className="font-medium">NL004712093B24</p>
                <p className="font-thin">VAT-ID</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="min-w-[3rem] h-12 bg-stone-100 rounded-full flex items-center justify-center">
                <FaLocationArrow className="icon" />
              </div>
              <div>
                <p className="font-medium">Oranjestraat 33, 7331BT Apeldoorn, Netherlands</p>
                <p className="font-thin">Address</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="min-w-[3rem] h-12 bg-stone-100 rounded-full flex items-center justify-center">
                <FaEnvelope className="icon -mt-0.5" />
              </div>
              <div>
                <p className="font-medium">mail@justian.dev</p>
                <p className="font-thin">E-mail</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="min-w-[3rem] h-12 bg-stone-100 rounded-full flex items-center justify-center">
                <FaPhone className="icon -mt-0.5" />
              </div>
              <div>
                <p className="font-medium">+31 6 18048010</p>
                <p className="font-thin">Phone number</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Socials</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-4">
            <a href="https://github.com/justiandevs" className="button__is-large col-span-1"><FaGithub className="icon__button" />GitHub</a>
            <a href="https://twitter.com/Justiandev" className="button__is-large col-span-1"><FaTwitter className="icon__button" />Twitter</a>
            <a href="https://www.linkedin.com/in/justian-spijkerbosch-a4b74118b/" className="button__is-large col-span-1"><FaLinkedin className="icon__button" />LinkedIn</a>
            <a href="https://www.instagram.com/justianspijkerbosch" className="button__is-large col-span-1"><FaInstagram className="icon__button" />Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
