import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, TextField, Button, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import "./HeroFormMUI.css"; // Import the CSS file

interface FormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  company: string;
  preferredLocation: string;
  startDate: Dayjs;
}

const HeroFormMUI: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    company: "",
    preferredLocation: "",
    startDate: dayjs(), // Initialize with today's date
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setFormData({ ...formData, startDate: date });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Send to backend
  };

  return (
    <Container className="hero-form-container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Company (Optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Preferred Location"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={formData.startDate}
                onChange={handleDateChange}
                className="date-picker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Requirement Description"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              fullWidth
              required
              multiline
              minRows={4}
            />
          </Grid>
          <Grid item xs={10}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default HeroFormMUI;
