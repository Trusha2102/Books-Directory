import { DataTypes } from 'sequelize';
import { define } from '../src/db';

const Issues = define('Issue', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      book_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Book,
          key: 'book_id'
        },
      },
      student_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      branch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enrollment_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_of_issue: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      date_of_return: {
        type: DataTypes.DATEONLY,
      },
      penalty: {
        type: DataTypes.DECIMAL(10, 2),
      }
    });

export default Issues;
