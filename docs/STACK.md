# Arbiter Technology Stack

## Runtime

- Node.js 20 LTS

## Framework

- Next.js 14 App Router

## Language

- TypeScript 5.x (strict mode)

## Package Manager

- npm

## Databases

### Primary Store

- Aurora DSQL
- Purpose: globally consistent authorization state

### Cache Layer

- DynamoDB Global Tables
- Purpose: authorization decision cache

### Audit Layer

- Aurora PostgreSQL Serverless v2
- Purpose: immutable audit trail

## AWS Services

### Regions

- Primary: us-east-1
- Secondary:
  - eu-west-1
  - ap-southeast-1

### Infrastructure

- AWS CDK v2
- Lambda
- EventBridge
- Secrets Manager

## Deployment

### Frontend + API

- Vercel Pro

### Infrastructure

- AWS CDK

### CI/CD

- GitHub Actions
