import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
// import resumes from the correct module where it is defined
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumemind" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
  <main className="bg-[url('/images/bg-main.svg'] bg-cover" >
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>
          Track your Applications & Resume Ratings
        </h1>
        <h2> Review your submissions and Check AI-powered feedback</h2>
      </div>
    </section>
    {
      resumes.map((resume) => (
        <div >
          <h1>{resume.jobTitle}</h1>
        </div>
      ))
    }
  </main>

}
