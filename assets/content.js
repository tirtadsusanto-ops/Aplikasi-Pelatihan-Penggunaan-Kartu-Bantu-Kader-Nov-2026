(function(){
"use strict";
const modules = [
  {
    "id": "M01",
    "slug": "ibu-hamil",
    "short": "Ibu Hamil",
    "title": "Pengisian Kartu Ibu Hamil",
    "hook": "Satu isian tepat bisa membantu ibu hamil. Siap mencoba?",
    "sourceFile": "KARTU BUMIL _wide_1.pdf",
    "sourcePages": 4,
    "lessons1": [
      {
        "title": "Kenali ibu dan waktu kunjungannya",
        "text": "Kader memulai kartu ibu hamil dengan identitas yang tepat. Kader membedakan tanggal lahir dari tanggal kunjungan.",
        "bullets": [
          "Kader menulis nama Posyandu, nama ibu, NIK, tanggal lahir, dan umur sesuai data kasus.",
          "Kader melengkapi nama suami, alamat, dusun, RT/RW, desa, kecamatan, dan nomor HP.",
          "Kader mencatat jarak anak sebelumnya, kehamilan anak ke, serta usia kehamilan dalam minggu.",
          "Kader menulis tanggal kunjungan pada baris pemeriksaan yang sama."
        ],
        "example": "Usia kehamilan Ibu Rina adalah 24 minggu. Kader menulis 24 pada kolom minggu kehamilan."
      },
      {
        "title": "Tulis hasil pemeriksaan tanpa tertukar",
        "text": "BB berarti berat badan. LiLA berarti lingkar lengan atas. Kader menyalin hasil pemeriksaan dan kategori yang diberikan petugas.",
        "bullets": [
          "Kader menulis BB dalam kg dan LiLA dalam cm.",
          "Kader memisahkan nilai BB dari hasil kesesuaian BB pada kurva yang diberikan petugas.",
          "Kader mencatat nilai LiLA dan pilihan warna pada kolom yang sesuai.",
          "Kader mencatat tekanan darah dalam mmHg dan hasil kesesuaiannya pada kolom terpisah.",
          "Kader meminta verifikasi kategori LiLA tepat 23,5 cm jika kasus belum memberi kategori."
        ],
        "example": "Petugas memberi LiLA 22 cm dengan kategori merah. Kader mencatat angka 22 dan pilihan merah pada tempat masing-masing."
      },
      {
        "title": "Catat empat jawaban skrining TBC",
        "text": "Kader menanyakan dan mencatat setiap jawaban secara terpisah. Kader tidak menyebut seseorang pasti sakit TBC hanya dari kartu.",
        "bullets": [
          "Kader mencatat batuk terus-menerus.",
          "Kader mencatat demam selama sekurang-kurangnya dua minggu.",
          "Kader mencatat BB tidak naik atau turun selama dua bulan berturut-turut.",
          "Kader mencatat kontak erat dengan orang yang sakit TBC."
        ],
        "example": "Ibu menjawab Ya untuk batuk dan Tidak untuk tiga pertanyaan lain. Kader mempertahankan empat jawaban itu."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Pisahkan pemberian TTD dari konsumsi",
        "text": "TTD adalah tablet tambah darah. Kader mencatat jumlah tablet yang diberikan petugas dan kebiasaan minum ibu pada kolom berbeda.",
        "bullets": [
          "Kader mencatat jumlah tablet yang benar-benar disebut dalam kasus.",
          "Kader memilih Setiap hari atau Tidak setiap hari sesuai jawaban ibu.",
          "Kader mencatat edukasi petugas ketika ibu belum minum setiap hari."
        ],
        "example": "Petugas memberi 30 tablet, tetapi ibu tidak minum setiap hari. Kader menulis 30 dan memilih Tidak setiap hari."
      },
      {
        "title": "Catat makanan tambahan dan kelas ibu",
        "text": "MT berarti makanan tambahan. Kader membedakan pemberian MT, jumlah porsi, konsumsi, dan keikutsertaan kelas ibu.",
        "bullets": [
          "Kader menulis komposisi dan porsi MT yang diberikan petugas kepada bumil KEK.",
          "Kader mencatat konsumsi MT setiap hari atau tidak setiap hari sesuai kasus.",
          "Kader mencatat Ya atau Tidak untuk keikutsertaan kelas ibu hamil.",
          "Kader memakai status yang disediakan kasus ketika MT tidak diberikan."
        ],
        "example": "Petugas tidak memberi MT pada kasus. Kader tidak mengarang jenis makanan atau jumlah porsi."
      },
      {
        "title": "Lengkapi edukasi dan rujukan",
        "text": "Kader menulis edukasi yang diberikan dan tujuan rujukan. Petugas menentukan tindak lanjut yang memerlukan penilaian kesehatan.",
        "bullets": [
          "Kader mencatat edukasi TTD, MT, atau kelas ibu sesuai kebutuhan yang tertulis.",
          "Kader memilih tujuan Pustu, Puskesmas, atau rumah sakit sesuai arahan kasus.",
          "Kader tetap mencatat hasil yang memerlukan verifikasi."
        ],
        "example": "Petugas mengarahkan ibu ke Puskesmas. Kader menulis Puskesmas pada bagian rujukan."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader mempertahankan urutan tekanan darah: angka atas lebih dahulu, lalu angka bawah.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi setiap bagian edukasi dan memilih catatan bernilai sesuai teks arahan petugas. Edukasi pada satu bagian tidak menggantikan bagian lain.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Lembar hasil berisi 120/80 mmHg. Kader menulis 120/80 pada kolom tekanan darah, bukan 80/120."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M01-P1",
          "text": "Ibu menyebut usia kehamilan 24 minggu. Kader menulis angka 24 pada kolom usia kehamilan dalam minggu.",
          "answer": true,
          "explanation": "Kolom tersebut memakai minggu, bukan bulan."
        },
        {
          "id": "M01-P2",
          "text": "Petugas memberikan 30 tablet TTD, tetapi ibu mengaku tidak meminumnya setiap hari. Kader mencatat konsumsi setiap hari karena tablet sudah diberikan.",
          "answer": false,
          "explanation": "Pemberian tablet dan konsumsi mempunyai kolom berbeda."
        },
        {
          "id": "M01-P3",
          "text": "Hasil pengukuran LiLA ibu ialah 22 cm. Kader menyalin angka 22 cm dan memilih kategori merah sesuai keterangan pada kartu.",
          "answer": true,
          "explanation": "Kartu mencantumkan kategori merah untuk LiLA di bawah 23,5 cm."
        },
        {
          "id": "M01-P4",
          "text": "Kasus menyebut ibu tidak mengikuti kelas ibu hamil. Kader mengisi Ya agar semua layanan terlihat lengkap.",
          "answer": false,
          "explanation": "Jawaban harus mengikuti fakta kasus."
        },
        {
          "id": "M01-P5",
          "text": "Petugas menyatakan ibu perlu dirujuk ke Puskesmas. Kader mencatat tujuan Puskesmas pada kolom rujukan.",
          "answer": true,
          "explanation": "Kolom rujukan memuat tujuan tindak lanjut."
        }
      ],
      "mid": [
        {
          "id": "M01-M1",
          "text": "Kunjungan berlangsung pada 7 November 2026. Kader menulis tanggal tersebut pada kolom waktu ke Posyandu.",
          "answer": true,
          "explanation": "Tanggal kunjungan harus dibedakan dari tanggal lahir."
        },
        {
          "id": "M01-M2",
          "text": "Hasil tekanan darah pada lembar kasus ialah 120/80 mmHg. Kader menuliskan 80/120 mmHg pada kartu.",
          "answer": false,
          "explanation": "Urutan sistole dan diastole harus dipertahankan."
        },
        {
          "id": "M01-M3",
          "text": "Ibu belum memberikan informasi kontak erat TBC. Kader menandai Tidak tanpa meminta atau mencatat klarifikasi.",
          "answer": false,
          "explanation": "Informasi yang belum tersedia tidak sama dengan jawaban Tidak."
        },
        {
          "id": "M01-M4",
          "text": "Kasus menyebut batuk Ya, demam Tidak, perubahan BB Tidak, dan kontak erat Tidak. Kader menyalin keempat jawaban secara terpisah.",
          "answer": true,
          "explanation": "Setiap pertanyaan mempunyai kolom tersendiri."
        },
        {
          "id": "M01-M5",
          "text": "Kasus memberikan kategori BB sesuai kurva dari petugas. Kader menyalin kategori itu bersama nilai BB pada kolom yang sesuai.",
          "answer": true,
          "explanation": "Pencatatan menggunakan hasil pemeriksaan yang tersedia."
        }
      ],
      "post": [
        {
          "id": "M01-S1",
          "text": "Ibu mengonsumsi TTD tidak setiap hari. Kader mencatat keadaan itu dan edukasi yang diberikan pada kolom masing-masing.",
          "answer": true,
          "explanation": "Kartu meminta edukasi ketika konsumsi tidak setiap hari."
        },
        {
          "id": "M01-S2",
          "text": "Petugas tidak memberikan MT pada kasus ini. Kader mengarang jumlah porsi agar kolom MT tidak kosong.",
          "answer": false,
          "explanation": "Peserta harus memakai status tidak berlaku atau tidak diberikan sesuai kasus."
        },
        {
          "id": "M01-S3",
          "text": "LiLA ibu tepat 23,5 cm dan kategori belum diberikan petugas. Kader mencatat nilai serta meminta verifikasi kategori.",
          "answer": true,
          "explanation": "Peserta menggunakan alur verifikasi untuk nilai batas."
        },
        {
          "id": "M01-S4",
          "text": "Peserta selesai mengisi kartu ibu hamil, lalu mengunggah kartu nifas untuk kasus yang sama. Aplikasi dapat menerima berkas itu sebagai tugas ibu hamil.",
          "answer": false,
          "explanation": "Modul, kasus, dan jenis kartu harus cocok."
        },
        {
          "id": "M01-S5",
          "text": "Petugas memberikan rencana rujukan pada kasus dengan hasil merah. Kader mempertahankan rencana itu dalam kartu sebelum menyimpan tugas.",
          "answer": true,
          "explanation": "Tindak lanjut yang diperlukan harus tercatat."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas dan kunjungan",
        "indicator": "Peserta menempatkan data identitas dan waktu kunjungan pada kolom yang sesuai dalam kasus simulasi.",
        "material": "Materi 1 membahas identitas, sumber informasi, tanggal kunjungan, serta usia kehamilan dalam minggu.",
        "location": "Halaman 1 dan halaman 3 kolom 1–2"
      },
      {
        "title": "Hasil pemeriksaan",
        "indicator": "Peserta mencatat hasil pemeriksaan beserta satuannya secara tepat pada kasus simulasi.",
        "material": "Materi 1 membahas BB, hasil pembacaan kurva yang disediakan, LiLA, kategori LiLA, sistole/diastole, serta kategori tekanan darah yang diberikan petugas.",
        "location": "Halaman 3 kolom 3–8"
      },
      {
        "title": "Skrining TBC",
        "indicator": "Peserta mendokumentasikan empat jawaban skrining sesuai informasi kasus tanpa menambahkan diagnosis.",
        "material": "Materi 1 membahas batuk, demam, perubahan BB selama dua bulan, dan kontak erat TBC. Materi 2 membahas pencatatan tindak lanjut petugas.",
        "location": "Halaman 3 kolom 9–12"
      },
      {
        "title": "Pemantauan layanan",
        "indicator": "Peserta membedakan pemberian layanan dari konsumsi atau partisipasi sasaran pada kasus simulasi.",
        "material": "Materi 2 membahas jumlah TTD yang diberikan nakes, konsumsi TTD, komposisi dan porsi MT bumil KEK, konsumsi MT, serta keikutsertaan kelas ibu.",
        "location": "Halaman 4 kolom 13–17"
      },
      {
        "title": "Edukasi dan tindak lanjut",
        "indicator": "Peserta melengkapi dokumentasi edukasi dan tujuan rujukan sesuai hasil kasus.",
        "material": "Materi 2 membahas edukasi ketika konsumsi tidak setiap hari atau kelas ibu belum diikuti, pencatatan tujuan rujukan, serta pemeriksaan ulang berkas.",
        "location": "Halaman 2 dan halaman 4 kolom 18–19"
      }
    ]
  },
  {
    "id": "M02",
    "slug": "ibu-nifas",
    "short": "Ibu Nifas",
    "title": "Pengisian Kartu Ibu Nifas dan Menyusui",
    "hook": "Bantu ibu setelah melahirkan lewat kartu yang tepat!",
    "sourceFile": "KARTU NIFAS_Wide_1.pdf",
    "sourcePages": 4,
    "lessons1": [
      {
        "title": "Kenali ibu dan data persalinan",
        "text": "Kader mengisi identitas ibu nifas atau menyusui sesuai kasus. Kader tidak menukar tanggal bersalin dengan tanggal kunjungan.",
        "bullets": [
          "Kader mengisi Posyandu, nama, NIK, tanggal lahir, umur, nama suami, dan alamat.",
          "Kader melengkapi dusun/RT/RW, desa, nomor HP, dan kehamilan anak ke.",
          "Kader mencatat tanggal, tempat, serta cara persalinan: normal atau dengan tindakan.",
          "Kader membedakan BB/TB pada identitas dari BB kunjungan."
        ],
        "example": "Ibu bersalin 1 November dan datang 7 November. Kader menulis kedua tanggal itu pada bagian yang berbeda."
      },
      {
        "title": "Salin BB dan tekanan darah",
        "text": "Kader menulis nilai BB dan tekanan darah beserta satuannya. Kader menggunakan kategori kesesuaian yang diberikan petugas.",
        "bullets": [
          "Kader menulis BB dalam kg dan tekanan darah dalam mmHg.",
          "Kader menulis angka atas tekanan darah lebih dahulu.",
          "Kader mencatat kategori kesesuaian BB dan tekanan darah secara terpisah.",
          "Kader meminta verifikasi jika petugas belum memberi kategori BB nifas."
        ],
        "example": "Petugas belum memberi kategori BB nifas. Kader mencatat nilai BB dan status Perlu verifikasi petugas."
      },
      {
        "title": "Isi skrining TBC satu per satu",
        "text": "Kader mencatat batuk, demam sekurang-kurangnya dua minggu, perubahan BB selama dua bulan, dan kontak erat TBC.",
        "bullets": [
          "Kader mempertahankan setiap jawaban Ya atau Tidak dari kasus.",
          "Kader menulis status belum tersedia ketika suatu pertanyaan belum dijawab.",
          "Kader menyalin tindak lanjut petugas ke bagian rujukan atau catatan."
        ],
        "example": "Ibu belum menjawab pertanyaan demam. Kader tidak menggantinya dengan Tidak."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Bedakan vitamin A yang diberikan dan diminum",
        "text": "Kader mencatat jumlah kapsul vitamin A yang diberikan petugas. Kader mencatat konsumsi ibu pada kolom lain.",
        "bullets": [
          "Kader menulis jumlah kapsul sesuai data kasus.",
          "Kader memilih Ya atau Tidak pada konsumsi vitamin A.",
          "Kader tidak menentukan dosis obat dari contoh latihan."
        ],
        "example": "Kasus menyebut dua kapsul sudah diberikan dan belum diminum. Kader menulis 2 dan memilih Tidak."
      },
      {
        "title": "Catat menyusui dan KB sesuai jawaban",
        "text": "Kader menanyakan status menyusui serta keikutsertaan KB pascapersalinan. Kader tidak mengubah jawaban agar kartu terlihat baik.",
        "bullets": [
          "Kader memilih Ya atau Tidak untuk menyusui.",
          "Kader memilih Ya atau Tidak untuk KB pascapersalinan.",
          "Kader mencatat edukasi yang diberikan petugas ketika layanan atau konsumsi belum terlaksana."
        ],
        "example": "Ibu menyusui tetapi belum mengikuti KB. Kader memilih Ya untuk menyusui dan Tidak untuk KB."
      },
      {
        "title": "Tuliskan edukasi serta tujuan rujukan",
        "text": "Kader mencatat edukasi vitamin A, menyusui, atau KB sesuai arahan kasus. Kader menyimpan alasan dan tujuan rujukan yang diberikan petugas.",
        "bullets": [
          "Kader memilih Pustu, Puskesmas, atau rumah sakit sesuai kasus.",
          "Kader menjaga perbedaan Tidak tersedia dengan angka nol.",
          "Kader melengkapi catatan klarifikasi sebelum menyimpan."
        ],
        "example": "Jumlah kapsul belum disebutkan. Kader menulis Tidak tersedia dalam kasus dan meminta klarifikasi."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader mempertahankan urutan tekanan darah: angka atas lebih dahulu, lalu angka bawah.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi setiap bagian edukasi dan memilih catatan bernilai sesuai teks arahan petugas. Edukasi pada satu bagian tidak menggantikan bagian lain.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Lembar hasil berisi 120/80 mmHg. Kader menulis 120/80 pada kolom tekanan darah, bukan 80/120."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M02-P1",
          "text": "Ibu bersalin pada 1 November dan berkunjung pada 7 November 2026. Kader menulis tanggal 1 November pada kolom tanggal bersalin.",
          "answer": true,
          "explanation": "Tanggal persalinan mempunyai tempat tersendiri."
        },
        {
          "id": "M02-P2",
          "text": "Petugas memberikan dua kapsul vitamin A, tetapi ibu belum mengonsumsinya. Kader menandai konsumsi Ya karena kapsul sudah diberikan.",
          "answer": false,
          "explanation": "Pemberian dan konsumsi harus dibedakan."
        },
        {
          "id": "M02-P3",
          "text": "Ibu menyatakan sedang menyusui. Kader menandai Ya pada kolom menyusui sesuai jawaban kasus.",
          "answer": true,
          "explanation": "Status menyusui mengikuti informasi sasaran."
        },
        {
          "id": "M02-P4",
          "text": "Ibu belum mengikuti KB pascapersalinan. Kader menandai Ya untuk mempercepat penyelesaian kartu.",
          "answer": false,
          "explanation": "Peserta tidak boleh mengubah fakta kasus."
        },
        {
          "id": "M02-P5",
          "text": "Petugas mengarahkan ibu ke Puskesmas. Kader menulis tujuan tersebut pada kolom rujukan.",
          "answer": true,
          "explanation": "Kolom rujukan mendokumentasikan tujuan layanan."
        }
      ],
      "mid": [
        {
          "id": "M02-M1",
          "text": "Kasus memuat BB identitas 58 kg dan BB kunjungan 57 kg. Kader menempatkan kedua nilai pada bagian masing-masing.",
          "answer": true,
          "explanation": "Peserta membedakan data identitas dari hasil kunjungan."
        },
        {
          "id": "M02-M2",
          "text": "Petugas belum memberikan kategori kesesuaian BB nifas. Kader memakai kurva kenaikan BB kehamilan untuk menetapkan kategori.",
          "answer": false,
          "explanation": "Peserta harus meminta verifikasi kategori yang belum tersedia."
        },
        {
          "id": "M02-M3",
          "text": "Tekanan darah pada lembar hasil ialah 118/76 mmHg. Kader menyalin 118/76 beserta satuan tersebut.",
          "answer": true,
          "explanation": "Nilai dan satuan harus dipertahankan."
        },
        {
          "id": "M02-M4",
          "text": "Ibu tidak menjawab pertanyaan demam. Kader menandai Tidak karena tidak melihat ibu demam.",
          "answer": false,
          "explanation": "Jawaban yang belum tersedia tidak boleh diganti dugaan."
        },
        {
          "id": "M02-M5",
          "text": "Kasus menyebut persalinan dengan tindakan. Kader memilih kategori persalinan dengan tindakan pada identitas kartu.",
          "answer": true,
          "explanation": "Jenis persalinan harus mengikuti informasi kasus."
        }
      ],
      "post": [
        {
          "id": "M02-S1",
          "text": "Ibu belum mengonsumsi vitamin A. Kader mencatat Tidak dan edukasi sesuai arahan petugas.",
          "answer": true,
          "explanation": "Kartu memisahkan status konsumsi dari edukasi."
        },
        {
          "id": "M02-S2",
          "text": "Kasus tidak menyebut jumlah kapsul vitamin A. Kader menulis angka dua berdasarkan kebiasaan.",
          "answer": false,
          "explanation": "Peserta tidak boleh mengarang jumlah layanan."
        },
        {
          "id": "M02-S3",
          "text": "Ibu tidak menyusui pada kasus ini. Kader menghapus jawaban Tidak agar sertifikat tugas terlihat baik.",
          "answer": false,
          "explanation": "Penilaian mengukur ketepatan pencatatan, bukan baik buruk keadaan sasaran."
        },
        {
          "id": "M02-S4",
          "text": "Petugas memberikan tindak lanjut rujukan. Kader mencatat tujuan dan alasan yang diberikan pada bagian tindak lanjut atau catatan.",
          "answer": true,
          "explanation": "Tindak lanjut harus dapat ditelusuri."
        },
        {
          "id": "M02-S5",
          "text": "Peserta mengisi kartu lengkap lalu menyimpan berkas dengan nama peserta dan kode M02 sebelum mengunggahnya.",
          "answer": true,
          "explanation": "Identitas tugas harus cocok dengan peserta dan modul."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas dan persalinan",
        "indicator": "Peserta menempatkan identitas dan data persalinan pada kolom yang sesuai dalam kasus simulasi.",
        "material": "Materi 1 membahas tanggal lahir, tanggal bersalin, kehamilan anak ke, BB/TB identitas, tempat bersalin, cara persalinan, serta tanggal kunjungan.",
        "location": "Halaman 1 dan halaman 3 kolom 1"
      },
      {
        "title": "Hasil pemeriksaan",
        "indicator": "Peserta mencatat BB dan tekanan darah dengan satuan serta kategori yang diberikan dalam kasus.",
        "material": "Materi 1 membahas BB kunjungan, hasil penilaian petugas pada kolom kesesuaian, urutan sistole/diastole, dan pemisahan hasil angka dari kategori.",
        "location": "Halaman 3 kolom 2–5"
      },
      {
        "title": "Skrining TBC",
        "indicator": "Peserta mendokumentasikan empat jawaban skrining sesuai informasi kasus.",
        "material": "Materi 1 membahas batuk, demam, perubahan BB dua bulan, dan kontak erat. Materi 2 membahas pencatatan tindak lanjut petugas.",
        "location": "Halaman 3 kolom 6–9"
      },
      {
        "title": "Vitamin A menyusui dan KB",
        "indicator": "Peserta membedakan pemberian vitamin A, konsumsi, menyusui, dan KB pada kasus simulasi.",
        "material": "Materi 2 membahas jumlah kapsul yang diberikan nakes, konsumsi vitamin A, status menyusui, serta keikutsertaan KB pascapersalinan.",
        "location": "Halaman 4 kolom 10–13"
      },
      {
        "title": "Edukasi dan tindak lanjut",
        "indicator": "Peserta melengkapi catatan edukasi dan tujuan rujukan sesuai informasi kasus.",
        "material": "Materi 2 membahas edukasi berdasarkan jawaban sasaran, catatan klarifikasi, tujuan Pustu/Puskesmas/rumah sakit, serta pemeriksaan akhir.",
        "location": "Halaman 2 dan halaman 4 kolom 14–15"
      }
    ]
  },
  {
    "id": "M03",
    "slug": "bayi-balita",
    "short": "Bayi Balita dan Apras",
    "title": "Pengisian Kartu Bayi Balita dan Anak Prasekolah",
    "hook": "Ikuti tumbuh anak. Yuk, isi kartunya dengan cermat!",
    "sourceFile": "KARTU BAYI_wide_1.pdf",
    "sourcePages": 4,
    "lessons1": [
      {
        "title": "Kenali anak dan keluarganya",
        "text": "Kader menulis identitas anak, bukan identitas peserta latihan. Kader mencatat umur anak dalam bulan sesuai tanggal kunjungan.",
        "bullets": [
          "Kader mengisi Posyandu, nama anak, jenis kelamin, NIK, tanggal lahir, BB lahir, dan PB lahir.",
          "Kader melengkapi nama ayah/ibu, alamat, dusun/RT/RW, desa, kecamatan, dan nomor HP.",
          "Kader menulis umur dalam bulan dan tanggal kunjungan.",
          "Kader menyalin checklist perkembangan: Lengkap atau Tidak Lengkap sesuai petugas."
        ],
        "example": "Anak berumur 8 bulan. Kader menulis 8 pada kolom umur dan tidak menggantinya menjadi 8 tahun."
      },
      {
        "title": "Pisahkan hasil setiap pengukuran",
        "text": "Kader menulis hasil ukur dan kategori petugas pada kolom yang sesuai. Satu kategori tidak menggantikan kategori dari indeks lain.",
        "bullets": [
          "Kader mencatat BB, perkembangan BB dibanding sebelumnya, dan kategori BB/umur.",
          "Kader mencatat PB/TB, kategori PB/TB/umur, serta kategori BB/PB atau BB/TB.",
          "Kader mencatat lingkar kepala dan kategorinya.",
          "Kader mencatat LiLA dan kategorinya.",
          "Kader memilih N untuk BB naik dan T untuk BB tidak naik hanya jika hasil itu tersedia."
        ],
        "example": "Petugas menyebut BB/umur normal dan PB/TB/umur pendek. Kader menulis masing-masing pada kolomnya."
      },
      {
        "title": "Gunakan data pembanding yang benar",
        "text": "Kader membutuhkan hasil yang tersedia untuk mencatat perubahan BB. Kader tidak menganggap data yang hilang sebagai hasil tidak naik.",
        "bullets": [
          "Kader mempertahankan status Tidak tersedia dalam kasus jika BB pembanding belum ada.",
          "Kader mempertahankan umur sebenarnya pada lembar lanjutan yang sesuai.",
          "Kader meminta petugas memastikan kategori yang belum diberikan."
        ],
        "example": "BB sebelumnya belum tersedia. Kader tidak langsung memilih T."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Catat skrining TBC dan gejala sakit",
        "text": "Kader mencatat empat jawaban skrining serta gejala sakit pada bagian yang tepat.",
        "bullets": [
          "Kader mencatat batuk, demam sekurang-kurangnya dua minggu, perubahan BB dua bulan, dan kontak erat.",
          "Kader menulis Ya atau Tidak pada gejala sakit.",
          "Kader menyebut gejala sakit jika kasus menyebutkannya.",
          "Kader menyalin tindak lanjut petugas untuk hasil pertumbuhan, perkembangan, atau skrining."
        ],
        "example": "Anak batuk pada kasus. Kader menulis Ya dan menyebut batuk pada uraian gejala."
      },
      {
        "title": "Catat ASI MP-ASI dan layanan sesuai umur",
        "text": "Kader memakai status layanan yang ditetapkan pada kasus. Kader tidak menebak jadwal imunisasi atau pemberian obat.",
        "bullets": [
          "Kader mencatat ASI eksklusif dan MP-ASI sesuai petunjuk kasus.",
          "Kader menulis komposisi atau jenis MP-ASI yang disebutkan.",
          "Kader memisahkan kelengkapan imunisasi sesuai umur dari jenis imunisasi yang diberikan hari itu.",
          "Kader mencatat vitamin A dan obat cacing sesuai data."
        ],
        "example": "Imunisasi anak sudah lengkap, tetapi hari ini tidak ada pemberian. Kader mencatat kedua keadaan itu secara terpisah."
      },
      {
        "title": "Lengkapi MT edukasi dan rujukan",
        "text": "Kader mencatat MT pangan lokal, porsi, dan kepatuhan sesuai informasi petugas. Kader mencatat edukasi dan tujuan rujukan.",
        "bullets": [
          "Kader menyebut sumber protein hewani MP-ASI jika kasus memberikannya.",
          "Kader mencatat status tidak berlaku pada bagian yang ditetapkan kasus.",
          "Kader menulis rujukan sesuai arahan petugas untuk hasil yang memerlukan tindak lanjut.",
          "Kader menulis komposisi MP-ASI, kepatuhan konsumsi MT, uraian gejala, dan catatan bernilai pada bagian yang berbeda."
        ],
        "example": "Kasus menyebut telur sebagai protein hewani. Kader menulis telur pada bagian yang diminta."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader membedakan BB lahir dari BB kunjungan serta PB lahir dari PB/TB kunjungan.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "BB lahir anak adalah 3 kg dan BB kunjungannya 8 kg. Kader menulis kedua angka pada bagian masing-masing."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M03-P1",
          "text": "Anak berumur 8 bulan pada tanggal kunjungan. Kader menulis 8 pada kolom umur bulan.",
          "answer": true,
          "explanation": "Kolom umur menggunakan bulan."
        },
        {
          "id": "M03-P2",
          "text": "BB bulan sebelumnya tidak tersedia. Kader langsung memilih T karena kenaikan BB tidak dapat dihitung.",
          "answer": false,
          "explanation": "Tidak tersedia data pembanding berbeda dari BB tidak naik."
        },
        {
          "id": "M03-P3",
          "text": "Petugas memberikan hasil checklist perkembangan Tidak Lengkap. Kader mempertahankan hasil tersebut pada kartu.",
          "answer": true,
          "explanation": "Peserta menyalin hasil yang diberikan."
        },
        {
          "id": "M03-P4",
          "text": "Kasus menyebut anak menerima imunisasi tertentu. Kader mencatat jenis imunisasi tersebut, bukan hanya menandai Ya.",
          "answer": true,
          "explanation": "Kolom imunisasi juga meminta jenis yang diberikan."
        },
        {
          "id": "M03-P5",
          "text": "Anak memperoleh MT dari nakes. Kader mengisi porsi dengan perkiraan sendiri karena jumlahnya tidak disebutkan.",
          "answer": false,
          "explanation": "Rincian yang tidak tersedia memerlukan klarifikasi."
        }
      ],
      "mid": [
        {
          "id": "M03-M1",
          "text": "Petugas menetapkan kategori BB/umur normal dan PB/TB/umur pendek. Kader menempatkan pendek pada kolom PB/TB/umur.",
          "answer": true,
          "explanation": "Kategori harus masuk ke indeks yang sesuai."
        },
        {
          "id": "M03-M2",
          "text": "Hasil lingkar kepala ialah 44 cm. Kader menulis angka 44 pada kolom LiLA.",
          "answer": false,
          "explanation": "Lingkar kepala dan LiLA mempunyai kolom berbeda."
        },
        {
          "id": "M03-M3",
          "text": "Kasus menyebut BB naik menurut hasil penilaian petugas. Kader memilih N pada kolom perkembangan BB.",
          "answer": true,
          "explanation": "Kartu memakai N untuk BB naik."
        },
        {
          "id": "M03-M4",
          "text": "Petugas memberikan kategori gizi baik pada BB/PB. Kader menggantinya menjadi BB/umur normal karena kedua kategori dianggap sama.",
          "answer": false,
          "explanation": "Indeks pertumbuhan tidak dapat saling menggantikan."
        },
        {
          "id": "M03-M5",
          "text": "Kasus memberi BB lahir 3 kg dan BB kunjungan 8 kg. Kader menempatkan nilai 3 kg pada identitas BB lahir.",
          "answer": true,
          "explanation": "Data kelahiran dan hasil kunjungan harus dipisahkan."
        }
      ],
      "post": [
        {
          "id": "M03-S1",
          "text": "Kasus menetapkan obat cacing tidak berlaku untuk latihan tersebut. Kader memakai status Tidak Berlaku sesuai petunjuk kasus.",
          "answer": true,
          "explanation": "Status tidak berlaku harus dibedakan dari Tidak dan kosong."
        },
        {
          "id": "M03-S2",
          "text": "Kasus memuat gejala sakit. Kader membiarkan uraian gejala kosong karena kolom rujukan sudah terisi.",
          "answer": false,
          "explanation": "Uraian gejala dan rujukan merupakan elemen berbeda."
        },
        {
          "id": "M03-S3",
          "text": "Petugas memberi rencana rujukan untuk checklist perkembangan tidak lengkap. Kader mencatat hasil dan tujuan rujukan tersebut.",
          "answer": true,
          "explanation": "Kartu menghubungkan temuan perkembangan dengan tindak lanjut."
        },
        {
          "id": "M03-S4",
          "text": "Anak berumur 60 bulan. Kader mengubah umurnya menjadi 12 bulan agar sesuai baris cetak.",
          "answer": false,
          "explanation": "Peserta harus memakai lembar lanjutan yang sesuai dan mempertahankan umur sebenarnya."
        },
        {
          "id": "M03-S5",
          "text": "Kasus menyebut MP-ASI berprotein hewani dengan telur. Kader menulis telur pada rincian edukasi atau pemberian makan yang diminta.",
          "answer": true,
          "explanation": "Rincian jenis makanan harus mengikuti kasus."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas umur dan perkembangan",
        "indicator": "Peserta menempatkan identitas, umur, tanggal, dan hasil checklist perkembangan sesuai kasus.",
        "material": "Materi 1 membahas data lahir, identitas orang tua, umur bulan, tanggal kunjungan, serta checklist lengkap atau tidak lengkap.",
        "location": "Halaman 1 dan halaman 3 kolom 1–3"
      },
      {
        "title": "Pertumbuhan dan antropometri",
        "indicator": "Peserta mencatat hasil antropometri dan kategori yang diberikan petugas pada kasus simulasi.",
        "material": "Materi 1 membahas BB, N/T, BB/umur, PB/TB, PB/TB/umur, BB/PB atau BB/TB, lingkar kepala, LiLA, dan kategori masing-masing.",
        "location": "Halaman 3 kolom 4–13"
      },
      {
        "title": "Skrining dan gejala sakit",
        "indicator": "Peserta mendokumentasikan jawaban skrining serta gejala sakit sesuai kasus.",
        "material": "Materi 2 membahas batuk, demam, perubahan BB dua bulan, kontak erat TBC, serta uraian gejala sakit.",
        "location": "Halaman 4 kolom 14–17 dan 25"
      },
      {
        "title": "Pemberian makan dan layanan",
        "indicator": "Peserta membedakan status layanan yang berlaku menurut informasi umur dan kasus.",
        "material": "Materi 2 membahas ASI eksklusif, MP-ASI, jenis imunisasi dan kelengkapannya, vitamin A, obat cacing, MT pangan lokal, porsi, serta kepatuhan.",
        "location": "Halaman 4 kolom 18–23"
      },
      {
        "title": "Edukasi dan tindak lanjut",
        "indicator": "Peserta melengkapi edukasi dan rujukan sesuai hasil simulasi.",
        "material": "Materi 2 membahas pencatatan sumber protein hewani, konseling, tindak lanjut masalah pertumbuhan/perkembangan, rujukan petugas, serta data yang tidak tersedia.",
        "location": "Halaman 2 dan halaman 4 kolom 24 dan 26"
      }
    ]
  },
  {
    "id": "M04",
    "slug": "remaja",
    "short": "Usia Sekolah dan Remaja",
    "title": "Pengisian Kartu Usia Sekolah dan Remaja",
    "hook": "Dengarkan remaja, lalu catat dengan tepat!",
    "sourceFile": "KARTU BANTU PEMERIKSAAN USIA REMAJA.pdf",
    "sourcePages": 5,
    "lessons1": [
      {
        "title": "Bedakan riwayat keluarga dan riwayat diri",
        "text": "Kader mencatat identitas remaja serta nama orang tua. Kader membedakan penyakit pada keluarga dari penyakit pada remaja sendiri.",
        "bullets": [
          "Kader melengkapi nama, jenis kelamin, NIK, tanggal lahir, umur, alamat, status perkawinan, nama orang tua, dan desa.",
          "Kader menanyakan hipertensi, DM, stroke, jantung, asma, kanker, dan kolesterol tinggi pada keluarga serta diri sendiri.",
          "Kader mencatat merokok dan konsumsi tinggi gula, garam, serta lemak sesuai jawaban.",
          "Setiap penyakit pada riwayat keluarga dan riwayat diri mempunyai kolom jawaban sendiri. Data yang belum tersedia tidak boleh diganti menjadi Tidak."
        ],
        "example": "Ayah remaja memiliki DM, tetapi remaja tidak. Kader menandai DM pada riwayat keluarga saja."
      },
      {
        "title": "Isi pemeriksaan pada kolom yang sesuai",
        "text": "Kader mencatat tanggal, BB, TB, dan kategori IMT. Kader memakai hasil serta kategori yang diberikan petugas untuk bagian lain.",
        "bullets": [
          "Kader mencatat lingkar perut, tekanan darah dan kategorinya, serta kategori gula darah sesuai keberlakuan dalam kasus.",
          "Kader mencatat LiLA remaja putri, Hb, dan hasil anemia jika bagian tersebut berlaku dalam kasus.",
          "Kader mempertahankan satuan Hb pada lembar hasil dan meminta verifikasi bila tajuk kartu berbeda.",
          "Kader tidak mengarang angka gula darah ketika kasus hanya memberi kategori."
        ],
        "example": "Lembar hasil memuat Hb 12 g/dL. Kader mempertahankan satuan g/dL dan catatan verifikasi petugas."
      },
      {
        "title": "Catat empat jawaban skrining TBC",
        "text": "Kader mencatat batuk, demam sekurang-kurangnya dua minggu, perubahan BB dua bulan, dan kontak erat TBC.",
        "bullets": [
          "Kader tidak menyatukan beberapa jawaban dalam satu kolom.",
          "Kader memakai status belum tersedia untuk jawaban yang belum ada.",
          "Kader menyalin hasil dan kategori petugas tanpa menggantinya dengan dugaan."
        ],
        "example": "Kontak erat belum ditanyakan. Kader menulis status belum tersedia pada catatan klarifikasi."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Dengarkan delapan bagian psikososial",
        "text": "Kader mencatat jawaban remaja dengan tenang. Kader memisahkan jawaban asli dari simpulan masalah yang ditetapkan petugas.",
        "bullets": [
          "Kader mencatat pertanyaan rumah, sekolah/pekerjaan, pola makan atau tubuh, dan aktivitas pertemanan.",
          "Kader mencatat pertanyaan rokok/alkohol/obat-obatan serta kesehatan seksual.",
          "Kader mencatat pertanyaan rasa aman dan keinginan bunuh diri atau depresi.",
          "Kader tidak menganggap semua jawaban Ya sebagai masalah."
        ],
        "example": "Remaja menjawab Ya ketika ditanya nyaman di rumah. Jawaban itu tidak otomatis berarti masalah rumah."
      },
      {
        "title": "Jaga jawaban yang bersifat pribadi",
        "text": "Kader menyampaikan informasi yang diperlukan kepada petugas penanggung jawab. Kader tidak membagikan jawaban sensitif ke grup umum.",
        "bullets": [
          "Kader mempertahankan status Tidak dijawab oleh sasaran jika remaja belum mau menjawab.",
          "Kader tidak memaksa jawaban menjadi Tidak agar kartu terlihat lengkap.",
          "Kader mengikuti arahan segera dari petugas pada kasus yang menyangkut keselamatan."
        ],
        "example": "Petugas menetapkan tindak lanjut segera. Kader mengikuti arahan itu tanpa menunggu kartu selesai."
      },
      {
        "title": "Tulis simpulan dan tindak lanjut petugas",
        "text": "Kader menyimpan jawaban asli, simpulan petugas, serta tindak lanjut pada kartu dan lembar catatan.",
        "bullets": [
          "Kader menulis tujuan layanan yang diberikan dalam kasus.",
          "Kader menjaga nama dan jawaban orang dalam kasus tetap sesuai.",
          "Kader memastikan catatan tidak mengubah makna jawaban."
        ],
        "example": "Remaja memiliki teman di luar grupnya. Kader memakai pemaknaan petugas sebelum menyimpulkan masalah."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader mempertahankan urutan tekanan darah: angka atas lebih dahulu, lalu angka bawah.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Lembar hasil berisi 120/80 mmHg. Kader menulis 120/80 pada kolom tekanan darah, bukan 80/120."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M04-P1",
          "text": "Remaja melaporkan ayahnya menderita DM, sedangkan dirinya tidak. Kader mencatat DM pada riwayat keluarga.",
          "answer": true,
          "explanation": "Riwayat keluarga harus dibedakan dari riwayat pribadi."
        },
        {
          "id": "M04-P2",
          "text": "Remaja menjawab Ya ketika ditanya merasa nyaman di rumah. Kader langsung menandainya sebagai masalah rumah hanya karena jawabannya Ya.",
          "answer": false,
          "explanation": "Makna jawaban harus mengikuti kalimat pertanyaan dan verifikasi petugas."
        },
        {
          "id": "M04-P3",
          "text": "Kasus menyebut remaja tidak merokok. Kader mengisi Tidak pada perilaku merokok.",
          "answer": true,
          "explanation": "Perilaku harus mengikuti informasi kasus."
        },
        {
          "id": "M04-P4",
          "text": "Kasus menetapkan pemeriksaan tertentu tidak berlaku pada peserta simulasi. Kader mengarang hasil normal agar kartu tampak lengkap.",
          "answer": false,
          "explanation": "Status tidak berlaku harus dicatat sesuai petunjuk kasus."
        },
        {
          "id": "M04-P5",
          "text": "Remaja menyampaikan masalah keamanan dalam skenario. Kader menyampaikan informasi itu kepada petugas yang bertanggung jawab sesuai alur kasus.",
          "answer": true,
          "explanation": "Tindak lanjut menggunakan petugas dan saluran yang ditetapkan."
        }
      ],
      "mid": [
        {
          "id": "M04-M1",
          "text": "Kasus memberi tekanan darah 110/70 mmHg dan kategori normal dari petugas. Kader mencatat angka dan kategori pada kolom berbeda.",
          "answer": true,
          "explanation": "Hasil angka dan kategori mempunyai tempat masing-masing."
        },
        {
          "id": "M04-M2",
          "text": "Lembar hasil Hb memakai satuan g/dL, sedangkan tajuk kartu berbeda. Kader mengganti satuannya menjadi mg/dL tanpa verifikasi.",
          "answer": false,
          "explanation": "Peserta mempertahankan satuan sumber dan meminta verifikasi ketidaksesuaian."
        },
        {
          "id": "M04-M3",
          "text": "Kasus hanya memberikan kategori gula darah normal. Kader mengarang nilai gula darah 100 mg/dL.",
          "answer": false,
          "explanation": "Kartu remaja menyediakan kategori, dan peserta tidak boleh mengarang nilai."
        },
        {
          "id": "M04-M4",
          "text": "Remaja belum menjawab pertanyaan kontak erat. Kader mencatat status belum tersedia pada catatan klarifikasi.",
          "answer": true,
          "explanation": "Status belum tersedia harus dapat ditelusuri."
        },
        {
          "id": "M04-M5",
          "text": "Kasus memuat nama orang tua. Kader menempatkan nama tersebut pada kolom nama orang tua.",
          "answer": true,
          "explanation": "Kartu remaja memiliki kolom nama orang tua."
        }
      ],
      "post": [
        {
          "id": "M04-S1",
          "text": "Remaja menjawab Ya pada pertanyaan mempunyai teman di luar grup. Kader meminta pemaknaan petugas sebelum menetapkan masalah.",
          "answer": true,
          "explanation": "Jawaban positif tidak otomatis sama dengan temuan risiko."
        },
        {
          "id": "M04-S2",
          "text": "Kasus memuat jawaban yang sensitif. Kader menyalinnya ke grup WhatsApp umum untuk meminta pendapat.",
          "answer": false,
          "explanation": "Pelatihan membatasi pembagian data kepada petugas yang bertanggung jawab."
        },
        {
          "id": "M04-S3",
          "text": "Petugas menetapkan tindak lanjut segera pada skenario risiko keselamatan. Kader mencatat dan menjalankan alur tersebut tanpa menunggu kartu selesai.",
          "answer": true,
          "explanation": "Penyelesaian administrasi tidak menunda tindak lanjut yang ditetapkan."
        },
        {
          "id": "M04-S4",
          "text": "Remaja tidak menjawab pertanyaan kesehatan seksual. Kader mengisi Tidak agar penilai menganggapnya lengkap.",
          "answer": false,
          "explanation": "Tidak menjawab berbeda dari jawaban Tidak."
        },
        {
          "id": "M04-S5",
          "text": "Peserta mempertahankan jawaban asli serta catatan interpretasi petugas pada tugas sebelum mengunggahnya.",
          "answer": true,
          "explanation": "Jawaban mentah dan simpulan perlu dapat ditelusuri."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas riwayat dan perilaku",
        "indicator": "Peserta membedakan data pribadi, riwayat keluarga, riwayat diri, serta perilaku sesuai kasus.",
        "material": "Materi 1 membahas identitas, nama orang tua, tujuh jenis riwayat penyakit, dan empat perilaku berisiko.",
        "location": "Halaman 1"
      },
      {
        "title": "Pemeriksaan dan keberlakuan umur",
        "indicator": "Peserta mencatat hasil pemeriksaan pada kelompok umur dan jenis kelamin yang ditetapkan dalam kasus.",
        "material": "Materi 1 membahas tanggal, BB, TB, kategori IMT, lingkar perut, tekanan darah, kategori gula darah, LiLA remaja putri, Hb, dan anemia.",
        "location": "Halaman 3 kolom 1–11"
      },
      {
        "title": "Skrining TBC",
        "indicator": "Peserta mendokumentasikan empat jawaban skrining sesuai informasi kasus.",
        "material": "Materi 1 membahas batuk, demam, perubahan BB dua bulan, dan kontak erat. Materi 2 membahas tindak lanjut petugas.",
        "location": "Halaman 3 kolom 12–15"
      },
      {
        "title": "Pertanyaan psikososial",
        "indicator": "Peserta membedakan jawaban mentah dari simpulan masalah pada delapan domain kasus.",
        "material": "Materi 2 membahas rumah, pendidikan/pekerjaan, pola makan, aktivitas, obat-obatan, kesehatan seksual, keamanan, serta keinginan bunuh diri/depresi.",
        "location": "Halaman 4 kolom 16–23"
      },
      {
        "title": "Kerahasiaan dan tindak lanjut",
        "indicator": "Peserta melengkapi catatan tindak lanjut secara terbatas sesuai kebutuhan kasus.",
        "material": "Materi 2 membahas penyampaian data sensitif kepada petugas yang bertanggung jawab, pencatatan arahan keselamatan, serta pemeriksaan ulang berkas.",
        "location": "Halaman 2 dan tindak lanjut kasus"
      }
    ]
  },
  {
    "id": "M05",
    "slug": "dewasa",
    "short": "Usia Dewasa",
    "title": "Pengisian Kartu Usia Dewasa",
    "hook": "Bisa temukan kolom yang benar pada kartu dewasa?",
    "sourceFile": "KARTU BANTU PEMERIKSAAN USIA DEWASA (18 thn).pdf",
    "sourcePages": 5,
    "lessons1": [
      {
        "title": "Kenali orang dewasa dan riwayatnya",
        "text": "Kader melengkapi identitas, pekerjaan, riwayat penyakit, serta perilaku sesuai kasus.",
        "bullets": [
          "Kader menulis nama, jenis kelamin, NIK, tanggal lahir, umur, alamat, status perkawinan, pekerjaan, dan desa.",
          "Kader membedakan riwayat keluarga dan riwayat diri untuk hipertensi, DM, stroke, jantung, asma, kanker, dan kolesterol tinggi.",
          "Kader mencatat merokok serta konsumsi tinggi gula, garam, dan lemak.",
          "Setiap penyakit pada riwayat keluarga dan riwayat diri mempunyai kolom jawaban sendiri. Data yang belum tersedia tidak boleh diganti menjadi Tidak."
        ],
        "example": "Ibu sasaran memiliki hipertensi, tetapi sasaran tidak. Kader mencatat hipertensi pada riwayat keluarga."
      },
      {
        "title": "Isi sepuluh bagian pemeriksaan",
        "text": "Kader memisahkan angka hasil ukur dari kategori petugas. Kader tidak menukar kolom yang satu dengan kolom lain.",
        "bullets": [
          "Kader mencatat tanggal kunjungan, BB kg, TB cm, dan kategori IMT.",
          "Kader mencatat lingkar perut cm dan LiLA cm pada kolom berbeda.",
          "Kader mencatat sistole/diastole serta kategori tekanan darah.",
          "Kader mencatat GDS dalam mg/dL serta kategori GDS. GDS berarti gula darah sewaktu."
        ],
        "example": "LiLA 25 cm dan lingkar perut 80 cm. Kader tidak menaruh 80 pada kolom LiLA."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Gunakan PUMA pada kasus yang memenuhi syarat",
        "text": "Kartu menyediakan PUMA untuk orang berumur sedikitnya 40 tahun dan merokok. Kader memakai kategori riwayat merokok yang diberikan dalam kasus.",
        "bullets": [
          "Kader memberi skor jenis kelamin: perempuan 0, laki-laki 1.",
          "Kader memberi skor umur:40–49 tahun 0,50–59 tahun 1, dan 60 tahun atau lebih 2.",
          "Kader memberi skor merokok sesuai kategori pada kartu: tidak atau kurang 20 mendapat 0,20–30 mendapat 1, lebih 30 mendapat 2.",
          "Kader mempertahankan kategori riwayat merokok dari petugas, tanpa menebak perhitungan yang belum tersedia."
        ],
        "example": "Laki-laki 55 tahun mendapat skor jenis kelamin 1 dan umur 1."
      },
      {
        "title": "Catat empat jawaban dan jumlahkan skor PUMA",
        "text": "Kader mencatat napas pendek saat berjalan cepat atau menanjak, dahak saat tidak flu, batuk saat tidak flu, serta pernah diminta tes spirometri atau peakflow.",
        "bullets": [
          "Kader memberi 1 poin untuk setiap jawaban Ya dan 0 poin untuk setiap jawaban Tidak.",
          "Kader menjumlahkan skor jenis kelamin, umur, merokok, dan empat pertanyaan.",
          "Kader tidak memberi skor nol untuk jawaban yang belum tersedia.",
          "Kader mencatat nilai tepat 6 dan meminta verifikasi kategori jika kasus belum memberikannya."
        ],
        "example": "Skor 1+1+2+1+1+1+1 menghasilkan jumlah 8."
      },
      {
        "title": "Catat tindak lanjut hasil pemeriksaan",
        "text": "Kader mencatat hasil tinggi atau skor PUMA beserta tindak lanjut petugas. Kader memakai bagian catatan untuk informasi yang tidak mempunyai kolom tersendiri.",
        "bullets": [
          "Kader menyalin rujukan Pustu atau Puskesmas ketika petugas menetapkannya.",
          "Kader mencatat rujukan untuk skor PUMA lebih 6 sesuai petunjuk kartu.",
          "Kader memastikan semua komponen PUMA yang berlaku sudah dicatat."
        ],
        "example": "Jumlah PUMA 7 melebihi 6. Kader mencatat skor 7 dan tujuan rujukan sesuai kasus."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader mempertahankan urutan tekanan darah: angka atas lebih dahulu, lalu angka bawah.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Lembar hasil berisi 120/80 mmHg. Kader menulis 120/80 pada kolom tekanan darah, bukan 80/120."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M05-P1",
          "text": "Ayah sasaran menderita hipertensi, sedangkan sasaran tidak. Kader mencatat hipertensi pada riwayat keluarga.",
          "answer": true,
          "explanation": "Riwayat keluarga berbeda dari riwayat diri."
        },
        {
          "id": "M05-P2",
          "text": "Kasus menyebut BB 60 kg dan TB 165 cm. Kader menukar kedua nilai karena sama-sama angka pemeriksaan.",
          "answer": false,
          "explanation": "Nilai harus masuk ke kolom dan satuan yang sesuai."
        },
        {
          "id": "M05-P3",
          "text": "Sasaran berumur 45 tahun dan merokok. Kader memeriksa bagian PUMA sesuai syarat yang tertulis pada kartu.",
          "answer": true,
          "explanation": "Kartu menyebut usia sedikitnya 40 tahun dan merokok."
        },
        {
          "id": "M05-P4",
          "text": "Petugas memberi kategori tekanan darah tinggi. Kader menggantinya menjadi normal karena sasaran merasa sehat.",
          "answer": false,
          "explanation": "Peserta harus mempertahankan hasil pemeriksaan kasus."
        },
        {
          "id": "M05-P5",
          "text": "Kasus menyebut GDS 180 mg/dL. Kader menyalin nilai dan satuan itu tanpa mengubahnya menjadi mg/L.",
          "answer": true,
          "explanation": "Satuan sumber harus dipertahankan."
        }
      ],
      "mid": [
        {
          "id": "M05-M1",
          "text": "Kasus menyebut nama, jenis kelamin laki-laki, dan umur 55 tahun. Kader memasukkan setiap data pada identitas yang sesuai.",
          "answer": true,
          "explanation": "Identitas harus mengikuti data kasus."
        },
        {
          "id": "M05-M2",
          "text": "Kasus memberi LiLA 25 cm dan lingkar perut 80 cm. Kader menuliskan 80 cm pada kolom LiLA.",
          "answer": false,
          "explanation": "LiLA dan lingkar perut merupakan elemen berbeda."
        },
        {
          "id": "M05-M3",
          "text": "Petugas memberi GDS 100 mg/dL dengan kategori normal. Kader menulis angka dan kategori pada kolom masing-masing.",
          "answer": true,
          "explanation": "Nilai GDS dan kategori perlu dicatat terpisah."
        },
        {
          "id": "M05-M4",
          "text": "Riwayat penyakit pribadi belum tersedia. Kader menandai seluruh penyakit Tidak berdasarkan penampilan sasaran.",
          "answer": false,
          "explanation": "Peserta harus meminta atau mencatat klarifikasi riwayat."
        },
        {
          "id": "M05-M5",
          "text": "Kasus memberi kategori IMT normal dari petugas. Kader menempatkannya pada kolom IMT, bukan kolom gula darah.",
          "answer": true,
          "explanation": "Setiap kategori mempunyai kolom khusus."
        }
      ],
      "post": [
        {
          "id": "M05-S1",
          "text": "Jumlah PUMA pada kasus ialah 7. Kader mencatat skor 7 dan tindak lanjut rujukan sesuai petunjuk kartu.",
          "answer": true,
          "explanation": "Skor 7 melebihi 6."
        },
        {
          "id": "M05-S2",
          "text": "Jumlah PUMA tepat 6. Kader memilih kategori di bawah 6 agar tidak perlu klarifikasi.",
          "answer": false,
          "explanation": "Nilai tepat 6 harus dipertahankan dan diverifikasi."
        },
        {
          "id": "M05-S3",
          "text": "Satu komponen PUMA belum dijawab. Kader menjumlahkannya sebagai nol dan menyatakan hasil lengkap.",
          "answer": false,
          "explanation": "Data yang belum tersedia tidak sama dengan skor nol."
        },
        {
          "id": "M05-S4",
          "text": "Kasus memberi kategori GDS tinggi dan arahan petugas ke Puskesmas. Kader mencatat keduanya pada hasil dan catatan tindak lanjut.",
          "answer": true,
          "explanation": "Kartu mengarahkan hasil tinggi ke layanan primer."
        },
        {
          "id": "M05-S5",
          "text": "Peserta memeriksa tujuh komponen PUMA sebelum mengunggah kartu yang telah diisi.",
          "answer": true,
          "explanation": "Jumlah skor harus berasal dari seluruh komponen yang berlaku."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas riwayat dan perilaku",
        "indicator": "Peserta membedakan identitas, riwayat keluarga, riwayat diri, serta perilaku sesuai kasus.",
        "material": "Materi 1 membahas identitas, pekerjaan, tujuh jenis penyakit dalam riwayat, serta merokok dan konsumsi tinggi gula/garam/lemak.",
        "location": "Halaman 1"
      },
      {
        "title": "Hasil pemeriksaan",
        "indicator": "Peserta mencatat sepuluh elemen kunjungan secara tepat sesuai kasus.",
        "material": "Materi 1 membahas tanggal, BB, TB, kategori IMT, lingkar perut, LiLA, sistole/diastole, kategori tekanan darah, GDS, dan kategori GDS.",
        "location": "Halaman 3 kolom 1–10"
      },
      {
        "title": "Kelayakan dan komponen PUMA",
        "indicator": "Peserta memilih penggunaan PUMA sesuai umur dan status merokok pada kasus.",
        "material": "Materi 2 membahas syarat usia dan merokok, jenis kelamin, kelompok umur, kategori riwayat merokok yang diberikan, serta empat pertanyaan PUMA.",
        "location": "Halaman 4 kolom 11–17"
      },
      {
        "title": "Perhitungan PUMA",
        "indicator": "Peserta menghitung jumlah skor komponen PUMA secara tepat pada kasus yang memenuhi syarat.",
        "material": "Materi 2 membahas skor jenis kelamin, usia, merokok, empat jawaban, penjumlahan, serta pencatatan nilai batas melalui verifikasi petugas.",
        "location": "Halaman 4 kolom 11–18"
      },
      {
        "title": "Tindak lanjut dan pemeriksaan akhir",
        "indicator": "Peserta melengkapi catatan tindak lanjut sesuai kategori pemeriksaan dan arahan kasus.",
        "material": "Materi 2 membahas pencatatan tindak lanjut hasil tinggi, skor PUMA, sumber hasil pemeriksaan, dan pemeriksaan akhir berkas.",
        "location": "Halaman 2–4"
      }
    ]
  },
  {
    "id": "M06",
    "slug": "lansia-aks",
    "short": "Lansia AKS",
    "title": "Pengisian Kartu Lansia Aktivitas Kehidupan Sehari Hari",
    "hook": "Seberapa mandiri lansia? Yuk, catat satu per satu!",
    "sourceFile": "KARTU BANTU PEMERIKSAAN USIA LANSIA (60 thn) AKS.pdf",
    "sourcePages": 4,
    "lessons1": [
      {
        "title": "Kenali lansia dan sumber keterangannya",
        "text": "AKS berarti aktivitas kehidupan sehari-hari. Kader menilai sepuluh kegiatan, bukan tiga puluh kegiatan.",
        "bullets": [
          "Kader menulis nama, jenis kelamin, NIK, tanggal lahir, umur, alamat, status perkawinan, pekerjaan, dan desa sesuai kasus.",
          "Kader mencatat hipertensi, DM, stroke, penyakit jantung, asma, kanker, dan kolesterol tinggi satu per satu pada riwayat keluarga dan riwayat diri.",
          "Kader mencatat merokok serta konsumsi tinggi gula, garam, dan lemak pada empat pilihan terpisah.",
          "Kader menyimpan tanggal dan sumber keterangan pada lembar pendamping.",
          "Kader memilih satu skor setiap kegiatan dan membedakan nomor kolom dari nilai skor.",
          "Setiap penyakit pada riwayat keluarga dan riwayat diri mempunyai kolom jawaban sendiri. Data yang belum tersedia tidak boleh diganti menjadi Tidak."
        ],
        "example": "Angka 30 pada bagian mandi adalah nomor kolom. Angka itu bukan jumlah kegiatan AKS."
      },
      {
        "title": "Nilai BAB BAK dan membersihkan diri",
        "text": "Kader memilih skor berdasarkan keterangan kemampuan pada kasus. BAB adalah buang air besar, dan BAK adalah buang air kecil.",
        "bullets": [
          "BAB: tidak terkendali 0, kadang tidak terkendali satu kali seminggu 1, terkendali teratur 2.",
          "BAK: tidak terkendali atau memakai kateter 0, kadang tidak terkendali satu kali sehari 1, mandiri 2.",
          "Membersihkan diri: perlu bantuan 0, mandiri 1."
        ],
        "example": "Lansia memerlukan pertolongan untuk membersihkan diri. Kader memilih skor 0 pada kegiatan itu."
      },
      {
        "title": "Nilai WC makan dan berpindah",
        "text": "Kader mencatat tingkat bantuan pada tiga kegiatan ini secara terpisah.",
        "bullets": [
          "WC: bergantung 0, dibantu pada sebagian kegiatan 1, mandiri 2.",
          "Makan/minum: tidak mampu 0, perlu bantuan memotong makanan 1, mandiri 2.",
          "Berpindah kursi roda/tempat tidur: tidak mampu 0, banyak bantuan dua orang untuk duduk 1, bantuan minimal satu orang 2, mandiri 3."
        ],
        "example": "Lansia perlu bantuan memotong makanan dan bantuan satu orang saat berpindah. Kader memilih 1 untuk makan dan 2 untuk berpindah."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Nilai berjalan berpakaian tangga dan mandi",
        "text": "Kader melengkapi empat kegiatan yang tersisa. Kader memakai uraian atau skor petugas pada kasus ketika suatu tingkat bantuan belum jelas.",
        "bullets": [
          "Berjalan: kartu menyediakan skor 0–3. Kasus memberi kemampuan atau skor yang harus digunakan.",
          "Berpakaian: bergantung 0, sebagian dibantu 1, mandiri 2.",
          "Naik/turun tangga: tidak mampu 0, perlu bantuan 1, mandiri 2.",
          "Mandi: bergantung 0, mandiri 1."
        ],
        "example": "Lansia mandi dengan bantuan penuh. Kader memilih skor mandi 0, walau lansia bisa makan sendiri."
      },
      {
        "title": "Jumlahkan tepat sepuluh skor",
        "text": "Kader baru membuat jumlah akhir setelah semua kegiatan mempunyai hasil. Jumlah tertinggi pada kartu adalah 20.",
        "bullets": [
          "Kader memakai kategori Mandiri untuk 20.",
          "Kader memakai kategori Ringan untuk 12–19 dan Sedang untuk 9–11.",
          "Kader memakai kategori Berat untuk 5–8 dan Total untuk 0–4.",
          "Kader tidak mengisi skor kegiatan yang belum diketahui dengan dugaan."
        ],
        "example": "Jumlah 19 termasuk Ringan. Kader tidak mengubahnya menjadi Mandiri."
      },
      {
        "title": "Tulis jumlah kategori dan tindak lanjut",
        "text": "Kader menyimpan jumlah skor pada lembar pendamping. Kader menulis tingkat ketergantungan pada kartu dan tindak lanjut sesuai kasus.",
        "bullets": [
          "Kartu mengarahkan skor di bawah 20 ke Pustu atau Puskesmas.",
          "Kader mempertahankan tanggal dan sumber informasi pada lembar pendamping.",
          "Kader memeriksa kembali bahwa hanya satu pilihan yang terisi pada setiap kegiatan."
        ],
        "example": "Sepuluh skor berjumlah 15. Kader menulis 15, memilih Ringan, dan mencatat Puskesmas sesuai arahan kasus."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader memastikan sepuluh kegiatan mempunyai satu skor dan jumlahnya paling tinggi 20.",
          "Kader mencatat sumber informasi, tingkat ketergantungan, serta tindak lanjut sesuai kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Kader menulis jumlah 15 dan kategori Ringan setelah menjumlahkan sepuluh skor pada lembar pendamping."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M06-P1",
          "text": "Lansia membutuhkan bantuan untuk membersihkan diri. Kader memilih skor 0 pada aktivitas membersihkan diri.",
          "answer": true,
          "explanation": "Kartu memberi skor 0 untuk kebutuhan pertolongan."
        },
        {
          "id": "M06-P2",
          "text": "Kader melihat nomor kolom 30 pada kartu lalu menyimpulkan AKS terdiri atas 30 aktivitas.",
          "answer": false,
          "explanation": "Nomor kolom pilihan berbeda dari sepuluh aktivitas AKS."
        },
        {
          "id": "M06-P3",
          "text": "Lansia memerlukan bantuan untuk memotong makanan. Kader memilih skor makan/minum 1.",
          "answer": true,
          "explanation": "Deskripsi tersebut mendapat skor 1 pada kartu."
        },
        {
          "id": "M06-P4",
          "text": "Lansia mandiri menggunakan WC. Kader memilih skor 2 pada aktivitas penggunaan WC.",
          "answer": true,
          "explanation": "Kartu memberi skor 2 untuk mandiri."
        },
        {
          "id": "M06-P5",
          "text": "Keterangan kemampuan mandi belum tersedia. Kader memberi skor 1 agar jumlah skor dapat segera dihitung.",
          "answer": false,
          "explanation": "Peserta harus memperoleh data atau mencatat status belum tersedia."
        }
      ],
      "mid": [
        {
          "id": "M06-M1",
          "text": "Lansia BAB terkendali teratur dan BAK mandiri. Kader mencatat skor 2 untuk setiap aktivitas tersebut.",
          "answer": true,
          "explanation": "Kedua kategori mendapat skor 2 pada kartu."
        },
        {
          "id": "M06-M2",
          "text": "Lansia memerlukan bantuan minimal satu orang saat berpindah. Kader memilih skor berpindah 2.",
          "answer": true,
          "explanation": "Kartu memberi skor 2 untuk bantuan minimal satu orang."
        },
        {
          "id": "M06-M3",
          "text": "Lansia mandiri makan. Kader memilih seluruh opsi skor 0, 1, dan 2 karena ketiganya tercetak dalam satu kelompok.",
          "answer": false,
          "explanation": "Peserta harus memilih tepat satu tingkat kemampuan per aktivitas."
        },
        {
          "id": "M06-M4",
          "text": "Lansia memerlukan bantuan untuk sebagian kegiatan penggunaan WC. Kader memilih skor WC 2 yang menyatakan mandiri.",
          "answer": false,
          "explanation": "Bantuan sebagian pada penggunaan WC mendapat skor 1."
        },
        {
          "id": "M06-M5",
          "text": "Lansia kadang tidak mengendalikan BAB satu kali dalam seminggu. Kader memilih skor BAB 1 sesuai uraian kartu.",
          "answer": true,
          "explanation": "Uraian tersebut tercantum pada pilihan skor 1."
        }
      ],
      "post": [
        {
          "id": "M06-S1",
          "text": "Jumlah sepuluh skor ialah 20. Kader memilih kategori mandiri.",
          "answer": true,
          "explanation": "Kategori mandiri pada kartu mempunyai skor 20."
        },
        {
          "id": "M06-S2",
          "text": "Jumlah sepuluh skor ialah 19. Kader memilih kategori mandiri karena nilainya hampir 20.",
          "answer": false,
          "explanation": "Skor 19 termasuk ketergantungan ringan."
        },
        {
          "id": "M06-S3",
          "text": "Jumlah sepuluh skor ialah 9. Kader memilih ketergantungan sedang dan mencatat tindak lanjut petugas.",
          "answer": true,
          "explanation": "Skor 9–11 termasuk sedang, dan skor di bawah 20 memerlukan rujukan menurut kartu."
        },
        {
          "id": "M06-S4",
          "text": "Satu aktivitas belum diketahui. Kader memberi hasil akhir 20 dengan menganggap aktivitas itu mandiri.",
          "answer": false,
          "explanation": "Peserta tidak boleh mengisi kemampuan berdasarkan dugaan."
        },
        {
          "id": "M06-S5",
          "text": "Peserta mencatat tanggal dan jumlah skor pada lembar pendamping yang terhubung dengan kartu AKS.",
          "answer": true,
          "explanation": "Lembar pendamping mempertahankan keterlacakan tugas."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas dan sumber informasi",
        "indicator": "Peserta mencatat identitas dan sumber keterangan kemampuan lansia sesuai kasus.",
        "material": "Materi 1 membahas identitas, riwayat keluarga/pribadi, empat perilaku, serta keterangan lansia atau pendamping dalam kasus.",
        "location": "Halaman 1 dan lembar pendamping tugas"
      },
      {
        "title": "Aktivitas dasar bagian pertama",
        "indicator": "Peserta memilih satu skor untuk setiap aktivitas BAB, BAK, dan membersihkan diri sesuai kasus.",
        "material": "Materi 1 membahas BAB 0–2, BAK 0–2, dan membersihkan diri 0–1 beserta deskripsi bantuan pada kartu.",
        "location": "Halaman 2 kolom 1–8"
      },
      {
        "title": "Aktivitas dasar bagian kedua",
        "indicator": "Peserta memilih satu skor untuk setiap aktivitas WC, makan/minum, dan berpindah sesuai kasus.",
        "material": "Materi 1 membahas WC 0–2, makan/minum 0–2, dan berpindah kursi roda/tempat tidur 0–3.",
        "location": "Halaman 3 kolom 9–18"
      },
      {
        "title": "Mobilitas dan perawatan diri",
        "indicator": "Peserta memilih satu skor untuk setiap aktivitas berjalan, berpakaian, tangga, dan mandi sesuai kasus.",
        "material": "Materi 2 membahas berjalan 0–3, berpakaian 0–2, tangga 0–2, mandi 0–1, serta pemisahan nomor kolom dari nilai skor.",
        "location": "Halaman 4 kolom 19–30"
      },
      {
        "title": "Jumlah skor dan tindak lanjut",
        "indicator": "Peserta menentukan tingkat ketergantungan berdasarkan jumlah sepuluh skor dalam kasus.",
        "material": "Materi 2 membahas jumlah 0–20, kategori ketergantungan, skor belum lengkap, rujukan skor di bawah 20, serta catatan tanggal dan sumber data pada lembar pendamping.",
        "location": "Halaman 2–4 dan kolom 31"
      }
    ]
  },
  {
    "id": "M07",
    "slug": "lansia-skilas",
    "short": "Lansia SKILAS",
    "title": "Pengisian Kartu Lansia Skrining Lansia Sederhana",
    "hook": "Kenali kebutuhan lansia lewat catatan yang tepat!",
    "sourceFile": "KARTU BANTU PEMERIKSAAN USIA LANSIA 60 thn SKILAS.pdf",
    "sourcePages": 5,
    "lessons1": [
      {
        "title": "Isi identitas dan pemeriksaan umum",
        "text": "SKILAS berarti skrining lansia sederhana. Kader memulai dengan identitas serta hasil pemeriksaan umum.",
        "bullets": [
          "Kader mengisi nama, jenis kelamin, NIK, tanggal lahir, umur, alamat, status perkawinan, pekerjaan, dan desa.",
          "Kader mencatat hipertensi, DM, stroke, penyakit jantung, asma, kanker, dan kolesterol tinggi secara terpisah pada riwayat keluarga dan riwayat diri.",
          "Kader mencatat merokok serta konsumsi tinggi gula, garam, dan lemak pada empat pilihan terpisah.",
          "Kader mencatat tanggal, BB, TB, kategori IMT, lingkar perut, dan LiLA.",
          "Kader mencatat tekanan darah dan kategori, serta GDS dan kategorinya.",
          "Setiap penyakit pada riwayat keluarga dan riwayat diri mempunyai kolom jawaban sendiri. Data yang belum tersedia tidak boleh diganti menjadi Tidak."
        ],
        "example": "Petugas memberi GDS 100 mg/dL dan kategori Normal. Kader menulis keduanya pada kolom berbeda."
      },
      {
        "title": "Catat hasil ingatan dan gerak",
        "text": "Kader mencatat hasil orientasi waktu/tempat, mengulang tiga kata, dan tes berdiri dari kursi. Kader mempertahankan pemaknaan yang diberikan petugas.",
        "bullets": [
          "Kader memisahkan jawaban asli tes dari simpulan ada atau tidaknya gangguan.",
          "Kader tidak menganggap jawaban Ya pada kemampuan berdiri sebagai gangguan.",
          "Kader menulis status hasil belum tersedia jika petugas belum memberi hasil.",
          "Kader memakai lembar pendamping untuk hasil dan penjelasan yang belum cukup tertampung."
        ],
        "example": "Lansia mampu berdiri dan menjawab Ya. Kader memakai simpulan petugas, bukan langsung menyebut gangguan."
      },
      {
        "title": "Bedakan Tidak, kosong, dan belum ada data",
        "text": "Kader menulis jawaban sesuai informasi yang tersedia. Kader tidak mengisi angka atau hasil dengan perkiraan.",
        "bullets": [
          "Kader menulis Tidak jika orang dalam kasus benar-benar menjawab tidak.",
          "Kader menulis Tidak tersedia dalam kasus jika informasi belum diberikan.",
          "Kader menulis Tidak berlaku jika petunjuk kasus menetapkan bagian itu tidak berlaku.",
          "Kader menulis Tidak dapat dilakukan jika suatu tes tidak bisa dijalankan.",
          "Kader menulis Perlu verifikasi petugas jika petugas masih perlu memastikan hasil."
        ],
        "example": "Ibu belum menyebut nomor telepon. Kader menulis Tidak tersedia dalam kasus, bukan angka buatan."
      }
    ],
    "lessons2": [
      {
        "title": "Catat tiga hal tentang makan dan berat badan",
        "text": "Kader mencatat setiap temuan nutrisi pada kolom sendiri.",
        "bullets": [
          "Kader mencatat BB turun lebih 3 kg dalam tiga bulan atau pakaian menjadi longgar.",
          "Kader mencatat hilang nafsu makan atau sulit makan.",
          "Kader mencatat apakah LiLA kurang 21 cm sesuai data.",
          "Kader mempertahankan nilai asli dan kategori petugas."
        ],
        "example": "LiLA 20 cm berada di bawah 21 cm. Kader memilih Ya pada pertanyaan LiLA kurang 21 cm."
      },
      {
        "title": "Catat mata telinga dan suasana perasaan",
        "text": "Kader mencatat hasil yang berbeda pada kolom yang berbeda. Kader tidak menggabungkan hasil tes dengan dugaan.",
        "bullets": [
          "Kader mencatat masalah mata dan hasil tes melihat.",
          "Kader mencatat hasil tes bisik serta pilihan Tidak dapat dilakukan bila tes memang tidak dapat dijalankan.",
          "Kader mencatat perasaan sedih/tertekan/putus asa selama dua minggu terakhir.",
          "Kader mencatat sedikit minat atau kesenangan selama dua minggu terakhir."
        ],
        "example": "Tes bisik tidak dapat dilakukan. Kader memakai status itu, bukan Normal."
      },
      {
        "title": "Simpan temuan dan tindak lanjut",
        "text": "Kader mencatat tanggal skrining serta rujukan sesuai pemaknaan petugas. Kader tidak membuat skor total SKILAS sendiri.",
        "bullets": [
          "Kader memakai hasil positif yang telah dimaknai petugas untuk mencatat tindak lanjut.",
          "Kader menyimpan status Tidak tersedia, Tidak dapat dilakukan, atau Perlu verifikasi secara terpisah.",
          "Kader tidak mengganti jawaban yang belum ada menjadi normal."
        ],
        "example": "Petugas mengarahkan lansia ke Puskesmas setelah menemukan masalah. Kader mencatat tujuan rujukan tersebut."
      },
      {
        "title": "Periksa kartu sebelum disimpan",
        "text": "Kader membaca kembali kartu dari identitas sampai tindak lanjut. Kader mencocokkan angka, satuan, dan pilihan dengan kasus.",
        "bullets": [
          "Kader memastikan nama orang dalam kasus berbeda dari nama peserta pelatihan.",
          "Kader mempertahankan urutan tekanan darah: angka atas lebih dahulu, lalu angka bawah.",
          "Kader mencatat tujuan rujukan dan edukasi sesuai arahan kasus.",
          "Kader memakai lembar catatan untuk hasil atau status yang belum mempunyai tempat pada kartu.",
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan lembar tugas."
        ],
        "example": "Lembar hasil berisi 120/80 mmHg. Kader menulis 120/80 pada kolom tekanan darah, bukan 80/120."
      }
    ],
    "questions": {
      "pre": [
        {
          "id": "M07-P1",
          "text": "Petugas melaporkan gangguan orientasi pada kasus. Kader mencatat hasil dan pemaknaan petugas pada bagian kognitif.",
          "answer": true,
          "explanation": "Peserta harus membedakan hasil mentah dari simpulan."
        },
        {
          "id": "M07-P2",
          "text": "Tes bisik tidak dapat dilakukan pada kasus. Kader mencatat hasil normal.",
          "answer": false,
          "explanation": "Tidak dapat dilakukan berbeda dari hasil normal."
        },
        {
          "id": "M07-P3",
          "text": "Lansia melaporkan BB turun 4 kg dalam tiga bulan. Kader menandai Ya pada pertanyaan penurunan BB lebih dari 3 kg.",
          "answer": true,
          "explanation": "Nilai 4 kg memenuhi kondisi yang tercetak pada kartu."
        },
        {
          "id": "M07-P4",
          "text": "Lansia tidak mengalami hilang nafsu makan atau kesulitan makan dalam kasus. Kader menandai Tidak pada pertanyaan itu.",
          "answer": true,
          "explanation": "Jawaban harus mengikuti informasi kasus."
        },
        {
          "id": "M07-P5",
          "text": "Kader menjumlahkan semua jawaban Ya lalu menyebutnya sebagai skor total SKILAS resmi.",
          "answer": false,
          "explanation": "Kartu tidak menetapkan skor total SKILAS."
        }
      ],
      "mid": [
        {
          "id": "M07-M1",
          "text": "Kasus memberi LiLA 25 cm pada pemeriksaan umum. Kader menulis 25 cm pada kolom LiLA.",
          "answer": true,
          "explanation": "Nilai dan satuan harus mengikuti data pemeriksaan."
        },
        {
          "id": "M07-M2",
          "text": "Lansia mampu berdiri dan jawaban mentahnya ditulis Ya. Kader langsung menganggapnya gangguan mobilitas tanpa pemaknaan petugas.",
          "answer": false,
          "explanation": "Arah jawaban tes harus ditentukan sebelum penilaian risiko."
        },
        {
          "id": "M07-M3",
          "text": "Lembar hasil memberi GDS dan kategorinya. Kader mencatat keduanya pada bagian pemeriksaan umum.",
          "answer": true,
          "explanation": "Nilai GDS dan kategori mempunyai kolom tersendiri."
        },
        {
          "id": "M07-M4",
          "text": "Hasil pengulangan tiga kata belum tersedia pada kasus. Kader menulis tidak ditemukan gangguan tanpa hasil petugas.",
          "answer": false,
          "explanation": "Peserta tidak boleh mengganti hasil yang belum tersedia dengan hasil normal."
        },
        {
          "id": "M07-M5",
          "text": "Petugas memberikan hasil orientasi beserta pemaknaannya. Kader mempertahankan keduanya pada kartu dan lembar pendamping.",
          "answer": true,
          "explanation": "Hasil tes dan pemaknaannya harus dapat ditelusuri."
        }
      ],
      "post": [
        {
          "id": "M07-S1",
          "text": "Lansia melaporkan perasaan sedih dalam dua minggu terakhir. Kader menyalin jawaban itu dan tindak lanjut petugas.",
          "answer": true,
          "explanation": "Kartu memuat rentang dua minggu untuk pertanyaan gejala depresi."
        },
        {
          "id": "M07-S2",
          "text": "Lansia kehilangan minat dalam dua minggu terakhir. Kader menggabungkannya dengan jawaban sedih sehingga satu kolom dibiarkan kosong.",
          "answer": false,
          "explanation": "Kedua pertanyaan mempunyai kolom berbeda."
        },
        {
          "id": "M07-S3",
          "text": "Petugas memaknai satu temuan sebagai positif dan memberikan rencana rujukan. Kader mencatat temuan dan tujuan rujukan.",
          "answer": true,
          "explanation": "Tindak lanjut mengikuti temuan yang sudah diverifikasi."
        },
        {
          "id": "M07-S4",
          "text": "Satu hasil tes belum tersedia. Kader mengisinya sebagai normal untuk memperoleh sertifikat.",
          "answer": false,
          "explanation": "Data yang belum tersedia tidak boleh diganti hasil normal."
        },
        {
          "id": "M07-S5",
          "text": "Peserta mempertahankan status tidak dapat dilakukan pada tes bisik dan mengajukan verifikasi kepada petugas.",
          "answer": true,
          "explanation": "Peserta memakai alur verifikasi untuk tes yang tidak dapat dilakukan."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas dan pemeriksaan umum",
        "indicator": "Peserta mencatat identitas serta hasil pemeriksaan sesuai kasus simulasi.",
        "material": "Materi 1 membahas riwayat, perilaku, tanggal, BB, TB, kategori IMT, lingkar perut, LiLA, tekanan darah, serta GDS dan kategorinya.",
        "location": "Halaman 1–2 kolom pemeriksaan 1–10"
      },
      {
        "title": "Kognitif dan mobilitas",
        "indicator": "Peserta membedakan hasil tes mentah dari simpulan petugas pada domain kognitif dan mobilitas.",
        "material": "Materi 1 membahas orientasi waktu/tempat, mengulang tiga kata, serta tes berdiri dari kursi. Materi memakai hasil tes dan pemaknaan yang telah diberikan petugas.",
        "location": "Halaman 3 kolom SKILAS 2–4"
      },
      {
        "title": "Nutrisi",
        "indicator": "Peserta mencatat tiga temuan nutrisi sesuai informasi kasus.",
        "material": "Materi 2 membahas penurunan BB lebih dari 3 kg dalam tiga bulan atau pakaian longgar, hilang nafsu makan/kesulitan makan, serta LiLA di bawah 21 cm.",
        "location": "Halaman 3 kolom SKILAS 5–7"
      },
      {
        "title": "Penglihatan pendengaran dan suasana perasaan",
        "indicator": "Peserta mencatat hasil tiga domain sesuai informasi dan status pelaksanaan tes dalam kasus.",
        "material": "Materi 2 membahas masalah mata, tes melihat, tes bisik, tidak dapat dilakukan, serta dua pertanyaan gejala depresi dalam dua minggu.",
        "location": "Halaman 4 kolom SKILAS 8–13"
      },
      {
        "title": "Tindak lanjut dan pemeriksaan akhir",
        "indicator": "Peserta melengkapi catatan tindak lanjut sesuai temuan yang telah dimaknai petugas.",
        "material": "Materi 2 membahas tanggal skrining, hasil positif yang terverifikasi, pencatatan rujukan, data belum tersedia, serta pemeriksaan akhir.",
        "location": "Halaman 3 kolom 1 dan lembar pendamping"
      }
    ]
  }
];
const curriculumCoverage = {
  "M01": {
    "Posyandu": "posyandu",
    "Nama": "nama",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Nama suami": "nama_suami",
    "Alamat": "alamat",
    "Dusun": "dusun",
    "RT": "rt",
    "RW": "rw",
    "Desa/kelurahan/nagari": "desa",
    "Nomor HP": "nomor_hp",
    "Hamil anak ke": "hamil_anak_ke",
    "Kecamatan": "kecamatan",
    "Jarak anak sebelumnya": "jarak_anak",
    "Tanggal kunjungan": "tanggal",
    "Usia kehamilan (minggu)": "minggu",
    "BB (kg)": "bb",
    "Kesesuaian BB dari petugas": "bb_sesuai",
    "LiLA (cm)": "lila",
    "Kategori LiLA": "lila_kategori",
    "Tekanan darah (mmHg)": "td",
    "Kesesuaian tekanan darah dari petugas": "td_sesuai",
    "Batuk terus-menerus": "tbc_batuk",
    "Demam sekurang-kurangnya dua minggu": "tbc_demam",
    "BB tidak naik atau turun dua bulan berturut-turut": "tbc_bb",
    "Kontak erat TBC": "tbc_kontak",
    "TTD diberikan nakes (tablet)": "ttd_jumlah",
    "Konsumsi TTD": "ttd_minum",
    "MT komposisi": "mt_komposisi",
    "MT porsi": "mt_porsi",
    "Konsumsi MT": "mt_konsumsi",
    "Mengikuti kelas ibu": "kelas",
    "Edukasi TTD": "edukasi",
    "Edukasi kelas ibu": "edukasi_kelas",
    "Tujuan rujukan": "rujukan",
    "Catatan": "catatan"
  },
  "M02": {
    "Posyandu": "posyandu",
    "Nama": "nama",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Nama suami": "nama_suami",
    "Alamat": "alamat",
    "Dusun": "dusun",
    "RT": "rt",
    "RW": "rw",
    "Desa/kelurahan/nagari": "desa",
    "Nomor HP": "nomor_hp",
    "Hamil anak ke": "hamil_anak_ke",
    "Tanggal bersalin": "tanggal_bersalin",
    "BB identitas (kg)": "bb_identitas",
    "TB identitas (cm)": "tb",
    "Tempat bersalin": "tempat_bersalin",
    "Cara persalinan": "cara_bersalin",
    "Tanggal kunjungan": "tanggal",
    "BB kunjungan (kg)": "bb_kunjungan",
    "Kesesuaian BB dari petugas": "bb_sesuai",
    "Tekanan darah (mmHg)": "td",
    "Kesesuaian tekanan darah dari petugas": "td_sesuai",
    "Batuk terus-menerus": "tbc_batuk",
    "Demam sekurang-kurangnya dua minggu": "tbc_demam",
    "BB tidak naik atau turun dua bulan berturut-turut": "tbc_bb",
    "Kontak erat TBC": "tbc_kontak",
    "Vitamin A diberikan nakes (kapsul)": "vit_jumlah",
    "Konsumsi vitamin A": "vit_konsumsi",
    "Menyusui": "menyusui",
    "KB pascapersalinan": "kb",
    "Edukasi vitamin A": "edukasi",
    "Edukasi KB": "edukasi_kb",
    "Tujuan rujukan": "rujukan",
    "Catatan": "catatan"
  },
  "M03": {
    "Posyandu": "posyandu",
    "Nama anak": "nama",
    "Jenis kelamin": "jenis_kelamin",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "BB lahir (kg)": "bb_lahir",
    "PB lahir (cm)": "pb_lahir",
    "Nama ayah": "nama_ayah",
    "Nama ibu": "nama_ibu",
    "Alamat": "alamat",
    "Dusun": "dusun",
    "RT": "rt",
    "RW": "rw",
    "Desa/kelurahan/nagari": "desa",
    "Kecamatan": "kecamatan",
    "Nomor HP": "nomor_hp",
    "Umur (bulan)": "umur_bulan",
    "Tanggal kunjungan": "tanggal",
    "Checklist perkembangan": "perkembangan",
    "BB (kg)": "bb",
    "Perkembangan BB dari petugas": "bb_naik",
    "Kategori BB/umur dari petugas": "bb_umur",
    "PB/TB (cm)": "pbtb",
    "Kategori PB/TB/umur dari petugas": "pbtb_umur",
    "Kategori BB/PB atau BB/TB dari petugas": "bb_pbtb",
    "Lingkar kepala (cm)": "lingkar_kepala",
    "Kategori lingkar kepala dari petugas": "kategori_kepala",
    "LiLA (cm)": "lila",
    "Kategori LiLA dari petugas": "kategori_lila",
    "Batuk terus-menerus": "tbc_batuk",
    "Demam sekurang-kurangnya dua minggu": "tbc_demam",
    "BB tidak naik atau turun dua bulan berturut-turut": "tbc_bb",
    "Kontak erat TBC": "tbc_kontak",
    "ASI eksklusif": "asi",
    "MP-ASI sesuai umur dari petugas": "mpasi",
    "Komposisi MP-ASI": "komposisi_mpasi",
    "Imunisasi lengkap sesuai umur dari petugas": "imunisasi",
    "Jenis imunisasi diberikan pada kunjungan": "jenis_imunisasi",
    "Vitamin A pada kasus": "vitamin_a",
    "Obat cacing": "obat_cacing",
    "MT pemulihan diberikan": "mt",
    "MT porsi": "mt_porsi",
    "Kepatuhan konsumsi MT": "mt_kepatuhan",
    "Edukasi": "edukasi",
    "Gejala sakit": "gejala_sakit",
    "Uraian gejala sakit": "uraian_gejala",
    "Tujuan rujukan": "rujukan",
    "Catatan": "catatan"
  },
  "M04": {
    "Nama": "nama",
    "Jenis kelamin": "jenis_kelamin",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Alamat": "alamat",
    "Status perkawinan": "status_perkawinan",
    "Desa": "desa",
    "Riwayat keluarga Hipertensi": "riwayat_keluarga_hipertensi",
    "Riwayat keluarga DM": "riwayat_keluarga_dm",
    "Riwayat keluarga Stroke": "riwayat_keluarga_stroke",
    "Riwayat keluarga Jantung": "riwayat_keluarga_jantung",
    "Riwayat keluarga Asma": "riwayat_keluarga_asma",
    "Riwayat keluarga Kanker": "riwayat_keluarga_kanker",
    "Riwayat keluarga Kolesterol tinggi": "riwayat_keluarga_kolesterol_tinggi",
    "Riwayat diri Hipertensi": "riwayat_diri_hipertensi",
    "Riwayat diri DM": "riwayat_diri_dm",
    "Riwayat diri Stroke": "riwayat_diri_stroke",
    "Riwayat diri Jantung": "riwayat_diri_jantung",
    "Riwayat diri Asma": "riwayat_diri_asma",
    "Riwayat diri Kanker": "riwayat_diri_kanker",
    "Riwayat diri Kolesterol tinggi": "riwayat_diri_kolesterol_tinggi",
    "Perilaku Merokok": "merokok",
    "Perilaku Tinggi gula": "perilaku_tinggi_gula",
    "Perilaku Tinggi garam": "perilaku_tinggi_garam",
    "Perilaku Tinggi lemak": "perilaku_tinggi_lemak",
    "Nama orang tua": "nama_orang_tua",
    "Tanggal kunjungan": "tanggal",
    "BB (kg)": "bb",
    "TB (cm)": "tb",
    "Kategori IMT dari petugas": "imt",
    "Lingkar perut (cm)": "lingkar_perut",
    "Tekanan darah (mmHg)": "td",
    "Kategori tekanan darah dari petugas": "td_kategori",
    "Kategori gula darah dari petugas": "gula_kategori",
    "LiLA remaja putri (cm)": "lila",
    "Hb sesuai lembar hasil": "hb",
    "Anemia menurut petugas": "anemia",
    "Batuk terus-menerus": "tbc_batuk",
    "Demam sekurang-kurangnya dua minggu": "tbc_demam",
    "BB tidak naik atau turun dua bulan berturut-turut": "tbc_bb",
    "Kontak erat TBC": "tbc_kontak",
    "Nyaman di rumah": "rumah",
    "Beban di sekolah": "sekolah",
    "Hal disukai/tidak disukai pada tubuh": "tubuh",
    "Teman di luar grup": "teman",
    "Pernah konsumsi rokok/alkohol/narkoba": "obat",
    "Pernah hubungan seksual": "seksual",
    "Merasa tidak aman": "tidak_aman",
    "Pernah ingin bunuh diri": "bunuh_diri",
    "Simpulan petugas psikososial": "simpulan",
    "Tindak lanjut petugas": "rujukan",
    "Catatan": "catatan"
  },
  "M05": {
    "Nama": "nama",
    "Jenis kelamin": "jenis_kelamin",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Alamat": "alamat",
    "Status perkawinan": "status_perkawinan",
    "Desa": "desa",
    "Pekerjaan": "pekerjaan",
    "Riwayat keluarga Hipertensi": "riwayat_keluarga_hipertensi",
    "Riwayat keluarga DM": "riwayat_keluarga_dm",
    "Riwayat keluarga Stroke": "riwayat_keluarga_stroke",
    "Riwayat keluarga Jantung": "riwayat_keluarga_jantung",
    "Riwayat keluarga Asma": "riwayat_keluarga_asma",
    "Riwayat keluarga Kanker": "riwayat_keluarga_kanker",
    "Riwayat keluarga Kolesterol tinggi": "riwayat_keluarga_kolesterol_tinggi",
    "Riwayat diri Hipertensi": "riwayat_diri_hipertensi",
    "Riwayat diri DM": "riwayat_diri_dm",
    "Riwayat diri Stroke": "riwayat_diri_stroke",
    "Riwayat diri Jantung": "riwayat_diri_jantung",
    "Riwayat diri Asma": "riwayat_diri_asma",
    "Riwayat diri Kanker": "riwayat_diri_kanker",
    "Riwayat diri Kolesterol tinggi": "riwayat_diri_kolesterol_tinggi",
    "Perilaku Merokok": "merokok",
    "Perilaku Tinggi gula": "perilaku_tinggi_gula",
    "Perilaku Tinggi garam": "perilaku_tinggi_garam",
    "Perilaku Tinggi lemak": "perilaku_tinggi_lemak",
    "Tanggal kunjungan": "tanggal",
    "BB (kg)": "bb",
    "TB (cm)": "tb",
    "Kategori IMT dari petugas": "imt",
    "Lingkar perut (cm)": "lingkar_perut",
    "LiLA (cm)": "lila",
    "Tekanan darah (mmHg)": "td",
    "Kategori tekanan darah dari petugas": "td_kategori",
    "GDS (mg/dL)": "gds",
    "Kategori GDS dari petugas": "gds_kategori",
    "Jenis kelamin PUMA": "jenis_kelamin_puma",
    "Kelompok usia PUMA": "kelompok_usia_puma",
    "Kategori merokok dari petugas": "merokok_kategori",
    "Napas pendek PUMA": "napas",
    "Dahak PUMA": "dahak",
    "Batuk PUMA": "batuk",
    "Pernah diminta spirometri/peakflow": "tes_paru",
    "Skor jenis kelamin": "skor_kelamin",
    "Skor usia": "skor_umur",
    "Skor merokok": "skor_merokok",
    "Skor napas pendek": "skor_napas",
    "Skor dahak": "skor_dahak",
    "Skor batuk": "skor_batuk",
    "Skor permintaan tes": "skor_tes",
    "Jumlah PUMA": "puma_total",
    "Tindak lanjut petugas": "rujukan",
    "Catatan": "catatan"
  },
  "M06": {
    "Nama": "nama",
    "Jenis kelamin": "jenis_kelamin",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Alamat": "alamat",
    "Status perkawinan": "status_perkawinan",
    "Desa": "desa",
    "Pekerjaan": "pekerjaan",
    "Riwayat keluarga Hipertensi": "riwayat_keluarga_hipertensi",
    "Riwayat keluarga DM": "riwayat_keluarga_dm",
    "Riwayat keluarga Stroke": "riwayat_keluarga_stroke",
    "Riwayat keluarga Jantung": "riwayat_keluarga_jantung",
    "Riwayat keluarga Asma": "riwayat_keluarga_asma",
    "Riwayat keluarga Kanker": "riwayat_keluarga_kanker",
    "Riwayat keluarga Kolesterol tinggi": "riwayat_keluarga_kolesterol_tinggi",
    "Riwayat diri Hipertensi": "riwayat_diri_hipertensi",
    "Riwayat diri DM": "riwayat_diri_dm",
    "Riwayat diri Stroke": "riwayat_diri_stroke",
    "Riwayat diri Jantung": "riwayat_diri_jantung",
    "Riwayat diri Asma": "riwayat_diri_asma",
    "Riwayat diri Kanker": "riwayat_diri_kanker",
    "Riwayat diri Kolesterol tinggi": "riwayat_diri_kolesterol_tinggi",
    "Perilaku Merokok": "merokok",
    "Perilaku Tinggi gula": "perilaku_tinggi_gula",
    "Perilaku Tinggi garam": "perilaku_tinggi_garam",
    "Perilaku Tinggi lemak": "perilaku_tinggi_lemak",
    "Tanggal pendamping tugas": "tanggal",
    "Sumber informasi": "sumber",
    "Skor BAB": "aks_bab",
    "Skor BAK": "aks_bak",
    "Skor membersihkan diri": "aks_bersih",
    "Skor WC": "aks_wc",
    "Skor makan/minum": "aks_makan",
    "Skor berpindah": "aks_pindah",
    "Skor berjalan": "aks_jalan",
    "Skor berpakaian": "aks_pakaian",
    "Skor tangga": "aks_tangga",
    "Skor mandi": "aks_mandi",
    "Jumlah AKS": "aks_total",
    "Tingkat ketergantungan": "aks_kategori",
    "Tindak lanjut petugas": "rujukan",
    "Catatan": "catatan"
  },
  "M07": {
    "Nama": "nama",
    "Jenis kelamin": "jenis_kelamin",
    "NIK": "nik",
    "Tanggal lahir": "tanggal_lahir",
    "Umur": "umur",
    "Alamat": "alamat",
    "Status perkawinan": "status_perkawinan",
    "Desa": "desa",
    "Pekerjaan": "pekerjaan",
    "Riwayat keluarga Hipertensi": "riwayat_keluarga_hipertensi",
    "Riwayat keluarga DM": "riwayat_keluarga_dm",
    "Riwayat keluarga Stroke": "riwayat_keluarga_stroke",
    "Riwayat keluarga Jantung": "riwayat_keluarga_jantung",
    "Riwayat keluarga Asma": "riwayat_keluarga_asma",
    "Riwayat keluarga Kanker": "riwayat_keluarga_kanker",
    "Riwayat keluarga Kolesterol tinggi": "riwayat_keluarga_kolesterol_tinggi",
    "Riwayat diri Hipertensi": "riwayat_diri_hipertensi",
    "Riwayat diri DM": "riwayat_diri_dm",
    "Riwayat diri Stroke": "riwayat_diri_stroke",
    "Riwayat diri Jantung": "riwayat_diri_jantung",
    "Riwayat diri Asma": "riwayat_diri_asma",
    "Riwayat diri Kanker": "riwayat_diri_kanker",
    "Riwayat diri Kolesterol tinggi": "riwayat_diri_kolesterol_tinggi",
    "Perilaku Merokok": "merokok",
    "Perilaku Tinggi gula": "perilaku_tinggi_gula",
    "Perilaku Tinggi garam": "perilaku_tinggi_garam",
    "Perilaku Tinggi lemak": "perilaku_tinggi_lemak",
    "Tanggal kunjungan": "tanggal",
    "BB (kg)": "bb",
    "TB (cm)": "tb",
    "Kategori IMT dari petugas": "imt",
    "Lingkar perut (cm)": "lingkar_perut",
    "LiLA (cm)": "lila",
    "Tekanan darah (mmHg)": "td",
    "Kategori tekanan darah dari petugas": "td_kategori",
    "GDS (mg/dL)": "gds",
    "Kategori GDS dari petugas": "gds_kategori",
    "Tanggal skrining": "tanggal_skrining",
    "Hasil orientasi dari petugas": "orientasi",
    "Hasil mengulang tiga kata dari petugas": "tiga_kata",
    "Hasil tes berdiri dari petugas": "berdiri",
    "BB turun lebih dari 3 kg atau pakaian longgar": "bb_turun",
    "Hilang nafsu makan/kesulitan makan": "nafsu_makan",
    "LiLA di bawah 21 cm": "lila_bawah21",
    "Masalah mata": "mata",
    "Hasil tes melihat dari petugas": "tes_lihat",
    "Hasil tes bisik dari petugas": "tes_bisik",
    "Status tes bisik": "bisik_status",
    "Sedih/tertekan/putus asa dua minggu": "sedih",
    "Sedikit minat/kesenangan dua minggu": "minat",
    "Tindak lanjut petugas": "rujukan",
    "Catatan": "catatan"
  }
};
function hash(text) {
  let h = 2166136261;
  for (const ch of String(text)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(seed) {
  let s = seed >>> 0;
  return function () { s += 0x6D2B79F5; let t = s; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function generateCase(moduleId, participantId, attempt) {
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) throw new Error('Modul tidak dikenal.');
  if (!String(participantId || '').trim()) throw new Error('Kode peserta belum tersedia.');
  if (!Number.isSafeInteger(attempt) || attempt < 1) throw new Error('Nomor percobaan harus berupa bilangan bulat positif.');
  const seedText = String(participantId) + '|' + moduleId + '|' + attempt;
  const seed = hash(seedText), random = rng(seed);
  const pick = a => a[Math.floor(random() * a.length)];
  const int = (a, b) => a + Math.floor(random() * (b - a + 1));
  const yn = () => pick(['Ya', 'Tidak']);
  const decimal = n => String(n).replace('.', ',');
  const formatDate = d => [String(d.getUTCDate()).padStart(2, '0'), String(d.getUTCMonth() + 1).padStart(2, '0'), d.getUTCFullYear()].join('/');
  const visitObj = new Date(Date.UTC(2026, 0, 1) + ((seed % 730) + (attempt % 3650)) * 86400000);
  const visit = formatDate(visitObj);
  const female = pick(['Rina', 'Sari', 'Dewi', 'Ratna', 'Lestari', 'Ayu', 'Nina', 'Dina', 'Wati', 'Mira']);
  const male = pick(['Budi', 'Agus', 'Dedi', 'Rudi', 'Hadi', 'Joko', 'Arif', 'Dani', 'Tono', 'Wawan']);
  const family = pick(['Pramesti', 'Utama', 'Laksana', 'Wibawa', 'Kusuma', 'Anindya', 'Permana', 'Santosa']);
  const posyandu = pick(['Melati', 'Mawar', 'Anggrek', 'Kenanga', 'Flamboyan']);
  const location = pick(['Jalan Melati', 'Jalan Mawar', 'Jalan Anggrek', 'Jalan Kenanga']) + ' nomor ' + int(1, 150);
  const id = moduleId + '-' + hash(String(participantId)).toString(36) + '-' + attempt + '-' + seed.toString(36);
  const facts = [], fields = [], clusters = [];
  let tbcPositive = false;
  const say = text => facts.push(text);
  const f = (id, label, expected, kind = 'text', options, critical = false) => {
    const value = String(expected);
    if (kind === 'choice' && (!Array.isArray(options) || !options.includes(value))) throw new Error('Kunci pilihan tidak terdapat pada daftar opsi: ' + id);
    fields.push({id, label, expected: value, kind, ...(options ? {options: [...options]} : {}), critical});
    return id;
  };
  const choice = (id, label, value, options = ['Ya', 'Tidak'], critical = false) => f(id, label, value, 'choice', options, critical);
  const number = (id, label, value, critical = false) => f(id, label, decimal(value), 'number', undefined, critical);
  const group = (title, ids) => clusters.push({title, ids});
  const commonIdentity = (name, age) => {
    say(name + ' berumur ' + age + ' tahun dan datang ke Posyandu ' + posyandu + ' pada ' + visit + '. Alamat dalam kasus adalah ' + location + '.');
    f('nama', 'Nama orang dalam kasus', name, 'text', undefined, true);
    f('tanggal', 'Tanggal kunjungan (DD/MM/YYYY)', visit, 'text', undefined, true);
    number('umur', 'Umur orang dalam kasus (tahun)', age);
  };
  const tbc = (options = {}) => {
    const vals = [yn(), yn(), yn(), yn()];
    if (options.weightAnswer) vals[2] = options.weightAnswer;
    if (moduleId === 'M04') {
      let found = false;
      for (let i = 0; i < 3; i++) { if (vals[i] === 'Ya') { if (found) vals[i] = 'Tidak'; found = true; } }
      vals[3] = 'Tidak';
    }
    tbcPositive = vals.filter(x => x === 'Ya').length >= 2 || vals[3] === 'Ya';
    const labels = ['Batuk terus-menerus', 'Demam sekurang-kurangnya dua minggu', 'BB tidak naik atau turun dua bulan berturut-turut', 'Kontak erat dengan orang yang sakit TBC'];
    const ids = ['tbc_batuk', 'tbc_demam', 'tbc_bb', 'tbc_kontak'];
    labels.forEach((label, i) => { say(name + ' menjawab ' + vals[i] + ' untuk pertanyaan ' + label.toLowerCase() + '.'); choice(ids[i], label, vals[i], ['Ya', 'Tidak'], true); });
    return ids;
  };
  const bp = pick(moduleId === 'M04' ? ['110/70', '114/72', '118/76'] : ['110/70', '114/72', '118/76', '120/80', '124/82']);
  const categoryOptions = ['Rendah', 'Normal', 'Tinggi', 'Perlu verifikasi petugas'];
  let name, age;
  if (moduleId === 'M01') {
    name = 'Ibu ' + female + ' ' + family; age = int(22, 36); commonIdentity(name, age);
    const week = int(16, 34), bb = int(48, 72), lila = pick([22, 22.5, 23.5, 24, 25, 26]);
    const lc = lila === 23.5 ? 'Perlu verifikasi petugas' : lila < 23.5 ? 'Merah' : 'Hijau';
    const fit = pick(['Ya/hijau', 'Tidak/merah']);
    say('Usia kehamilan ' + name + ' adalah ' + week + ' minggu. Petugas mengukur BB ' + bb + ' kg dan memberi hasil kesesuaian BB ' + fit + '.');
    say('Petugas mengukur LiLA ' + decimal(lila) + ' cm. ' + (lila === 23.5 ? 'Petugas meminta kategori LiLA ditulis Perlu verifikasi petugas.' : 'Petugas memberi kategori LiLA ' + lc + '.'));
    say('Tekanan darah ' + name + ' adalah ' + bp + ' mmHg. Petugas memberi hasil kesesuaian tekanan darah Ya/hijau.');
    number('minggu', 'Usia kehamilan (minggu)', week); number('bb', 'Berat badan (kg)', bb); choice('bb_sesuai', 'Kesesuaian BB dari petugas', fit, ['Ya/hijau', 'Tidak/merah', 'Perlu verifikasi petugas'], true);
    number('lila', 'Lingkar lengan atas (cm)', lila); choice('lila_kategori', 'Kategori LiLA', lc, ['Hijau', 'Merah', 'Perlu verifikasi petugas'], true);
    f('td', 'Tekanan darah (mmHg)', bp); choice('td_sesuai', 'Kesesuaian tekanan darah dari petugas', 'Ya/hijau', ['Ya/hijau', 'Tidak/merah', 'Perlu verifikasi petugas'], true);
    group('identitas dan hasil pemeriksaan', fields.map(x => x.id));
    group('empat jawaban skrining TBC', tbc({weightAnswer: fit === 'Ya/hijau' ? 'Tidak' : undefined}));
    const tablets = int(14, 45), consume = pick(['Setiap hari', 'Tidak setiap hari']), classes = yn();
    const provided = lila < 23.5 && random() < .5, mtFood = provided ? pick(['Nasi, telur, dan sayur', 'Nasi, ikan, dan sayur', 'Nasi, ayam, dan sayur']) : 'Tidak diberikan';
    const portion = provided ? int(1, 3) : 'Tidak berlaku', mtConsume = provided ? pick(['Setiap hari', 'Tidak setiap hari']) : 'Tidak berlaku';
    say('Petugas memberikan ' + tablets + ' tablet TTD. ' + name + ' mengonsumsinya ' + consume.toLowerCase() + '.');
    say(provided ? 'Petugas memberikan MT dengan komposisi ' + mtFood.toLowerCase() + ' sebanyak ' + portion + ' porsi. Konsumsi MT dicatat ' + mtConsume.toLowerCase() + '.' : 'Petugas tidak memberikan MT. Kolom komposisi MT ditulis Tidak diberikan. Bagian porsi dan konsumsi MT ditulis Tidak berlaku.');
    say(name + ' menjawab ' + classes + ' tentang keikutsertaan kelas ibu hamil.');
    const edu = consume === 'Tidak setiap hari' ? 'Mengingatkan konsumsi TTD sesuai arahan petugas' : classes === 'Tidak' ? 'Mengajak mengikuti kelas ibu hamil' : 'Meneruskan kebiasaan sesuai arahan petugas';
    const referral = fit === 'Tidak/merah' || lila < 23.5 || tbcPositive || random() < .35 ? 'Puskesmas' : lc === 'Perlu verifikasi petugas' ? 'Perlu verifikasi petugas' : 'Tidak ada rujukan pada kasus ini';
    say('Petugas menetapkan tindak lanjut: ' + referral + '.');
    number('ttd_jumlah', 'TTD yang diberikan petugas (tablet)', tablets); choice('ttd_minum', 'Konsumsi TTD', consume, ['Setiap hari', 'Tidak setiap hari']);
    choice('mt_komposisi', 'Komposisi MT yang diberikan petugas', mtFood, ['Tidak diberikan', 'Nasi, telur, dan sayur', 'Nasi, ikan, dan sayur', 'Nasi, ayam, dan sayur']);
    choice('mt_porsi', 'Jumlah porsi MT', String(portion), ['1', '2', '3', 'Tidak berlaku']); choice('mt_konsumsi', 'Konsumsi MT', mtConsume, ['Setiap hari', 'Tidak setiap hari', 'Tidak berlaku']); choice('kelas', 'Mengikuti kelas ibu hamil', classes);
    choice('edukasi', 'Edukasi sesuai arahan petugas', edu, ['Mengingatkan konsumsi TTD sesuai arahan petugas', 'Mengajak mengikuti kelas ibu hamil', 'Meneruskan kebiasaan sesuai arahan petugas']);
    choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Pustu', 'Puskesmas', 'Rumah sakit', 'Perlu verifikasi petugas', 'Tidak ada rujukan pada kasus ini'], true);
    group('TTD, MT, kelas ibu, dan tindak lanjut', ['ttd_jumlah', 'ttd_minum', 'mt_komposisi', 'mt_porsi', 'mt_konsumsi', 'kelas', 'edukasi', 'rujukan']);
  } else if (moduleId === 'M02') {
    name = 'Ibu ' + female + ' ' + family; age = int(22, 38); commonIdentity(name, age);
    const delivery = formatDate(new Date(visitObj.getTime() - int(5, 22) * 86400000));
    const method = pick(['Normal', 'Persalinan dengan tindakan']), bb0 = int(52, 70), bb = bb0 - int(1, 3), tb = int(150, 169);
    say(name + ' melahirkan pada ' + delivery + ' di Puskesmas ' + posyandu + '. Cara persalinannya adalah ' + method.toLowerCase() + '.');
    say('BB pada identitas adalah ' + bb0 + ' kg, sedangkan BB kunjungan adalah ' + bb + ' kg. TB ibu adalah ' + tb + ' cm. Petugas belum menetapkan kategori BB nifas dan meminta status Perlu verifikasi petugas.');
    say('Tekanan darah ibu adalah ' + bp + ' mmHg. Petugas memberi hasil kesesuaian Ya/hijau.');
    f('tanggal_bersalin', 'Tanggal bersalin (DD/MM/YYYY)', delivery, 'text', undefined, true); choice('cara_bersalin', 'Cara persalinan', method, ['Normal', 'Persalinan dengan tindakan']);
    number('bb_identitas', 'BB pada identitas (kg)', bb0); number('bb_kunjungan', 'BB pada kunjungan (kg)', bb); number('tb', 'TB pada identitas (cm)', tb);
    choice('bb_sesuai', 'Kesesuaian BB nifas', 'Perlu verifikasi petugas', ['Ya/hijau', 'Tidak/merah', 'Perlu verifikasi petugas'], true); f('td', 'Tekanan darah (mmHg)', bp); choice('td_sesuai', 'Kesesuaian tekanan darah', 'Ya/hijau', ['Ya/hijau', 'Tidak/merah', 'Perlu verifikasi petugas'], true);
    group('identitas persalinan dan pemeriksaan', fields.map(x => x.id)); group('empat jawaban skrining TBC', tbc({weightAnswer: 'Tidak'}));
    const vit = random() < .25 ? 'Tidak tersedia dalam kasus' : String(int(1, 2)), consumed = yn(), breast = yn(), kb = yn();
    say(vit === 'Tidak tersedia dalam kasus' ? 'Jumlah kapsul vitamin A yang diberikan belum tersedia. Petugas meminta kolom jumlah kapsul ditulis Tidak tersedia dalam kasus.' : 'Petugas memberikan ' + vit + ' kapsul vitamin A dalam kasus ini.');
    say('Data jumlah kapsul pada latihan ini merupakan data simulasi pencatatan, bukan instruksi dosis vitamin A.');
    say(name + ' menjawab ' + consumed + ' untuk konsumsi vitamin A, ' + breast + ' untuk menyusui, dan ' + kb + ' untuk KB pascapersalinan.');
    const edu = consumed === 'Tidak' ? 'Berkonsultasi tentang konsumsi vitamin A' : breast === 'Tidak' ? 'Berkonsultasi tentang menyusui' : kb === 'Tidak' ? 'Berkonsultasi tentang KB pascapersalinan' : 'Meneruskan perawatan sesuai arahan petugas';
    const referral = tbcPositive ? 'Puskesmas' : pick(['Puskesmas', 'Tidak ada rujukan pada kasus ini']);
    say('Tindak lanjut yang ditetapkan petugas adalah ' + referral + '.');
    choice('vit_jumlah', 'Vitamin A yang diberikan (kapsul)', vit, ['1', '2', 'Tidak tersedia dalam kasus']); choice('vit_konsumsi', 'Konsumsi vitamin A', consumed); choice('menyusui', 'Menyusui', breast); choice('kb', 'Mengikuti KB pascapersalinan', kb);
    choice('edukasi', 'Edukasi sesuai arahan petugas', edu, ['Berkonsultasi tentang konsumsi vitamin A', 'Berkonsultasi tentang menyusui', 'Berkonsultasi tentang KB pascapersalinan', 'Meneruskan perawatan sesuai arahan petugas']);
    choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Pustu', 'Puskesmas', 'Rumah sakit', 'Tidak ada rujukan pada kasus ini'], true);
    group('vitamin A, menyusui, KB, dan tindak lanjut', ['vit_jumlah', 'vit_konsumsi', 'menyusui', 'kb', 'edukasi', 'rujukan']);
  } else if (moduleId === 'M03') {
    name = pick(['Anak Nara', 'Anak Kirana', 'Anak Damar', 'Anak Lintang', 'Anak Bima', 'Anak Sinta']) + ' ' + family;
    age = int(7, 12); const bb = Math.round((7 + age * .15 + random() * .4) * 10) / 10, pb = 63 + age, head = int(44, 46), lila = int(14, 16), checklist = pick(['Lengkap', 'Tidak Lengkap']);
    say(name + ' berumur ' + age + ' bulan dan datang ke Posyandu ' + posyandu + ' pada ' + visit + '. Nama ibu dalam kasus adalah Ibu ' + female + '.');
    f('nama', 'Nama anak dalam kasus', name, 'text', undefined, true); f('tanggal', 'Tanggal kunjungan (DD/MM/YYYY)', visit); number('umur_bulan', 'Umur anak (bulan)', age, true);
    choice('perkembangan', 'Checklist perkembangan dari petugas', checklist, ['Lengkap', 'Tidak Lengkap'], true);
    const trend = pick(['N', 'T', 'Tidak tersedia dalam kasus']);
    const catBB = 'Normal', catPB = 'Normal', catNutrition = 'Gizi baik';
    say('Petugas memberi hasil checklist perkembangan ' + checklist + '. BB anak adalah ' + decimal(bb) + ' kg. Hasil perubahan BB yang diberikan petugas adalah ' + trend + '.');
    say('Petugas menetapkan kategori BB/umur ' + catBB + ', kategori PB/TB/umur ' + catPB + ', dan kategori BB/PB atau BB/TB ' + catNutrition + '.');
    say('PB/TB anak adalah ' + pb + ' cm, lingkar kepala ' + head + ' cm, dan LiLA ' + lila + ' cm. Petugas menetapkan kategori lingkar kepala Normal dan kategori LiLA Normal.');
    number('bb', 'BB anak (kg)', bb); choice('bb_naik', 'Perubahan BB dari petugas', trend, ['N', 'T', 'Tidak tersedia dalam kasus'], true);
    choice('bb_umur', 'Kategori BB/umur dari petugas', catBB, ['Normal', 'Berat badan kurang', 'Berat badan sangat kurang', 'Risiko berat badan lebih'], true);
    number('pbtb', 'Panjang atau tinggi badan (cm)', pb); choice('pbtb_umur', 'Kategori PB/TB/umur dari petugas', catPB, ['Normal', 'Pendek', 'Sangat pendek', 'Tinggi'], true);
    choice('bb_pbtb', 'Kategori BB/PB atau BB/TB dari petugas', catNutrition, ['Gizi baik', 'Gizi kurang', 'Gizi buruk', 'Berisiko gizi lebih', 'Gizi lebih', 'Obesitas'], true);
    number('lingkar_kepala', 'Lingkar kepala (cm)', head); choice('kategori_kepala', 'Kategori lingkar kepala dari petugas', 'Normal', ['Normal', 'Melebihi normal', 'Kurang dari normal'], true);
    number('lila', 'LiLA (cm)', lila); choice('kategori_lila', 'Kategori LiLA dari petugas', 'Normal', ['Normal', 'Gizi kurang', 'Gizi buruk'], true);
    group('identitas, perkembangan, dan pertumbuhan anak', fields.map(x => x.id)); group('empat jawaban skrining TBC', tbc({weightAnswer: trend === 'N' ? 'Tidak' : undefined}));
    const mpasi = yn(), immune = yn(), vit = yn(), mt = yn(), portions = mt === 'Ya' ? String(int(1, 3)) : 'Tidak berlaku';
    const food = pick(['Telur', 'Ikan', 'Ayam']), immuneType = pick(['Tidak ada pemberian pada kunjungan ini', 'Tidak tersedia dalam kasus']);
    const signs = yn(), referral = checklist === 'Tidak Lengkap' || trend === 'T' || tbcPositive ? 'Puskesmas' : pick(['Puskesmas', 'Tidak ada rujukan pada kasus ini']);
    say('Petugas menetapkan kolom ASI eksklusif dan obat cacing sebagai Tidak berlaku untuk penilaian kasus ini. Petugas memberi status MP-ASI sesuai umur ' + mpasi + ', imunisasi lengkap sesuai umur ' + immune + ', vitamin A ' + vit + ', serta MT pemulihan ' + mt + '.');
    say('Catatan pemberian imunisasi pada kunjungan ini adalah ' + immuneType + '. Bagian porsi MT dicatat ' + portions + '.');
    say('Petugas memberi arahan edukasi MP-ASI dengan protein hewani berupa ' + food.toLowerCase() + '. Gejala sakit dicatat ' + signs + (signs === 'Ya' ? ', dengan gejala batuk.' : '.'));
    say('Petugas menetapkan tindak lanjut ' + referral + '.');
    choice('asi', 'Status ASI eksklusif pada kasus', 'Tidak berlaku', ['Ya', 'Tidak', 'Tidak berlaku']); choice('mpasi', 'MP-ASI sesuai umur menurut petugas', mpasi);
    choice('imunisasi', 'Imunisasi lengkap sesuai umur menurut petugas', immune); choice('jenis_imunisasi', 'Pemberian imunisasi pada kunjungan', immuneType, ['Tidak ada pemberian pada kunjungan ini', 'Tidak tersedia dalam kasus']);
    choice('vitamin_a', 'Vitamin A pada kasus', vit); choice('obat_cacing', 'Status obat cacing pada kasus', 'Tidak berlaku', ['Ya', 'Tidak', 'Tidak berlaku']); choice('mt', 'MT pemulihan diberikan', mt); choice('mt_porsi', 'Porsi MT pada kasus', portions, ['1', '2', '3', 'Tidak berlaku']);
    choice('edukasi', 'Protein hewani pada edukasi MP-ASI', food, ['Telur', 'Ikan', 'Ayam']); choice('gejala_sakit', 'Gejala sakit pada kasus', signs); choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Pustu', 'Puskesmas', 'Tidak ada rujukan pada kasus ini'], true);
    group('pemberian makan, layanan, edukasi, dan tindak lanjut', ['asi', 'mpasi', 'imunisasi', 'jenis_imunisasi', 'vitamin_a', 'obat_cacing', 'mt', 'mt_porsi', 'edukasi', 'gejala_sakit', 'rujukan']);
  } else if (moduleId === 'M04') {
    name = pick(['Nara', 'Sinta', 'Rani', 'Alya', 'Dina', 'Kirana']) + ' ' + family; age = int(15, 17); commonIdentity(name, age);
    const familyDM = yn(), selfDM = yn(), smoke = yn(), tb = int(150, 170), bb = Math.round((int(200, 225) / 10) * (tb / 100) ** 2), lp = int(60, 78), lila = int(23, 27), hb = int(125, 135) / 10;
    say('Keluarga ' + name + ' memiliki riwayat DM: ' + familyDM + '. Riwayat DM pada diri remaja: ' + selfDM + '. Jawaban merokok pada remaja: ' + smoke + '.');
    say('Petugas mencatat BB ' + bb + ' kg, TB ' + tb + ' cm, lingkar perut ' + lp + ' cm, LiLA remaja putri ' + lila + ' cm, dan tekanan darah ' + bp + ' mmHg.');
    say('Petugas menetapkan kategori IMT Normal, kategori tekanan darah Normal, kategori gula darah Normal, dan anemia Tidak. Lembar hasil memuat Hb ' + decimal(hb) + ' g/dL; petugas meminta satuan g/dL dipertahankan pada jawaban.');
    choice('riwayat_keluarga_dm', 'Riwayat DM pada keluarga', familyDM); choice('riwayat_diri_dm', 'Riwayat DM pada diri remaja', selfDM); choice('merokok', 'Perilaku merokok', smoke);
    number('bb', 'BB remaja (kg)', bb); number('tb', 'TB remaja (cm)', tb); choice('imt', 'Kategori IMT dari petugas', 'Normal', ['Sangat kurus', 'Kurus', 'Normal', 'Gemuk', 'Obesitas']); number('lingkar_perut', 'Lingkar perut (cm)', lp); f('td', 'Tekanan darah (mmHg)', bp); choice('td_kategori', 'Kategori tekanan darah', 'Normal', categoryOptions); choice('gula_kategori', 'Kategori gula darah', 'Normal', categoryOptions); number('lila', 'LiLA remaja putri (cm)', lila); f('hb', 'Hb sesuai lembar hasil beserta satuan', decimal(hb) + ' g/dL', 'text', undefined, true); choice('anemia', 'Anemia menurut petugas', 'Tidak');
    group('identitas, riwayat, dan pemeriksaan remaja', fields.map(x => x.id)); group('empat jawaban skrining TBC', tbc({weightAnswer: 'Tidak'}));
    const home = 'Ya', burden = yn(), body = yn(), friends = 'Ya', drugs = smoke === 'Ya' ? 'Ya' : yn(), sexual = pick(['Ya', 'Tidak', 'Tidak dijawab oleh sasaran']), unsafe = yn(), suicide = yn();
    const vals = [home, burden, body, friends, drugs, sexual, unsafe, suicide];
    const labels = ['Nyaman di rumah', 'Merasa beban di sekolah', 'Ada hal disukai atau tidak disukai pada tubuh', 'Mempunyai teman di luar grup', 'Pernah konsumsi rokok/alkohol/narkoba', 'Pernah hubungan seksual', 'Merasa tidak aman', 'Pernah ingin bunuh diri'];
    const keys = ['rumah', 'sekolah', 'tubuh', 'teman', 'obat', 'seksual', 'tidak_aman', 'bunuh_diri'];
    labels.forEach((label, i) => { say('Jawaban ' + name + ' untuk pertanyaan "' + label + '" adalah ' + vals[i] + '.'); choice(keys[i], label, vals[i], i === 5 ? ['Ya', 'Tidak', 'Tidak dijawab oleh sasaran'] : ['Ya', 'Tidak'], true); });
    const result = unsafe === 'Ya' || suicide === 'Ya' ? 'Memerlukan tindak lanjut segera' : 'Pemaknaan lebih lanjut oleh petugas';
    const referral = unsafe === 'Ya' || suicide === 'Ya' ? 'Segera menghubungi petugas penanggung jawab' : 'Berkonsultasi kepada petugas penanggung jawab';
    say('Petugas memberi simpulan ' + result + ' dan arahan ' + referral + '. Petugas tidak memaknai jawaban Ya pada nyaman di rumah atau teman di luar grup sebagai masalah secara otomatis.');
    choice('simpulan', 'Simpulan psikososial dari petugas', result, ['Memerlukan tindak lanjut segera', 'Pemaknaan lebih lanjut oleh petugas', 'Tidak ada masalah menurut petugas'], true); choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Segera menghubungi petugas penanggung jawab', 'Berkonsultasi kepada petugas penanggung jawab', 'Tidak ada tindak lanjut menurut petugas'], true);
    group('jawaban psikososial dan tindak lanjut', [...keys, 'simpulan', 'rujukan']);
  } else if (moduleId === 'M05') {
    const sex = pick(['L', 'P']); name = (sex === 'L' ? 'Bapak ' + male : 'Ibu ' + female) + ' ' + family; age = int(40, 65); commonIdentity(name, age);
    const tb = int(150, 178), bb = Math.round((int(200, 240) / 10) * (tb / 100) ** 2), lp = int(72, 90), lila = int(24, 31), tc = pick(['Normal', 'Tinggi']), gc = pick(['Normal', 'Tinggi']);
    const adultBP = tc === 'Tinggi' ? pick(['140/90', '146/92', '150/94']) : bp, gds = gc === 'Tinggi' ? int(240, 300) : int(90, 130);
    say('Jenis kelamin pada kartu adalah ' + sex + '. Petugas memberi BB ' + bb + ' kg, TB ' + tb + ' cm, lingkar perut ' + lp + ' cm, LiLA ' + lila + ' cm, tekanan darah ' + adultBP + ' mmHg, dan GDS ' + gds + ' mg/dL.');
    say('Petugas menetapkan kategori IMT Normal, kategori tekanan darah ' + tc + ', dan kategori GDS ' + gc + '.');
    choice('jenis_kelamin', 'Jenis kelamin pada kartu', sex, ['L', 'P']); number('bb', 'BB (kg)', bb); number('tb', 'TB (cm)', tb); choice('imt', 'Kategori IMT dari petugas', 'Normal', ['Sangat kurus', 'Kurus', 'Normal', 'Gemuk', 'Obesitas']); number('lingkar_perut', 'Lingkar perut (cm)', lp); number('lila', 'LiLA (cm)', lila); f('td', 'Tekanan darah (mmHg)', adultBP); choice('td_kategori', 'Kategori tekanan darah dari petugas', tc, categoryOptions, true); number('gds', 'GDS (mg/dL)', gds); choice('gds_kategori', 'Kategori GDS dari petugas', gc, categoryOptions, true);
    const smoking = pick(['Kurang dari 20', '20–30', 'Lebih dari 30']), smokingScore = smoking === 'Kurang dari 20' ? 0 : smoking === '20–30' ? 1 : 2;
    const sSex = sex === 'L' ? 1 : 0, sAge = age < 50 ? 0 : age < 60 ? 1 : 2, symptoms = [yn(), yn(), yn(), yn()];
    say(name + ' merokok. Petugas memberikan kategori riwayat merokok ' + smoking + ' bks/tahun untuk pengisian PUMA.');
    const labels = ['Napas pendek saat berjalan cepat atau menanjak', 'Dahak saat tidak flu', 'Batuk saat tidak flu', 'Pernah diminta spirometri atau peakflow'];
    const ids = ['napas', 'dahak', 'batuk', 'tes_paru'];
    choice('merokok_kategori', 'Kategori riwayat merokok PUMA dari petugas', smoking, ['Kurang dari 20', '20–30', 'Lebih dari 30'], true);
    labels.forEach((label, i) => { say(name + ' menjawab ' + symptoms[i] + ' untuk ' + label.toLowerCase() + '.'); choice(ids[i], label, symptoms[i], ['Ya', 'Tidak'], true); });
    group('identitas, pemeriksaan, dan jawaban PUMA', fields.map(x => x.id));
    const componentScores = [sSex, sAge, smokingScore, ...symptoms.map(x => x === 'Ya' ? 1 : 0)];
    const scoreIds = ['skor_kelamin', 'skor_umur', 'skor_merokok', 'skor_napas', 'skor_dahak', 'skor_batuk', 'skor_tes'];
    const scoreLabels = ['Skor jenis kelamin', 'Skor kelompok umur', 'Skor merokok', 'Skor napas pendek', 'Skor dahak', 'Skor batuk', 'Skor pernah diminta tes'];
    componentScores.forEach((s, i) => number(scoreIds[i], scoreLabels[i], s, true));
    const total = componentScores.reduce((a, b) => a + b, 0);
    const referral = total > 6 || tc === 'Tinggi' || gc === 'Tinggi' ? 'Puskesmas' : total === 6 ? 'Perlu verifikasi petugas' : 'Tindak lanjut sesuai jadwal petugas';
    say('Kader perlu memakai tabel skor PUMA pada materi untuk setiap komponen. Petugas menetapkan tindak lanjut ' + referral + '.');
    number('puma_total', 'Jumlah skor PUMA', total, true); choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Puskesmas', 'Perlu verifikasi petugas', 'Tindak lanjut sesuai jadwal petugas'], true);
    group('skor komponen, jumlah PUMA, dan tindak lanjut', [...scoreIds, 'puma_total', 'rujukan']);
  } else if (moduleId === 'M06') {
    name = (random() < .5 ? 'Bapak ' + male : 'Ibu ' + female) + ' ' + family; age = int(61, 85); commonIdentity(name, age);
    const source = pick(['Lansia dalam kasus', 'Lansia dan pendamping dalam kasus']); say('Sumber keterangan kemampuan adalah ' + source.toLowerCase() + '.'); choice('sumber', 'Sumber keterangan kemampuan', source, ['Lansia dalam kasus', 'Lansia dan pendamping dalam kasus']);
    const allIndependent = seed % 11 === 0, allDependent = seed % 11 === 1;
    const specs = [
      ['bab', 'BAB', ['Tidak terkendali dan perlu pencahar', 'Kadang tidak terkendali satu kali seminggu', 'Terkendali teratur']],
      ['bak', 'BAK', ['Tidak terkendali atau memakai kateter', 'Kadang tidak terkendali satu kali sehari', 'Mandiri']],
      ['bersih', 'Membersihkan diri', ['Perlu pertolongan orang lain', 'Mandiri']],
      ['wc', 'Menggunakan WC', ['Bergantung pada pertolongan orang lain', 'Perlu pertolongan pada sebagian kegiatan', 'Mandiri']],
      ['makan', 'Makan/minum', ['Tidak mampu', 'Perlu bantuan memotong makanan', 'Mandiri']],
      ['pindah', 'Berpindah kursi roda/tempat tidur', ['Tidak mampu', 'Perlu banyak bantuan dua orang untuk duduk', 'Bantuan minimal satu orang', 'Mandiri']],
      ['jalan', 'Berjalan', ['Tidak mampu', 'Skor yang ditetapkan petugas adalah 1', 'Bantuan minimal satu orang', 'Mandiri']],
      ['pakaian', 'Berpakaian', ['Bergantung pada orang lain', 'Sebagian dibantu', 'Mandiri']],
      ['tangga', 'Naik/turun tangga', ['Tidak mampu', 'Perlu pertolongan', 'Mandiri']],
      ['mandi', 'Mandi', ['Bergantung pada orang lain', 'Mandiri']]
    ];
    const scores = [];
    specs.forEach(([key, label, descriptions]) => {
      const score = allIndependent ? descriptions.length - 1 : allDependent ? 0 : key === 'jalan' ? pick([0, 2, 3]) : int(0, descriptions.length - 1);
      scores.push(score); say('Kemampuan ' + name + ' untuk ' + label.toLowerCase() + ' adalah ' + descriptions[score].toLowerCase() + '.');
      number('aks_' + key, 'Skor AKS ' + label, score, true);
    });
    const total = scores.reduce((a, b) => a + b, 0), level = total === 20 ? 'Mandiri' : total >= 12 ? 'Ringan' : total >= 9 ? 'Sedang' : total >= 5 ? 'Berat' : 'Total';
    const referral = total < 20 ? 'Puskesmas' : 'Tidak ada rujukan berdasarkan AKS pada kasus ini';
    say('Kader perlu menjumlahkan sepuluh skor dan memilih tingkat ketergantungan dari materi. Petugas memberi tindak lanjut ' + referral + '.');
    number('aks_total', 'Jumlah sepuluh skor AKS', total, true); choice('aks_kategori', 'Tingkat ketergantungan AKS', level, ['Mandiri', 'Ringan', 'Sedang', 'Berat', 'Total'], true);
    choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Puskesmas', 'Tidak ada rujukan berdasarkan AKS pada kasus ini'], true);
    group('identitas dan sumber informasi', ['nama', 'tanggal', 'umur', 'sumber']); group('sepuluh kegiatan AKS', specs.map(x => 'aks_' + x[0])); group('jumlah, tingkat ketergantungan, dan tindak lanjut', ['aks_total', 'aks_kategori', 'rujukan']);
  } else if (moduleId === 'M07') {
    name = (random() < .5 ? 'Bapak ' + male : 'Ibu ' + female) + ' ' + family; age = int(61, 85); commonIdentity(name, age);
    const tb = int(148, 173), bb = Math.round((int(200, 240) / 10) * (tb / 100) ** 2), lp = int(65, 90), lila = pick([19, 20, 21, 23, 25]), gds = int(90, 130);
    say('Petugas mencatat BB ' + bb + ' kg, TB ' + tb + ' cm, lingkar perut ' + lp + ' cm, LiLA ' + lila + ' cm, tekanan darah ' + bp + ' mmHg, serta GDS ' + gds + ' mg/dL.');
    say('Petugas menetapkan kategori IMT Normal, kategori tekanan darah Normal, dan kategori GDS Normal.');
    number('bb', 'BB (kg)', bb); number('tb', 'TB (cm)', tb); choice('imt', 'Kategori IMT dari petugas', 'Normal', ['Sangat kurus', 'Kurus', 'Normal', 'Gemuk', 'Obesitas']); number('lingkar_perut', 'Lingkar perut (cm)', lp); number('lila', 'LiLA (cm)', lila); f('td', 'Tekanan darah (mmHg)', bp); choice('td_kategori', 'Kategori tekanan darah', 'Normal', categoryOptions); number('gds', 'GDS (mg/dL)', gds); choice('gds_kategori', 'Kategori GDS', 'Normal', categoryOptions);
    group('identitas dan pemeriksaan umum', fields.map(x => x.id));
    const testOptions = ['Tidak ditemukan gangguan', 'Ditemukan gangguan', 'Tidak tersedia dalam kasus'];
    const testResults = [pick(testOptions), pick(testOptions), pick(testOptions)];
    const testIds = ['orientasi', 'tiga_kata', 'berdiri'], testLabels = ['Hasil orientasi waktu dan tempat', 'Hasil mengulang tiga kata', 'Hasil tes berdiri dari kursi'];
    testLabels.forEach((label, i) => { say('Petugas memberi ' + label.toLowerCase() + ': ' + testResults[i] + '.'); choice(testIds[i], label + ' menurut petugas', testResults[i], testOptions, true); });
    const drop = int(0, 5), loose = yn(), appetite = yn(), eye = yn(), see = pick(testOptions), whisper = pick(['Tidak ditemukan gangguan', 'Ditemukan gangguan', 'Tidak dapat dilakukan']), sad = yn(), interest = yn();
    say('BB lansia turun ' + drop + ' kg dalam tiga bulan. Jawaban pakaian menjadi lebih longgar adalah ' + loose + '. Jawaban hilang nafsu makan atau sulit makan adalah ' + appetite + '.');
    say('Jawaban masalah mata adalah ' + eye + '. Petugas memberi hasil tes melihat ' + see + ', serta hasil tes bisik ' + whisper + '.');
    say('Dalam dua minggu terakhir, jawaban perasaan sedih/tertekan/putus asa adalah ' + sad + ' dan jawaban sedikit minat/kesenangan adalah ' + interest + '.');
    const nutrition = drop > 3 || loose === 'Ya' ? 'Ya' : 'Tidak', lilaFlag = lila < 21 ? 'Ya' : 'Tidak';
    choice('bb_turun', 'BB turun lebih dari 3 kg atau pakaian longgar', nutrition, ['Ya', 'Tidak'], true); choice('nafsu_makan', 'Hilang nafsu makan atau sulit makan', appetite, ['Ya', 'Tidak'], true); choice('lila_bawah21', 'LiLA di bawah 21 cm', lilaFlag, ['Ya', 'Tidak'], true);
    choice('mata', 'Masalah mata', eye, ['Ya', 'Tidak'], true); choice('tes_lihat', 'Hasil tes melihat menurut petugas', see, testOptions, true); choice('tes_bisik', 'Hasil tes bisik menurut petugas', whisper, ['Tidak ditemukan gangguan', 'Ditemukan gangguan', 'Tidak dapat dilakukan'], true); choice('bisik_status', 'Status pelaksanaan tes bisik', whisper === 'Tidak dapat dilakukan' ? 'Tidak dapat dilakukan' : 'Dapat dilakukan', ['Dapat dilakukan', 'Tidak dapat dilakukan'], true);
    choice('sedih', 'Sedih/tertekan/putus asa dalam dua minggu', sad, ['Ya', 'Tidak'], true); choice('minat', 'Sedikit minat/kesenangan dalam dua minggu', interest, ['Ya', 'Tidak'], true);
    const needs = testResults.some(x => x !== 'Tidak ditemukan gangguan') || nutrition === 'Ya' || appetite === 'Ya' || lilaFlag === 'Ya' || eye === 'Ya' || see !== 'Tidak ditemukan gangguan' || whisper !== 'Tidak ditemukan gangguan' || sad === 'Ya' || interest === 'Ya';
    const referral = needs ? 'Puskesmas' : 'Tidak ada rujukan pada kasus ini';
    say('Petugas memaknai hasil yang tersedia dan menetapkan tindak lanjut ' + referral + '. Kader tidak perlu membuat skor total SKILAS.');
    choice('rujukan', 'Tindak lanjut sesuai petugas', referral, ['Pustu', 'Puskesmas', 'Tidak ada rujukan pada kasus ini'], true);
    group('hasil ingatan dan mobilitas menurut petugas', testIds); group('nutrisi, mata, telinga, suasana perasaan, dan tindak lanjut', ['bb_turun', 'nafsu_makan', 'lila_bawah21', 'mata', 'tes_lihat', 'tes_bisik', 'bisik_status', 'sedih', 'minat', 'rujukan']);
  }
  const beforeIdentity = fields.length;
  const field = id => fields.find(x => x.id === id);
  const value = id => field(id).expected;
  const add = (id, label, expected, kind = 'text', options) => {
    if (field(id)) return id;
    return f(id, label, expected, kind, options);
  };
  const addChoice = (id, label, expected, options) => add(id, label, expected, 'choice', options);
  const birthday = new Date(0);
  const birthYear = visitObj.getUTCFullYear() - (moduleId === 'M03' ? 0 : age);
  const birthMonth = visitObj.getUTCMonth() - (moduleId === 'M03' ? age : 0);
  birthday.setUTCFullYear(birthYear, birthMonth, Math.min(visitObj.getUTCDate(), 28));
  birthday.setUTCHours(0, 0, 0, 0);
  const birth = formatDate(birthday);
  const village = pick(['Desa Melati Simulasi', 'Desa Kenanga Simulasi', 'Desa Mawar Simulasi']);
  const district = pick(['Kecamatan Utara Simulasi', 'Kecamatan Selatan Simulasi']);
  const hamlet = pick(['Dusun Satu Simulasi', 'Dusun Dua Simulasi']);
  const rt = String(int(1, 12)).padStart(2, '0'), rw = String(int(1, 8)).padStart(2, '0');
  const nik = 'SIMULASI TANPA NIK NYATA', phone = 'Tidak tersedia dalam kasus';
  add('tanggal_lahir', 'Tanggal lahir orang dalam kasus (DD/MM/YYYY)', birth);
  addChoice('nik', 'NIK orang dalam kasus', nik, [nik, 'Tidak tersedia dalam kasus']);
  add('alamat', 'Alamat orang dalam kasus', location);
  addChoice('desa', 'Desa/kelurahan/nagari pada kasus', village, ['Desa Melati Simulasi', 'Desa Kenanga Simulasi', 'Desa Mawar Simulasi']);
  say('Tanggal lahir ' + name + ' adalah ' + birth + '. Kolom NIK ditulis ' + nik + '. Alamatnya ' + location + ', ' + village + '.');
  if (['M01', 'M02', 'M03'].includes(moduleId)) {
    add('posyandu', 'Nama Posyandu pada kasus', 'Posyandu ' + posyandu);
    addChoice('dusun', 'Dusun pada kasus', hamlet, ['Dusun Satu Simulasi', 'Dusun Dua Simulasi']);
    add('rt', 'RT pada kasus', rt, 'number'); add('rw', 'RW pada kasus', rw, 'number');
    addChoice('nomor_hp', 'Nomor HP orang dalam kasus', phone, ['Tidak tersedia dalam kasus', 'Tidak dijawab oleh sasaran']);
    say('Identitas kartu mencatat Posyandu ' + posyandu + ', ' + hamlet + ', RT ' + rt + ', dan RW ' + rw + '. Nomor HP belum diberikan; kader menulis ' + phone + '.');
    if (moduleId !== 'M02') { addChoice('kecamatan', 'Kecamatan pada kasus', district, ['Kecamatan Utara Simulasi', 'Kecamatan Selatan Simulasi']); say('Kecamatan pada identitas adalah ' + district + '.'); }
    if (moduleId !== 'M03') {
      const spouse = 'Bapak ' + male + ' ' + family, order = age >= 28 ? pick([2, 3]) : 2;
      add('nama_suami', 'Nama suami pada kasus', spouse); add('hamil_anak_ke', 'Kehamilan anak ke', String(order), 'number');
      say('Nama suami ' + name + ' adalah ' + spouse + '. Ibu sedang atau baru selesai menjalani kehamilan anak ke-' + order + '.');
      if (moduleId === 'M01') { const gap = int(2, 4) + ' tahun'; addChoice('jarak_anak', 'Jarak anak sebelumnya dengan kehamilan ini', gap, ['2 tahun', '3 tahun', '4 tahun']); say('Jarak anak sebelumnya dengan kehamilan ini adalah ' + gap + '.'); }
      if (moduleId === 'M02') { add('tempat_bersalin', 'Tempat bersalin pada kasus', 'Puskesmas ' + posyandu); }
    } else {
      const sex = pick(['L', 'P']), birthWeight = pick(['2,8', '3', '3,2', '3,4']), birthLength = int(48, 51);
      addChoice('jenis_kelamin', 'Jenis kelamin anak pada kartu', sex, ['L', 'P']);
      add('nama_ayah', 'Nama ayah pada kasus', 'Bapak ' + male); add('nama_ibu', 'Nama ibu pada kasus', 'Ibu ' + female);
      add('bb_lahir', 'BB lahir (kg)', birthWeight, 'number'); add('pb_lahir', 'PB lahir (cm)', String(birthLength), 'number');
      say('Jenis kelamin anak adalah ' + sex + '. Nama ayah adalah Bapak ' + male + ' dan nama ibu adalah Ibu ' + female + '. BB lahir anak ' + birthWeight + ' kg dan PB lahir ' + birthLength + ' cm.');
    }
  } else {
    const sex = moduleId === 'M04' ? 'P' : field('jenis_kelamin') ? value('jenis_kelamin') : name.startsWith('Bapak ') ? 'L' : 'P';
    const marriage = moduleId === 'M04' ? 'Tidak menikah' : pick(['Menikah', 'Tidak menikah', 'Cerai']);
    addChoice('jenis_kelamin', 'Jenis kelamin pada kartu', sex, ['L', 'P']);
    addChoice('status_perkawinan', 'Status perkawinan pada kasus', marriage, ['Menikah', 'Tidak menikah', 'Cerai']);
    say('Jenis kelamin pada identitas adalah ' + sex + ' dan status perkawinan adalah ' + marriage + '.');
    if (moduleId === 'M04') {
      const parent = pick(['Bapak ' + male, 'Ibu ' + female]) + ' ' + family;
      add('nama_orang_tua', 'Nama orang tua pada kasus', parent); say('Nama orang tua pada kartu adalah ' + parent + '.');
    } else {
      const work = pick(['Petani simulasi', 'Pedagang simulasi', 'Tidak bekerja']);
      addChoice('pekerjaan', 'Pekerjaan pada kasus', work, ['Petani simulasi', 'Pedagang simulasi', 'Tidak bekerja']); say('Pekerjaan ' + name + ' adalah ' + work + '.');
    }
    const diseases = [['hipertensi', 'hipertensi'], ['dm', 'DM'], ['stroke', 'stroke'], ['jantung', 'penyakit jantung'], ['asma', 'asma'], ['kanker', 'kanker'], ['kolesterol_tinggi', 'kolesterol tinggi']];
    for (const [prefix, label] of [['riwayat_keluarga', 'Riwayat keluarga'], ['riwayat_diri', 'Riwayat diri']]) {
      for (const [key, disease] of diseases) {
        const id = prefix + '_' + key;
        if (!field(id)) {
          const answer = pick(['Ya', 'Tidak', 'Tidak tersedia dalam kasus']);
          addChoice(id, label + ' ' + disease, answer, ['Ya', 'Tidak', 'Tidak tersedia dalam kasus']);
          say(label + ' untuk ' + disease + ' dicatat ' + answer + '.');
        }
      }
    }
    const smoke = moduleId === 'M05' ? 'Ya' : field('merokok') ? value('merokok') : yn();
    if (!field('merokok')) { addChoice('merokok', 'Perilaku merokok', smoke, ['Ya', 'Tidak']); say('Jawaban perilaku merokok adalah ' + smoke + '.'); }
    for (const kind of ['gula', 'garam', 'lemak']) {
      const answer = yn(); addChoice('perilaku_tinggi_' + kind, 'Perilaku konsumsi tinggi ' + kind, answer, ['Ya', 'Tidak']);
      say('Jawaban konsumsi tinggi ' + kind + ' adalah ' + answer + '.');
    }
    if (moduleId === 'M05') {
      const groupAge = age < 50 ? '40–49' : age < 60 ? '50–59' : '60 tahun atau lebih';
      addChoice('jenis_kelamin_puma', 'Jenis kelamin untuk PUMA', sex, ['L', 'P']);
      addChoice('kelompok_usia_puma', 'Kelompok usia untuk PUMA', groupAge, ['40–49', '50–59', '60 tahun atau lebih']);
      say('Isian jenis kelamin PUMA adalah ' + sex + '. Kelompok usia PUMA adalah ' + groupAge + '.');
    }
  }
  if (fields.length > beforeIdentity) group(['M01', 'M02', 'M03'].includes(moduleId) ? 'identitas lengkap yang diminta kartu' : 'identitas lengkap, riwayat setiap penyakit, dan perilaku yang diminta kartu', fields.slice(beforeIdentity).map(x => x.id));
  const beforeDetails = fields.length;
  const updateChoice = (id, label, expected, options) => { const x = field(id); x.label = label; x.expected = expected; x.kind = 'choice'; x.options = options; };
  if (moduleId === 'M01') {
    const edTTD = value('ttd_minum') === 'Tidak setiap hari' ? 'Mengingatkan konsumsi TTD sesuai arahan petugas setiap hari' : 'Meneruskan konsumsi TTD sesuai arahan petugas';
    const edClass = value('kelas') === 'Tidak' ? 'Mengajak mengikuti kelas ibu hamil' : 'Meneruskan keikutsertaan kelas ibu hamil';
    updateChoice('edukasi', 'Edukasi TTD sesuai arahan petugas', edTTD, ['Mengingatkan konsumsi TTD sesuai arahan petugas setiap hari', 'Meneruskan konsumsi TTD sesuai arahan petugas']);
    addChoice('edukasi_kelas', 'Edukasi kelas ibu sesuai arahan petugas', edClass, ['Mengajak mengikuti kelas ibu hamil', 'Meneruskan keikutsertaan kelas ibu hamil']);
    say('Teks edukasi TTD yang diminta pada kartu adalah ' + edTTD + '. Teks edukasi kelas ibu yang diminta adalah ' + edClass + '.');
  }
  if (moduleId === 'M02') {
    const edVit = value('vit_konsumsi') === 'Tidak' ? 'Berkonsultasi tentang konsumsi vitamin A' : 'Meneruskan konsumsi vitamin A sesuai arahan petugas';
    const edKB = value('kb') === 'Tidak' ? 'Berkonsultasi tentang KB pascapersalinan' : 'Meneruskan KB pascapersalinan sesuai arahan petugas';
    updateChoice('edukasi', 'Edukasi vitamin A sesuai arahan petugas', edVit, ['Berkonsultasi tentang konsumsi vitamin A', 'Meneruskan konsumsi vitamin A sesuai arahan petugas']);
    addChoice('edukasi_kb', 'Edukasi KB sesuai arahan petugas', edKB, ['Berkonsultasi tentang KB pascapersalinan', 'Meneruskan KB pascapersalinan sesuai arahan petugas']);
    say('Teks edukasi vitamin A pada kartu adalah ' + edVit + '. Teks edukasi KB pada kartu adalah ' + edKB + '.');
  }
  if (moduleId === 'M03') {
    const food = value('edukasi'), composition = 'Bubur nasi, ' + food.toLowerCase() + ', dan sayur';
    const fullEdu = 'Pemberian MP-ASI dengan protein hewani berupa ' + food.toLowerCase() + ' sesuai arahan petugas';
    addChoice('komposisi_mpasi', 'Komposisi MP-ASI pada kasus', composition, ['Bubur nasi, telur, dan sayur', 'Bubur nasi, ikan, dan sayur', 'Bubur nasi, ayam, dan sayur']);
    updateChoice('edukasi', 'Edukasi MP-ASI sesuai arahan petugas', fullEdu, ['Pemberian MP-ASI dengan protein hewani berupa telur sesuai arahan petugas', 'Pemberian MP-ASI dengan protein hewani berupa ikan sesuai arahan petugas', 'Pemberian MP-ASI dengan protein hewani berupa ayam sesuai arahan petugas']);
    const adherence = value('mt') === 'Ya' ? pick(['Setiap hari', 'Tidak setiap hari']) : 'Tidak berlaku';
    addChoice('mt_kepatuhan', 'Kepatuhan konsumsi MT pada kasus', adherence, ['Setiap hari', 'Tidak setiap hari', 'Tidak berlaku']);
    const symptoms = value('gejala_sakit') === 'Ya' ? 'Batuk' : 'Tidak ada gejala pada kasus ini';
    addChoice('uraian_gejala', 'Uraian gejala sakit pada kasus', symptoms, ['Batuk', 'Tidak ada gejala pada kasus ini']);
    say('Komposisi MP-ASI adalah ' + composition + '. Kepatuhan konsumsi MT dicatat ' + adherence + '. Uraian gejala sakit ditulis ' + symptoms + '. Teks edukasi pada kartu adalah ' + fullEdu + '.');
  }
  if (moduleId === 'M07') {
    add('tanggal_skrining', 'Tanggal skrining SKILAS (DD/MM/YYYY)', visit);
    say('Tanggal skrining SKILAS adalah ' + visit + '. Tanggal skrining ditulis lagi pada bagian SKILAS, terpisah dari tanggal kunjungan pemeriksaan umum.');
  }
  const notesByModule = {
    M01: ['Kader mencatat nomor HP belum tersedia dan mempertahankan hasil serta tindak lanjut petugas', 'Kader memakai data simulasi dan meminta verifikasi informasi yang belum tersedia'],
    M02: ['Kader mencatat nomor HP belum tersedia dan kategori BB nifas memerlukan verifikasi petugas', 'Kader meminta klarifikasi nomor HP dan mempertahankan status verifikasi BB nifas'],
    M03: ['Kader mencatat nomor HP belum tersedia dan memakai status layanan sesuai penetapan kasus', 'Kader mempertahankan status layanan serta mencatat nomor HP yang belum diberikan'],
    M04: ['Kader menyimpan jawaban asli dan membatasi informasi sensitif kepada petugas penanggung jawab', 'Kader mempertahankan satuan Hb serta mengikuti arahan keselamatan petugas'],
    M05: ['Kader mencatat PUMA memenuhi syarat dan mempertahankan kategori serta arahan petugas', 'Kader memakai kategori merokok petugas dan mendokumentasikan tindak lanjut PUMA'],
    M06: ['Kader menyimpan tanggal, sumber informasi, dan jumlah AKS pada lembar pendamping', 'Kader memilih satu skor setiap kegiatan dan mencatat jumlah AKS pada lembar pendamping'],
    M07: ['Kader menyimpan pemaknaan tes petugas dan tidak membuat skor total SKILAS', 'Kader membedakan hasil yang belum tersedia dari hasil normal dan mencatat tindak lanjut petugas']
  };
  const note = pick(notesByModule[moduleId]);
  addChoice('catatan', 'Catatan bernilai sesuai arahan petugas', note, notesByModule[moduleId]);
  say('Petugas menetapkan teks catatan yang harus dipilih: ' + note + '.');
  if (fields.length > beforeDetails) group('rincian layanan, tanggal, dan catatan bernilai yang belum diisi', fields.slice(beforeDetails).map(x => x.id));
  for (const id of ['nama', 'nama_suami', 'nama_ayah', 'nama_ibu', 'nama_orang_tua', 'posyandu']) {
    const x = field(id);
    if (!x) continue;
    const alias = x.expected.replace(id === 'posyandu' ? /^Posyandu\s+/i : /^(?:Ibu|Bapak|Anak)\s+/i, '');
    if (alias && alias !== x.expected) x.accepted = [alias];
  }
  const coverage = curriculumCoverage[moduleId];
  if (new Set(Object.values(coverage)).size !== Object.keys(coverage).length || Object.values(coverage).some(id => !field(id))) throw new Error('Pemetaan kolom wajib belum lengkap.');
  const companionIds = moduleId === 'M06' ? ['tanggal', 'sumber', 'aks_total', 'rujukan', 'catatan'] : moduleId === 'M07' ? ['orientasi', 'tiga_kata', 'berdiri', 'tes_lihat', 'tes_bisik', 'bisik_status', 'rujukan', 'catatan'] : [];
  for (const x of fields) x.section = companionIds.includes(x.id) ? 'pendamping' : 'sumber';
  if (moduleId === 'M06') {
    field('tanggal').label = 'Tanggal penilaian pada lembar pendamping (DD/MM/YYYY)';
    say('Tanggal penilaian yang ditulis pada lembar pendamping AKS adalah ' + visit + '.');
  }
  const orderedIds = Object.values(coverage);
  fields.sort((a, b) => orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id));
  const introductions = ['Bacalah kasus ini, lalu tempatkan jawaban pada kartu yang sesuai.', 'Ikuti informasi kunjungan ini dan isi kartu dengan teliti.', 'Gunakan keterangan berikut untuk melengkapi kartu bantu.'];
  const prompts = ['Bagaimana Anda mengisi bagian', 'Apa isian yang tepat untuk bagian', 'Data apa yang Anda tulis pada bagian'];
  const questions = clusters.map((c, i) => ({id: 'Q' + (i + 1), text: pick(prompts) + ' ' + c.title + ' pada kunjungan ' + name + ' tanggal ' + visit + '?', fieldIds: [...c.ids]}));
  for (let i = questions.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [questions[i], questions[j]] = [questions[j], questions[i]]; }
  return {id, moduleId, attempt, title: 'Latihan ' + mod.short + ' — Kunjungan ' + visit, narrative: 'Semua keterangan berikut merupakan data simulasi untuk latihan, bukan data warga nyata.\n\n' + pick(introductions) + '\n\n' + facts.join('\n\n'), fields, questions};
}
window.KADER_CONTENT = {version: '1.1.0', modules, generateCase, curriculumCoverage};
})();
