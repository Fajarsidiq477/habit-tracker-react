import "./globals.css";

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: LayoutProps) {
  return (
    <html>
      <body className="min-h-screen bg-slate-50 text-slate-800">
        <div className="flex min-h-screen flex-col">

            {/* Header */}
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">
                            Habit Tracker Pro
                        </h1>
                        <p className="text-sm text-slate-500">
                            Build better habits every day
                        </p>
                    </div>

                    <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        React Fundamentals
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-6xl px-6 py-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-slate-500">
                    © 2026 Habit Tracker Pro • Built with React & Next.js
                </div>
            </footer>

        </div>
      </body>
    </html>
  );
}