### Localization for Ghostbox

# Naming convention for l10n IDs: "module-ComponentName--string-summary".
# Please sort alphabetically by (module name, component name).

# Special Cases (suffixed with "--Case"):
# - MenuItem
#   ID convention: "module-ComponentName--string-summary--MenuItem"
#   Formatting: <icon></icon><wrapper>TEXT GOES HERE!</wrapper><emblem></emblem>

### Terms
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
account-Header--manage-list--MenuItem = <icon></icon><wrapper>Add or Remove from lists</wrapper><emblem></emblem>

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