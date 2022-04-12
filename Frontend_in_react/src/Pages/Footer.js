import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../Css/Footer.css'

const Footer=()=> {
  return (
   <>
  <footer>
      <div className="container container-flex">
          <div className="icons">
              <TwitterIcon className="icon"/>
              <FacebookIcon className="icon"/>
              <InstagramIcon className="icon"/>
              
              </div>
              
              <div className="line">
              <hr/>
              <hr/>
              </div>
              <div className="copyright">
                  <p><b>All rights reserved &copy;</b></p>
                  <p><b>resto@gmail.com</b></p>

              </div>
      </div>
  </footer>
   </>
  )
}

export default Footer
