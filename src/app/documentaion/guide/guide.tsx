"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LucidePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground md:flex-row">
        <button
          type="button"
          className="w-full border-b bg-stone-200 p-3 text-left text-foreground md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AlignJustify />
        </button>

        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } h-screen overflow-hidden border-r p-5 md:block md:w-64`}
        >
          <ScrollArea className="h-full w-full">
            <div className="h-full pr-3">
              <nav className="cursor-pointer space-y-4 pl-6">
                <h4 className="font-semibold text-foreground text-lg">
                  Introduction
                </h4>
                <ul className="space-y-2 font-medium text-foreground text-sm">
                  <li>
                    <Link
                      href="/documentaion/what-is-lucide"
                      className="hover:text-primary"
                    >
                      What is Lucide?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/install"
                      className="hover:text-primary"
                    >
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/compare"
                      className="hover:text-primary"
                    >
                      Comparison
                    </Link>
                  </li>
                </ul>
                <Separator />

                <h4 className="font-semibold text-foreground text-lg">
                  Basics
                </h4>
                <ul className="space-y-2 font-medium text-foreground text-sm">
                  <li>
                    <Link
                      href="/documentaion/color"
                      className="hover:text-primary"
                    >
                      Color
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/sizing"
                      className="hover:text-primary"
                    >
                      Sizing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/stroke"
                      className="hover:text-primary"
                    >
                      Stroke Width
                    </Link>
                  </li>
                </ul>
                <Separator />

                <h4 className="font-semibold text-foreground text-lg">
                  Advanced
                </h4>
                <ul className="space-y-2 font-medium text-foreground text-sm">
                  <li>
                    <Link
                      href="/documentaion/accessibility"
                      className="hover:text-primary"
                    >
                      Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/global-styling"
                      className="hover:text-primary"
                    >
                      Global Styling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/filled-icons"
                      className="hover:text-primary"
                    >
                      Filled Icons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/aliased-names"
                      className="hover:text-primary"
                    >
                      Aliased Names
                    </Link>
                  </li>
                </ul>
                <Separator />

                <h4 className="font-semibold text-foreground text-lg">
                  Packages
                </h4>
                <ul className="space-y-2 font-medium text-foreground text-sm">
                  <li>
                    <Link
                      href="/documentaion/lucide"
                      className="hover:text-primary"
                    >
                      Lucide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-react"
                      className="hover:text-primary"
                    >
                      Lucide React
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-vue"
                      className="hover:text-primary"
                    >
                      Lucide Vue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-svelte"
                      className="hover:text-primary"
                    >
                      Lucide Svelte
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-solid"
                      className="hover:text-primary"
                    >
                      Lucide Solid
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-react-native"
                      className="hover:text-primary"
                    >
                      Lucide React Native
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-angular"
                      className="hover:text-primary"
                    >
                      Lucide Angular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-preact"
                      className="hover:text-primary"
                    >
                      Lucide Preact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/lucide-static"
                      className="hover:text-primary"
                    >
                      Lucide Static
                    </Link>
                  </li>
                </ul>
                <Separator />

                <h4 className="font-semibold text-foreground text-lg">
                  Contributing
                </h4>
                <ul className="space-y-2 font-medium text-foreground text-sm">
                  <li>
                    <Link
                      href="/documentaion/icon-design-principles"
                      className="hover:text-primary"
                    >
                      Icon Design Principles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/designing-illustration"
                      className="hover:text-primary"
                    >
                      Designing in Illustration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/designing-inkscape"
                      className="hover:text-primary"
                    >
                      Designing in InkSpace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/designing-figma"
                      className="hover:text-primary"
                    >
                      Designing in Figma
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentaion/designing-affinity-designer"
                      className="hover:text-primary"
                    >
                      Designing in Affinity Designer
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <ScrollArea className="h-screen w-full flex-1 p-8">
          <main className="mx-auto max-w-2xl pb-12">
            <h1 className="font-bold text-3xl text-foreground">
              What is Lucide?
            </h1>
            <p className="mt-3 text-foreground text-lg">
              Lucide is an open-source icon library that provides 1000+ vector
              (svg) files for displaying icons and symbols in digital and
              non-digital projects. The library aims to make it easier for
              designers and developers to incorporate icons into their projects
              by providing several official package to make it easier to use
              these icons in your project.
            </p>

            <Separator className="my-6" />

            <h2
              id="available-icons"
              className="font-semibold text-2xl text-foreground"
            >
              Available Icons
            </h2>
            <p className="mt-3 text-foreground text-lg">
              Lucide contains icons with different variants and states, allowing
              users to choose the most suitable icon for their needs. And if a
              desired icon isn't available yet, users can open a design request,
              and the Lucide community contributors will help provide new icons.
              With more icons to choose from, users have more options to work
              with in their projects.
            </p>

            <Separator className="my-6" />

            <h2 className="font-semibold text-2xl text-foreground">
              Complete Set of Icons
            </h2>
            <p className="mt-3 text-foreground text-lg">
              As new applications with specific features arise, Lucide aims to
              provide a complete set of icons for every project. The community
              follows a set of design rules when designing new icons. These
              rules maintain standards for the icons, such as recognizability,
              consistency in style, and readability at all sizes. While
              creativity is valued in new icons, recognizable design conventions
              are important to ensure that the icons are easily identifiable by
              users.
            </p>

            <Separator className="my-6" />

            <h2
              id="code-optimization"
              className="font-semibold text-2xl text-foreground"
            >
              Code Optimizations
            </h2>
            <p className="mt-3 text-foreground text-lg">
              In addition to design, code is also important. Assets like icons
              can significantly increase bandwidth usage in web projects. With
              the growing internet, Lucide has a responsibility to keep their
              assets as small as possible. To achieve this, Lucide uses SVG
              compression and specific code architecture for tree-shaking
              abilities. After tree-shaking, you only ship the icons you used,
              which helps to keep software distribution size to a minimum.
            </p>

            <Separator className="my-6" />

            <h2
              id="accessibility"
              className="font-semibold text-2xl text-foreground"
            >
              Accessibility
            </h2>
            <p className="mt-3 text-foreground text-lg">
              Icons are pictures that show what something means without using
              words. They can be very helpful because they can quickly give
              information.
              <br />
              <br />
              However, not everyone can understand them easily. Read more about
              how to use Lucide in an accessible way.
            </p>

            <Separator className="my-6" />

            <h2
              id="official-packages"
              className="font-semibold text-2xl text-foreground"
            >
              Official Packages
            </h2>
            <p className="mt-3 text-foreground text-lg">
              Lucide's official packages are designed to work on different
              platforms, making it easier for users to integrate icons into
              their projects. The packages are available for various
              technologies, including Web (Vanilla), React, React Native, Vue,
              Vue 3, Svelte, Preact, Solid, Angular, NodeJS and Flutter.
            </p>

            <Separator className="my-6" />

            <h2
              id="community"
              className="font-semibold text-2xl text-foreground"
            >
              Community
            </h2>
            <p className="mt-3 text-foreground text-lg">
              If you have any questions about Lucide, feel free to reach out to
              the community. You can find them on GitHub and Discord.
            </p>

            <p className="mt-8 flex text-primary">
              <FilePenLine size={20} />
              Edit this page
            </p>

            <Separator className="my-6" />
            <span>
              <p className="text-sm">Next page</p>
              <p>Installation</p>
            </span>
          </main>
        </ScrollArea>

        {/* Right Side Content */}

        <aside className="mt-6 w-full border-t p-5 md:mt-0 md:h-screen md:w-64 md:border-l">
          <h4 className="font-semibold text-foreground text-lg">
            On This Page
          </h4>
          <ul className="mt-3 cursor-pointer space-y-2 font-medium text-foreground text-sm">
            <li>
              <a href="#available-icons" className="hover:text-foreground">
                Available Icons
              </a>
            </li>
            <li>
              <a href="#code-optimization" className="hover:text-foreground">
                Code Optimization
              </a>
            </li>
            <li>
              <a href="#accessibility" className="hover:text-foreground">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#official-packages" className="hover:text-foreground">
                Official Packages
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-foreground">
                Community
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
              <p className="mt-3 text-foreground text-sm">
                Design and Development tips in your inbox. Every weekday.
              </p>
              <span className="mt-1 text-foreground text-xs">
                ADS VIA CARBON
              </span>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
