import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6" style={{ background: '#FAFAF8' }}>
      <div className="text-center max-w-[480px]">
        <p className="text-6xl font-bold mb-4" style={{ color: '#EEEDFE' }}>404</p>
        <h1 className="text-2xl font-semibold mb-3" style={{ color: '#26215C' }}>Page not found</h1>
        <p className="text-[#888780] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white no-underline" style={{ background: '#3C3489' }}>
          Back to home
        </Link>
      </div>
    </div>
  )
}
