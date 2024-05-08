import express from 'express';
import 'dotenv/config';
import companyRoutes from './routes/company.routes.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/test', companyRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});