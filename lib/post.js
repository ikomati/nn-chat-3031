'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const dialect0ptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};
const sequelize = process.env.DATANASE_URL ?
  //本番環境
  new Sequelize(
    process.env.DATABASE_URL,
    {
      logging: false,
      dialect0ptions
    }
  )
  :
  //開発環境
  new Sequelize(
    'postgres://postgres:postgres@db/nn_chat',
    {
      logging: false
    }
  );
const Post = sequelize.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT
    },
    postedBy: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

Post.sync();
module.exports = Post;