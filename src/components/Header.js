import React from 'react';

class Header extends React.Component{
    render() {
        return(
            <div className='header'>
                <div className='header-logo'>
                    <img  className='img-logo'
                          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'/>
                </div>
                <div className='header-right'>
                    <a>Login</a>
                </div>
            </div>
        );
    }
}
export default Header;