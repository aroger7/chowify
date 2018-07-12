import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initRecipes } from 'actions';
import { getFilteredRecipesOnPage } from 'selectors';
import RecipeList from 'components/RecipeList';
import { v1 } from 'uuid';

const initialRecipes = [
  {
    id: v1(),
    name: 'Mac & Cheese',
    description: 'A creamy classic',
    directions: [
      'Add macaroni',
      'Add cheese',
      'Cook in oven for a while',
      'Enjoy'
    ],
    image:
            'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg',
    ingredients: ['Macaroni', 'Cheese']
  },
  {
    id: v1(),
    name: 'Pizza Margherita',
    description: 'Simple, yet refined',
    image:
            'https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM'
  },
  {
    id: v1(),
    name: 'Spaghetti Carbonara',
    description: 'The bacon and eggs of pasta',
    image:
            'https://scm-assets.constant.co/scm/unilever/a6798e909fa57bfd19c3e7f00737e5d6/18ae9145-ea1d-42ef-a6ed-b8b08e82ab5a.jpg'
  },
  {
    id: v1(),
    name: 'Butter Chicken',
    description: 'The Indian classic, in all its glory',
    image:
            'https://hips.hearstapps.com/del.h-cdn.co/assets/17/30/2048x1365/gallery-1501020555-shot-4-190.jpg?resize=768:*'
  },
  {
    id: v1(),
    name: 'Bacon Cheeseburger',
    description: "Not many better ways to be 'Murican",
    image:
            'http://www.recipe4living.com/assets/itemimages/400/400/3/default_1531ae579b837510f17eec6bf7d24e14_dreamstimesmall_20835850.jpg'
  },
  {
    id: v1(),
    name: 'Poutine',
    description: 'Read all aboot it',
    image:
            'http://www.sonic1029.com/wp-content/uploads/sites/3/2018/02/MAC06_CANADA_PROJECT_RICHLER_POST01.jpg'
  },
  {
    id: v1(),
    name: 'Iced Coffee',
    description: "This doesn't really need a picture",
    image: ''
  },
  {
    id: v1(),
    name: 'BBQ Beef Brisket Sandwiches',
    description:
            'Slow-cooked seasoned brisket shredded and prepared for tantalizing barbeque sandwiches. Enjoy on your favorite bread.',
    image:
            'https://images.media-allrecipes.com/userphotos/600x600/4415106.jpg'
  },
  {
    id: v1(),
    name: 'Homemade Baked Beans',
    description:
            'A quicker version of homemade baked beans using canned Northern beans.',
    image:
            'https://images.media-allrecipes.com/userphotos/720x405/1069632.jpg'
  },
  {
    id: v1(),
    name: 'Sweet Smoked Pork Ribs',
    description:
            'A sweet recipe for smoked pork ribs. I usually use baby back ribs but have had great success with spare ribs as well.',
    image:
            'https://images.media-allrecipes.com/userphotos/720x405/4534963.jpg'
  },
  {
    id: v1(),
    name: 'Mediterranean Crusted Chicken',
    description:
            'A deliciously rich chicken entree that is best served with mild side dishes such as sauteed vegetables and French bread. This chicken has a great fresh basil flavor.',
    image:
            'https://images.media-allrecipes.com/userphotos/560x315/2172747.jpg'
  }
];

const mapDispatchToProps = dispatch => ({
  initRecipes: recipes => dispatch(initRecipes(recipes))
});

const mapStateToProps = state => ({ recipes: getFilteredRecipesOnPage(state) });

class RecipeListContainer extends Component {
  componentDidMount() {
    this.props.initRecipes(initialRecipes);
  }

  render() {
    return <RecipeList recipes={this.props.recipes} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RecipeListContainer
);
