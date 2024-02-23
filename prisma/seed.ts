// npx prisma db seed

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.verifyUserTokens.deleteMany({});
  await prisma.users.deleteMany({});
  console.log('Tables cleared');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
