# ADR-004: Authorization Enforcement at Vercel Edge

**Status:** Accepted

## Decision

Vercel Edge Middleware is the primary enforcement point.
Checks run at the CDN PoP closest to the user before any origin request.

## Rationale

Server-side enforcement adds 150–300ms round-trip for non-US users.
Edge enforcement runs in under 5ms because DynamoDB Global Tables
serve the cache at the same geographic PoP as the Edge node.
This is the technical reason Vercel is architecturally essential —
not just a deployment choice.
