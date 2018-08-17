import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAllRecipes } from 'actions';
import { getFilteredRecipesOnPage } from 'selectors';
import RecipeList from 'components/RecipeList';

// TODO: Move this permanently to the database
// const initialRecipes = [
// {
//   name: 'Mac & Cheese',
//   description: 'A creamy classic',
//   directions: [
//     'Add macaroni',
//     'Add cheese',
//     'Cook in oven for a while',
//     'Enjoy'
//   ],
//   imageUrl:
//     'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg',
//   ingredients: ['Macaroni', 'Cheese']
// }
// {
//   name: 'Pizza Margherita',
//   description: 'Simple, yet refined',
//   imageUrl:
//     'https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM'
// }
// {
//   name: 'Spaghetti Carbonara',
//   description: 'The bacon and eggs of pasta',
//   imageUrl:
//     'https://scm-assets.constant.co/scm/unilever/a6798e909fa57bfd19c3e7f00737e5d6/18ae9145-ea1d-42ef-a6ed-b8b08e82ab5a.jpg'
// }
// {
//   name: 'Butter Chicken',
//   description: 'The Indian classic, in all its glory',
//   imageUrl:
//     'https://hips.hearstapps.com/del.h-cdn.co/assets/17/30/2048x1365/gallery-1501020555-shot-4-190.jpg?resize=768:*'
// }
// {
//   name: 'Bacon Cheeseburger',
//   description: "Not many better ways to be 'Murican",
//   imageUrl:
//     'http://www.recipe4living.com/assets/itemimages/400/400/3/default_1531ae579b837510f17eec6bf7d24e14_dreamstimesmall_20835850.jpg'
// }
// {
//   name: 'Poutine',
//   description: 'Read all aboot it',
//   imageUrl:
//     'http://www.sonic1029.com/wp-content/uploads/sites/3/2018/02/MAC06_CANADA_PROJECT_RICHLER_POST01.jpg'
// }
// {
//   name: 'Iced Coffee',
//   description: "This doesn't really need a picture",
//   imageUrl: null
// }
// {
//   name: 'BBQ Beef Brisket Sandwiches',
//   description:
//     'Slow-cooked seasoned brisket shredded and prepared for tantalizing barbeque sandwiches. Enjoy on your favorite bread.',
//   imageUrl: 'https://images.media-allrecipes.com/userphotos/600x600/4415106.jpg'
// }
// {
//   name: 'Homemade Baked Beans',
//   description:
//     'A quicker version of homemade baked beans using canned Northern beans.',
//   imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/1069632.jpg'
// }
// {
//   name: 'Sweet Smoked Pork Ribs',
//   description:
//     'A sweet recipe for smoked pork ribs. I usually use baby back ribs but have had great success with spare ribs as well.',
//   imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/4534963.jpg'
// }
// {
//   name: 'Mediterranean Crusted Chicken',
//   description:
//     'A deliciously rich chicken entree that is best served with mild side dishes such as sauteed vegetables and French bread. This chicken has a great fresh basil flavor.',
//   imageUrl: 'https://images.media-allrecipes.com/userphotos/560x315/2172747.jpg'
// }
// ];

const mapDispatchToProps = dispatch => ({
  setAllRecipes: (recipes, next) => dispatch(setAllRecipes(recipes, next))
});

const mapStateToProps = state => ({
  recipes: state.recipes.all,
  next: state.recipes.nextCursor
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
