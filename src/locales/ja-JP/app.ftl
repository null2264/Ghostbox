### 日本語 Localization for Ghostbox

# Please read top comment in en-US/app.ftl for more information.

### Terms
-brand-name = Ghostbox
-emblem = <emblem></emblem>
-icon = <icon></icon>
-accounts = <accounts></accounts>
-display-name = <name></name>

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

### About (features/about)
about-Page--available = 利用可能:

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

-edit-profile = プロフィール編集
account-Action--login = ログイン
account-Birthday--date--Icon = { -icon }{ DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--date = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
  .title = 生年月日 { DATETIME($date, year: "numeric", month: "short", day: "numeric") }
account-Birthday--celebration = 本日は誕生日です!
account-Header--banner =
  .alt = プロフィールのヘッダー
account-Header--chat =
  .title = @{ $name }さんとチャット
account-Header--direct--MenuItem = { -icon }<wrapper>@{ $name }さんにダイレクトメッセージ</wrapper>{ -emblem }
  .title = @{ $name }さんにダイレクトメッセージ
account-Header--edit-profile--MenuItem = { -icon }<wrapper>{ -edit-profile }</wrapper>{ -emblem }
  .title = { -edit-profile }
account-Header--endorse--MenuItem = { -icon }<wrapper>プロフィールで紹介する</wrapper>{ -emblem }
  .title = プロフィールで紹介する
account-Header--hide-reposts--MenuItem = { -icon }<wrapper>@{ $name }さんからのリポストを非表示</wrapper>{ -emblem }
  .title = @{ $name }さんからのリポストを非表示
account-Header--manage-list--MenuItem = { -icon }<wrapper>リストから追加または外す</wrapper>{ -emblem }
  .title = リストから追加または外す
account-Header--mention--MenuItem = { -icon }<wrapper>さんに投稿</wrapper>{ -emblem }
  .title = さんに投稿
account-Header--unendorse--MenuItem = { -icon }<wrapper>プロフィールから外す</wrapper>{ -emblem }
  .title = プロフィールから外す
account-Label--followers = フォロワー
account-Label--following = フォロー中
account-Link--verified-on =
  .title = このリンクの所有権は{ DATETIME($date, month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit") }に確認されました
account-Page--media = メディア
account-Status--block = ブロック済み
account-Status--deactivated = 非アクティブ化
account-Status--domain-block = ドメイン非表示
account-Status--follows-you = フォローされています
account-Status--familiar-followers = { -accounts }にフォローされています
account-Status--familiar-followers-empty = あなたの知り合いで{ -display-name }さんをフォローしている人はいません。
account-Status--familiar-followers-more = { $count } 人のおすすめユーザー
account-Status--last-status = 最後の活動
account-Status--locked =
  .alt = このアカウントは承認制アカウントです。相手が承認するまでフォローは完了しません。
account-Status--member-since = { DATETIME($date, year: "numeric", month: "long") }から利用しています
account-Status--muted = ミュートしています
account-Status--no-followers = まだ誰もフォローしていません。
account-Status--no-following = まだ誰もフォローしていません。
account-StatusAction--block = @{ $name }さんをブロック
account-StatusAction--block--MenuItem = { -icon }<wrapper>@{ $name }さんをブロック</wrapper>{ -emblem }
  .title = @{ $name }さんをブロック
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>{ $domain }全体を非表示</wrapper>{ -emblem }
  .title = { $domain }全体を非表示
account-StatusAction--edit-profile = { -edit-profile }
account-StatusAction--follow = フォローする
account-StatusAction--mute = @{ $name }さんをミュート
account-StatusAction--mute--MenuItem = { -icon }<wrapper>@{ $name }さんをミュート</wrapper>{ -emblem }
  .title = @{ $name }さんをミュート
account-StatusAction--unblock = @{ $name }さんのブロックを解除
account-StatusAction--unfollow = フォロー解除
account-StatusAction--unmute = @{ $name }さんのミュートを解除
account-StatusAction--unmute--MenuItem = { -icon }<wrapper>@{ $name }さんのミュートを解除</wrapper>{ -emblem }
  .title = @{ $name }さんのミュートを解除