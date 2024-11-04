// MyForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AppointForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add your submission logic
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        Width="100%"
        margin="normal"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default AppointForm
