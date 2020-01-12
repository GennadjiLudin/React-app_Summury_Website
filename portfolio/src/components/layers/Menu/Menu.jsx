import React, {Component} from 'react';

// Components
import Button from '../../elements/Button/Button';
import Nav from '../../elements/Nav/Nav';

// Styles
import './Menu.scss';

class Menu extends Component {
    state = {
        menuShow: false,
    }

    menuToggle = () => {
        this.setState({
            menuShow: !this.state.menuShow,
        });
    }

    render() {
        const {menuShow} = this.state;
        return (
            <div className="menu">
                {menuShow && <Nav variables="nav__list-active" />}
                <Button
                    text={<span></span>}
                    clickHandler={this.menuToggle}
                    variables={`burger-menu_btn ${menuShow ? "burger-menu_btn_active" : ""}`}
                />
            </div>
        );
    }
}

export default Menu;