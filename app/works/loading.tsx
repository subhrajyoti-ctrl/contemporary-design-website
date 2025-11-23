export default function WorksLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="h-4 w-24 bg-white/20 rounded mx-auto" />
            <div className="h-12 w-3/4 bg-white/20 rounded mx-auto" />
            <div className="h-6 w-2/3 bg-white/20 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* Filters skeleton */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-24 bg-muted rounded animate-pulse" />
              ))}
            </div>
            <div className="h-9 w-full sm:w-[300px] bg-muted rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Projects grid skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-80 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
