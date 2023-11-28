"use client";

import { useSession } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  return <div>{session && JSON.stringify(session)}</div>;
};

export default User;
