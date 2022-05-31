/*
  Warnings:

  - A unique constraint covering the columns `[mealID]` on the table `Meal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mealID` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "mealID" TEXT NOT NULL,
ALTER COLUMN "area" DROP NOT NULL,
ALTER COLUMN "category" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Meal_mealID_key" ON "Meal"("mealID");
