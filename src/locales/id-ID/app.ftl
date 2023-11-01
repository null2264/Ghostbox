### Bahasa Indonesia Localization for Ghostbox

# Mohon untuk membaca komentar paling atas dalam file en-US/app.ftl untuk informasi lebih lanjut.

### Terms
-brand-name = Ghostbox
-emblem = <emblem></emblem>
-icon = <icon></icon>

### Modules

### UI (components/ui/)

# Common components, not exclusive to specific module.

## Accordion (components/ui/accordion/...)
ui-Accordion--collapse =
  .title = Tutup 
ui-Accordion--expand =
  .title = Buka

## Card (components/ui/card/...)
ui-CardHeader--back =
  .aria-label = Kembali
  .title = Kembali

### About (features/about)
about-Page--available = Tersedia di:

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

-edit-profile = Ubah profil
account-Action--login = Masuk
account-Action--register = Daftar
account-Action--share =
  .title = Bagikan profil @{ $name }
account-Action--subscribe =
  .title = Langganan ke notifikasi dari @{ $name }
account-Action--unsubscribe =
  .title = Berhenti langganan notifikasi dari @{ $name }
account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = Lahir hari ini!
account-Header--banner =
  .alt = Header profil
account-Header--copy--MenuItem = { -icon }<wrapper>Salin tautan ke profil</wrapper>{ -emblem }
  .title = Salin tautan ke profil
account-Header--edit-profile--MenuItem = { -icon }<wrapper>{ -edit-profile }</wrapper>{ -emblem }
  .title = { -edit-profile }
account-Header--endorse--MenuItem = { -icon }<wrapper>Tampilkan di profil</wrapper>{ -emblem }
  .title = Tampilkan di profil
account-Header--hide-reposts--MenuItem = { -icon }<wrapper>Sembunyikan repost dari @{ $name }</wrapper>{ -emblem }
  .title = Sembunyikan repost dari @{ $name }
account-Header--manage-list--MenuItem = { -icon }<wrapper>Tambah atau Hapus dari daftar</wrapper>{ -emblem }
  .title = Tambah atau Hapus dari daftar
account-Header--mention--MenuItem = { -icon }<wrapper>Balasan</wrapper>{ -emblem }
  .title = Balasan
account-Header--profile-external--MenuItem = { -icon }<wrapper>Lihat profil di { $domain }</wrapper>{ -emblem }
  .title = Lihat profil di { $domain }
account-Header--remove-follower--MenuItem = { -icon }<wrapper>Hapus pengikut ini</wrapper>{ -emblem }
  .title = Hapus pengikut ini
account-Header--report--MenuItem = { -icon }<wrapper>Laporkan @{ $name }</wrapper>{ -emblem }
  .title = Laporkan @{ $name }
account-Header--rss-subscribe--MenuItem = { -icon }<wrapper>Langganan ke umpan RSS</wrapper>{ -emblem }
  .title = Langganan ke umpan RSS
account-Header--search--MenuItem = { -icon }<wrapper>Cari dari @{ $name }</wrapper>{ -emblem }
  .title = Cari dari @{ $name }
account-Header--search-self--MenuItem = { -icon }<wrapper>Cari postingan anda</wrapper>{ -emblem }
  .title = Cari postingan anda
account-Header--share--MenuItem = { -icon }<wrapper>Bagikan profil @{ $name }</wrapper>{ -emblem }
  .title = Bagikan profil @{ $name }
account-Header--show-reposts--MenuItem = { -icon }<wrapper>Tampilkan repost dari @{ $name }</wrapper>{ -emblem }
  .title = Tampilkan repost dari @{ $name }
account-Header--unendorse--MenuItem = { -icon }<wrapper>Jangan tampilkan di profil</wrapper>{ -emblem }
  .title = Jangan tampilkan di profil
account-Label--followers = Pengikut
account-Label--following = Mengikuti
account-Label--posts = Postingan
account-Label--posts-with-replies = Postingan dan Balasan
account-Link--verified-on =
  .title = Kepemilikan tautan ini telah diverifikasi pada { DATETIME($date, month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit") }
account-Page--profile = Profil
account-Status--block = Terblokir
account-Status--deactivated = Dinonaktifkan
account-Status--domain-block = Domain terblokir
account-Status--follows-you = Mengikuti anda
account-Status--last-status = Terakhir aktif
account-Status--locked =
  .alt = Status privasi akun ini disetel untuk dikunci. Pemilik secara manual meninjau siapa yang dapat mengikuti mereka.
account-Status--member-since = Terdaftar sejak { DATETIME($date, year: "numeric", month: "long") }
account-Status--muted = Dibisukan
account-Status--never-active = Tidak pernah
account-Status--no-followers = Tidak ada yang mengikuti pengguna ini saat ini.
account-Status--no-following = Pengguna ini belum mengikuti siapapun.
account-Status--requested = Menunggu persetujuan
account-Status--verified =
  .alt = Akun Terverifikasi
account-StatusAction--block = Blokir @{ $name }
account-StatusAction--block--MenuItem = { -icon }<wrapper>Blokir @{ $name }</wrapper>{ -emblem }
  .title = Blokir @{ $name }
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>Sembunyikan segalanya dari { $domain }</wrapper>{ -emblem }
  .title = Sembunyikan segalanya dari { $domain }
account-StatusAction--edit-profile = { -edit-profile }
account-StatusAction--follow = Ikuti
account-StatusAction--mute = Bisukan @{ $name }
account-StatusAction--mute--MenuItem = { -icon }<wrapper>Bisukan @{ $name }</wrapper>{ -emblem }
  .title = Bisukan @{ $name }
account-StatusAction--unblock = Hapus blokir @{ $name }
account-StatusAction--unblock--MenuItem = { -icon }<wrapper>Hapus blokir @{ $name }</wrapper>{ -emblem }
  .title = Hapus blokir @{ $name }
account-StatusAction--unblock-domain=
  .title = Tampilkan { $domain }
account-StatusAction--unblock-domain--MenuItem = { -icon }<wrapper>Tampilkan { $domain }</wrapper>{ -emblem }
  .title = Tampilkan { $domain }
account-StatusAction--unfollow = Berhenti mengikuti
account-StatusAction--unmute = Berhenti membisukan @{ $name }
account-StatusAction--unmute--MenuItem = { -icon }<wrapper>Berhenti membisukan @{ $name }</wrapper>{ -emblem }
  .title = Berhenti membisukan @{ $name }

# Search (features/components/search)
search-Input--placeholder = Pencarian
search-Input--placeholder-attrs =
  .placeholder = Pencarian
  .aria-label = Pencarian

# Status
status-Content--show-more = Baca selengkapnya
status-Content--show-less = Tutup

# Timeline
timeline-ScrollToTop--new-posts = { $count } Postingan Baru
timeline-ScrollToTop--new-posts-legacy = Klik untuk melihat { $count } postingan baru
timeline-ScrollToTop--new-notifications = Klik untuk melihat { $count } notifikasi baru