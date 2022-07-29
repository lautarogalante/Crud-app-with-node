import app from './app';
import './databases';
import { PORT } from './config';

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`);
});