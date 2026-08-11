import { UserLists } from "@/app/features";
import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-6">
      <UserLists />
    </main>
  );
};

export default Home;
