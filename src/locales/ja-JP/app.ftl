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

-birthday-date =
  { $suffix ->
    *[icon] <icon></icon>{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
    [text] 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  }
account-Birthday--date--Icon = { -birthday-date(suffix: "icon") } 
  .title = { -birthday-date(suffix: "text") }
account-Birthday--date = { -birthday-date(suffix: "text") }
  .title = { -birthday-date(suffix: "text") }
account-Birthday--celebration = 本日は誕生日です!
account-Header--manage-list--MenuItem = <icon></icon><wrapper>リストから追加または外す</wrapper><emblem></emblem>

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