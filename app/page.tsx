import Link from 'next/link';

export default function Page() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">MyApp</div>
          <div>
            <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
      </main>
    </div>
  );
}
