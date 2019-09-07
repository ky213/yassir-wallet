import app from './app';
import connectDB from './config/databse';

connectDB()
  .then(() => {
    console.log('Connected To Database');
  })
  .catch(err => {
    console.log('Error Connecting To Database', err);
  });

app.listen(process.env.PORT, () => {
  console.info(`Listening on port ${process.env.PORT}`);
});
