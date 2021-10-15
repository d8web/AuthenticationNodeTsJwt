import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface ImageInstance extends Model {
    id: number,
    name: string
}

export const Image = sequelize.define<ImageInstance>('Image', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'images',
    timestamps: false
});