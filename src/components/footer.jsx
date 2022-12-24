import React from 'react'
import { Link } from "react-router-dom";
import navBar from '../util/Header-data';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import footer from '../util/Footer-data'
const Footer = () => {
return(
<footer>
  <div className="container">
      <div className='social-media'>
        {footer.map(link=> {
          return (
            <div key={link.id}> 
              <a href={link.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={link.icon}/></a>
            </div>
          )
        })}
        </div>
        <div className="verticalLine"></div>

  <div className='anchorFooter'>
  {navBar.map(link => {
                return (    
                        <div key={link.id}>
                            <Link to={link.link}>{link.text}</Link>
                        </div>
                )
            }
            )}
    </div>
  </div>
          <div>
            <p>© 2022 INPSAC</p>
          </div>  

</footer>

)


}

export default Footer