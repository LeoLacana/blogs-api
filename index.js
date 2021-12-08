const express = require('express');
const userRouter = require('./Router/userRouter');
const loginRouter = require('./Router/loginRouter');
const categoriesRouter = require('./Router/categoriesRouter');
const postRouter = require('./Router/postRouter');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
