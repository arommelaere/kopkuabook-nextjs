# Cursor Rules – Project Stack

This document describes the technologies and tools used in this project.  
Cursor should take these rules into account when suggesting code, dependencies, or integrations.

---

## Core Stack

- **Framework**: [Hono](https://hono.dev/)  
- **Validation**: [Zod](https://zod.dev/)  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)  
- **Database**: MySQL via [Prisma ORM](https://www.prisma.io/)  
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)  
- pnpm (not npm, not yarn)

---

## Services & Integrations

- **Payments & Subscriptions**: [Lemon Squeezy](https://www.lemonsqueezy.com/)  
- **Deployment**: [Vercel](https://vercel.com/)  
- **Storage**: [AWS S3](https://aws.amazon.com/s3/)  

---

## Guidelines

1. **TypeScript First** – always generate type-safe code.  
2. **Use Zod** for validation (schemas, input parsing, API validation).  
3. **Zustand** is the default state manager (avoid Redux unless strictly needed).  
4. **Prisma + MySQL** – all database queries must go through Prisma.  
5. **UI** should be built with `shadcn/ui` components, styled consistently.  
6. **Authentication** via NextAuth.js (OAuth, email/password, etc.).  
7. **Payments** and subscriptions handled by Lemon Squeezy.  
8. **Deployment** defaults to Vercel; **file storage** via AWS S3.  
9. Keep code modular, minimal boilerplate, and consistent with the stack above.  

---

📌 **Note**: Do not suggest alternatives outside this stack unless explicitly requested.  
