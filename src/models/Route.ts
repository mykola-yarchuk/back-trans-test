import {
  Table, Model,
  Column, Default, AllowNull,
  CreatedAt, UpdatedAt, DataType,
  ForeignKey, Index, BelongsTo,
} from 'sequelize-typescript';
import { RouteStatus, TransportType } from '@/models/constants';
import { Transport } from '@/models/Transport';

@Table({
  tableName: 'routes',
})
export class Route extends Model<Route> {
  @BelongsTo(() => Transport)
  transport: Transport;

  @AllowNull(false)
  @Column({
    field: 'start_point',
    type: DataType.STRING,
  })
  startPoint: string

  @AllowNull(false)
  @Column({
    field: 'end_point',
    type: DataType.STRING,
  })
  endPoint: string

  @AllowNull(false)
  @Column({
    field: 'required_transport_type',
    type: DataType.ENUM(...Object.values(TransportType)),
  })
  requiredTransportType: TransportType

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  distance: number

  @Column({
    field: 'start_date',
    type: DataType.DATE,
  })
  startDate: Date

  @Column({
    field: 'end_date',
    type: DataType.DATE,
  })
  endDate: Date

  @Default(RouteStatus.Pending)
  @Column({
    field: 'end_date',
    type: DataType.ENUM(...Object.values(RouteStatus)),
  })
  status: RouteStatus

  @ForeignKey(() => Transport)
  @Index('index_routes_on_transport_id')
  @Column({
    field: 'transport_id',
    type: DataType.INTEGER,
  })
  transportId: number

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
