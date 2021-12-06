// const jwt = require('jsonwebtoken');
// const { showUser } = require('../service/userService');

// const secret = 'turma11';

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

// module.exports = async (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: 'Token not found' });
//   }

//   try {
//     const decode = jwt.verify(token, secret, jwtConfig);

//     const user = await showUser(decode.data.email);

//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: 'Erro ao procurar usuário do token' });
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'jwt malformed' });
//   }
// };