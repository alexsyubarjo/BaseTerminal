export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="text-accent-600">//</span> <span className="text-white">{title}</span>
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
