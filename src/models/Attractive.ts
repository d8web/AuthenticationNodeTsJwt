import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface AttractiveInstance extends Model {
    id: number;
    type: string;
    title: string;
    name: string;
    image: string;
    latitude: number;
    longitude: number;
    description: string;
    location: string;
    price: number;
    guides: boolean;
    private: boolean;
    vehicle: boolean;
    polluted: boolean;
    popular: boolean;
}

export const Attractive = sequelize.define<AttractiveInstance>('Attractive', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    latitude: {
        type: DataTypes.NUMBER
    },
    longitude: {
        type: DataTypes.NUMBER
    },
    description: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    guides: {
        type: DataTypes.BOOLEAN
    },
    private: {
        type: DataTypes.BOOLEAN
    },
    vehicle: {
        type: DataTypes.BOOLEAN
    },
    polluted: {
        type: DataTypes.BOOLEAN
    },
    popular: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'attractives',
    timestamps: false
});