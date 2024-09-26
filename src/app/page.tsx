import Link from "next/link";
import {
  FRONTEND_PROJECTS,
  JAVASCRIPT_PROJECTS,
  RESPONSIVE_PROJECTS,
} from "./projects.data";

export default function Page() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold text-center mt-5">
        DevChallanges Solutions 😁
      </h2>
      <section>
        <h3 className="text-lg font-medium">
          Responsive Web Design{" "}
          <span className="font-bold text-orange-200">
            ({RESPONSIVE_PROJECTS.length})
          </span>
        </h3>
        <ul>
          {RESPONSIVE_PROJECTS.map((project) => (
            <li key={project.id}>
              <Link href={project.url} className="underline ml-4">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-5">
        <h3 className="text-lg font-medium">
          Javascript{" "}
          <span className="font-bold text-orange-200">
            ({JAVASCRIPT_PROJECTS.length})
          </span>
        </h3>
        <ul>
          {JAVASCRIPT_PROJECTS.map((project) => (
            <li key={project.id}>
              <Link href={project.url} className="underline ml-4">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-5">
        <h3 className="text-lg font-medium">
          Frontend Libraries{" "}
          <span className="font-bold text-orange-200">
            ({FRONTEND_PROJECTS.length})
          </span>
        </h3>
        <ul>
          {FRONTEND_PROJECTS.map((project) => (
            <li key={project.id}>
              <Link href={project.url} className="underline ml-4">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
