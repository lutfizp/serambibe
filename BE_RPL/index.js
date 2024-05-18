import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get('/ProjekRPL', (req, res) => {
  console.log({urlParam : req.query});
  res.send('GACOR KANG BINGUNG GWAH');
});

app.get('/users', (req, res) => {
  res.send('Daftar pengguna');
});

app.post('/login', (req, res) =>{
  console.log({requestFromOutside : req.body});
  res.send('Login berhasil cuy');
});

app.put('/username', (req, res) =>{
  console.log({updateData : req.body});
  res.send('update berhasil');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
