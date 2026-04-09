# SM Technology Landing Platform

Premium dark-themed AI and automation agency landing page scaffold built with Next.js App Router, TypeScript, Tailwind, Framer Motion, Prisma 6, and Gemini API integration.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Prisma 6 + PostgreSQL (Neon ready)
- Gemini 2.5 Flash API route
- Stealth lead-gen AI chat widget + notification hooks

## Quick Start

1. Install dependencies:
   - `npm install`
2. Copy env vars:
   - `copy .env.example .env` (Windows)
3. Configure:
   - `DATABASE_URL`
   - `GEMINI_API_KEY`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
4. Generate Prisma client:
   - `npm run prisma:generate`
5. Run dev:
   - `npm run dev`

## Stealth Lead-Gen Agent

- Widget component: `components/chat/StealthChatWidget.tsx`
- Chat API route: `app/api/chat/route.ts`
- Notification API route: `app/api/notify/route.ts`
- Lead sender utility: `lib/lead.ts`
- Message history persists in browser `localStorage`.
- The chat route silently triggers lead notification once `name + contact + query` are detected.

### Notification Providers

Use Resend (free tier):
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

## Simplified Development Authentication

- Login endpoint: `POST /api/auth/dev-login`
- Hardcoded credentials:
  - Admin: `abbas / abbas123`
  - Developer: `developer / developer123`
- Middleware protects:
  - `/admin`
  - `/developer`

## Prisma Seeding

- Seed command: `npm run prisma:seed`
- Inserts:
  - users (`abbas`, `developer`)
  - 6 projects for landing page display

## Auth/Dashboard Architecture

- Protected routes:
  - `/admin` (requires `sm_role=ADMIN`)
  - `/developer` (requires `sm_role=DEVELOPER`)
- Current implementation is a skeleton with middleware + role cookie logic.
- Replace with full NextAuth or Clerk providers and server-side session callbacks.

## Prisma Models

- `User` with `ADMIN` and `DEVELOPER` roles.
- `Project` with ownership relation to `User` and project status lifecycle enum.
