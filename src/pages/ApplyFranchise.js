import React, { useState } from "react";
import data from "../data.json";
import { motion } from "framer-motion";

const ApplyFranchise = () => {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    constituency: "",
    name: "",
    phone: "",
    whatsapp: "",
  });

  const states = Object.keys(data.India);
  const districts = formData.state ? Object.keys(data.India[formData.state]?.districts || {}) : [];
  const constituencies =
    formData.state && formData.district ? data.India[formData.state]?.districts[formData.district] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setFormData({ ...formData, state: value, district: "", constituency: "" });
    } else if (name === "district") {
      setFormData({ ...formData, district: value, constituency: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div style={styles.container}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={styles.card}>
        <h2 style={styles.heading}>Apply for Franchise</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <select name="state" value={formData.state} onChange={handleChange} style={styles.select}>
              <option value="">Choose State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <select name="district" value={formData.district} onChange={handleChange} style={styles.select} disabled={!formData.state}>
              <option value="">Choose District</option>
              {districts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div style={styles.row}>
            <select name="constituency" value={formData.constituency} onChange={handleChange} style={styles.select} disabled={!formData.district}>
              <option value="">Choose Constituency</option>
              {constituencies.map((constituency) => (
                <option key={constituency} value={constituency}>{constituency}</option>
              ))}
            </select>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} placeholder="Full Name" required />
          </div>
          <div style={styles.row}>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} placeholder="Phone Number" required />
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} style={styles.input} placeholder="WhatsApp Number" required />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "transparent",
    padding: "20px",
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    backdropFilter: "blur(10px)",
    background: "rgba(0, 0, 0, 0.1)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    color: "#222",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#222",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  select: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    background: "rgba(255, 255, 255, 0.3)",
    color: "#222",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    background: "rgba(255, 255, 255, 0.3)",
    color: "#222",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#ff9800",
    color: "#222",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ApplyFranchise;