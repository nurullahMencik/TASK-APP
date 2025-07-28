'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../../redux/slices/authSlice'; 

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    // Hata/başarı mesajlarını göstermek için yeni state
    const [displayMessage, setDisplayMessage] = useState({ type: '', text: '' }); 

    const { email, password } = formData;

    const dispatch = useDispatch();
    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth 
    );

    useEffect(() => {
        if (isError) {
            // Hata mesajını göster
            setDisplayMessage({ type: 'error', text: message || 'Bir hata oluştu.' }); 
        } else if (isSuccess) {
            // Başarı mesajını göster
            setDisplayMessage({ type: 'success', text: 'Giriş başarılı! Yönlendiriliyorsunuz...' }); 
        } else {
            // Durum değiştiğinde mesajı temizle
            setDisplayMessage({ type: '', text: '' }); 
        }

        if (isSuccess || user) { 
            // Giriş başarılıysa veya zaten login ise dashboard'a yönlendir
            const timer = setTimeout(() => { // Kullanıcının mesajı görmesi için kısa gecikme
                router.push('/dashboard');
            }, 1500); 
            return () => clearTimeout(timer); 
        }

        dispatch(reset()); // Redux durumunu sıfırla
    }, [user, isError, isSuccess, message, router, dispatch]);

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yeni bir istek öncesi mesajı temizle
        setDisplayMessage({ type: '', text: '' }); 
        dispatch(login(formData)); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4 font-sans">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-sm md:max-w-md animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-7">
                    Giriş Yap
                </h1>

                {/* Dinamik mesaj alanı */}
                {displayMessage.text && (
                    <div className={`p-3 mb-6 rounded-lg text-sm sm:text-base text-center font-medium ${
                        displayMessage.type === 'error' 
                            ? 'bg-red-100 text-red-700 border border-red-200' 
                            : 'bg-green-100 text-green-700 border border-green-200'
                    } animate-fade-in-down`}>
                        {displayMessage.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* E-posta alanı */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            E-posta
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                            value={email}
                            onChange={handleChange}
                            required
                            placeholder="eposta@example.com"
                        />
                    </div>

                    {/* Şifre alanı */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Şifre
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                            value={password}
                            onChange={handleChange}
                            required
                            placeholder="Şifrenizi girin"
                        />
                    </div>

                    {/* Giriş Yap butonu */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Giriş Yapılıyor...
                            </>
                        ) : (
                            'Giriş Yap'
                        )}
                    </button>
                </form>

                {/* Kayıt ol linki */}
                <p className="text-center text-gray-600 mt-5 text-sm sm:text-base">
                    Hesabın yok mu?{' '}
                    <Link href="/register" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition duration-200">
                        Kayıt Ol
                    </Link>
                </p>
            </div>
        </div>
    );
}