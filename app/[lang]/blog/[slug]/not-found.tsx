import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Yazı Bulunamadı
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Aradığınız blog yazısı bulunamadı. Blog sayfasına geri dönerek diğer
        yazılara göz atabilirsiniz.
      </p>
      <Link
        href="/tr/blog"
        className="px-6 py-3 bg-gradient-to-r from-[#124ae2] to-cyan-400 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Blog&apos;a Dön
      </Link>
    </div>
  );
}
