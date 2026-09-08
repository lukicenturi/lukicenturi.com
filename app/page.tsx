import Image from "next/image";

const EMAIL = "lukicenturi@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/lukicenturi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lukicenturi/" },
  { label: "X", href: "https://x.com/lukicenturii" },
  { label: "Instagram", href: "https://www.instagram.com/lukicenturi/" },
];

const experience = [
  {
    role: "Front End Developer",
    company: "Rotki",
    period: "2021 to present",
    notes: [
      "Architected a secure multi-wallet integration system using Ethers.js and WalletConnect.",
      "Building an open-source cryptocurrency portfolio tracker serving more than 10,000 users.",
      "Migrated the build tooling from Vue CLI to Vite, and the test suite from Jest to Vitest for 50% faster runs.",
      "Writes and maintains end-to-end tests with Cypress.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Cermati",
    period: "2020 to 2022",
    notes: [
      "Developed a super-app for financial services with React, Next.js, Ionic Capacitor and GraphQL.",
      "Migrated a legacy jQuery codebase to React.",
      "Integrated performance tooling built on Lighthouse and Puppeteer, and wrote unit tests for the component library.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Ammana Fintek Syariah",
    period: "2019 to 2021",
    notes: [
      "Built a platform enabling PayLater payments, with a responsive site in Vue.js and Laravel.",
      "Earlier developed the peer-to-peer transaction website, and a Flutter mobile application for product demos.",
    ],
  },
  {
    role: "Front End Developer, Intern",
    company: "Airy Rooms",
    period: "2020",
    notes: [
      "Added BRI and DANA payment methods, migrated the mobile site to a newer React version, and built components in Storybook.",
    ],
  },
  {
    role: "Web Developer, Intern",
    company: "Ektizo Education",
    period: "2016",
    notes: [
      "Developed a landing page and a tutoring platform with WordPress, PHP and Laravel.",
    ],
  },
];

const projects = [
  {
    name: "AskMyBook",
    year: "2023",
    stack: "React, Ruby on Rails, OpenAI API",
    description:
      "An experiment with the OpenAI API: upload a PDF, then ask it questions and receive answers drawn from the document itself.",
    href: "https://askmybook.lukicenturi.vercel.app/",
  },
  {
    name: "Fita",
    year: "2022",
    stack: "React, Next.js, GraphQL",
    description:
      "A health-tech platform helping Indonesians build good habits through fitness, wellness and meal plans curated by professionals. Built the company profile site of more than ten pages.",
    href: "https://fita.co.id/",
  },
  {
    name: "Radarchitecture",
    year: "2021",
    stack: "WordPress, Three.js",
    description:
      "Portfolio showcase for a Jakarta architecture firm devoted to innovative, sustainable design.",
    href: "https://radarchitecture.net/",
  },
  {
    name: "Satumarket",
    year: "2021",
    stack: "Vue.js, Laravel, Flutter",
    description:
      "An e-grocery platform for buying groceries online, with virtual account payment integration.",
    href: "https://satumarket.com/",
  },
  {
    name: "Sisnaker Karirhub",
    year: "2019",
    stack: "HTML5, CSS3, AngularJS",
    description:
      "Employment services platform for the Ministry of Manpower of Indonesia, connecting employers with job seekers at home and abroad.",
    href: "https://karirhub.kemnaker.go.id/",
  },
  {
    name: "Binus Innovation Award",
    year: "2019",
    stack: "Vue.js",
    description:
      "Competition website for submitting innovations, with judging and scoring for the jury.",
    href: "https://www.binus.edu/innovation-award/2020/",
  },
  {
    name: "Sisnaker Pelatihan",
    year: "2018",
    stack: "HTML5, CSS3, AngularJS",
    description:
      "Training platform for the Ministry of Manpower, later serving the Prakerja program with free course credits.",
    href: "https://pelatihan.kemnaker.go.id/",
  },
  {
    name: "JavaScript Games",
    year: "since 2015",
    stack: "HTML5 Canvas, JavaScript",
    description:
      "A collection of canvas games, written to master the fundamentals and object-oriented programming.",
    href: "https://lukicenturi.github.io/",
  },
];

const honours = [
  {
    medal: "Gold Medal",
    event: "1st WorldSkills Asia",
    place: "Abu Dhabi, 2018",
    detail:
      "Web design and development, against participants from more than ten countries. Tasks spanned an HTML and JavaScript web game, a Laravel API consumed by a Vue client, and custom WordPress themes and plugins.",
    gold: true,
  },
  {
    medal: "Gold Medal",
    event: "12th ASEAN Skills Competition",
    place: "Bangkok, 2018",
    detail:
      "Web design and development across eight competing countries, covering the same trinity: a browser game, a Laravel and Vue application, and deep WordPress customisation.",
    gold: true,
  },
  {
    medal: "Medallion of Excellence",
    event: "45th WorldSkills Competition",
    place: "Kazan, 2019",
    detail:
      "Placed 6th of 40 in web design and development. Speed rounds of WordPress plugins and loading animations, custom CMS features, a Laravel event booking system, and a route editor with dual edit and view modes.",
    gold: false,
  },
  {
    medal: "3rd Place",
    event: "TechnoScape Hackathon, with Tiket.com",
    place: "48 hours",
    detail:
      "Built PENTOL, a concert ticket platform with built-in chat, customisable stickers, and sign language interpretation for accessibility.",
    gold: false,
  },
];

const navItems = [
  { label: "The Author", href: "#author" },
  { label: "Engagements", href: "#engagements" },
  { label: "Works", href: "#works" },
  { label: "Honours", href: "#honours" },
  { label: "Write", href: "#write" },
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-6 border-t border-line pt-6">
      <span className="font-display text-sm tracking-[0.25em] text-brass">
        No. {number}
      </span>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-paper-faint">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10">
      {/* Masthead */}
      <header className="sticky top-0 z-40 -mx-6 border-b border-line bg-ink/85 px-6 backdrop-blur sm:-mx-10 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-baseline justify-between py-4">
          <a
            href="#top"
            className="font-display text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Luki Centuri
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.2em] text-paper-dim sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-rule hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="grid gap-12 py-20 sm:grid-cols-[1fr_auto] sm:items-end sm:py-28">
        <div>
          <Kicker>A monograph on the work of</Kicker>
          <h1 className="mt-6 font-display text-[17vw] font-medium leading-[0.9] tracking-tight sm:text-8xl md:text-9xl">
            Luki
            <br />
            <span className="italic text-brass">Centuri</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper-dim">
            Front end developer. Five years and counting in Web3, financial
            systems and the craft of the interface, written chiefly in Vue and
            React.
          </p>
        </div>
        <figure className="justify-self-start sm:justify-self-end">
          <div className="border border-line p-2">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Luki Centuri"
              width={240}
              height={240}
              priority
              className="grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <figcaption className="mt-3 text-xs italic text-paper-faint">
            Plate I. The author.
          </figcaption>
        </figure>
      </section>

      {/* 01 The Author */}
      <section id="author" className="scroll-mt-24 py-16">
        <SectionHeading number="01" title="The Author" />
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="dropcap">
              Currently at Rotki, a Berlin-based company, architecting
              blockchain solutions with Vue.js 3 while developing React
              applications for open source projects and clients. The work runs
              from wallet integrations with WalletConnect to real-time data
              visualisation, the UX of financial systems, and the patient
              tuning of performance for solutions serving more than ten
              thousand users.
            </p>
            <p className="text-paper-dim">
              Outside of work, you will find me on the padel court.
            </p>
          </div>
          <div className="space-y-6 border-l border-line pl-8 text-sm leading-relaxed">
            <div>
              <Kicker>Education</Kicker>
              <p className="mt-2">
                B.Sc. Computer Science
                <br />
                Bina Nusantara University, 2017 to 2021
                <br />
                <span className="text-paper-dim">GPA 3.91 of 4.00</span>
              </p>
            </div>
            <div>
              <Kicker>Tools of the trade</Kicker>
              <p className="mt-2 text-paper-dim">
                Vue.js, React, Next.js, TypeScript, Three.js, Flutter, Laravel,
                Figma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Engagements */}
      <section id="engagements" className="scroll-mt-24 py-16">
        <SectionHeading number="02" title="Engagements" />
        <div className="mt-10 divide-y divide-line">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid gap-4 py-10 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-display text-sm tracking-[0.2em] text-brass">
                  {job.period}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm italic text-paper-dim">{job.role}</p>
                <ul className="mt-4 max-w-2xl space-y-2 leading-relaxed text-paper-dim">
                  {job.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span aria-hidden className="text-brass">
                        &sect;
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 Selected Works */}
      <section id="works" className="scroll-mt-24 py-16">
        <SectionHeading number="03" title="Selected Works" />
        <div className="mt-10">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 border-b border-line py-8 transition-colors sm:grid-cols-[64px_1fr_auto] sm:gap-6"
            >
              <span className="font-display text-sm tracking-[0.2em] text-paper-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-brass sm:text-3xl">
                  {project.name}
                  <span className="ml-3 inline-block text-base text-paper-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    &#8599;
                  </span>
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-paper-dim">
                  {project.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-paper-faint">
                  {project.stack}
                </p>
              </div>
              <span className="font-display text-sm italic text-paper-faint sm:text-right">
                {project.year}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 04 Honours */}
      <section id="honours" className="scroll-mt-24 py-16">
        <SectionHeading number="04" title="Honours" />
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {honours.map((honour) => (
            <article key={honour.event} className="bg-ink p-8 sm:p-10">
              <p
                className={`font-display text-sm uppercase tracking-[0.25em] ${
                  honour.gold ? "text-brass" : "text-paper-dim"
                }`}
              >
                {honour.medal}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium leading-snug">
                {honour.event}
              </h3>
              <p className="mt-1 text-sm italic text-paper-faint">
                {honour.place}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {honour.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 05 Correspondence */}
      <section id="write" className="scroll-mt-24 py-24">
        <SectionHeading number="05" title="Correspondence" />
        <div className="mt-12">
          <p className="max-w-md text-lg leading-relaxed text-paper-dim">
            For commissions, collaborations, or a conversation about the
            interface, address your letters to
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="link-rule mt-6 inline-block font-display text-3xl font-medium italic text-brass sm:text-5xl"
          >
            {EMAIL}
          </a>
          <div className="mt-12 flex flex-wrap gap-8 text-xs uppercase tracking-[0.25em] text-paper-dim">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule hover:text-paper"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Colophon */}
      <footer className="border-t border-line py-10 text-xs leading-relaxed text-paper-faint">
        <p>
          Set in Fraunces and Newsreader. Built with Next.js, published from
          Berlin and Jakarta. &copy; {new Date().getFullYear()} Luki Centuri.
        </p>
      </footer>
    </div>
  );
}
