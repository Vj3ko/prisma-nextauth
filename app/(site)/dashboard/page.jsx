import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/app/components/user";
import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/login");
  // }

  console.log("dashboard", session);
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <User />
    </div>
  );
};

export default Dashboard;
