import express from 'express';
require('dotenv').config();
// import cors from 'cors';
const port = process.env.PORT;
const app = express();
// app.disable('x-powered-by');

// global middleware binding
// app.use(morgan('dev'));
// app.use(cors({ exposedHeaders: config.corsHeaders }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   bodyParser.json({ limit: config.bodyLimit, type: 'application/*+json' }),
// );

// Define a route for the GET endpoint
app.get('/', (req, res) => {
  console.log(req);
  res.status(200).send('Hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
