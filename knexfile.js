const path = require("path");

require("dotenv").config();


const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL ="postgres://luzvxxyh:OQqSamvju3OT5pGeW8pquDJ0gLhNT2OD@mahmud.db.elephantsql.com/luzvxxyh",
  PRODUCTION_DATABASE_URL="postgres://rltrhswc:q87r9Jnsz1sBg6hUSnHdTgaN9Oh2U7oE@mahmud.db.elephantsql.com/rltrhswc",
} = process.env;

const URL =
  NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
