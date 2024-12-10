import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use('/api', taskRoutes);

app.listen(port, () => { console.log(`Server running on http://localhost:${port}`); });