# CredBar - Manajemen Keuangan Kelompok yang Transparan



## 📋 Daftar Isi
- [Tentang CredBar](#tentang-credbar)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Instalasi & Setup](#instalasi--setup)
- [Struktur Proyek](#struktur-proyek)
- [Panduan Penggunaan](#panduan-penggunaan)
- [Tim & Kontribusi](#tim--kontribusi)

---

## 🎯 Tentang CredBar

**CredBar** adalah platform manajemen keuangan kelompok yang dirancang untuk Gen Z. Aplikasi ini menyelesaikan masalah klasik: mengelola iuran, patungan, dan hutang di antara teman-teman, keluarga, atau organisasi menjadi mudah, transparan, dan tanpa drama.

### Masalah yang Diselesaikan:
- ❌ **Kurang Transparan**: Pencatatan iuran sering tercampur di chat grup
- ❌ **Nggak Enak Nagih**: Canggung untuk menagih utang teman
- ❌ **Serba Manual & Lupa**: Harus selalu ingat jadwal dan menghitung ulang

### Solusi CredBar:
✅ **Dashboard Terpusat** - Semua anggota lihat status pembayaran real-time  
✅ **Pengingat Otomatis** - Sistem otomatis mengirimkan notifikasi jatuh tempo  
✅ **Laporan Keuangan Instan** - Ekspor laporan PDF dengan sekali klik  

---

## ✨ Fitur Utama

### Untuk User Umum
- **Buat Grup** - Buat grup baru dalam hitungan detik
- **Undang Anggota** - Bagikan link atau email untuk undangan
- **Atur Iuran Berulang** - Buat tagihan otomatis (harian, mingguan, bulanan)
- **Lihat Status Pembayaran** - Dashboard real-time untuk tracking pembayaran
- **Upload Bukti Transfer** - Anggota bisa submit bukti transfer langsung
- **Laporan Keuangan** - Rekap otomatis dan ekspor PDF

### Untuk Admin/Bendahara
- **Validasi Pembayaran** - Konfirmasi pembayaran dari anggota
- **Import Data Massal** - Upload data iuran dari file Excel/CSV
- **Manajemen Anggota** - Tambah, edit, atau hapus anggota grup
- **Laporan Lengkap** - Laporan bulanan, tahunan, dan custom range
- **Pengaturan Grup** - Kelola preferensi dan aturan grup

### Untuk Admin Sistem
- **Dashboard Admin** - Monitor semua grup dan pengguna
- **Validasi Data** - Verifikasi integritas data di sistem
- **Analytics** - Lihat statistik penggunaan aplikasi
- **Laporan Sistem** - Export data untuk audit

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React 19** - Library UI modern
- **Next.js 15** - Framework React dengan App Router
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - Component library berkualitas tinggi

### UI & Interaction
- **Lucide React** - Icon library yang comprehensive
- **React Hook Form** - Form handling yang efisien
- **Zod** - Schema validation
- **Recharts** - Interactive charts untuk analytics
- **Sonner** - Toast notifications

### State & Data
- **React Context** - State management
- **Date-fns** - Date manipulation
- **Embla Carousel** - Carousel component

### Development
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS transformation

---

## 🚀 Instalasi & Setup

### Prerequisite
- Node.js 18+ 
- npm atau yarn

### Langkah-Langkah

1. **Clone Repository**
\`\`\`bash
git clone https://github.com/yourusername/credbar.git
cd credbar
\`\`\`

2. **Install Dependencies**
\`\`\`bash
npm install

yarn install
\`\`\`

3. **Setup Environment Variables**
Buat file `.env.local` di root directory:
\`\`\`env

NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

4. **Jalankan Development Server**
\`\`\`bash
npm run dev

## 💡 Panduan Penggunaan

### Untuk User Baru
1. **Kunjungi Landing Page** - Baca tentang CredBar di halaman beranda
2. **Klik "Daftar Sekarang"** - Buat akun baru (gratis!)
3. **Verifikasi Email** - Cek email dan klik link verifikasi
4. **Buat Grup Pertama** - Masukkan nama grup dan anggota
5. **Mulai Manage Iuran** - Buat iuran dan invite anggota

### Untuk Bendahara/Admin
1. **Login ke Akun** - Gunakan email dan password
2. **Masuk ke Grup** - Pilih grup yang ingin dikelola
3. **Atur Iuran** - Buat iuran berulang atau satu kali
4. **Validasi Pembayaran** - Konfirmasi pembayaran anggota
5. **Export Laporan** - Download laporan PDF sesuai kebutuhan

### Untuk Admin Sistem
1. **Akses Admin Dashboard** - Login dengan akun admin
2. **Monitor Grup** - Lihat semua grup yang aktif
3. **Validate Data** - Periksa integritas data
4. **Export Analytics** - Ambil data untuk reporting

---

## 🎨 Design System

CredBar menggunakan **Glassmorphism** design dengan palet warna:
- **Primary**: Ocean Blue (#0066FF)
- **Secondary**: Mint Green (#00D98E)
- **Accent**: Lavender Purple (#B78EFF)
- **Neutral**: Charcoal Gray & White
- **Success**: Emerald Green (#00C896)

Semua komponennya responsif dan accessible sesuai standar WCAG.

---

## 📱 Responsive Design

- **Mobile-First Approach** - Dioptimalkan untuk smartphone terlebih dahulu
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

---

## 🤝 Tim & Kontribusi

Buatan dengan ❤️ untuk memudahkan kelola keuangan kelompok.

### Cara Berkontribusi
1. Fork repository ini
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 Lisensi

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

---

## 📞 Support & Kontak

- **Email**: support@credbar.com
- **Chat**: Hubungi tim support via dashboard
- **Dokumentasi**: [docs.credbar.com](https://docs.credbar.com)

---

## 🗺️ Roadmap

- [ ] Push notification untuk mobile
- [ ] Dark mode theme selector
- [ ] Multi-currency support
- [ ] Recurring payment automation
- [ ] Advanced analytics & reporting
- [ ] Mobile app (React Native)
- [ ] API public untuk third-party integration

---

**Terima kasih telah menggunakan CredBar!** 🎉

Jika punya saran atau pertanyaan, jangan ragu untuk membuka issue atau menghubungi kami.
