import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure the MongoDB URI is defined
const mongoUri: string | undefined = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

// MongoDB Connection
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// MongoDB Schema and Model
interface IFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: Date;
}

const formDataSchema = new mongoose.Schema<IFormData>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const FormData = mongoose.model<IFormData>("FormData", formDataSchema);

// API Endpoint to Store Form Data
app.post(
  "/api/formData",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      const formData = new FormData({ name, email, message });
      await formData.save();

      res.status(201).json({ message: "Form data saved successfully" });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
