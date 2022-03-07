import { PrismaClient } from '@prisma/client';
import { companies, departments, members, results, users } from '../members';

const prisma = new PrismaClient();

async function main() {
  // for (let member of members) {
  //   await prisma.member.create({
  //     data: member,
  //   });
  // }

  // for (let company of companies) {
  //   await prisma.company.create({
  //     data: company,
  //   });
  // }


  // await Promise.all(
  //   companies.map(async (company) =>
  //     prisma.company.upsert({
  //       where : {id: company.id},
  //       update: {},
  //       create: company,
  //     })
  //   )
  // );

  // await Promise.all(
  //   departments.map(async (department) =>
  //     prisma.department.upsert({
  //       where: {id: department.company_Id},
  //       update: {},
  //       create: {
  //         name: department.name,
  //         company_Id: department.company_Id
  //       }
  //     })
  //   )
  // );

  //////////////////////////
  // for (let company of companies) {
  //   await prisma.company.create({
  //     data: company,
  //   });
  // }

  await Promise.all(
    companies.map(async (company) =>
      prisma.company.upsert({
        where : {id: company.id},
        update: {},
        create: company,
      })
    )
  );

  await Promise.all(
    departments.map(async (department) =>
      prisma.department.upsert({
        where : {id: department.id},
        update: {},
        create: {
                id: department.id,
                name: department.name,
                company_Id: department.company_Id
        },
      })
    )
  );

  await Promise.all(
    users.map(async (user) =>
      prisma.user.upsert({
        where : {id: user.id},
        update: {},
        create: {
                id: user.id,
                name: user.name,
                department_Id: user.department_Id
        },
      })
    )
  );

  
  await Promise.all(
    results.map(async (result) =>
      prisma.result.upsert({
        where : {id: result.id},
        update: {},
        create: {
                id: result.id,
                name: result.name,
                user_Id: result.user_Id
        },
      })
    )
  );

  // for (let department of departments) {
  //   await prisma.department.create({
  //     data: {
  //       id: department.id,
  //       name: department.name,
  //       comp: {
  //         connect: {id: department.company_Id}
  //       }
  //     },
  //   });
  // }

  // for (let user of users) {
  //   await prisma.user.create({
  //     data: {
  //       id: user.id,
  //       name: user.name,
  //       dept: {
  //         connect: {id: user.department_Id}
  //       },
  //     },
  //   });
  // }

  // for (let result of results) {
  //   await prisma.result.create({
  //     data: {
  //       id: result.id,
  //       name: result.name,
  //       authored : {
  //         connect: {id: result.user_Id}
  //       }
  //     },
  //   });
  // }

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });