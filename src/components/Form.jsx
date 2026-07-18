import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    contact: "",
    email: "",
    gender: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter Your State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="gender">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="success">
          <h1>🎉 Form Submitted Successfully!</h1>

          <h2>
            Welcome,{" "}
            <span>
              {formData.firstName} {formData.lastName}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Form;