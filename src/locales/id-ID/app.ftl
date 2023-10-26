### Bahasa Indonesia Localization for Ghostbox

# Mohon untuk membaca komentar paling atas dalam file en-US/app.ftl untuk informasi lebih lanjut.

### Terms
-brand-name = Ghostbox

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

-birthday-date =
  { $suffix ->
    *[icon] <icon></icon>{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
    [text] Lahir tanggal { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  }
account-Birthday--date--Icon = { -birthday-date(suffix: "icon") } 
  .title = { -birthday-date(suffix: "text") }
account-Birthday--date = { -birthday-date(suffix: "text") }
  .title = { -birthday-date(suffix: "text") }
account-Birthday--celebration = Lahir hari ini!
account-Header--manage-list--MenuItem = <icon></icon><wrapper>Tambah atau Hapus dari daftar</wrapper><emblem></emblem>

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