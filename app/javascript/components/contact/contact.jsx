import React from 'react';
import './contact.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';



const Contact = () => {
  return (
    
      <div className="container contact-form ">
      <form method="post">
          <h3>Have an idea for a feature? let us know</h3>
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <input type="text" name="txtName" className="form-control" placeholder="Name *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtEmail" className="form-control" placeholder="Email *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtPhone" className="form-control" placeholder="Phone Number *" />
                  </div>
                  <div className="form-group">
                      <input type="submit" name="btnSubmit" className="btnContact" />
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <textarea name="txtMsg" className="form-control" placeholder="Message" ></textarea>
                  </div>
              </div>
          </div>
      </form>
  </div>

  )
};

export default Contact;
