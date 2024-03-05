import React from 'react';
import '../scss/main.scss';
import birds from'./../Data/images/birds.jpg';
import incomplete_girl from'./../Data/images/incomplete_girl.jpg';
import pallet_knife from'./../Data/images/pallet_knife.jpg';
import skull from'./../Data/images/skull.jpg';
import snake from'./../Data/images/snake.jpg';
import charcoal_still from'./../Data/images/charcoal_still.jpg';

const ArtWork=(props)=>
{
  return(
    <div id="ArtWork" className="ArtWork">
        <div className="max-width">
            <div className="portfolioSection">
                <h2>Recent Artwork</h2>
                <div className="rowOne">
                    <div className="col1">
                        <div className="imageContainer">
                            <img src={incomplete_girl} width="100%" height="auto" alt="incomplete girl drawing"/>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="imageContainer">
                            <img src={birds} width="100%" height="auto" alt="birds on branch"/>
                        </div>
                    </div>
                    <div className="col3">
                        <div className="imageContainer">
                            <img src={pallet_knife} width="100%" height="auto" alt="girl drawn from pallet knife"/>
                        </div>
                    </div>
                </div>
                <div className="rowTwo">
                    <div className="col1">
                        <img src={skull} width="100%" height="auto" alt="Skull drawn from charcoal"/>
                    </div>
                    <div className="col2">
                        <img src={snake} width="100%" height="auto" alt="Snake"/>
                    </div>
                    <div className="col3">
                        <img src={charcoal_still} width="100%" height="auto" alt="charcoal_still"/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
 
export default ArtWork;