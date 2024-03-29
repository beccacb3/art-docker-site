import React from 'react';
import '../scss/main.scss';


const Contact=(props)=>
{
  return(
    <div  id="Contact" className="Contact">
        <div className="contact-content">
            <div className="black-subsection">
                <h3>
                    I would love to get in touch!
                </h3>
                <div>
                    <div>
                        <div>
                            <p>First Name</p>
                            <p>Last Name</p>
                        </div>
                        <div>
                            <p>Subject</p>
                        </div>
                        <div>
                            <p>Inquiry...</p>
                        </div>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className="contact-title">
                <h2>Contact</h2>
            </div>
        </div>
    </div>);
}
 
export default Contact;