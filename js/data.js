const portfolioData = {
    name: "Livia Junike",
    title: "AI, MACHINE LEARNING, AND DATA ENTHUSIAST",
    about_me: `Saya adalah seorang AI Machine Learning Enthusiast dengan fondasi kuat dalam analisis data, machine learning, dan AI. Saya memiliki pengalaman langsung dengan framework berbasis Python seperti TensorFlow, Keras, dan Scikit-learn, serta mahir dalam pemrosesan dan visualisasi data menggunakan Pandas, NumPy, dan Matplotlib. Saya juga memiliki pemahaman solid tentang algoritma, Object-Oriented Programming, dan manajemen database dengan SQL.

Di luar keterampilan teknis, saya aktif berpartisipasi dalam kompetisi dan proyek terkait data science dan AI, di mana saya menerapkan model untuk memecahkan masalah dunia nyata. Saya juga memiliki pengalaman mengajar sebagai asisten laboratorium, yang telah memperkuat keterampilan komunikasi, pemecahan masalah, dan adaptasi saya.`,
    quote: "Choose courage over comfort - Brené Brown",
    social: {
        github: "https://github.com/junikxz",
        linkedin: "https://linkedin.com/in/liviajunike",
        email: "liviajunike1606@gmail.com"
    },
    skills: [
        "Python", "C", "Java", "HTML", "CSS", "Kotlin", "C#", "SQL"
    ],
    experiences: [
        {
            role: 'AI Engineer Intern',
            company: 'GDP Labs (part of Djarum Group)',
            duration: 'Jan 2026 – Present',
            description: 'Mengembangkan infrastruktur Datastore, Agen Screening CV Otonom, dan mengoptimalkan RAG.',
            full_description: `• Merancang Lapisan Abstraksi Datastore (SQL, Elasticsearch, OpenSearch, Vector DB) yang tersandardisasi untuk memastikan infrastruktur pipeline RAG yang modular dan scalable.
• Mengembangkan Agen Screening CV Otonom menggunakan Google Apps Script dan Gemini API, mengotomatisasi ekstraksi data kandidat dari PDF, serta fitur notifikasi real-time via Google Chat.
• Mengoptimalkan performa sistem RAG melalui internal batching dan asinkronisasi proses untuk menangani data besar, sembari mencegah memory overflow dan timeout.
• Mengimplementasikan Propagasi Enkripsi Reaktif dan paginasi query berbasis offset pada tingkat fungsional untuk memastikan keamanan dan efisiensi pengambilan data lintas backend.
• Menjaga kualitas dan type safety kode menggunakan Pydantic, serta mematuhi prinsip DRY melalui refactoring logika inti yang terpusat.`,
            logo: 'images/gdp.png' // placeholder logo
        },
        {
            role: 'Coding Tutor',
            company: 'Sekolah Harapan Bangsa ModernHill',
            duration: 'Jan 2025 - Present',
            description: 'Memberikan bimbingan coding privat dan grup kecil (2-5 siswa).',
            full_description: `• Memberikan bimbingan coding privat dan grup kecil (2-5 siswa) mengenai dasar pemrograman.
• Secara mandiri merancang kurikulum belajar untuk memperkuat pemahaman siswa tentang bahasa pemrograman serta melatih penyelesaian masalah (problem-solving).
• Memantau perkembangan dan secara rutin memberikan umpan balik (feedback) atas progres siswa.`,
            logo: 'images/shb.jpg' // placeholder logo
        },
        {
            role: 'Google Student Ambassador',
            company: 'Google Indonesia',
            duration: 'Sept 2025 -Present',
            description: 'Mewakili Google di kampus, mempromosikan produk, teknologi, dan program kepada mahasiswa dan fakultas.',
            full_description: `• Mewakili Google di kampus dengan mempromosikan produk, teknologi, dan program kepada mahasiswa dan fakultas.
• Mengorganisir dan memimpin lokakarya, diskusi teknis, dan sesi info untuk meningkatkan kesadaran akan alat dan inisiatif Google.
• Berkolaborasi dengan klub universitas dan organisasi mahasiswa untuk mengintegrasikan teknologi Google ke dalam kegiatan akademik dan ekstrakurikuler.
• Meningkatkan keterampilan kepemimpinan, komunikasi, dan teknis sambil mendorong transformasi digital di kampus.`,
            logo: 'images/google_logo.jpg'
        },
        {
            role: 'Laboratory Assistant (Databases System)',
            company: 'Multimedia Nusantara University',
            duration: 'Aug 2025 - Present',
            description: 'Mengajar Sistem Basis Data untuk sesi lab angkatan 2024 menggunakan MySQL dan NoSQL.',
            full_description: 'Mengajar Sistem Basis Data untuk sesi lab angkatan 2024 menggunakan MySQL dan NoSQL.',
            logo: 'images/umn_logo2.webp'
        },
        {
            role: 'Leader of Artificial Intelligence Commmunity',
            company: 'Multimedia Nusantara University',
            duration: 'April 2025 - Present',
            description: 'Membina kolaborasi dan inovasi di antara mahasiswa yang tertarik pada AI dan machine learning.',
            full_description: `• Membina kolaborasi dan inovasi di antara mahasiswa yang tertarik pada AI dan machine learning.
• Memfasilitasi partisipasi dalam kompetisi AI nasional dan internasional, memastikan bimbingan dan alokasi sumber daya yang tepat.
• Mengelola sumber daya komunitas termasuk alat dan platform kolaboratif untuk mendukung proyek dan penelitian.`,
            logo: 'images/umn_logo2.webp'
        },
        {
            role: 'Laboratory Assistant (Data Structure & Algorithms)',
            company: 'Multimedia Nusantara University',
            duration: 'Feb 2025 - June 2025',
            description: 'Mengajar Struktur Data & Algoritma untuk sesi lab angkatan 2024 menggunakan Bahasa C.',
            full_description: 'Mengajar Struktur Data & Algoritma untuk sesi lab angkatan 2024 menggunakan Bahasa C.',
            logo: 'images/umn_logo2.webp'
        },
        {
            role: 'Secretary (Perkenalan Prodi Informatika 2025)',
            company: 'Multimedia Nusantara University',
            duration: 'Dec 2024 - Sept 2025',
            description: 'Mengelola dokumentasi resmi, mengawasi Divisi Akomodasi, dan berkoordinasi dengan Manajer Proyek.',
            full_description: `• Mengawasi Divisi Akomodasi.
• Berdiskusi dengan Divisi Manajer Proyek dan Komite PPIF lainnya untuk mengelola Program Organisasi.
• Berkomunikasi, berkoordinasi, dan berdiskusi tentang program kerja PPIF dengan departemen Informatika.
• Mengelola dokumentasi resmi termasuk notulen rapat, proposal acara, laporan pertanggungjawaban (LPJ), dan koordinasi administrasi.`,
            logo: 'images/ppif.jpeg'
        },
        {
            role: 'Secretary (Garuda Hacks 6.0)',
            company: 'Multimedia Nusantara University',
            duration: 'April 2025 - July 2025',
            description: 'Menjadi sukarelawan untuk acara Garuda Hacks 6.0, berkolaborasi dengan komite dan HMIF UMN.',
            full_description: `• Menjadi sukarelawan untuk acara Garuda Hacks 6.0.
• Berkolaborasi dengan komite Garuda Hacks 6.0 dan sukarelawan lain dari HMIF UMN untuk mengelola kompetisi Hackathon.
• Berkomunikasi dan berkoordinasi program dengan departemen Informatika.
• Mengelola dokumentasi resmi termasuk proposal acara, perjanjian sewa ruangan, laporan pertanggungjawaban (LPJ), dan koordinasi administrasi.`,
            logo: 'images/garuda_hacks.png'
        },
        {
            role: 'Treasurer (UMN Programming Club)',
            company: 'Multimedia Nusantara University',
            duration: 'Aug 2024 - July 2025',
            description: 'Mengelola sumber daya keuangan klub, termasuk penganggaran, pelacakan pengeluaran, dan alokasi dana.',
            full_description: `• Mengawasi Divisi Hubungan Masyarakat.
• Mengelola sumber daya keuangan klub, termasuk penganggaran, pelacakan pengeluaran, dan alokasi dana untuk program dan acara.
• Menyiapkan laporan keuangan dan dokumen pertanggungjawaban (LPJ) untuk memastikan transparansi.
• Memastikan penggantian biaya dan pembayaran tepat waktu.
• Menerapkan strategi penghematan biaya sambil mempertahankan pelaksanaan acara berkualitas tinggi.`,
            logo: 'images/umnpc.jpeg'
        }
    ],
    projects: [
        {
            title: 'SGP-NET: Sistem Pemantauan Kursi Prioritas Berbasis Scene Graph',
            description: 'Partisipasi dalam kompetisi GEMASTIK 18. Sistem pemantauan kursi prioritas end-to-end yang mengintegrasikan YOLOv8n dan MobileNetV2.',
            full_description: `• Berpartisipasi dalam kompetisi GEMASTIK 18.
• Merancang dan mengembangkan SGP-NET, sistem pemantauan kursi prioritas end-to-end yang mengintegrasikan deteksi objek real-time (YOLOv8n) dan klasifikasi atribut (MobileNetV2, CNN).
• Merancang inovasi inti berbasis Scene Graph untuk memodelkan hubungan spasial dan kontekstual antar entitas (misalnya, kruk penumpang).
• Menerapkan logika keputusan hierarkis cerdas untuk klasifikasi prioritas penumpang otomatis.
• Membuat sistem umpan balik multi-modal adaptif, menggabungkan anotasi visual (OpenCV) dan peringatan audio otomatis (gTTS).`,
            tech_stack: ['Python', 'Tensorflow', 'YOLO', 'gTTs'],
            github_url: '#',
            live_url: null,
            image_url: 'images/sgp.png'
        },
        {
            title: 'Computer Vision dan XAI untuk Mendeteksi Cacat Mikro',
            description: 'Partisipasi dalam Datathon RISTEK UI (peringkat 21/145). Mengembangkan model CV untuk mendeteksi cacat mikro menggunakan deep learning.',
            full_description: `• Berpartisipasi dalam kompetisi Datathon RISTEK UI, mencapai peringkat 21 dari 145 tim.
• Mengembangkan model computer vision untuk mendeteksi cacat mikro pada hasil manufaktur menggunakan teknik deep learning.
• Mengintegrasikan metode Explainable AI (XAI) untuk meningkatkan interpretasi model dan memberikan pengambilan keputusan yang transparan.
• Membangun dan melatih model menggunakan Python, TensorFlow, dan Keras di Google Colab.
• Melakukan pra-pemrosesan data, augmentasi, dan evaluasi untuk mengoptimalkan akurasi.`,
            tech_stack: ['Python', 'Tensorflow', 'Keras'],
            github_url: 'https://github.com/henrysalim/seleksi-datathon-2025',
            live_url: null,
            image_url: 'images/200ok.png'
        },
        {
            title: 'ChatFeiCrafts - AI DIY Companion Menggunakan Meta-LLaMA API',
            description: 'Aplikasi web inovatif untuk seleksi hackathon Hacktiv8 x Meta, ditenagai oleh LLaMA untuk mengubah ide dan bahan kerajinan menjadi proyek nyata.',
            full_description: `• Mengembangkan platform web 'FeiCrafts' sebagai entri untuk seleksi hackathon yang diselenggarakan oleh Hacktiv8 x Meta.
• Mengimplementasikan fitur inti 'AI Vision Crafting' di mana model AI (ditenagai oleh LLaMA dan teknologi vision) menganalisis gambar bahan yang diunggah pengguna.
• AI kemudian secara otomatis menghasilkan ide proyek yang relevan, daftar instruksi langkah demi langkah, estimasi waktu, dan perkiraan harga jual produk.
• Membangun 'ChatFeiCrafts', sebuah chatbot asisten AI menggunakan Meta LLaMA, yang dilatih khusus untuk menjawab pertanyaan seputar DIY dan menolak permintaan di luar topik (guardrails).
• Mengembangkan fitur sosial terintegrasi termasuk Feed Komunitas (untuk pamer karya, like, comment), Marketplace (untuk jual/beli produk), dan jadwal Workshop online.
• Membangun aplikasi menggunakan React (Vite) untuk frontend, dan Supabase untuk backend (Auth, Database, Storage), yang terhubung ke API Meta LLaMA melalui OpenRouter.`,
            tech_stack: ['React', 'Tailwind', 'Supabase', 'Meta-Llama API'],
            github_url: 'https://github.com/henrysalim/diy-llama-project',
            live_url: null,
            image_url: 'images/fei_crafts.png'
        },
        {
            title: 'Prediksi Biaya Konsumsi Listrik',
            description: 'Berpartisipasi dalam Compfest Kaggle. Membangun model regresi untuk memprediksi biaya konsumsi listrik harian.',
            full_description: `• Membangun model regresi untuk memprediksi biaya konsumsi listrik harian menggunakan data historis.
• Menerapkan rekayasa fitur canggih dan pra-pemrosesan dengan Pandas dan NumPy.
• Menerapkan model machine learning termasuk CatBoostRegressor untuk akurasi optimal.
• Berpartisipasi dalam kompetisi Data Science Academy Compfest Kaggle sebagai bagian dari babak kualifikasi.
• Mengevaluasi model menggunakan metrik seperti RMSE untuk meminimalkan kesalahan prediksi.`,
            tech_stack: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'CatboostRegressor'],
            github_url: 'https://github.com/junikxz/Electricity_consumption_prediction',
            live_url: null,
            image_url: 'images/electricity.png'
        },
        {
            title: 'UMN Medical Center Website',
            description: 'Mengembangkan situs web untuk UMN Medical Center menggunakan arsitektur MVC, Laravel, dan TailwindCSS.',
            full_description: `• Mengembangkan situs web menggunakan arsitektur MVC untuk memastikan pemisahan concerns yang jelas dan kode yang dapat dipelihara.
• Membangun antarmuka pengguna dengan TailwindCSS, menciptakan desain yang responsif dan modern.
• Menerapkan layanan backend menggunakan Laravel, termasuk Otentikasi, Keamanan, dan operasi CRUD.
• Menerapkan Otorisasi menggunakan Laravel Permission oleh Spatie untuk memastikan situs web yang lebih aman.`,
            tech_stack: ['Laravel', 'TailwindCSS'],
            github_url: '#',
            live_url: null,
            image_url: 'images/medic.png'
        },
        {
            title: 'Website Budaya Jawa Barat',
            description: 'Merancang dan mengembangkan situs web interaktif yang menampilkan budaya Jawa Barat, termasuk pembaruan cuaca langsung dan terjemahan.',
            full_description: `• Merancang dan mengembangkan situs web interaktif yang menampilkan budaya Jawa Barat, termasuk musik tradisional, tarian, dan arsitektur.
• Mengintegrasikan fitur-fitur seperti pembaruan cuaca langsung dan terjemahan otomatis ke dalam bahasa Sunda.
• Menerapkan UI/UX yang responsif menggunakan ReactJS, memastikan aksesibilitas di seluruh perangkat.
• Berkolaborasi dalam kurasi konten untuk memberikan wawasan budaya yang informatif dan menarik.`,
            tech_stack: ['HTML', 'CSS', 'ReactJs'],
            github_url: 'https://github.com/AgnesDevita/Final-Exam-Introduction-to-Internet-Technology',
            live_url: "https://welcome-to-jawa-barat.vercel.app",
            image_url: 'images/jawa_barat.png'
        },
        {
            title: 'Titanic Data Analysis',
            description: 'Melakukan analisis data eksplorasi (EDA) pada dataset Titanic untuk mengidentifikasi pola kelangsungan hidup penumpang.',
            full_description: `• Melakukan analisis data eksplorasi (EDA) pada dataset Titanic untuk mengidentifikasi pola kelangsungan hidup.
• Menganalisis karakteristik penumpang berdasarkan usia, jenis kelamin, dan status kelangsungan hidup.
• Memvisualisasikan temuan menggunakan Matplotlib untuk mengkomunikasikan wawasan dengan jelas.
• Menerapkan pembersihan data dan eksplorasi fitur dengan Pandas untuk meningkatkan keandalan dataset.
• Mempresentasikan hasil dalam laporan PowerPoint terstruktur sebagai bagian dari proyek akhir.`,
            tech_stack: ['Python', 'Pandas', 'Matplotlib', 'Powerpoint'],
            github_url: 'https://github.com/junikxz/Titanic-Data-Analysis',
            live_url: null,
            image_url: 'images/titanic.png'
        },
        {
            title: 'Website Event Management',
            description: 'Mengembangkan platform web untuk mengelola acara, termasuk registrasi pengguna dan dashboard admin untuk operasi CRUD.',
            full_description: `• Mengembangkan platform berbasis web untuk mengelola acara, termasuk registrasi pengguna dan pendaftaran acara.
• Merancang dashboard admin untuk operasi CRUD (Create, Read, Update, Delete) pada data acara.
• Memastikan otentikasi aman dan akses berbasis peran untuk pengguna dan admin.
• Membangun tata letak yang responsif dan interaktif menggunakan HTML, CSS, dan Laravel.
• Menunjukkan keterampilan pengembangan web full-stack melalui logika backend dan desain frontend.`,
            tech_stack: ['HTML', 'CSS', 'Laravel'],
            github_url: 'https://github.com/junikxz/uts_lec',
            live_url: null,
            image_url: 'images/event.jpg'
        }
    ],
    current_year: new Date().getFullYear()
};
