const express = require('express');
const userRouter = require('./Router/userRouter');
const loginRouter = require('./Router/loginRouter');

const PORT = 3002;

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
