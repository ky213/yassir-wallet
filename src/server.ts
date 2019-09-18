import app from './app';
import connectDB from './config/db/databse';
import { server as serverConfig } from 'config';

connectDB()
  .then(() => {
    console.log('Connected To Database');
  })
  .catch(err => {
    console.log('Error Connecting To Database', err);
  });

app.listen(serverConfig.port, () => {
  console.info(`Listening on port ${serverConfig.port}`);
});
