### 日本語 Localization for Ghostbox

# Please read top comment in en-US/app.ftl for more information.

### Terms
-brand-name = Ghostbox

### Modules

### UI (components/ui/)

# Common components, not exclusive to specific module.

## Accordion (components/ui/accordion/...)
ui-Accordion--collapse =
  .title = 折り畳む
ui-Accordion--expand =
  .title = 開く

## Card (components/ui/card/...)
ui-CardHeader--back =
  .aria-label = 戻る
  .title = 戻る

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

account-Header--manage-list--MenuItem = <icon></icon><wrapper>リストから追加または外す</wrapper><emblem></emblem>

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