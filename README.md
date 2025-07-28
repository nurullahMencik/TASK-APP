## TaskAPP
Bu proje, [Projenizin kısa açıklaması, örneğin: bir görev yönetim sistemi, e-ticaret uygulaması, sosyal medya platformu vb.] olarak geliştirilmiştir.

## 🔗 Projenin Canlı Adresi (Deploy Linki)

Bu uygulama [deploy edildiği platform, örn: Vercel, Netlify, Heroku vb.] üzerinde canlıya alınmıştır.
Canlı adrese buradan ulaşabilirsiniz: [CANLI PROJE URL'Sİ BURAYA GELECEK]

## 🛠️ Kullanılan Teknolojiler

Bu projenin geliştirilmesinde aşağıdaki temel teknolojiler ve kütüphaneler kullanılmıştır:

**Frontend:**
* **React / Next.js:** Kullanıcı arayüzü ve sunucu tarafı renderlama için.
* **Tailwind CSS:** Hızlı ve esnek UI tasarımı için.
* **Axios:** Backend API ile iletişim kurmak için HTTP istemcisi.
* **Next.js Router:** Sayfalar arası navigasyon için.
* **React Hooks (useState, useEffect vb.):** Bileşenlerin durum yönetimi ve yan etkileri için.

**Backend:**
* **Node.js:** Sunucu tarafı çalışma zamanı ortamı.
* **Express.js:** Web uygulamaları ve API'ler oluşturmak için web framework'ü.
* **MongoDB:** NoSQL veritabanı.
* **Mongoose:** MongoDB için Object Data Modeling (ODM) kütüphanesi.
* **JWT (JSON Web Tokens):** Kullanıcı kimlik doğrulaması ve yetkilendirmesi için.
* **bcrypt.js:** Şifre güvenliği için hashleme.
* **dotenv:** Ortam değişkenlerini yönetmek için.
* **express-async-handler:** Asenkron Express rotalarında hata yönetimini basitleştirmek için.

## 🏛️ Mimari ve Proje Dizini

Proje, frontend ve backend olmak üzere iki ana bölümden oluşan bir monorepo veya ayrı dizin yapısı kullanılarak geliştirilmiştir.

**Genel Yapı:**

proje-ana-dizini/
├── frontend/
│   ├── app/                    # Next.js uygulaması
│   │   ├── (auth)/             # Kimlik doğrulama sayfaları (login, register)
│   │   ├── create-project/     # Proje oluşturma sayfası
│   │   ├── projects/           # Proje listeleme ve detay sayfaları
│   │   │   ├── [id]/           # Dinamik proje ID'si
│   │   │   │   ├── page.jsx    # Proje detay sayfası
│   │   │   │   └── edit/page.jsx # Proje düzenleme sayfası
│   │   ├── tasks/              # Görev listeleme ve detay sayfaları
│   │   │   ├── [id]/           # Dinamik görev ID'si
│   │   │   │   ├── page.jsx    # Görev detay sayfası
│   │   │   │   ├── edit/page.jsx # Görev düzenleme sayfası
│   │   │   │   └── logs/page.jsx # Görev logları sayfası (yeni eklenen)
│   │   ├── components/         # Yeniden kullanılabilir React bileşenleri
│   │   ├── globals.css         # Global CSS stilleri
│   │   ├── layout.jsx          # Ana layout dosyası
│   │   └── page.jsx            # Ana giriş sayfası
│   ├── public/                 # Statik dosyalar
│   ├── package.json
│   └── tailwind.config.js
├── backend/ (veya server/)
│   ├── config/                 # Veritabanı bağlantı ayarları (db.js)
│   ├── controllers/            # API mantığı ve işleyici fonksiyonlar (userController, 
|   ├──                             projectController, taskController, logController)
│   ├── middleware/             # Kimlik doğrulama ve hata işleme middleware'leri (authMiddleware,      ├   ├──                               errorHandler)
│   ├── models/                 # Mongoose şema ve modelleri (User, Project, Task, Log)
│   ├── routes/                 # API rotaları (userRoutes, projectRoutes, taskRoutes, logRoutes)
│   ├── .env                    # Ortam değişkenleri
│   ├── server.js               # Ana Node.js sunucu dosyası
│   └── package.json
└── README.md                   


## ✨ Ekstra Özellikler

* **Detaylı Loglama Sistemi:** Görevlerin oluşturulması, güncellenmesi ve silinmesi gibi kritik işlemlerin kayıtları `Log` modeli aracılığıyla tutulmaktadır. Her görev için ayrı ayrı log geçmişi görüntülenebilir. Bu sayede görevlerde yapılan tüm değişiklikler ve bu değişiklikleri kimin yaptığı takip edilebilir.
* **Rol Tabanlı Erişim Kontrolü:** Kullanıcılar `admin`, `manager`, `developer` gibi rollere sahip olabilirler. Bu roller, belirli API endpoint'lerine erişimi (örneğin, tüm logları yalnızca adminlerin görmesi gibi) kısıtlamak için kullanılır.
* **Token Tabanlı Kimlik Doğrulama:** JWT kullanılarak kullanıcı oturumları güvenli bir şekilde yönetilir. Her istekte kullanıcının yetkisi doğrulanır.
* **Global Hata Yönetimi:** Middleware aracılığıyla merkezi bir hata işleme sistemi bulunmaktadır, bu da sunucu hatalarının daha düzenli bir şekilde ele alınmasını sağlar.

## 📊 (Opsiyonel) Kısa Diyagram

+------------+        +--------------+        +----------+
|  Kullanıcı | <----> |   Frontend   | <----> |  Backend |
| (Tarayıcı) |        |  (Next.js)   |        | (Node.js/|
+------------+        +--------------+        | Express) |
+----------+
|
V
+----------+
| MongoDB  |
+----------+