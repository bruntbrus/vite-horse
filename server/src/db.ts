import 'reflect-metadata'
import { createConnection, BaseEntity, Connection } from 'typeorm'
import type { EntityTarget } from 'typeorm'
import * as Entities from './entities'
import env from './env'

/**
 * Database type.
 */
export type DatabaseType = 'mariadb' | 'mysql'

/**
 * Entity (table record) in database.
 */
export const DatabaseEntity = BaseEntity

/**
 * Database configuration.
 */
export interface DatabaseConfig {
  type?: DatabaseType
  name?: string
  username?: string
  password?: string
  host?: string
  port?: number
  charset?: string
  rowsPerPage?: number
}

/**
 * Database class.
 */
export class Database {
  readonly Entities = Entities

  readonly type!: DatabaseType
  readonly name!: string
  readonly username!: string
  readonly password!: string
  readonly host!: string
  readonly port!: number
  readonly charset!: string
  public rowsPerPage!: number
  private connection?: Connection

  constructor(config: DatabaseConfig) {
    this.type = config.type || 'mysql'
    this.name = config.name || ''
    this.username = config.username || 'root'
    this.password = config.password || ''
    this.host = config.host || 'localhost'
    this.port = config.port || 3306
    this.charset = config.charset || 'utf-8'
    this.rowsPerPage = config.rowsPerPage || 50
  }

  async connect() {
    let conn = this.connection

    if (!conn) {
      conn = await createConnection({
        name: this.name || 'default',
        type: this.type,
        host: this.host,
        port: this.port,
        username: this.username,
        password: this.password,
        database: this.name,
        charset: this.charset,
        entities: Object.values(Entities),
        synchronize: true,
        logging: false,
      })

      this.connection = conn
    }

    return conn
  }

  async getRepository<E>(Entity: EntityTarget<E>) {
    return this.connect().then((conn) => conn.getRepository(Entity))
  }
}

export function createDatabase(config?: DatabaseConfig) {
  return new Database({
    type: env.DB_TYPE as DatabaseType,
    name: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    port: env.DB_PORT,
    charset: env.DB_CHARSET,
    rowsPerPage: env.DB_ROWS_PER_PAGE,
    ...config,
  })
}

export function getEntityByName(name: keyof typeof Entities) {
  return Entities[name]
}
