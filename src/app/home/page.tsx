import Image from "next/image";

export default function Home({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home page</h1>
        <div>
            {children}
        </div>
    </main>
  );
}
