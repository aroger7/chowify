import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import axios from 'axios';

import withClickAway from 'hocs/withClickAway';
import Menu from 'components/Menu';
import MenuItem from 'components/MenuItem';
import PopperBox from 'components/PopperBox';
import Button from 'components/common/Button';

const CHOWIFY_USER_KEY = 'CHOWIFY_USER';
const UserMenu = withClickAway(Menu);

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleRootClick = this.handleRootClick.bind(this);
  }

  handleClickAway(event) {
    this.setState({ isOpened: false });
  }

  async handleLogoutClick() {
    const res = await axios.delete(
      'http://localhost:8080/users/current/token',
      { headers: { 'x-auth': this.props.authToken } }
    );
    this.props.setAuthToken(null);
    this.props.setCurrentUser(null);
    window.localStorage.removeItem(CHOWIFY_USER_KEY);
  }

  handleRootClick() {
    //TODO: Fix clicking on the root with menu open.
    this.setState({ isOpened: true });
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
                    <MenuItem.Button onClick={this.handleLogoutClick}>
                      Logout
                    </MenuItem.Button>
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
