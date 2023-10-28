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

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

-edit-profile = Ubah profil
account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = Lahir hari ini!
account-Header--copy--MenuItem = { -icon }<wrapper>Salin tautan ke profil</wrapper>{ -emblem }
  .title = Salin tautan ke profil
account-Header--edit-profile--MenuItem = { -icon }<wrapper>{ -edit-profile }</wrapper>{ -emblem }
  .title = { -edit-profile }
account-Header--manage-list--MenuItem = { -icon }<wrapper>Tambah atau Hapus dari daftar</wrapper>{ -emblem }
  .title = Tambah atau Hapus dari daftar
account-Label--followers = Pengikut
account-Label--following = Mengikuti
account-Status--block = Terblokir
account-Status--deactivated = Dinonaktifkan
account-Status--domain-block = Domain terblokir
account-Status--follows-you = Mengikuti anda
account-Status--muted = Dibisukan
account-Status--no-followers = Tidak ada yang mengikuti pengguna ini saat ini.
account-Status--no-following = Pengguna ini belum mengikuti siapapun.
account-StatusAction--block = Blokir @{ $name }
account-StatusAction--block--MenuItem = { -icon }<wrapper>Blokir @{ $name }</wrapper>{ -emblem }
  .title = Blokir @{ $name }
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>Sembunyikan segalanya dari { $domain }</wrapper>{ -emblem }
  .title = Sembunyikan segalanya dari { $domain }
account-StatusAction--edit-profile = { -edit-profile }
account-StatusAction--endorse--MenuItem = { -icon }<wrapper>Tampilkan di profil</wrapper>{ -emblem }
  .title = Tampilkan di profil
account-StatusAction--follow = Ikuti
account-StatusAction--unblock = Hapus blokir @{ $name }
account-StatusAction--unendorse--MenuItem = { -icon }<wrapper>Jangan tampilkan di profil</wrapper>{ -emblem }
  .title = Jangan tampilkan di profil
account-StatusAction--unfollow = Berhenti mengikuti