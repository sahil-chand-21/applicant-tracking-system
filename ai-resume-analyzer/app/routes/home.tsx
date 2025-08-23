import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumemind" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg'] bg-cover" >
    <section className="main-section">
       <div className="page-heading">
        <h1>
          Track your Applications & Resume Ratings
        </h1>
        <h2> Review your submissions and Check AI-powered feedback</h2>
       </div>

       </section>
  </main>

}
