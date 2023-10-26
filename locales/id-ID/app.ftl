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

account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = Lahir hari ini!
account-Header--manage-list--MenuItem = { -icon }<wrapper>Tambah atau Hapus dari daftar</wrapper>{ -emblem }
  .title = Tambah atau Hapus dari daftar
account-StatusAction--block = Blokir @{ $name }
account-StatusAction--block--MenuItem = { -icon }<wrapper>Blokir @{ $name }</wrapper>{ -emblem }
  .title = Blokir @{ $name }
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>Sembunyikan segalanya dari { $domain }</wrapper>{ -emblem }
  .title = Sembunyikan segalanya dari { $domain }
account-StatusAction--follow = Ikuti
account-StatusAction--unblock = Hapus blokir @{ $name }
account-StatusAction--unfollow = Berhenti mengikuti

account-birthday = Born { $date }
account-birthday-today = Birthday is today!
account-block = Block @{ $name }
account-block-domain = Hide everything from { $domain }
account-blocked = Blocked
account-chat = Chat with @{ $name }
account-copy = Copy link to profile
account-deactivated = Deactivated
account-direct = Direct message @{ $name }
account-domain-blocked = Domain blocked
app-create-name-label = App name
app-create-name-placeholder = { -brand-name }