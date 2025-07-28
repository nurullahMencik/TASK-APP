// frontend/app/page.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-8 text-center 
                   bg-gradient-to-br from-purple-700 via-blue-600 to-green-500 font-sans text-white"> 
      
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 sm:mb-8 
                     leading-tight tracking-tight text-white animate-fade-in-down drop-shadow-lg">
        Görev Yönetim Uygulamasına Hoş Geldiniz!
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-white opacity-90 mb-10 sm:mb-12 max-w-3xl leading-relaxed">
        Projelerinizi ve görevlerinizi kolayca takip edin, ekip üyeleriyle işbirliği yapın.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md">
        <Link
          href="/login"
          className="flex-1 bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 
                     rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-blue-300 ring-offset-2"
        >
          Giriş Yap
        </Link>
        <Link
          href="/register"
          className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 
                     rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-blue-300 ring-offset-2"
        >
          Kayıt Ol
        </Link>
      </div>
    </main>
  );
}