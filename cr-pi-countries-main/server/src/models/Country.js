const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // Defino el modelo
  const Country = sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), // Tipo de dato: cadena de longitud 3
      primaryKey: true, // Indica que este campo es la clave primaria
      allowNull: false, // No permite valores nulos
      unique: true, // Indica que este campo debe ser único
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING, // Usamos STRING para almacenar la URL o path de la imagen
      allowNull: false, // No permite valores nulos
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return Country;
};
