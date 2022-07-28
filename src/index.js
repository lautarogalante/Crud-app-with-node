import app from './app';
import './databases';

const port = 3000;
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});