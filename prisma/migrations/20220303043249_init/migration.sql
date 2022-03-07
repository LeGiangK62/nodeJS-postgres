-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "company_Id" INTEGER NOT NULL,
    "department_Id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_company_Id_fkey" FOREIGN KEY ("company_Id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_department_Id_fkey" FOREIGN KEY ("department_Id") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "result" ADD CONSTRAINT "result_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
