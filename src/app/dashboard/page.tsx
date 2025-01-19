"use client";

import { SignedIn, SignOutButton, useUser } from "@clerk/nextjs";

export default function HomeDashboard() {
  const { user } = useUser();
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Hallo , {user?.firstName}!</h2>
      <p>ID: {user?.id}</p>
      <button onClick={() => console.log(user)}>Check User</button>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </>
  );
}
