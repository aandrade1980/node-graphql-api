const { favoriteMeals } = require('./mockFavoriteMeals');

const resolvers = {
  Meal: {
    id: (parent, args, context, info) => parent.id,
    area: parent => parent.area,
    category: parent => parent.category,
    ingredient1: parent => parent.ingredient1,
    ingredient2: parent => parent.ingredient2,
    ingredient3: parent => parent.ingredient3,
    ingredient4: parent => parent.ingredient4,
    ingredient5: parent => parent.ingredient5,
    ingredient6: parent => parent.ingredient6,
    ingredient7: parent => parent.ingredient7,
    ingredient8: parent => parent.ingredient8,
    ingredient9: parent => parent.ingredient9,
    instructions: parent => parent.instructions,
    meal: parent => parent.meal,
    mealThumb: parent => parent.mealThumb,
    tags: parent => parent.tags,
    youtube: parent => parent.youtube
  },
  Query: {
    getAllFavoriteMeals: (parent, args) => favoriteMeals,
    getFavoriteMeal: (parent, args) =>
      favoriteMeals.find(meal => meal.id === args.id)
  },
  Mutation: {
    addFavoriteMeal: (parent, args) => {
      favoriteMeals.push(args.meal);
      return args.meal;
    }
  }
};

module.exports = {
  resolvers
};
