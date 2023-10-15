# Changelog

<!--
## 20xx.xx.x
- Type: changes
-->

## 2023.10.1
- Dev: move files from `app/` to `src/`
- Dev: cache translation instead always requesting new one
- Dev: start replacing `<Bundle />` with React's lazy load
- UI: fixed audio player hide button colour on hover
- UI: show display name on profile page's title
- UX: rename `soapbox/` routes to `ghostbox/`
- UX: change `ghostbox/config` route to `ghostbox/admin/config` for consistency
- UX: redirect `notice/:statusId` to `posts/:statusId` for consistency
- UX: read more now act like CW's show more
- Pleroma: fixed instance not being normalised

## 2023.10.0
- Pleroma: backport MRF breaking changes fixes from Akkoma
- Akkoma: add support for Akkoma's "machine translation"

## v1.1.1 - Akkoma Fix
- Akkoma: fixed MRF due to backend breaking changes

## v1.1.0 - Compatibility Fixes
- UI: disable voters count
- Dev: fixed `process.env` variables inaccessible at compile time
- UX: fixed post will always post regardless if poll valid or not
- Misskey: fixed audio CORS issue
- Spirit: explicitly mention post author on reply
- UX: ghostbox now assume browser is mobile from User-Agent
- Compatibility: crashes on instance timeline
- UI: remove navbar items' text if there's more than 4 items
- UX: fixed timeline jumping (Thanks to https://github.com/BDX-town/Mangane/pull/247)
- Compatibility: support indefinite poll
- UI: fixed poll vote count
- UX: fixed video player refuses to go fullscreen

## v1.0.0 - Divergence
- UI: fixed options in setting page not shown properly
- UI: [improved sensitive content and CW UI/UX](/CHANGELOG.UI.md)
- UI: moved settings and dashboard into "More" menu
- UI: rearrange sidebar
- UI: changed favorite icon to star
- UI: add CSS support for headings (H1, H2, H3)
- UI: moved timeline (local and fediverse) right below search
- UI: shorten follow request notice
- I18n: remove unused locales
- UI: rename Soapbox to Ghostbox
- UI: changed spinner's look
- UI: add hide video button
- Dev: migrate from Webpack to Vite
- UI: add privacy indicator to posts
- UI: fixed dropdown misalignments and overflows
- UI: add MFM support
- UI: improve emoji picker for mobile
- Compatibility: fixed CSP support
- UI: fixed 'load more' button misalignment in Media page

---

## [3.2.1]

### Added
- Hashtags: let users follow hashtags (Mastodon, Akkoma).
- Posts: Support posts filtering on recent Mastodon versions
- Reactions: Support custom emoji reactions
- Compatibility: Support Mastodon v2 timeline filters.
- Compatibility: Preliminary support for Ditto backend.
- Compatibility: Support Firefish.
- Posts: Support dislikes on Friendica.
- UI: added a character counter to some textareas.
- UI: added new experience for viewing Media
- Hotkeys: Added `/` as a hotkey for search field.

### Changed
- Posts: truncate Nostr pubkeys in reply mentions.
- Posts: upgraded emoji picker component.
- Posts: improved design of threads.
- UI: unified design of "approve" and "reject" buttons in follow requests and waitlist.
- UI: added sticky column header.
- UI: add specific zones the user can drag-and-drop files.
- UI: disable toast notifications for API errors.
- Chats: Display year for older messages creation date.

### Fixed
- Posts: fixed emojis being cut off in reactions modal.
- Posts: fix audio player progress bar visibility.
- Posts: fix audio player avatar aspect ratio for non-square avatars.
- Posts: added missing gap in pending status.
- Compatibility: fixed quote posting compatibility with custom Pleroma forks.
- Profile: fix "load more" button height on account gallery page.
- 18n: fixed Chinese language being detected from the browser.
- Conversations: fixed pagination (Mastodon).
- Compatibility: fix version parsing for Friendica.
- UI: fixed various overflow issues related to long usernames.
- UI: fixed display of Markdown code blocks in the reply indicator.
- Auth: fixed too many API requests when the server has an error.
- Auth: Don't display "username or e-mail" if username is not allowed.

## [3.2.0] - 2023-02-15

### Added
- Admin: redirect the homepage to any URL.
- Compatibility: added compatibility with Friendica.
- Posts: bot badge on statuses from bot accounts.
- Compatibility: improved browser support for older browsers.
- Events: allow to repost events in event menu.
- Profile: Add RSS link to user profiles.
- Reactions: adds support for reacting to chat messages.
- Groups: initial support for groups.
- Profile: add RSS link to user profiles.
- Chats: reset chat message field height after sending a message.
- Admin: allow to manage announcements.

### Changed
- Chats: improved display of media attachments.
- ServiceWorker: switch to a network-first strategy. The "An update is available!" prompt goes away.
- Posts: increased font size of focused status in threads.
- Posts: let "mute conversation" be clicked from any feed, not just noficiations.
- Posts: display all emoji reactions.
- Reactions: improved UI of reactions on statuses.
- Profile: make verified badge more prominent, overlapping with avatar.

### Fixed
- Admin: fixed hover card in reports modal shows reporter not reportee
- Chats: media attachments rendering at the wrong size and/or causing the chat to scroll on load.
- Chats: don't display "copy" button for messages without text.
- Posts: don't have to click the play button twice for embedded videos.
- index.html: remove `referrer` meta tag so it doesn't conflict with backend's `Referrer-Policy` header.
- Modals: fix media modal automatically switching to video.
- Navigation: profile dropdown erratic behavior.
- Posts: fix posts filtering.

### Removed
- Admin: single user mode. Now the homepage can be redirected to any URL.

## [3.1.0] - 2023-01-13

### Added
- Compatibility: rudimentary support for Takahē.
- UI: added backdrop blur behind modals.
- Admin: let admins configure media preview for attachment thumbnails.
- Login: accept `?server` param in external login, eg `fe.soapbox.pub/login/external?server=gleasonator.com`.
- Backups: restored Pleroma backups functionality.
- Export: restored "Export data" to CSV.

### Changed
- Posts: letterbox images to 19:6 again.
- Status Info: moved context (repost, pinned) to improve UX.
- Posts: remove file icon from empty link previews.
- Settings: moved "Import data" under settings.
- Composer: add more descriptive discard confirmation message.

### Fixed
- Layout: use accent color for "floating action button" (mobile compose button).
- ServiceWorker: don't serve favicon, robots.txt, and others from ServiceWorker.
- Datepicker: correctly default to the current year.
- Scheduled posts: fix page crashing on deleting a scheduled post.
- Events: don't crash when searching for a location.
- Search: fixes an abort error when using the navbar search component.
- Posts: fix monospace font in Markdown code blocks.
- Modals: fix action buttons overflow
- Editing: don't insert edited posts to the top of the feed.
- Editing: don't display edited posts as pending posts.
- Modals: close modal when navigating to a different page.
- Modals: fix "View context" button in media modal.
- Posts: let unauthenticated users to translate posts if allowed by backend.
- Chats: fix jumpy scrollbar.
- Composer: fix alignment of icon in submit button.
- Login: add a border around QR codes.
- Composer: don't display action button in reply indicator.

## [3.0.0] - 2022-12-25

### Added
- Editing: ability to edit posts and view edit history (on Rebased, Pleroma, and Mastodon).
- Events: ability to create, view, and comment on Events (on Rebased).
- Onboarding: display an introduction wizard to newly registered accounts.
- Posts: translate foreign language posts into your native language (on Rebased, Mastodon; if configured by the admin).
- Posts: ability to view quotes of a post (on Rebased).
- Posts: hover the "replying to" line to see a preview card of the parent post.
- Chats: ability to leave a chat (on Rebased, Truth Social).
- Chats: ability to disable chats for yourself.
- Layout: added right-to-left support for Arabic, Hebrew, Persian, and Central Kurdish languages.
- Composer: support custom emoji categories.
- Search: ability to search posts from a specific account (on Pleroma, Rebased).
- Theme: auto-detect system theme by default.
- Profile: remove a specific user from your followers (on Rebased, Mastodon).
- Suggestions: ability to view all suggested profiles.
- Feeds: display suggested accounts in Home feed (optional by admin).
- Compatibility: added compatibility with Truth Social, Fedibird, Pixelfed, Akkoma, and Glitch.
- Developers: added Test feed, Service Worker debugger, and Network Error preview.
- Reports: display server rules in reports. Let users select rule violations when submitting a report.
- Admin: added Theme Editor, a GUI for customizing the color scheme.
- Admin: custom badges. Admins can add non-federating badges to any user's profile (on Rebased, Pleroma).
- Admin: consolidated user dropdown actions (verify/suggest/etc) into a unified "Moderate User" modal.
- i18n: updated translations for Italian, Polish, Arabic, Hebrew, and German.
- Toast: added the ability to dismiss toast notifications.

### Changed
- UI: the whole UI has been overhauled both inside and out. 97% of the codebase has been rewritten to TypeScript, and a new component library has been introduced with Tailwind CSS.
- Chats: redesigned chats. Includes an improved desktop UI, unified chat widget, expanding textarea, and autosuggestions.
- Lists: ability to edit and delete a list.
- Settings: unified settings under one path with separate sections.
- Posts: changed the thumbs-up icon to a heart.
- Posts: move instance favicon beside username instead of post timestamp.
- Posts: changed the behavior of content warnings. CWs and sensitive media are unified into one design.
- Posts: redesigned interaction counters to use text instead of icons.
- Posts: letterbox images taller than 1:1.
- Profile: overhauled user profiles to be consistent with the rest of the UI.
- Composer: move emoji button alongside other composer buttons, add numerical counter.
- Birthdays: move today's birthdays out of notifications into right sidebar.
- Performance: improve scrolling/navigation between feeds by using a virtual window library.
- Admin: reorganize UI into 3-column layout.
- Admin: include external link to frontend repo for the running commit.
- Toast: redesigned toast notifications.

### Removed
- Theme: Halloween theme.
- Settings: advanced notification settings.
- Settings: dyslexic mode.
- Settings: demetricator.
- Profile: ability to set and view private notes on an account.
- Feeds: per-feed filters for replies, media, etc.
- Backup and export functionality (for now).
- Posts: hide non-emoji images embedded in post content.

### Security
- Glitch Social: fixed XSS vulnerability on Glitch Social where custom emojis could be exploited to embed a script tag.

## [2.0.0] - 2022-05-01
### Added
- Quote Posting: repost with comment on Fedibird and Rebased.
- Profile: ability to feature other users on your profile (on Rebased, Mastodon).
- Profile: ability to add location to the user's profile (on Rebased, Truth Social).
- Birthdays: ability to add a birthday to your profile (on Rebased, Pleroma).
- Birthdays: support for age-gated registration if configured by the admin (on Rebased, Pleroma).
- Birthdays: display today's birthdays in notifications.
- Notifications: added unread badge to favicon when user has notifications.
- Notifications: display full attachments in notifications instead of links.
- Search: added a dedicated search page with prefilled suggestions.
- Compatibility: improved support for Mastodon, added support for Mitra.
- Ethereum: Metamask sign-in with Mitra.
- i18n: added Shavian alphabet (`en-Shaw`) transliteration.
- i18n: added Icelandic translation.

### Changed
- Feeds: added gaps between posts in feeds.
- Feeds: automatically load new posts when scrolled to the top of the feed.
- Layout: improved design of top navigation bar.
- Layout: add left sidebar navigation.
- Icons: replaced Fork Awesome icons with Tabler icons.
- Posts: moved mentions out of the post content into an area above the post for replies (on Pleroma and Rebased - Mastodon falls back to the old behavior).
- Composer: use graphical ring counter for character count.

### Fixed
- Multi-Account: fix switching between profiles on different servers with the same local username.

## [1.3.0] - 2021-07-02
### Changed
- Layout: show right sidebar on all pages.
- Statuses: improve display of multiple rich media items.
- Statuses: let media be cropped less (when dimensions are provided).
- Profile metadata: show only 4 by default, let items be added and removed.

### Fixed
- Performance: fixed various performance issues, especially related to the post composer and chats.
- Composer: fixed upload form style on light theme.
- Composer: fixed emoji search when a custom emoji was invalid.
- Composer: fixed uploaded images sometimes being turned sideways.
- Chats: fix "Message" button on intermediate screen sizes.
- Chats: filter out invalid chats.
- Notifications: fixed notification counter on Brave Android (and possibly others).
- Localization: fixed hardcoded strings.
- Lists: fixed frontend issues related to lists (there are still backend issues).
- Modals: fixed unauthorized modal style.
- Hotkeys: remove unused hotkeys, fix broken ones.
- Sidebar: fix alignment of icons.
- Various iOS fixes.

### Added
- Statuses: added greentext support, configurable site-wide by admin.
- Statuses: added Mastodon's audio player.
- Statuses: indicate > 4 attachments.
- Statuses: display tombstones in place of deleted posts (to not break threads).
- Composer: added blurhash to upload form.
- Localization: support localization of About pages, Promo Panel items, and Link Footer items.
- Localization: display labels for default emoji reactions.
- Alerts: return detailed error for 502.
- Profile: support hidden stats.
- Profile: support blocking notifications from people you don't follow.
- Notifications: support account move notification.
- Timelines: let Fediverse explanation box be dismissed.
- Admin: optimistic user deletion.
- Admin: add monthly active users count to dashboard.
- Admin: add user retention % to dashboard.

## [1.2.3] - 2021-04-18
### Changed
- Twemoji now bundled

### Fixed
- Redirect user after registration
- Delete invalid auth users from browser
- Uploaded files ending in .blob

## [1.2.2] - 2021-04-13
### Fixed
- verify_credentials infinite loop bug
- Emoji reacts not being sent through notifications
- Contrast of Polls

### Added
- Configurable FQN for local accounts
- Polish translations

## [1.2.1] - 2021-04-06
### Fixed
- "View context" button on videos
- Login page successfully redirects Home

## [1.2.0] - 2021-04-02
### Added
- Remote follow button
- Display "Bot" tag for bot users
- Ability to view remote timelines
- Admin interface
- Integrated moderation features
- Multiple account support
- Verification (blue checkmark)
- Better support for follow requests
- Improve feedback when registering a new account
- Ability to import Mutes from CSV
- Add server information page
- "Follow" button is more responsive
- Portuguese translations

### Fixed
- Heart reaction works on Pleroma >= 2.3.0
- Pagination of Blocks and Mutes

## [1.1.0] - 2020-10-05
### Fixed
- General user interface and ease-of-use improvements for both mobile and desktop
- General loading and performance improvements, including shrinking bundle size
- GIF handling: AutoPlayGif Preference support, including avatars and profile banners
- Sidebar menu browser compatibility
- React 17.x compatibility
- Timeline jumping during scroll
- Collapse of compose modal after privacy scope change
- Media attachment rendering
- Thread view reply post rendering
- Thread view scroll to selected post rendering
- Bookmarking of posts
- Edit Profile: checkbox handling
- Edit Profile: multi-line bio with link support
- Muted Users: posts of muted users now appear in profile view
- Forms: security issue resolved with POST method on all forms
- Internationalization: increased elements that are internationalizable
- Composer: Forcing the scope to default after settings save.

### Added
- Chats, currently one-to-one, evolving with Pleroma BE capabilities, including:
    - Initiate chat via `Message` button on profile
    - Up to 4 open foreground chat windows in desktop, with open/minimize/close and notification counter
    - Browser tab notification counter includes total chat and post notifications
    - Chats list with total chats notification counter and audio notification toggle
    - Unique chat audio notification
    - Add attachment
    - Delete chat message
    - Report chat account
    - Chats icon with notification counter in top navbar in mobile view
    - Chats marked read on chat hover or on chat key event
- Audio player for audio uploads, including ogg, oga, and wav support
- Integration with Patron recurring donations platform
- Profile hover panels, with click to Follow/Unfollow
- Posts: Favicon of user's home instance included on post
- Soapbox configuration page, including:
    - Site preview, including light/dark theme toggle rendering
    - Logo
    - Brand color using color picker
    - Copyright footer
    - Promo panel custom links for timeline pages
    - Home footer custom links for static pages
    - Editable JSON based configuration option
- Themes: Light/dark theme toggle in top navbar
- Themes: Halloween mode in Preferences page
- Markdown support in post composer, as default
- Loading indicator general improvements
- Polls: Add media attachments
- Polls: Mouseover hint on poll compose radiobutton to teach single/multi-choice poll type toggling
- Polls: Remove blank poll by either toggling Poll icon or by removing poll options
- Registration: Support for `Account approval required` setting in Pleroma AdminFE, via dynamic `Why do you want to join?` textarea on registration page
- Filtering: `Muted Words` menu item and page
- Filtering: Direct messages filter toggle on Home timeline
- Floating top navbar during scroll
- Import Data: `Import follows` and `import blocks`
- Profile: Media panel
- Media: Media gallery thumbnails
- Media: Any media type as attachment
- General documentation improvements
- Delete Account feature for user self-deletion in Security page
- Registration: Captcha reload on image click
- Fediverse timeline explanation accordion toggle
- Tests: React reducers tests
- Profile: Max profile meta fields defined by Pleroma BE capability
- Profile: Verified user checkbox
- Admin: Reports counter and top navbar element for admin accounts, linked to Pleroma AdminFE
- [Renovate.json](https://docs.renovatebot.com/configuration-options/) support

### Changed
- Revoke OAuth token on logout
- Home sidebar rearrangement
- Compose form icons
- User event notifications: improved rendering and added color coding
- Home timeline: `Show reposts` filter toggle default to `off`
- Direct Messages: Changed API usage from `conversations` to `direct`
- Project documentation management system, using CI
- Documentation: site customization and installation on sub-domain
- Redux update

### Removed
- FontAwesome dependencies, with full switch to ForkAwesome
- Requirement for use of soapbox.json for configuration
- Direct Message links from menus, partial deprecation due to chats

## [1.0.0] - 2020-06-15
### Added
- Emoji reactions.
- Ability to set brand color in soapbox.json.
- Security UI.
- Proper i18n support.
- Link to AdminFE.
- Password reset.
- Ability to edit profile fields.
- Many new automated tests.

### Changed
- Overhauled theming system to use native CSS variables.
- Reorganized folder structure.
- Redesigned post composer.
- All references to "Gab" removed.
- Disable notification sounds by default.
- Rename 'Favourite' to 'Like'
- Improve design of floating compose button.
- Force media to have a static height, fixing jumpy timelines.

### Fixed
- Composer: Move cursor to end of text.
- Composer: Tagging yourself in replies.
- Composer: State issues between compose modal and inline composer.
- AutoPlayGif for images in posts.
- Handle registration when email confirmation is required.
- Ability to add non-follows to Lists.
- Don't hide locked accounts from non-followers.
- Delete + Redraft errors.
- Preferences: Display name limitations removed.
- Hide "Embed" functionality from menus.
- Only show 'Trends' and 'Who To Follow' when supported by the backend.
- Hide reposted media from account media tab.

## [0.9.0] - 2020-04-30
### Added
- Initial beta release.

[Unreleased]: https://gitlab.com/soapbox-pub/soapbox/-/compare/v1.0.0...develop
[Unreleased patch]: https://gitlab.com/soapbox-pub/soapbox/-/compare/v1.0.0...stable/1.0.x
[1.0.0]: https://gitlab.com/soapbox-pub/soapbox/-/compare/v0.9.0...v1.0.0
[0.9.0]: https://gitlab.com/soapbox-pub/soapbox/-/tags/v0.9.0
