### Localization for Ghostbox

# Naming convention for l10n IDs: "module-ComponentName--string-summary".
# Please sort alphabetically by (module name, component name).

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
ui-CardHeader--back-label =
  .aria-label = Kembali
ui-CardHeader--back-button = Kembali

account-manage-list = Add or Remove from lists
account-badges-admin = Admin
account-badges-bot = Bot
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