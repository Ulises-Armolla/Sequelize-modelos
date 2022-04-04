module.exports = (Sequelize, dataTypes) => {
    const alias = 'Actor';

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: true
        },

        favorite_movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        }
    };

    const config = {
        tableName: 'actors',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };

    const Actor = Sequelize.define(alias, cols, config);

    return Actor;
}