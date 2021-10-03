import {
  Table, Model,
  Column, Default, AllowNull,
  CreatedAt, UpdatedAt, DataType, Unique, NotEmpty, HasMany,
} from 'sequelize-typescript';
import { TransportModel, TransportStatus, TransportType } from '@/models/constants';
import { Route } from '@/models/Route';

@Table({
  tableName: 'transports',
})
export class Transport extends Model<Transport> {
  @NotEmpty
  @AllowNull(false)
  @Unique(true)
  @Column({
    type: DataType.STRING,
    field: 'license_plate',
  })
  licensePlate: string

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.ENUM(...Object.values(TransportModel)),
  })
  model: TransportModel

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.ENUM(...Object.values(TransportType)),
  })
  type: TransportType

  @Default(() => Date.now())
  @Column({
    field: 'purchase_date',
    type: DataType.DATE,
  })
  purchaseDate: Date;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
  })
  mileage: number

  @Default(TransportStatus.Free)
  @Column({
    type: DataType.ENUM(...Object.values(TransportStatus)),
  })
  status: TransportStatus

  @HasMany(() => Route)
  routes: Route[];

  @CreatedAt
  @AllowNull(false)
  @Default(() => Date.now())
  @Column({
    field: 'created_at',
    type: DataType.DATE,
  })
  createdAt: Date;

  @UpdatedAt
  @AllowNull(false)
  @Default(() => Date.now())
  @Column({
    field: 'updated_at',
    type: DataType.DATE,
  })
  updatedAt: Date;
}
