import { Entity } from 'typeorm'
import env from '../env'

export const CURRENT_TIMESTAMP = 'CURRENT_TIMESTAMP'

export function MyEntity(name: string) {
  return Entity({
    name,
    database: env.DB_NAME,
    engine: env.DB_ENGINE,
  })
}
