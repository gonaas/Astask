import jwt from 'jsonwebtoken';

const generateJWT =  (payload: Object) :string => {
  return jwt.sign(payload, 'Secret123', {
    expiresIn: 3600,
  });
};

export default { generateJWT };
