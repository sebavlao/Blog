import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER} from "../config/config.js"

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mariadb",
    timezone: "-03:00",
    dialectOptions: {
        useUTC: true
    },
});
