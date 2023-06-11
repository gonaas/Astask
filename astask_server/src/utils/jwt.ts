import jwt from 'jsonwebtoken';

const generateJWT =  (payload: Object) :string => {
  return jwt.sign(payload, 'Secret123', {
    expiresIn: 3600,
  });
};

const parseJwt = (token: string) => {
  return jwt.decode(token)
};

export default { generateJWT,parseJwt };
