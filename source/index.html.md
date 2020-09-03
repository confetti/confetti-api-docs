---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript
  - shell

toc_footers:
  - <a href='https://confetti.events'>Sign Up for a Developer Key</a>
  - <a href='https://confetti.events'>Confetti.events</a>

includes:
  - events

search: false

code_clipboard: true
---

# Introduction

Welcome to the Confetti API reference.

# Authentication

> To authorize, use this code:

```javascript
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })

```

```shell
# With shell, you can just pass the correct header with each request
curl "https://api.confetti.events"
  -H "Authorization: apikey your-key"
```

> Make sure to replace `your-key` with your API key.

Confetti uses API keys to allow access to the API. You can create a new API key via your Workspace > Settings > API & Webhooks

Confetti expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: apikey your-key`





