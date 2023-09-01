# Ghostbox

Ghostbox is an alternative frontend for Akkoma. Developed specifically for [fedi.aap](https://fedi.aap.my.id) Akkoma instance.

## Troubleshoot

### Messy colours / styling configuration

This happened due to Akkoma's stricter CSP changes. To fix it you just need to set `style-src` value to `'self' 'unsafe-inline';`

> **Note**
>
> You need to replace https://example.com with your own domain

- Nginx

```conf
proxy_hide_header Content-Security-Policy;
add_header Content-Security-Policy "upgrade-insecure-requests;script-src 'self';connect-src 'self' blob: https://example.com wss://example.com;media-src 'self' https:;img-src 'self' data: blob: https:;default-src 'none';base-uri 'self';frame-ancestors 'none';style-src 'self' 'unsafe-inline';font-src 'self';manifest-src 'self';" always;
```

- Caddy

```Caddyfile
header Content-Security-Policy "upgrade-insecure-requests;script-src 'self';connect-src 'self' blob: https://example.com wss://example.com;media-src 'self' https:;img-src 'self' data: blob: https:;default-src 'none';base-uri 'self';frame-ancestors 'none';style-src 'self' 'unsafe-inline';font-src 'self';manifest-src 'self';"
```

## License & Credits

Ghostbox is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Ghostbox is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Ghostbox.  If not, see <https://www.gnu.org/licenses/>.

Ghostbox make use of code from other opensource and free software under various licenses:

- Ghostbox is a fork of [Soapbox](https://soapbox.pub) a frontend for Rebased, Pleroma and Mastodon, licensed under AGPL v3 or later.

- `assets/sounds/chat.mp3` and `assets/sounds/chat.oga` are from notificationsounds.com licensed under CC BY 4.0.

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) licensed by Tailwindlab under the simple permissive MIT License.
