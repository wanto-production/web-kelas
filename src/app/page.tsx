import { Metadata } from "next";

export const metadata: Metadata = {
  title: "home"
};

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      <h1>hello world</h1>
    </main>
  )
}
