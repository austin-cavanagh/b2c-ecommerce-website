'use server';
import 'server-only';

// npx prisma db seed

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await clearDatabase();
}

async function clearDatabase() {
  await prisma.userAuths.deleteMany({});
  await prisma.verifyUserTokens.deleteMany({});
  await prisma.users.deleteMany({});
  console.log('Tables cleared');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
