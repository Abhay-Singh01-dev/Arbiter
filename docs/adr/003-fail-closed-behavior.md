# ADR-003: Fail-Closed Authorization on Infrastructure Degradation

**Status:** Accepted

## Decision

When DSQL is unavailable, Arbiter returns HTTP 503 with body
`{"error":"authorization_service_degraded","fail_closed":true}`.
No request is allowed through during DSQL outage. Zero exceptions.

## Rationale

The alternative (fail-open: allow all requests when auth is down) trades
security for availability. For authorization infrastructure, security
trumps availability. A 5-minute outage is recoverable.
An unauthorized access event in a healthcare or financial system is not.

## Implementation

Circuit breaker opens after 5 consecutive DSQL failures.
Half-open state allows one probe every 30 seconds.
