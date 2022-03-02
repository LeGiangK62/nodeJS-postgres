import { PrismaClient } from '@prisma/client';
import { members } from '../members';

const prisma = new PrismaClient();

async function main() {
  for (let member of members) {
    await prisma.member.create({
      data: member,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });