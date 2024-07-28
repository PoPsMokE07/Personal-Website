import Image from "next/image";
import {
  BiLogoDiscordAlt,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoTwitter />,
    label: "Twitter",
    href: "https://twitter.com/SuryangsuChand2?t=UyEZ2E5E_J_K-VM-w5r-FQ&s=08",
  },
  {
    icon: <BiLogoGithub />,
    label: "GitHub",
    href: "https://github.com/PoPsMokE07",
  },
  {
    icon: <BiLogoLinkedin />,
    label: "Linkedin",
    href: "https://in.linkedin.com/in/suryangsu-chandra-82919a204",
  },
  {
    icon: <BiLogoDiscordAlt className="mt-0.5" />,
    label: "Discord",
    href: "https://discordapp.com/users/PoPsMokE#5081",
  },
];

export default () => (
  <header>
    <Headshot />
    <div className="mt-6 flex items-end justify-between">
      <div>
        <h1 className="animate-intro font-medium opacity-0">Suryangsu Chandra</h1>
        <h2 className="animate-intro tracking-tight opacity-0 [animation-delay:100ms]">
          Software Engineer
        </h2>
      </div>
      <div className="flex animate-intro items-center gap-x-1 opacity-0 [animation-delay:100ms]">
        {socials.map(({ icon, label, href }, index) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            key={index}
            aria-label={label}
            className="flex items-center justify-center text-xl text-neutral-500 transition-colors hover:text-neutral-500/75 active:text-neutral-500/50 dark:hover:text-neutral-400"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
    <hr className="my-6 animate-intro border-neutral-200 opacity-0 [animation-delay:150ms] dark:border-neutral-800" />
  </header>
);

const Headshot = () => {
  return (
    <div className="w-fit overflow-hidden rounded-full">
      <Image
        src="/headshot.jpeg"
        width={32}
        height={32}
        alt="My face"
        priority
        quality={100}
        className="animate-img"
      />
    </div>
  );
};
