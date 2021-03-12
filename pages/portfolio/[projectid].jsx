import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>Project name is {router.query.projectid}</p>
    </div>
  );
}
