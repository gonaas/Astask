import mongoose from 'mongoose';

async function dbConnect() {
  const DB_URI = <string>process.env.MONGO_URL;
  await mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
    } as mongoose.ConnectOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
}

export default { dbConnect };
