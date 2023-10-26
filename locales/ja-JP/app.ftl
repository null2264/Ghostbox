### 日本語 Localization for Ghostbox

# Please read top comment in en-US/app.ftl for more information.

### Terms
-brand-name = Ghostbox
-emblem = <emblem></emblem>
-icon = <icon></icon>

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

account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = 本日は誕生日です!
account-Header--manage-list--MenuItem = { -icon }<wrapper>リストから追加または外す</wrapper>{ -emblem }
  .title = リストから追加または外す
account-Status--block = ブロック済み
account-StatusAction--block = @{ $name }さんをブロック
account-StatusAction--block--MenuItem = { -icon }<wrapper>@{ $name }さんをブロック</wrapper>{ -emblem }
  .title = @{ $name }さんをブロック
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>{ $domain }全体を非表示</wrapper>{ -emblem }
  .title = { $domain }全体を非表示
account-StatusAction--follow = フォロー
account-StatusAction--unblock = @{ $name }さんのブロックを解除
account-StatusAction--unfollow = フォロー解除

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