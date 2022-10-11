import { useState } from "react";

export default function Form(){
  const[username,setA]=useState('')
  const[lname,Last]=useState('')
  const[e,setError]=useState('')
  const[ue,setUe]=useState('')
  function validate()
  {
    
    if(username==='')
    {
      
      setError('USer name must be include!')
    }

    if(lname==='')
    {
     setUe('Must include last name!')
    }
    
  }

return(
<div>
    <form className="row mt-5 g-3 needs-validation">
  <div className="col-md-12">
    <div className="container border-0" style={{ width: 400, margin: "auto" }}>
      <div>
        <label htmlFor="validationCustom01" className="form-label">
          First name:
        </label>
        <input
          type="text"
          className="form-control"
          name="fname"
          id="validationCustom01"
          defaultValue=""
          placeholder="Enter your First Name"
          value={username}
          onChange={
            (e)=>{
              setA(e.target.value)
            }
          }
          required=""
        />
      </div>
          {e}
      <div>
        <label htmlFor="validationCustom02" className="form-label">
          Last name:
        </label>
        <input
          type="text"
          className="form-control"
          name="lname"
          id="validationCustom02"
          defaultValue=""
          value={lname}
          onChange={
            (ue)=>{
              Last(ue.target.value)
            }
          }
          placeholder="Enter your Last Name"
          required=""
        />
      </div>
          {ue}
      <div>
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <div className="input-group">
          <input
            type="tel"
            className="form-control"
            name="phone"
            pattern="(?:\(?\+977\)?)?[9][6-9]\d{8}|01[-]?[0-9]{7}"
            id="Phone"
            required=""
          />
        </div>
      </div>
      <div>
        <label htmlFor="validationEmail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="form-control"
          id="validationAddress"
          required=""
        />
        <div className="invalid-feedback">
          Please provide a valid email address.
        </div>
      </div>
      <div>
        <label htmlFor="validationCustom03" className="form-label">
          Address:
        </label>
        <input
          type="text"
          name="address"
          className="form-control"
          id="validationAddress"
          required=""
        />
        <div className="invalid-feedback">Please provide a valid address.</div>
      </div>
      <div>
        <label htmlFor="validationCustom04" className="form-label">
          Gender:
        </label>
        <select className="form-select" name="gender" id="Gender" required="">
          <option select="" gender="">
            Choose gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <label htmlFor="">Satus:</label>
      <div className="col-md-3">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="active"
          defaultValue="active"
        />
        <label className="form-check-label" htmlFor="active">
          Active
        </label>
      </div>
      <div className="col-md-3">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="active"
          defaultValue="active"
        />
        <label className="form-check-label" htmlFor="active">
          Inactive
        </label>
      </div>
      <div>
        <div>
          <label htmlFor="validationCustom04" className="form-label">
            Designation:
          </label>
          <select
            className="form-select"
            name="designation"
            id="designatio"
            required=""
          >
            <option select="" gender="">
              Choose designation
            </option>
            <option>Manager</option>
            <option>Staff</option>
            <option>HR</option>
          </select>
        </div>
      </div>
      <br />
      <div>
        <button className="btn btn-primary" type="button" onClick={validate}>
          Submit
        </button>
      </div>
    </div>
  </div>
</form>
</div>
);
}
