# ADR-002: Asymmetric TTL for Permission Decision Cache

**Status:** Accepted

## Decision

ALLOW decisions cache for 300 seconds. DENY decisions cache for 60 seconds.

## Rationale

If an ALLOW entry becomes stale (permission revoked but cache still shows ALLOW),
there is an active security window where unauthorized access is possible.
If a DENY entry becomes stale, the next read hits DSQL and re-confirms denial —
the worst case is a fresh lookup, not unauthorized access.

Security risk is asymmetric, therefore TTL must be asymmetric.
This is documented in code comments on the writePermissionToCache function.
