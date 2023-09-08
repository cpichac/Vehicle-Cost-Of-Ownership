const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

// Table Name: cars 
//   Make: Alpha Romeo (Drop down selected by user)
//     Depreciation
//     Maintenance
//     Repairs
//     Insurance
//     Fuel
    //Make: Mercedes
    // Depreciation
    // maintenance
    // srklgjskgrd
    // krsgskljgn
    // srklghrskg

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    manufacturerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enginetype: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    depreciation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    msrp: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    insurance: {
      type: DataTypes.INTEGER,
      // allowNull: false,     
    },
    fuel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
