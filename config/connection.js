const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

// if (process.env.DB_STRING) {
//     sequelize = new Sequelize(process.env.DB_STRING);
//   } else {
//     sequelize = new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//       }
//     );
//   }

//   } else {
//     sequelize = new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//       }
//     );
//   }

  // if (process.env.JAWSDB_MARIA_URL) {
  //   sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL);
  // } else {
  //   sequelize = new Sequelize(
  //     process.env.DB_NAME,
  //     process.env.DB_USER,
  //     process.env.DB_PASSWORD,
  //     {
  //       host: 'localhost',
  //       dialect: 'mysql',
  //       port: 3306
  //     }
  //   );
  // }

module.exports = sequelize;
