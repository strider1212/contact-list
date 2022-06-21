import { Link } from 'react-router-dom';
import trash_can from '../images/trash_can.png'

const Contacts = (props) => {
  
  const addContactButton = (
    <Link to='/contacts/new'>
      <button className="btn btn-primary">Add Contact</button>
    </Link>   
  )

  const deleteHandler = (i) => {
    const array = props.formData;
    console.log(array)
    const selectedArray = array[i]
    array.splice(selectedArray, 1)
    console.log(array)
  }
  
  const listContacts = props.formData.map((data, i) => {
    const imageToString = String(data.img)
    const altToString = String(data.name)
    
    const fullContact = (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td><img className="list-img" src={imageToString} alt={altToString}/></td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td><img src={trash_can} alt='delete' id='trash_can' onClick={() => deleteHandler(i)}/></td>
      </tr>
    )
    return fullContact;
  })

  const contentTable = (
    <table className='table table-striped table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {listContacts}
        </tbody>
      </table>
  )

  return (
    <div>
      {addContactButton}
      {contentTable}
    </div>
  )
}

export default Contacts;