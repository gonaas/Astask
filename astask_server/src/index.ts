import 'dotenv/config';

import db from './config/db';
import app from './app';

const PORT = process.env.PORT || 3001;

db.dbConnect();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
