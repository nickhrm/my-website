import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

//when to refetch the cached data
export const revalidate = 1;


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  pt-6 min-h-screen flex flex-col `}  >
        <div className="w-full flex flex-row justify-between align-baseline px-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Nick Hermann
          </h1>
          <Link href={"/"} className="">
            <img src="home.svg"></img>
          </Link>
        </div>
        <div className="flex-grow px-6 pt-12">
          {children}
        </div>

        {/* <div className="100%"></div> */}
        <Separator />
        <footer className="scroll-m-20 grid px-6 m-12 grid-cols-1 sm:grid-cols-2 gap-6 align-middle ">
          <p className="text-gray-600">© 2024 Nick Hermann</p>
          <Link className="text-gray-600 hover:text-black" href="/imprint">
            Impressum
          </Link>
        </footer>
      </body>
    </html >
  );
}


export const metadata: Metadata = {
  title: "Nick Hermann",
  description: "Software Developer und Produktentwickler Nick Hermann",
};
