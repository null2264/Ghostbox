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
#   Formatting: { -icon }<wrapper>TEXT GOES HERE!</wrapper>{ -emblem }
#   Attrs:
#     - title
# - Icon
#   ID convention: "module-ComponentName--string-summary--Icon"
#   Formatting: { -icon }TEXT GOES HERE!

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
-emblem = <emblem></emblem>
-expand =
  { $case ->
    *[title] Expand
    [lower] expand
  }
-icon = <icon></icon>
-accounts = <accounts></accounts>
-display-name = <name></name>

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

-edit-profile = Edit profile
account-Badge--admin = Admin
account-Badge--bot = Bot
account-Badge--moderator = Moderator
account-Badge--patron = Patron
# someone messed up the translation (coding error)
account-Badge--opaque = INVALID!
account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Born { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = Born { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = Born { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = Birthday is today!
account-Header--chat =
  .title = Chat with @{ $name }
account-Header--copy--MenuItem = { -icon }<wrapper>Copy link to profile</wrapper>{ -emblem }
  .title = Copy link to profile
account-Header--direct--MenuItem = { -icon }<wrapper>Direct message @{ $name }</wrapper>{ -emblem }
  .title = Direct message @{ $name }
account-Header--edit-profile--MenuItem = { -icon }<wrapper>{ -edit-profile }</wrapper>{ -emblem }
  .title = { -edit-profile }
account-Header--manage-list--MenuItem = { -icon }<wrapper>Add or Remove from lists</wrapper>{ -emblem }
  .title = Add or Remove from lists
account-Status--block = Blocked
account-Status--deactivated = Deactivated
account-Status--domain-block = Domain blocked
account-Status--familiar-followers = Followed by { -accounts }
account-Status--familiar-followers-empty = No one you know follows { -display-name }
account-Status--familiar-followers-more =
  { $count ->
    [one] { $count } other you follow
    *[other] { $count } others you follow
  }
account-StatusAction--block = Block @{ $name }
account-StatusAction--block--MenuItem = { -icon }<wrapper>Block @{ $name }</wrapper>{ -emblem }
  .title = Block @{ $name }
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>Hide everything from { $domain }</wrapper>{ -emblem }
  .title = Hide everything from { $domain }
account-StatusAction--edit-profile = { -edit-profile }
account-StatusAction--endorse--MenuItem = { -icon }<wrapper>Feature on profile</wrapper>{ -emblem }
  .title = Feature on profile
account-StatusAction--follow = Follow
account-StatusAction--unblock = Unblock @{ $name }
account-StatusAction--unendorse--MenuItem = { -icon }<wrapper>Don't feature on profile</wrapper>{ -emblem }
  .title = Don't feature on profile
account-StatusAction--unfollow = Unfollow
account-Toast--endorsed = You are now featuring @{ $acct } on your profile
account-Toast--unendorsed = You are no longer featuring @{ $acct }

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