"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, FilePenLine, Smile, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LucidePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white text-black md:flex-row">
        <button
          type="button"
          className="w-full border-b bg-stone-200 p-3 text-left text-black md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AlignJustify />
        </button>

        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } h-screen overflow-hidden border-r bg-stone-100 p-5 md:block md:w-64`}
        >
          <ScrollArea className="h-full w-full">
            <div className="h-full pr-3">
              <nav className="cursor-pointer space-y-4 pl-6">
                <h4 className="font-semibold text-gray-800 text-lg">
                  Introduction
                </h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li>
                    <Link href="/guide" className="hover:text-red-500">
                      What is Lucide?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/install"
                      className="space-y-2 hover:text-red-500"
                    >
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare" className="hover:text-red-500">
                      Comparison
                    </Link>
                  </li>
                </ul>
                <Separator />
                <h4 className="font-semibold text-gray-800 text-lg">Basics</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li className="hover:text-red-500">Color</li>
                  <li>
                    <Link href="/sizing" className="hover:text-red-500">
                      Sizing
                    </Link>
                  </li>
                  <li>
                    <Link href="/stroke" className="hover:text-red-500">
                      Stroke Width
                    </Link>
                  </li>
                </ul>
                <Separator />
                <h4 className="font-semibold text-black text-lg">Advanced</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li className="hover:text-red-500">Accessibility</li>
                  <li className="hover:text-red-500">Global styling</li>
                  <li className="hover:text-red-500">Filled icons</li>
                  <li className="hover:text-red-500">Aliased Names</li>
                </ul>

                <Separator />
                <h4 className="font-semibold text-black text-lg">Packages</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li className="hover:text-red-500">Lucide</li>
                  <li className="hover:text-red-500">Lucide React</li>
                  <li className="hover:text-red-500">Lucide Vue</li>
                  <li className="hover:text-red-500">Lucide Svelte</li>
                  <li className="hover:text-red-500">Lucide Solid</li>
                  <li className="hover:text-red-500">Lucide React Native</li>
                  <li className="hover:text-red-500">Lucide Angular</li>
                  <li className="hover:text-red-500">Lucide Preact</li>
                  <li className="hover:text-red-500">Lucide Static</li>
                </ul>

                <Separator />
                <h4 className="font-semibold text-black text-lg">
                  Contributing
                </h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li className="hover:text-red-500">Icon Design Principles</li>
                  <li className="hover:text-red-500">
                    Designing In Illustration
                  </li>
                  <li className="hover:text-red-500">Designing In InkSpace</li>
                  <li className="hover:text-red-500">Designing In Figma</li>
                  <li className="hover:text-red-500">
                    Designing In Affinity Designer
                  </li>
                </ul>
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <ScrollArea className="h-screen w-full flex-1 p-8">
          <main className="mx-auto max-w-2xl pb-12">
            <h1 className="mb-6 font-bold text-4xl">Color</h1>
            <p className="mb-4 text-lg">
              By default, all icons have the color value:{" "}
              <span className="rounded bg-gray-200 px-1">currentColor</span>.
              This keyword uses the element's computed text{" "}
              <span className="rounded bg-gray-200 px-1">color</span> value to
              represent the icon color.
            </p>

            <p className="mb-6">
              Read more about{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                currentColor on MDN
              </a>
              .
            </p>

            <h2 id="adjust" className="mb-4 font-semibold text-2xl">
              Adjust the color using the{" "}
              <code className="rounded bg-gray-200 px-1">color</code> prop
            </h2>
            <p className="mb-4">
              The color can be adjusted by passing the color prop to the
              element.
            </p>

            <div className="flex min-h-full bg-black text-white">
              {/* Left side: Code block */}
              <div className="w-1/2 overflow-auto bg-gray-900 p-8">
                <pre className="text-sm leading-relaxed">
                  <code className="text-pink-400">import</code> {"{ "}
                  <span className="text-orange-300">Smile</span> {" } "}
                  <code className="text-pink-400">from</code>
                  <span className="text-blue-400"> "lucide-react"</span>
                  <br />
                  <br />
                  <code className="text-pink-400">function</code>
                  <span className="text-blue-400"> App()</span> {"{"}
                  <br /> <code className="text-pink-400">return</code> {"("}
                  <br /> {"<"}
                  <span className="text-green-400">div</span> className=
                  <span className="text-yellow-300">"app"</span>
                  {">"}
                  <br /> {"<"}
                  <span className="text-green-400">Smile</span>
                  color=<span className="text-yellow-300">"#3e9392"</span>{" "}
                  {"/>"}
                  <br /> {"</"}
                  <span className="text-green-400">div</span>
                  {">"}
                  <br /> {")"}
                  <br />
                  {"};"}
                  <br />
                  <br />
                  <code className="text-pink-400">export default</code>
                  <span className="text-blue-400"> App ;</span>
                </pre>
              </div>

              {/* Right side: Preview */}
              <div className="relative flex w-1/2 items-center justify-center bg-gray-800">
                <Smile color="#3e9392" size={48} />

                {/* Open Sandbox Button */}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 bottom-4 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                >
                  Open Sandbox
                </a>
              </div>
            </div>
            <Separator className="my-6" />

            <h2 id="using" className="mb-4 font-semibold text-2xl">
              Using parent elements text color value{" "}
            </h2>
            <p className="mb-4">
              Because the color of lucide icons uses{" "}
              <span className="rounded bg-gray-200 px-1">currentColor</span>,
              the color of the icon depends on the computed{" "}
              <span className="rounded bg-gray-200 px-1">color</span> of the
              element, or it inherits it from its parent.
              <br />
              <br />
              For example, if a parent element's color value is{" "}
              <span className="rounded bg-gray-200 px-1">#fff</span> and one of
              the children is a lucide icon, the color of the icon will be
              rendered as <span className="rounded bg-gray-200 px-1">#fff</span>
              . This is browser native behavior.
            </p>

            <div className="flex min-h-full bg-black text-white">
              {/* Left side: Code block */}
              <div className="w-1/2 overflow-auto bg-gray-900 p-8">
                <pre className="text-sm leading-relaxed">
                  <code className="text-pink-400">import</code> {"{ "}
                  <span className="text-orange-300">Smile</span> {" } "}
                  <code className="text-pink-400">from</code>
                  <span className="text-blue-400"> "lucide-react"</span>
                  <br />
                  <br />
                  <code className="text-pink-400">function</code>
                  <span className="text-blue-400"> App()</span> {"{"}
                  <br /> <code className="text-pink-400">return</code> {"("}
                  <br /> {"<"}
                  <span className="text-green-400">div</span> className=
                  <span className="text-yellow-300">"app"</span>
                  {">"}
                  <br /> {"<"}
                  <span className="text-green-400">Smile</span>
                  color=<span className="text-yellow-300">"#3e9392"</span>{" "}
                  {"/>"}
                  <br /> {"</"}
                  <span className="text-green-400">div</span>
                  {">"}
                  <br /> {")"}
                  <br />
                  {"};"}
                  <br />
                  <br />
                  <code className="text-pink-400">export default</code>
                  <span className="text-blue-400"> App ;</span>
                </pre>
              </div>

              {/* Right side: Preview */}
              <div className="relative flex w-1/2 items-center justify-center bg-gray-800">
                <ThumbsUp color="white" size={48} />

                {/* Open Sandbox Button */}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 bottom-4 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                >
                  Open Sandbox
                </a>
              </div>
            </div>

            <Separator className="my-6" />
            <p className="mt-8 flex cursor-pointer">
              <FilePenLine size={20} />
              Edit this page
            </p>

            <Separator className="my-6" />
            <div className="flex gap-72 ">
              <span>
                <p className="text-sm">Previous page</p>
                <p className="cursor-pointer">Comparison</p>
              </span>
              <span>
                <p className="text-sm">Next page</p>
                <p className="cursor-pointer">Sizing</p>
              </span>
            </div>
          </main>
        </ScrollArea>

        {/* Right Side Content */}

        <aside className="mt-6 w-full border-t bg-white p-5 md:mt-0 md:h-screen md:w-64 md:border-l">
          <h4 className="font-semibold text-gray-800 text-lg">On This Page</h4>
          <ul className="mt-3 cursor-pointer space-y-2 font-medium text-gray-500 text-sm">
            <li>
              <a href="#adjust" className="hover:text-gray-600">
                Adjust the color using color props
              </a>
            </li>
            <li>
              <a href="#using" className="hover:text-gray-600">
                Using parent elements text color value
              </a>
            </li>
          </ul>

          <Separator className="my-6" />

          <Card>
            <CardContent className="flex flex-col items-center p-5 text-center">
              <Image
                src="/icons.jpg"
                alt="Icon"
                width={500}
                height={300}
                className="flex h-16 w-16 items-center justify-center rounded-lg"
              />
              <p className="mt-3 text-gray-500 text-sm">
                Design and Development tips in your inbox. Every weekday.
              </p>
              <span className="mt-1 text-gray-500 text-xs">ADS VIA CARBON</span>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
