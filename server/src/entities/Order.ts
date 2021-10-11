import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { MyEntity, CURRENT_TIMESTAMP } from './_schema'

/**
 * Order entity.
 */
@MyEntity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number

  @Column('int', { name: 'customer_id' })
  customerId!: number

  @Column('double', { name: 'price' })
  price!: number

  @Column('timestamp', { name: 'time', default: () => CURRENT_TIMESTAMP })
  time?: Date

  @Column('tinyint', { name: 'status', default: () => 0 })
  status?: number

  @Column('tinytext', { name: 'message', nullable: true })
  message?: string | null
}
