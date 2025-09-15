# Prisma Setup for MySQL

This project uses Prisma ORM with MySQL. Follow these steps to set up your environment:

## 1. Configuration

Create a `.env` file in the root directory with the following content:

```env
# MySQL Database URL
DATABASE_URL="mysql://username:password@localhost:3306/kopkuadb"
```

Replace `username`, `password`, and `kopkuadb` with your actual MySQL credentials.

## 2. Generate Prisma Client

After setting up your database connection, generate the Prisma client:

```bash
npx prisma generate
```

## 3. Run Database Migrations

Create and apply migrations to your database:

```bash
npx prisma migrate dev --name init
```

## 4. Using Prisma Client

The Prisma client is configured in `src/utils/prisma.ts` and can be imported into your services:

```typescript
import { prisma } from '@/utils/prisma'

// Example usage
const users = await prisma.user.findMany()
```

## 5. Prisma Studio

You can use Prisma Studio to view and edit your data:

```bash
npx prisma studio
```

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma with MySQL](https://www.prisma.io/docs/concepts/database-connectors/mysql)
