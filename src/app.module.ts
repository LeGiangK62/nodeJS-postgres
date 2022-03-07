import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { DepartmentsModule } from './departments/departments.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [PrismaModule, MembersModule, UsersModule, CompaniesModule, DepartmentsModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
