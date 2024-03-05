import React from 'react';
import '../scss/main.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing=(props)=>
{
  return(
    <>
        <div  id="Landing" className="Landing">
            <div className="max-width">
                <h1>Hello World!</h1>
                <div className="intro">
                    <h3>My name is Becca Curry</h3>
                    <h3>I'm a Artist and Computer Scientist.</h3>
                </div>
            </div>
        </div>
        <div className="blackBar">
            <AnchorLink href="#ArtWork"><KeyboardArrowDownIcon className="downArrow"/></AnchorLink>
        </div>
    </>);
}
 
export default Landing;