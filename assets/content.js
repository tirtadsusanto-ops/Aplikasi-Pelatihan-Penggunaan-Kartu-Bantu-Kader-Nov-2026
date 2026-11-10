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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "text": "Kader mencatat data kunjungan ibu hamil pada kartu ibu nifas. Kader menganggap kedua kartu itu dapat saling menggantikan.",
          "answer": false,
          "explanation": "Jenis kartu harus sesuai dengan keadaan orang dalam kasus."
        },
        {
          "id": "M01-S5",
          "text": "Petugas memberikan rencana rujukan pada kasus dengan hasil merah. Kader mencatat rencana itu pada kolom rujukan kartu ibu hamil.",
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
        "material": "Materi 2 membahas edukasi ketika konsumsi tidak setiap hari atau kelas ibu belum diikuti, pencatatan tujuan rujukan, serta pemeriksaan ulang isian kartu.",
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "text": "Ibu tidak menyusui pada kasus ini. Kader menghapus jawaban Tidak agar kartu terlihat baik.",
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
          "text": "Kader memeriksa nama ibu dan jenis kartu sebelum menyimpan kartu ibu nifas.",
          "answer": true,
          "explanation": "Nama orang dan jenis kartu harus sesuai dengan kasus."
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "text": "Kader mempertahankan jawaban asli remaja dan catatan pemaknaan petugas pada kartu serta lembar pendamping.",
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
        "material": "Materi 2 membahas penyampaian data sensitif kepada petugas yang bertanggung jawab, pencatatan arahan keselamatan, serta pemeriksaan ulang isian kartu.",
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "text": "Kader memeriksa tujuh komponen PUMA sebelum menyimpan kartu yang telah diisi.",
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
        "material": "Materi 2 membahas pencatatan tindak lanjut hasil tinggi, skor PUMA, sumber hasil pemeriksaan, dan pemeriksaan akhir isian kartu.",
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "explanation": "Lembar pendamping membantu petugas menelusuri tanggal penilaian dan jumlah skor."
        }
      ]
    },
    "mappings": [
      {
        "title": "Identitas dan sumber informasi",
        "indicator": "Peserta mencatat identitas dan sumber keterangan kemampuan lansia sesuai kasus.",
        "material": "Materi 1 membahas identitas, riwayat keluarga/pribadi, empat perilaku, serta keterangan lansia atau pendamping dalam kasus.",
        "location": "Halaman 1 dan lembar pendamping"
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
          "Kader mengisi seluruh kolom wajib, termasuk identitas lengkap dan catatan, sebelum menyimpan kartu."
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
          "text": "Satu hasil tes belum tersedia. Kader mengisinya sebagai normal agar kartu terlihat lengkap.",
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
window.KADER_CONTENT = {version: "2.0.0", modules};
})();
