# --- Terms
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

# --- Actual l10n
accordian-collapse = { -collapse }
accordian-expand = { -expand }
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