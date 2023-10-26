### Localization for Ghostbox

# Naming convention for l10n IDs: "module-ComponentName--string-summary".
# Please sort alphabetically by (module name, component name).

# -- Special Cases --
# This is for special cases where the translation have to be formatted in a
# specific way, these translations should be prefixed with "--Case".
# 
# The format should not be changed!
# You should only change the "TEXT GOES HERE!" text!
#
# - MenuItem
#   ID convention: "module-ComponentName--string-summary--MenuItem"
#   Formatting: <icon></icon><wrapper>TEXT GOES HERE!</wrapper><emblem></emblem>
# - Icon
#   ID convention: "module-ComponentName--string-summary--Icon"
#   Formatting: <icon></icon>TEXT GOES HERE!

### Terms
# You don't need to add every new term here, just add if needed (e.g. the term is commonly used).
-back =
  { $case ->
    *[title] Back
    [lower] back
  }
-brand-name = Ghostbox
-collapse =
  { $case ->
    *[title] Collapse
    [lower] collapse
  }
-expand =
  { $case ->
    *[title] Expand
    [lower] expand
  }

### Modules

### UI (components/ui/)

# Common components, not exclusive to specific module.

## Accordion (components/ui/accordion/...)
ui-Accordion--collapse =
  .title = { -collapse }
ui-Accordion--expand =
  .title = { -expand }

## Card (components/ui/card/...)
ui-CardHeader--back =
  .aria-label = { -back }
  .title = { -back }

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

account-Badge--admin = Admin
account-Badge--bot = Bot
account-Badge--moderator = Moderator
-birthday-date =
  { $suffix ->
    *[icon] <icon></icon>{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
    [text] Born { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  }
account-Birthday--date--Icon = { -birthday-date(suffix: "icon") } 
  .title = { -birthday-date(suffix: "text") }
account-Birthday--date = { -birthday-date(suffix: "text") }
  .title = { -birthday-date(suffix: "text") }
account-Birthday--celebration = Birthday is today!
account-Header--manage-list--MenuItem = <icon></icon><wrapper>Add or Remove from lists</wrapper><emblem></emblem>

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