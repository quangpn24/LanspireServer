module.exports = (sequelize, Sequelize) => {
  const LevelLecturer = sequelize.define(
    'LevelLecturer',
    {
      idLecturer: {
        type: Sequelize.UUID,
        field: 'idlecturer',
      },
      idLevel: {
        type: Sequelize.UUID,
        field: 'idlevel',
      },
    },
    {
      freezeTableName: true,

      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );
  return LevelLecturer;
};
