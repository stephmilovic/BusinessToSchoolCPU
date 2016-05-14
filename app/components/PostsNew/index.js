import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';
import styles from './posts-new';

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    
  	const { fields: { school_name, contact_name, contact_email, contact_phone, school_address, school_zip, school_info, pcs, laptops, tablets, date }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}  className="container">
        <h3>New Equipment Request</h3>
        <div className={`form-group ${school_name.touched && school_name.invalid ? 'has-danger' : ''}`}>
          <label>School Name</label>
          <input type="text" className="form-control" {...school_name} />
          <div className="text-help">
            {school_name.touched ? school_name.error : ''}
          </div>
        </div>

        <div className={`form-group ${contact_name.touched && contact_name.invalid ? 'has-danger' : ''}`}>
          <label>Contact Name</label>
          <input type="text" className="form-control" {...contact_name} />
          <div className="text-help">
            {contact_name.touched ? contact_name.error : ''}
          </div>
        </div>

        <div className={`form-group ${contact_email.touched && contact_email.invalid ? 'has-danger' : ''}`}>
          <label>Contact Email</label>
          <input type="text" className="form-control" {...contact_email} />
          <div className="text-help">
            {contact_email.touched ? contact_email.error : ''}
          </div>
        </div>

        <div className={`form-group ${contact_phone.touched && contact_phone.invalid ? 'has-danger' : ''}`}>
          <label>Contact Phone</label>
          <input type="text" className="form-control" {...contact_phone} />
          <div className="text-help">
            {contact_phone.touched ? contact_phone.error : ''}
          </div>
        </div>

        <div className={`form-group ${school_address.touched && school_address.invalid ? 'has-danger' : ''}`}>
          <label>School Address</label>
          <input type="text" className="form-control" {...school_address} />
          <div className="text-help">
            {school_address.touched ? school_address.error : ''}
          </div>
        </div>

        <div className={`form-group ${school_zip.touched && school_zip.invalid ? 'has-danger' : ''}`}>
          <label>School Zip</label>
          <input type="text" className="form-control" {...school_zip} />
          <div className="text-help">
            {school_zip.touched ? school_zip.error : ''}
          </div>
        </div>

        <div className={`form-group`}>
          <h3>What do you need?</h3>
          <div className={styles.counters}>
	          <label>Desktops:</label>
	          <input type="text" className="form-control" aria-label="..." {...pcs} />
          </div>
        	<div className={styles.counters}>
	          <label>Laptops:</label>
	          <input type="text" className="form-control" aria-label="..." {...laptops} />
          </div>
          <div className={styles.counters}>
	          <label>Tablets:</label>
	          <input type="text" className="form-control" aria-label="..." {...tablets} />
          </div>
        </div>

        <div style={{display: 'none'}}>
          <label>Date Submitted</label>
          <input type="text" className="form-control" {...date} />
        </div>

        <div className={`form-group  ${school_info.touched && school_info.invalid ? 'has-danger' : ''}`}>
          <label>Tell us more!</label>
          <textarea className="form-control" {...school_info} />
          <div className="text-help">
            {school_info.touched ? school_info.error : ''}
          </div>
        </div>

        <button type="submit" className={'btn ' + styles.submitBtn}>Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.school_name) {
    errors.school_name = 'Enter your school name';
  }
  if (!values.contact_name) {
    errors.contact_name = 'Enter a contact name';
  }
  if(!values.contact_email) {
    errors.contact_email = 'Enter a contact email';
  }
  if (!values.contact_phone) {
    errors.contact_phone = 'Enter a contact phone number';
  }
  if (!values.school_address) {
    errors.school_address = 'Enter your school\'s address';
  }
  if(!values.school_zip) {
    errors.school_zip = 'Enter your school\'s zip code';
  }
  if(!values.school_info) {
    errors.school_info = 'Let us know why you need the equipment!';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['school_name', 'contact_name', 'contact_email', 'contact_phone', 'school_address', 'school_zip', 'school_info', 'pcs', 'laptops', 'tablets', 'date'],
  initialValues: {
    date: new Date()
  },
  validate
}, null, { createPost })(PostsNew);
