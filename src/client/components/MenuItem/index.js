import LI from 'components/common/LI';
import Button from 'components/MenuItem/Button';
import Link from 'components/MenuItem/Link';

const MenuItem = LI.extend`
  transition: all 0.2s;

  &:hover {
    background-color: #a8a8a8;
  }
`;

MenuItem.Button = Button;
MenuItem.Link = Link;

export default MenuItem;
