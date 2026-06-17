# FE Prime Visual Identity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the FE Prime homepage as a premium black-and-gold brand experience with WhatsApp conversion, luxury presentation, and motion-driven sections.

**Architecture:** Keep the App Router structure simple and production-friendly: metadata and typography in `app/layout.tsx`, theme tokens in `app/globals.css`, and the interactive homepage in a focused client component that owns Framer Motion transitions. The page remains a marketing surface optimized for high-value leads and future expansion into additional premium landing pages.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS v4, `next/font/google`, Framer Motion

---

### Task 1: Establish premium theme and content structure

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Create: `app/components/home-page.tsx`
- Modify: `app/page.tsx`

- [ ] Define FE Prime metadata, typography, and language settings
- [ ] Replace the default global tokens with black-and-gold luxury theme primitives
- [ ] Build a client homepage component with hero, services, differentials, manifesto, contact form, and footer
- [ ] Replace the starter page with the FE Prime homepage entrypoint

### Task 2: Add premium motion and conversion hooks

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/components/home-page.tsx`

- [ ] Install `framer-motion`
- [ ] Add fade, slide-up, and hover animation variants with restrained luxury timing
- [ ] Route all primary CTAs to WhatsApp to match the current commercial flow

### Task 3: Verify production readiness for the model site

**Files:**
- Verify: `app/layout.tsx`
- Verify: `app/globals.css`
- Verify: `app/components/home-page.tsx`
- Verify: `app/page.tsx`

- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run build` and fix any compile/runtime issues
- [ ] Review the final page for consistent luxury branding, no generic starter remnants, and reusable visual tokens
