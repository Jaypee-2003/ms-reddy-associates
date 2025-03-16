import React, { useState } from "react";
import data from "../data.json"; // Import the JSON file

const ApplyFranchise = () => {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    constituency: "",
    name: "",
    phone: "",
    whatsapp: "",
  });

  // Extract states from JSON
  const states = Object.keys(data.India);

  // Extract districts based on selected state
  const districts = formData.state ? Object.keys(data.India[formData.state]?.districts || {}) : [];

  // Extract constituencies based on selected district
  const constituencies =
    formData.state && formData.district
      ? data.India[formData.state]?.districts[formData.district] || []
      : [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset district and constituency when state changes
    if (name === "state") {
      setFormData({ ...formData, state: value, district: "", constituency: "" });
    } 
    // Reset constituency when district changes
    else if (name === "district") {
      setFormData({ ...formData, district: value, constituency: "" });
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Apply for Franchise</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* State Dropdown */}
          <label style={styles.label}>Select State</label>
          <select name="state" value={formData.state} onChange={handleChange} style={styles.select}>
            <option value="">Choose State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* District Dropdown */}
          <label style={styles.label}>Select District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            style={styles.select}
            disabled={!formData.state}
          >
            <option value="">Choose District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {/* Constituency Dropdown */}
          <label style={styles.label}>Select Constituency</label>
          <select
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            style={styles.select}
            disabled={!formData.district}
          >
            <option value="">Choose Constituency</option>
            {constituencies.map((constituency) => (
              <option key={constituency} value={constituency}>
                {constituency}
              </option>
            ))}
          </select>

          {/* Full Name */}
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
            required
          />

          {/* Phone Number */}
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter phone number"
            required
          />

          {/* WhatsApp Number */}
          <label style={styles.label}>WhatsApp Number</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter WhatsApp number"
            required
          />

          {/* Submit Button */}
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

// Styling Object
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
    gap: "15px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    background: "#ffffff",
    color: "#333",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    background: "#ffffff",
    color: "#333",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#ff9800",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ApplyFranchise;
