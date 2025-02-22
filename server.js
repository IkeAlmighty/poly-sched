import express from 'express';
import routes from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`express server listening on port ${PORT}`));

// for testing:
export default app;