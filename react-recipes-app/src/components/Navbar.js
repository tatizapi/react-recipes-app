import './css/Navbar.css';
import { GiCookingPot } from 'react-icons/gi';
import { IconContext } from "react-icons";


const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <IconContext.Provider value={{ color: 'white', size: '60px', className: "navbar-home-logo" }}>
                    <GiCookingPot />
                </IconContext.Provider>
                <div className="navbar-home-title"><a href='/'>Recipes</a></div>
            </div>
            <div className="navbar-food-categories">
                <ul>
                    <li><a href='/'>Soups</a></li>
                    <li><a href='/'>Meat</a></li>
                    <li><a href='/'>Pasta</a></li>
                    <li><a href='/'>Deserts</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;