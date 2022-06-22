import { Link, useLocation } from 'react-router-dom';

const EditContact = (props) => {
  
  const formData = props.formData;
  
  const url = useLocation();

  const urlIDFinder = (url) => {
    const urlString = url.pathname
    const frontSlice = urlString.slice(10)
    const backSlice = frontSlice.slice(0, 6)
    return backSlice
  }

  const urlId = urlIDFinder(url)

  const currentData = formData.filter(data => data.id == urlId)

  const namePlaceholder = currentData[0].name



  const formHandler = (
    <form>
      <div className="form-group">
        <label htmlFor="name-input">Full Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name-input" 
          placeholder={namePlaceholder}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email Address</label>
        <input 
          type="text" 
          className="form-control" 
          id="email-input" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone-input">Phone Number</label>
        <input 
          type="number" 
          className="form-control" 
          id="phone-input" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="img_url">Image URL</label>
        <input 
          type="email" 
          className="form-control" 
          id="img_url" 
        />
      </div>
    </form>
  )

  const submitHander = (
    <Link to="/contacts">
      <button type="submit" className="btn btn-primary">Submit Edits</button>
    </Link>
  )

  const goBackHandler = (
    <Link to="/contacts">
      <button className="btn btn-secondary">Go Back</button>
    </Link>
  )

  return (
    <div>
      <p>Choose which field or feilds that you would like to edit and click 'Submit Edits'</p>
      {formHandler}
      {submitHander}
      {goBackHandler}
    </div>
  )
}

export default EditContact;