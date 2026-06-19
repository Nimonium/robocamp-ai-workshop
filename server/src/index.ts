import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { z } from 'zod';
import { Enquiry } from './models/Enquiry';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors({ origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : '*' }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers.origin || req.headers.host);
  if (req.method === 'POST') console.log('Body:', req.body);
  next();
});

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGODB_URI not provided. Running in mock mode without DB persistence.');
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const enquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().refine((val) => val.replace(/\D/g, '').length >= 10, {
    message: 'Valid phone number is required (min 10 digits)'
  })
});

app.post('/api/enquiry', async (req, res) => {
  try {
    const validatedData = enquirySchema.parse(req.body);
    
    let savedEnquiry = null;
    if (MONGODB_URI) {
      savedEnquiry = await Enquiry.create(validatedData);
    } else {
      // Mock mode
      savedEnquiry = { ...validatedData, _id: 'mock-id-' + Date.now(), createdAt: new Date() };
    }

    res.json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: savedEnquiry
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.reduce((acc: Record<string, string>, curr: z.ZodIssue) => {
        if (curr.path.length > 0) {
          acc[String(curr.path[0])] = curr.message;
        }
        return acc;
      }, {} as Record<string, string>);
      
      return res.status(400).json({ success: false, errors });
    }
    
    console.error('Enquiry submission error:', error);
    res.status(500).json({ success: false, errors: { server: 'An unexpected error occurred.' } });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
