import React, { useState } from "react";

const ApplyAgent = () => {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    mandal: "",
    name: "",
    phone: "",
    whatsapp: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Apply as an Agent</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Select State</label>
          <select name="state" value={formData.state} onChange={handleChange} style={styles.select}>
            <option value="">Choose State</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>

          <label style={styles.label}>Select District</label>
          <select name="district" value={formData.district} onChange={handleChange} style={styles.select}>
            <option value="">Choose District</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <label style={styles.label}>Select Mandal</label>
          <select name="mandal" value={formData.mandal} onChange={handleChange} style={styles.select}>
            <option value="">Choose Mandal</option>
            <option value="Mandal 1">Mandal 1</option>
            <option value="Mandal 2">Mandal 2</option>
            <option value="Mandal 3">Mandal 3</option>
          </select>

          <label style={styles.label}>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} placeholder="Enter your name" required />

          <label style={styles.label}>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} placeholder="Enter phone number" required />

          <label style={styles.label}>WhatsApp Number</label>
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} style={styles.input} placeholder="Enter WhatsApp number" required />

          <label style={styles.label}>Select Education Qualification</label>
          <select name="education" value={formData.education} onChange={handleChange} style={styles.select}>
            <option value="">Choose Qualification</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>

          <label style={styles.label}>Select Experience</label>
          <select name="experience" value={formData.experience} onChange={handleChange} style={styles.select}>
            <option value="">Choose Experience</option>
            <option value="0-1 year">0-1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f4f4",
    padding: "20px",
  },
  formContainer: {
    maxWidth: "500px",
    width: "100%",
    background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    textAlign: "center",
    color: "white",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  select: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    width: "100%",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    width: "100%",
  },
  button: {
    padding: "12px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ApplyAgent;