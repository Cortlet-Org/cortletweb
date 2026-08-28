# PRODUCT.md — CORTLET FUNCTIONAL SPECIFICATION

**Product Name:** Cortlet  
**Version:** 1.0.0-beta
**Core Purpose:** An ultra-fast, local-first real-time gateway that maintains persistent WebSockets with clients and translates downstream events into stateless, transient HTTP webhooks for serverless backends.

---

## 1. THE PROBLEM STATE
Modern serverless architecture (Vercel, AWS Lambda) is stateless and short-lived. WebSockets are stateful and long-lived. Forcing serverless backends to handle WebSockets requires heavy, memory-locked, always-on servers (Node.js/Go) that break serverless cost-efficiencies, choke load balancers, and create state-sync debt.

---

## 2. THE CORTLET ARCHITECTURAL MATRIX
Cortlet acts as a high-performance translator proxy layer between the client browser and the serverless cloud backend:

`[ Client Browser ] -> (Stateful, persistent wire over wss://) -> [ CORTLET GATEWAY EDGE ] (Logs connections, holds connection memory locks) -> (Transforms data into transient HTTP POST / webhooks) -> [ Serverless Backend ] (Processes logic, returns standard HTTP 200 OK, dies)`

---

## 3. CORE V1 FEATURE SET (MINIMAL VIABLE INFRASTRUCTURE)

### Feature 1: Connection Management & Memory Locking
* Hold stable, secure, long-lived `wss://` connections with end-user client browsers.
* Track client identity using an opaque, short-lived, single-use connection ticket passed via query parameters (`?ticket=st_98f21a...`). The ticket must expire precisely 60 seconds after issuance. The gateway must validate and immediately burn the ticket upon successful connection handshake, completely redacting all credentials from downstream edge and web-server proxy logs.

### Feature 2: Stateless Event Translation Engine
* Intercept client JSON payload frames over the socket.
* Wrap the payload with metadata (Connection ID, Client ID, Timestamp) into a strict `CortletPacket`.
* Fire an instantaneous, synchronous HTTP `POST` request to the user's specified backend web URL.

### Feature 3: Request-Response Injection Loop
* Wait for the serverless backend URL to return its standard `200 OK` response payload.
* Immediately inject that HTTP response string back down the specific open WebSocket pipe to the client.
* Terminate the backend connection loop instantly, keeping the cloud compute time transient.

---

## 4. SYSTEM WIRE DATA CONTRACT (THE IMMUTABLE SCHEMAS)

### Inbound to Serverless Backend (Cortlet JSON Delivery Payload)
```json
{
  "connection_id": "ctx_98f21a3b",
  "client_id": "user_123",
  "timestamp": 1787685240,
  "event": "client_payload",
  "payload": {
    "action": "broadcast_stream"
  }
}
```

### Outbound to Client (Backend Expected HTTP 200 Response String)
```json
{
  "status": "delivered",
  "broadcast_payload": {
    "message": "Payload broadcast complete."
  }
}
```

---

## 5. OUT OF SCOPE FOR V1 (STRICT BAN ON SCOPE CREEP)
* No persistent cloud database storage managed by Cortlet.
* No multi-region distributed cluster scaling layers.
* No visual analytical graph grids in the terminal core interface.
* No complex visual message routing panels. 
