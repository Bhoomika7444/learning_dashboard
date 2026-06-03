export default function CourseCardSkeleton() {
  return (
    <article
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ background: '#13131a', border: '1px solid #1e1e2a' }}
    >
      <header className="flex items-start justify-between">
        <span className="w-9 h-9 rounded-xl bg-[#1e1e2a] skeleton-pulse block" />
        <span className="w-10 h-5 rounded-full bg-[#1e1e2a] skeleton-pulse block" />
      </header>
      <section className="flex flex-col gap-2">
        <span className="h-3.5 w-3/4 rounded bg-[#1e1e2a] skeleton-pulse block" />
        <span className="h-3 w-1/2 rounded bg-[#1e1e2a] skeleton-pulse block" />
      </section>
      <footer className="flex flex-col gap-1.5">
        <span className="h-1.5 w-full rounded-full bg-[#1e1e2a] skeleton-pulse block" />
        <span className="h-3 w-1/3 rounded bg-[#1e1e2a] skeleton-pulse block" />
      </footer>
    </article>
  )
}
