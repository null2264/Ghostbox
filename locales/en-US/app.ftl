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

### About (features/about)
about-Page--available = Available in:

### Account (features/account/...)

# Components that related to Account such as profile, hover card.

-edit-profile = Edit profile
account-Action--login = Sign in
account-Action--register = Sign up
account-Action--share =
  .title = Share @{ $name }'s profile
account-Action--subscribe =
  .title = Subscribe to notifications from @{ $name }
account-Action--unsubscribe =
  .title = Unsubscribe to notifications from @{ $name }
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
account-Header--banner =
  .alt = Profile header
account-Header--chat =
  .title = Chat with @{ $name }
account-Header--copy--MenuItem = { -icon }<wrapper>Copy link to profile</wrapper>{ -emblem }
  .title = Copy link to profile
account-Header--direct--MenuItem = { -icon }<wrapper>Direct message @{ $name }</wrapper>{ -emblem }
  .title = Direct message @{ $name }
account-Header--edit-profile--MenuItem = { -icon }<wrapper>{ -edit-profile }</wrapper>{ -emblem }
  .title = { -edit-profile }
account-Header--endorse--MenuItem = { -icon }<wrapper>Feature on profile</wrapper>{ -emblem }
  .title = Feature on profile
account-Header--hide-reposts--MenuItem = { -icon }<wrapper>Hide reposts from @{ $name }</wrapper>{ -emblem }
  .title = Hide reposts from @{ $name }
account-Header--manage-list--MenuItem = { -icon }<wrapper>Add or Remove from lists</wrapper>{ -emblem }
  .title = Add or Remove from lists
account-Header--mention--MenuItem = { -icon }<wrapper>Mention</wrapper>{ -emblem }
  .title = Mention
account-Header--profile-external--MenuItem = { -icon }<wrapper>View profile on { $domain }</wrapper>{ -emblem }
  .title = View profile on { $domain }
account-Header--remove-follower--MenuItem = { -icon }<wrapper>Remove this follower</wrapper>{ -emblem }
  .title = Remove this follower
account-Header--report--MenuItem = { -icon }<wrapper>Report @{ $name }</wrapper>{ -emblem }
  .title = Report @{ $name }
account-Header--rss-subscribe--MenuItem = { -icon }<wrapper>Subscribe to RSS feed</wrapper>{ -emblem }
  .title = Subscribe to RSS feed
account-Header--search--MenuItem = { -icon }<wrapper>Search from @{ $name }</wrapper>{ -emblem }
  .title = Search from @{ $name }
account-Header--search-self--MenuItem = { -icon }<wrapper>Search your posts</wrapper>{ -emblem }
  .title = Search your posts
account-Header--share--MenuItem = { -icon }<wrapper>Share @{ $name }'s profile</wrapper>{ -emblem }
  .title = Share @{ $name }'s profile
account-Header--show-reposts--MenuItem = { -icon }<wrapper>Show reposts from @{ $name }</wrapper>{ -emblem }
  .title = Show reposts from @{ $name }
account-Header--unendorse--MenuItem = { -icon }<wrapper>Don't feature on profile</wrapper>{ -emblem }
  .title = Don't feature on profile
account-Label--followers = Followers
account-Label--following = Following
account-Label--posts = Posts
account-Label--posts-with-replies = Posts and replies
account-Link--verified-on =
  .title = Ownership of this link was checked on { DATETIME($date, month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit") }
account-Page--media = Media
account-Page--profile = Profile
account-Status--block = Blocked
account-Status--deactivated = Deactivated
account-Status--domain-block = Domain blocked
account-Status--follows-you = Follows you
account-Status--familiar-followers = Followed by { -accounts }
account-Status--familiar-followers-empty = No one you know follows { -display-name }
account-Status--familiar-followers-more =
  { $count ->
    [one] { $count } other you follow
    *[other] { $count } others you follow
  }
account-Status--last-status = Last active
account-Status--locked =
  .alt = This account privacy status is set to locked. The owner manually reviews who can follow them.
account-Status--member-since = Joined { DATETIME($date, year: "numeric", month: "long") }
account-Status--muted = Muted
account-Status--never-active = Never
account-Status--no-followers = No one follows this user yet.
account-Status--no-following = This user doesn't follow anyone yet.
account-Status--requested = Awaiting approval
account-Status--verified =
  .alt = Verified Account
account-StatusAction--block = Block @{ $name }
account-StatusAction--block--MenuItem = { -icon }<wrapper>Block @{ $name }</wrapper>{ -emblem }
  .title = Block @{ $name }
account-StatusAction--block-domain--MenuItem = { -icon }<wrapper>Hide everything from { $domain }</wrapper>{ -emblem }
  .title = Hide everything from { $domain }
account-StatusAction--edit-profile = { -edit-profile }
account-StatusAction--follow = Follow
account-StatusAction--follow-remote = Remote follow
account-StatusAction--mute = Mute @{ $name }
account-StatusAction--mute--MenuItem = { -icon }<wrapper>Mute @{ $name }</wrapper>{ -emblem }
  .title = Mute @{ $name }
account-StatusAction--unblock = Unblock @{ $name }
account-StatusAction--unblock--MenuItem = { -icon }<wrapper>Unblock @{ $name }</wrapper>{ -emblem }
  .title = Unblock @{ $name }
account-StatusAction--unblock-domain=
  .title = Show { $domain }
account-StatusAction--unblock-domain--MenuItem = { -icon }<wrapper>Show { $domain }</wrapper>{ -emblem }
  .title = Show { $domain }
account-StatusAction--unfollow = Unfollow
account-StatusAction--unmute = Unmute @{ $name }
account-StatusAction--unmute--MenuItem = { -icon }<wrapper>Unmute @{ $name }</wrapper>{ -emblem }
  .title = Unmute @{ $name }
account-Toast--endorsed = You are now featuring @{ $acct } on your profile
account-Toast--unendorsed = You are no longer featuring @{ $acct }
account-Toast--subscribe-fail = An error occurred trying to subscribe to this account.
account-Toast--subscribe-success = You have subscribed to this account
account-Toast--unsubscribe-fail = An error occurred trying to unsubscribe to this account.
account-Toast--unsubscribe-success = You have unsubscribed to this account

# Search (features/components/search)
search-Input--placeholder = Search
  .placeholder = Search
  .aria-label = Search