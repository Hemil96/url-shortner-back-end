import express from 'express';
import routes from './routes/index';
require('dotenv').config();

const port = process.env.PORT;
const app = express();

// Routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
