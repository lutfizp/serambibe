import { Sequelize } from "sequelize";

const db = new Sequelize("Serambi_Buku", "postgres", "@mentoz05", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
