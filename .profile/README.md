# Cortlet

Lightweight infrastructure for realtime serverless applications.

Cortlet keeps persistent WebSocket connections alive and translates realtime events into ordinary HTTP webhooks your backend already understands.

> **WebSockets are stateful. Your serverless cloud is not.**

---

## What Cortlet does

Cortlet sits between your realtime clients and your existing backend.

```text
Client
  │
  │ WebSocket
  ▼
Cortlet
  │
  │ HTTP webhook
  ▼
Your backend
```

Your application keeps using familiar HTTP infrastructure while Cortlet handles the persistent connection layer.

---

## Core flow

1. **Connect**  
   Clients establish persistent WebSocket connections through Cortlet.

2. **Forward**  
   Incoming WebSocket events are translated into standard HTTP webhook requests.

3. **Respond**  
   Your backend sends messages through Cortlet's HTTP API, and Cortlet routes them back to the correct active connection.

---

## Why Cortlet

### Lightweight

Cortlet focuses on the connection layer instead of trying to replace your backend.

### Secure-first

Infrastructure should have conservative, predictable defaults from the beginning.

### No-bloat

Every feature should justify its place in the core product.

---

## Cortlet is not

Cortlet is not intended to become:

- an application database
- an authentication platform
- a workflow engine
- a replacement for your business logic
- an all-in-one backend platform

It is a focused realtime connection layer.

---

## Current status

Cortlet is currently in development.

The initial focus is on:

- persistent WebSocket connections
- connection lifecycle management
- WebSocket-to-HTTP translation
- outbound message routing
- a small HTTP API surface
- reliable serverless integration
- clear developer documentation

---

## Example

A client sends a WebSocket message:

```json
{
  "type": "message",
  "text": "hello"
}
```

Cortlet can forward it to your backend as an HTTP webhook:

```json
{
  "event": "message",
  "connectionId": "ctx_9acfdd43",
  "data": {
    "type": "message",
    "text": "hello"
  }
}
```

Your backend stays HTTP-first.

---

## Website

Visit:

**https://cortlet.com**

You can find:

- product information
- documentation
- early-access waitlist
- legal information
- project updates

---

## Documentation

Documentation is available at:

**https://cortlet.com/docs**

---

## Organization

This GitHub organization contains Cortlet projects, libraries, tools, and related infrastructure.

Repositories may vary in maturity while Cortlet is under active development.

---

## Contributing

Contribution guidelines may differ between repositories.

Check the individual repository's:

- `README.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- issue tracker

before contributing.

---

## Security

Please avoid publishing suspected vulnerabilities in public issues.

Follow the security reporting instructions provided by the affected Cortlet repository or the official Cortlet website.

---

## Legal

Legal information is available at:

**https://cortlet.com/legal**

Including:

- Privacy Policy
- Terms of Service
- End User License Agreement

---

## License

Licensing is repository-specific.

Check the `LICENSE` file in each repository before using or redistributing its contents.

---

**Cortlet — WebSockets for serverless.**