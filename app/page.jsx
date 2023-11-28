import Link from "next/link";

export default async function Home() {
  return (
    <section>
      <h1>Home</h1>
      <br />
      <hr />
      <Link href={"/dashboard"}>Visit Dashboard</Link>
    </section>
  );
}
