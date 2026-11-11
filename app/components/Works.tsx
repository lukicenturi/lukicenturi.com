"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import Reveal from "./Reveal";

export type Project = {
  name: string;
  year: string;
  stack: string;
  description: string;
  role?: string;
  href: string;
  image: string;
  tags: string[];
};

const PARAM = "tag";
const FILTER_EVENT = "works:filter";

export function slugify(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// The active tag lives in the URL (?tag=slug#works) so a filtered view
// is shareable. It is read through an external store instead of
// useSearchParams so the full list is still prerendered into the HTML.
function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(FILTER_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(FILTER_EVENT, onChange);
  };
}

function getSnapshot() {
  return new URLSearchParams(window.location.search).get(PARAM) ?? "";
}

function getServerSnapshot() {
  return "";
}

function setTagInUrl(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug) {
    url.searchParams.set(PARAM, slug);
  } else {
    url.searchParams.delete(PARAM);
  }
  url.hash = "works";
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(FILTER_EVENT));
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] transition-colors ${
        active
          ? "border-paper bg-paper text-ink"
          : "border-line text-paper-dim hover:border-paper-dim hover:text-paper"
      }`}
    >
      {children}
    </button>
  );
}

export default function Works({ projects }: { projects: Project[] }) {
  const requested = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tag of project.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  const tags = [...counts.keys()].sort(
    (a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b),
  );

  // An unknown slug in the URL falls back to the full list.
  const activeTag = tags.find((tag) => slugify(tag) === requested) ?? null;

  const numbered = projects.map((project, i) => ({ project, index: i + 1 }));
  const visible = activeTag
    ? numbered.filter(({ project }) => project.tags.includes(activeTag))
    : numbered;

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <div
          role="group"
          aria-label="Filter works by tag"
          className="flex flex-wrap gap-2"
        >
          <FilterChip active={!activeTag} onClick={() => setTagInUrl(null)}>
            All
          </FilterChip>
          {tags.map((tag) => (
            <FilterChip
              key={tag}
              active={tag === activeTag}
              onClick={() =>
                setTagInUrl(tag === activeTag ? null : slugify(tag))
              }
            >
              {tag}
              <span className="ml-1.5 text-paper-faint">{counts.get(tag)}</span>
            </FilterChip>
          ))}
        </div>
        {activeTag && (
          <button
            type="button"
            onClick={() => setTagInUrl(null)}
            className="link-rule ml-auto text-xs uppercase tracking-[0.2em] text-paper-dim hover:text-paper"
          >
            Clear &times;
          </button>
        )}
      </div>

      <p
        aria-live="polite"
        className="mt-4 text-xs uppercase tracking-[0.2em] text-paper-faint"
      >
        {activeTag
          ? `${visible.length} of ${projects.length} works tagged ${activeTag}`
          : `${projects.length} works`}
      </p>

      <div className="mt-6">
        {visible.map(({ project, index }) => (
          <Reveal key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-6 border-b border-line py-10 sm:grid-cols-[64px_1fr_300px]"
            >
              <span className="text-xs tracking-[0.2em] text-paper-faint">
                {pad(index)}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.name}
                  <span className="ml-3 inline-block text-base text-paper-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    &#8599;
                  </span>
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-paper-dim">
                  {project.description}
                </p>
                {project.role && (
                  <p className="mt-3 max-w-xl border-l border-line pl-4 text-sm leading-relaxed text-paper-dim">
                    <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-paper-faint">
                      Role
                    </span>
                    {project.role}
                  </p>
                )}
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-paper-faint">
                  {project.stack}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-paper-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <figure>
                <div className="border border-line p-1.5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      sizes="(min-width: 640px) 300px, 100vw"
                      className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <figcaption className="mt-2 flex justify-between text-xs uppercase tracking-[0.2em] text-paper-faint">
                  <span>Fig. {pad(index)}</span>
                  <span>{project.year}</span>
                </figcaption>
              </figure>
            </a>
          </Reveal>
        ))}
      </div>
    </>
  );
}
