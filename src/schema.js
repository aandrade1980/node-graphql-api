const { gql } = require('apollo-server');

const typeDefs = gql`
  type Meal {
    id: ID!
    mealID: String!
    area: String
    category: String
    ingredient1: String
    ingredient2: String
    ingredient3: String
    ingredient4: String
    ingredient5: String
    ingredient6: String
    ingredient7: String
    ingredient8: String
    ingredient9: String
    instructions: String
    meal: String
    mealThumb: String
    tags: String
    youtube: String
  }

  type Query {
    getAllFavoriteMeals: [Meal]
    getFavoriteMeal(id: ID!): Meal
  }

  type Mutation {
    addFavoriteMeal(
      mealID: String!
      instructions: String!
      meal: String!
      mealThumb: String!
      tags: String!
      youtube: String!
    ): Meal
  }
`;

module.exports = {
  typeDefs
};
