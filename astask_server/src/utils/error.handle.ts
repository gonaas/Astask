import { Response } from 'express';

const handleHttp = (res: Response, _error: String, errorRaw?:any ) => {
  console.log(errorRaw)
  res.status(500);
  res.send({ errorRaw });
};

export { handleHttp };
