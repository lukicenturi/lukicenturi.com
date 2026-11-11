import Image from "next/image";
import LocalTime from "./components/LocalTime";
import Reveal from "./components/Reveal";
import Spotlight from "./components/Spotlight";
import ThemeToggle from "./components/ThemeToggle";
import Works, { type Project } from "./components/Works";

const EMAIL = "lukicenturi@gmail.com";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/lukicenturi",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lukicenturi/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X",
    href: "https://x.com/lukicenturii",
    icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lukicenturi/",
    icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
  },
];

const ticker = [
  "Gold Medal, WorldSkills Asia 2018",
  "Gold Medal, ASEAN Skills 2018",
  "Top 6, WorldSkills Kazan 2019",
  "National platforms for the Ministry of Manpower",
  "Three iOS apps on the App Store",
  "10,000+ users on products I built",
  "Go, TypeScript, PHP, Swift",
];

const experience = [
  {
    role: "Fullstack Developer",
    company: "Xinchuan",
    period: "2026 to present",
    notes: [
      "Building a **SIM card management platform end to end**, with services written in Go and a front end in Next.js.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Tempo Labs",
    period: "2024 to 2026",
    notes: [
      "Developed an **AI-powered due diligence platform** for the client Keye, using React, Next.js and React Context.",
      "Helped develop the Tempo Labs platform itself, a **WYSIWYG React editor**, built with React and Next.js.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Rotki",
    period: "2021 to 2024",
    notes: [
      "Architected a **secure multi-wallet integration system** using Ethers.js and WalletConnect, enabling transactions, subscription purchases and NFT sponsorship minting for **more than 10,000 users**.",
      "Built an **open-source cryptocurrency portfolio tracker** with real-time price updates and multi-chain asset tracking, using Vue.js 3 and Electron.",
      "Migrated the build tooling from Vue CLI to Vite, and the test suite from Jest to Vitest for **50% faster runs**, alongside end-to-end tests in Cypress.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Cermati",
    period: "2021 to 2022",
    notes: [
      "Developed a **super-app for financial services** with React, Next.js, Ionic Capacitor and GraphQL.",
      "Migrated a **legacy jQuery codebase to React**.",
      "Integrated **performance tooling** built on Lighthouse and Puppeteer, and wrote unit tests for the component library.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Ammana Fintek Syariah",
    period: "2019 to 2021",
    notes: [
      "Built a platform enabling **PayLater payments**, with a responsive site in Vue.js and Laravel.",
      "Earlier developed the **peer-to-peer transaction website**, and a Flutter mobile application for product demos.",
    ],
  },
  {
    role: "Front End Developer, Intern",
    company: "Airy Rooms",
    period: "2020",
    notes: [
      "Added **BRI and DANA payment methods**, migrated the mobile site to a newer React version, and built components in Storybook.",
    ],
  },
  {
    role: "Web Developer, Intern",
    company: "Ektizo Education",
    period: "2016",
    notes: [
      "Developed a landing page and a **tutoring platform** with WordPress, PHP and Laravel.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "MagangHub",
    year: "2026",
    stack: "Laravel, Hyperf, React, PostgreSQL",
    description:
      "The Ministry of Manpower's national internship platform, connecting graduates with more than 10,000 companies. Fullstack work spanning a Laravel monolith, Hyperf microservices, and React applications.",
    href: "https://maganghub.kemnaker.go.id/",
    image: "/projects/maganghub.jpg",
    tags: ["Government", "Web Platform"],
  },
  {
    name: "HEIM",
    year: "2026",
    stack: "Next.js, Medusa, PostgreSQL",
    description:
      "Complete e-commerce build for an Indonesian apparel label: a Medusa backend and Next.js storefront with Midtrans payments, live courier rates, wishlists, and a bilingual English and Indonesian interface.",
    href: "https://storefront-production-1ded.up.railway.app/",
    image: "/projects/heim.jpg",
    tags: ["E-commerce"],
  },
  {
    name: "The Guessy",
    year: "2026",
    stack: "Swift, SwiftUI",
    description:
      "An iOS game that turns WhatsApp chat exports into trivia about you and your favorite people. Questions are generated from the messages, and the chat never leaves the device.",
    href: "https://www.theguessy.app/",
    image: "/projects/guessy.jpg",
    tags: ["Mobile Apps"],
  },
  {
    name: "Rosary Lock",
    year: "2026",
    stack: "Swift, SwiftUI, Screen Time API",
    description:
      "Pray before you scroll: an iOS app that shields distracting apps behind the Rosary, built on Apple's Screen Time API.",
    href: "https://rosarylock.app/",
    image: "/projects/rosarylock.jpg",
    tags: ["Mobile Apps"],
  },
  {
    name: "BrainDefog",
    year: "2026",
    stack: "Swift, SwiftUI",
    description:
      "A private recovery companion for quitting porn: streak tracking, brain fog monitoring and progress visualisation, with no account required.",
    href: "https://braindefog.app/",
    image: "/projects/braindefog.jpg",
    tags: ["Mobile Apps"],
  },
  {
    name: "Rotki Sponsor Mint",
    year: "2025",
    stack: "Nuxt, Vue.js, viem, WalletConnect, SIWE",
    description:
      "The sponsorship NFT mint for rotki, the open source portfolio tracker. Supporters connect a wallet, choose a tier and pay in ETH or stablecoins, and every mint funds the next release.",
    role: "I built the mint flow end to end, across dozens of pull requests in rotki/rotki.com. In short: connect a wallet, pay on-chain in ETH or ERC-20 tokens, mint against live tier supply, then sign in with Ethereum to put your name on the NFT. Behind it, server-side caching keeps the NFT metadata and images fast.",
    href: "https://rotki.com/sponsor/mint",
    image: "/projects/rotki.jpg",
    tags: ["Crypto"],
  },
  {
    name: "AskMyBook",
    year: "2023",
    stack: "React, Ruby on Rails, OpenAI API",
    description:
      "An experiment with the OpenAI API: upload a PDF, then ask it questions and receive answers drawn from the document itself.",
    href: "https://askmybook.lukicenturi.vercel.app/",
    image: "/projects/askmybook.jpg",
    tags: ["AI"],
  },
  {
    name: "Fita",
    year: "2022",
    stack: "React, Next.js, GraphQL",
    description:
      "A health-tech platform helping Indonesians build good habits through fitness, wellness and meal plans curated by professionals. Built the company profile site of more than ten pages.",
    href: "https://fita.co.id/",
    image: "/projects/fita.jpg",
    tags: ["Landing Page"],
  },
  {
    name: "Radarchitecture",
    year: "2021",
    stack: "WordPress, Three.js",
    description:
      "Portfolio showcase for a Jakarta architecture firm devoted to innovative, sustainable design.",
    href: "https://radarchitecture.net/",
    image: "/projects/radarchitecture.jpg",
    tags: ["Landing Page"],
  },
  {
    name: "Satumarket",
    year: "2021",
    stack: "Vue.js, Laravel, Flutter",
    description:
      "An e-grocery platform for buying groceries online, with virtual account payment integration.",
    href: "https://satumarket.com/",
    image: "/projects/satumarket.jpg",
    tags: ["E-commerce", "Mobile Apps"],
  },
  {
    name: "Sisnaker Karirhub",
    year: "2019",
    stack: "HTML5, CSS3, AngularJS",
    description:
      "Employment services platform for the Ministry of Manpower of Indonesia, connecting employers with job seekers at home and abroad.",
    href: "https://karirhub.kemnaker.go.id/",
    image: "/projects/karirhub.jpg",
    tags: ["Government"],
  },
  {
    name: "Binus Innovation Award",
    year: "2019",
    stack: "Vue.js",
    description:
      "Competition website for submitting innovations, with judging and scoring for the jury.",
    href: "https://www.binus.edu/innovation-award/2020/",
    image: "/projects/binus.jpg",
    tags: ["Web Platform"],
  },
  {
    name: "Sisnaker Pelatihan",
    year: "2018",
    stack: "HTML5, CSS3, AngularJS",
    description:
      "Training platform for the Ministry of Manpower, later serving the Prakerja program with free course credits.",
    href: "https://pelatihan.kemnaker.go.id/",
    image: "/projects/pelatihan.jpg",
    tags: ["Government"],
  },
  {
    name: "JavaScript Games",
    year: "since 2015",
    stack: "HTML5 Canvas, JavaScript",
    description:
      "A collection of canvas games, written to master the fundamentals and object-oriented programming.",
    href: "https://lukicenturi.github.io/",
    image: "/projects/jsgames.jpg",
    tags: ["Games"],
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

function Emphasized({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-paper">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6 border-t border-line pt-6">
      <span className="text-xs tracking-[0.3em] text-paper-faint">
        {number}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
      <Spotlight />
      {/* Masthead */}
      <header className="sticky top-0 z-40 -mx-6 border-b border-line bg-ink/85 px-6 backdrop-blur sm:-mx-10 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-baseline justify-between py-4">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Luki Centuri
          </a>
          <div className="flex items-center gap-7">
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
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="grid gap-12 py-20 sm:grid-cols-[1fr_auto] sm:items-end sm:py-28"
      >
        <div>
          <Kicker>The collected work of</Kicker>
          <h1 className="mt-6 text-[17vw] font-semibold leading-[0.92] tracking-[-0.04em] sm:text-8xl md:text-9xl">
            Luki
            <br />
            <span className="text-paper-faint">Centuri</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper-dim">
            Fullstack developer. I ship products end to end: backends in Go and
            PHP, interfaces in Vue and React, and iOS apps in Swift, from Web3
            wallets to platforms Indonesia runs on.
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
          <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-paper-faint">
            Fig. 1 &nbsp;The author
          </figcaption>
        </figure>
        <div className="grid grid-cols-3 gap-6 border-t border-line pt-8 sm:col-span-2">
          <div>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              02
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper-faint">
              International gold medals
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              10K+
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper-faint">
              Users on products I built
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {String(projects.length).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper-faint">
              Works in the public record
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="-mx-6 overflow-hidden border-y border-line sm:-mx-10">
        <div className="marquee-track flex w-max">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex shrink-0 items-center gap-8 py-3 pr-8 text-xs uppercase tracking-[0.25em] text-paper-dim"
            >
              {ticker.map((item) => (
                <span key={item} className="flex items-center gap-8">
                  <span className="whitespace-nowrap">{item}</span>
                  <span aria-hidden className="text-paper-faint">
                    &bull;
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 01 The Author */}
      <section id="author" className="scroll-mt-24 py-16">
        <SectionHeading number="01" title="The Author" />
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Currently fullstack at Xinchuan, building a SIM card management
              platform with Go on the back end and Next.js on the front. Before
              that: AI tooling at Tempo Labs, and three years of open-source
              blockchain work at Berlin-based Rotki, from wallet integrations
              with WalletConnect to real-time data visualisation and the patient
              tuning of performance for more than ten thousand users.
            </p>
            <p>
              Evenings belong to Swift: three iOS apps of my own on the App
              Store, from a chat trivia game to a prayer-powered screen time
              blocker.
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
                Go, TypeScript, Swift, Vue.js, React, Next.js, SwiftUI,
                Three.js, Flutter, Laravel, Figma
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
            <Reveal key={`${job.company}-${job.period}`}>
              <article className="grid gap-4 py-10 md:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-paper-faint">
                    {job.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-paper-dim">{job.role}</p>
                  <ul className="mt-4 max-w-2xl space-y-2 border-l border-line pl-5 leading-relaxed text-paper-dim">
                    {job.notes.map((note) => (
                      <li key={note}>
                        <Emphasized text={note} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 Selected Works */}
      <section id="works" className="scroll-mt-24 py-16">
        <SectionHeading number="03" title="Selected Works" />
        <Works projects={projects} />
      </section>

      {/* 04 Honours */}
      <section id="honours" className="scroll-mt-24 py-16">
        <SectionHeading number="04" title="Honours" />
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {honours.map((honour, i) => (
            <Reveal key={honour.event} className="bg-ink" delay={(i % 2) * 100}>
              <article className="h-full p-8 sm:p-10">
                <p
                  className={`text-xs uppercase tracking-[0.25em] ${
                    honour.gold ? "text-paper" : "text-paper-dim"
                  }`}
                >
                  {honour.medal}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
                  {honour.event}
                </h3>
                <p className="mt-1 text-sm text-paper-faint">{honour.place}</p>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                  {honour.detail}
                </p>
              </article>
            </Reveal>
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
            className="link-rule mt-6 inline-block break-all text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {EMAIL}
          </a>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 text-xs uppercase tracking-[0.25em] text-paper-dim">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-paper"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-[18px] w-[18px] fill-current transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  <path d={social.icon} />
                </svg>
                <span className="link-rule">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Colophon */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-10 text-xs leading-relaxed text-paper-faint">
        <p>
          Set in Inter. Built with Next.js. &copy; {new Date().getFullYear()}{" "}
          Luki Centuri.
        </p>
        <p className="flex items-center gap-2 uppercase tracking-[0.2em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper-dim opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper" />
          </span>
          Jakarta, <LocalTime /> WIB
        </p>
      </footer>
    </div>
  );
}
