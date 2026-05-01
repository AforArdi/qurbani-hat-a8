import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-gray-50 dark:bg-gray-900 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#154734]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the requested resource.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link 
            href="/"
            className="rounded-md bg-[#154734] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Go back home
          </Link>
          <a href="https://www.linkedin.com/in/mohammad-ardi" target="_blank" className="text-sm font-semibold text-gray-900 dark:text-gray-200 hover:text-[#154734] transition-colors">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}