-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "ingredient1" TEXT,
    "ingredient2" TEXT,
    "ingredient3" TEXT,
    "ingredient4" TEXT,
    "ingredient5" TEXT,
    "ingredient6" TEXT,
    "ingredient7" TEXT,
    "ingredient8" TEXT,
    "ingredient9" TEXT,
    "instructions" TEXT NOT NULL,
    "meal" TEXT NOT NULL,
    "mealThumb" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);
