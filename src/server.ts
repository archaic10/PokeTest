import { app } from './app';

var port = 3333;
app.listen(process.env.PORT || port);