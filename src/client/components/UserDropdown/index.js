import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import withClickAway from 'hocs/withClickAway';
import Menu from 'components/Menu';
import MenuItem from 'components/MenuItem';
import PopperBox from 'components/PopperBox';
import Button from 'components/common/Button';

const UserMenu = withClickAway(Menu);

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleRootClick = this.handleRootClick.bind(this);
  }

  handleRootClick() {
    //TODO: Fix clicking on the root with menu open.
    this.setState({ isOpened: true });
  }

  handleClickAway(event) {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <Button innerRef={ref} onClick={this.handleRootClick}>{`Hi ${
              this.props.currentUser.userName
            }`}</Button>
          )}
        </Reference>
        {this.state.isOpened ? (
          <Popper placement="bottom">
            {({ ref, style, placement, arrowProps }) => (
              <PopperBox
                innerRef={ref}
                style={style}
                data-placement={placement}
              >
                <UserMenu onClickAway={this.handleClickAway}>
                  <MenuItem>
                    <MenuItem.Link href="#">My Recipes</MenuItem.Link>
                  </MenuItem>
                  <MenuItem>
                    <MenuItem.Link href="#">Settings</MenuItem.Link>
                  </MenuItem>
                  <MenuItem>
                    <MenuItem.Button>Logout</MenuItem.Button>
                  </MenuItem>
                </UserMenu>
              </PopperBox>
            )}
          </Popper>
        ) : null}
      </Manager>
    );
  }
}

export default UserDropdown;
