# ADR-005: AI Agent Zero-Trust Authorization Model

**Status:** Accepted

## Decision

AI agents receive a scoped delegation from a user, stored in Aurora DSQL.
Agents may only perform actions within their delegated scope.
Scope is a strict subset of the delegating user's permissions.
Revocation propagates globally in under 200ms via the standard pipeline.

## Rationale

Current industry practice: agents receive API keys with ambient permissions.
This is all-or-nothing. Arbiter introduces granular, revocable, audited
delegation — making AI agents first-class principals in the authorization model.
No existing managed authorization product supports this model.
