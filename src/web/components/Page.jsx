import Link from "@/web/components/Link.jsx"
import clsx from "clsx"

const Page = (props) => {
  const { children, className } = props

  return (
    <main className="flex flex-col">
      <header className="sticky top-0 flex justify-between border-b bg-white p-2">
        <Link href="/">A dev's blog</Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link href="/sign-up">Sign up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={clsx("flex flex-col p-4", className)}>
        {children}
      </section>
    </main>
  )
}

export default Page
