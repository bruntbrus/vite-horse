const {
  DB_CHARSET = 'utf8',
  DB_ENGINE = 'InnoDB',
  DB_HOST = 'localhost',
  DB_NAME = 'mydb',
  DB_PASSWORD = '',
  DB_PORT = '3307', // 3306
  DB_ROWS_PER_PAGE = '50',
  DB_TYPE = 'mariadb',
  DB_USERNAME = 'root',
  NODE_ENV = '',
} = process.env

const env = {
  DB_CHARSET,
  DB_ENGINE,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT: parseInt(DB_PORT),
  DB_ROWS_PER_PAGE: parseInt(DB_ROWS_PER_PAGE),
  DB_TYPE,
  DB_USERNAME,
  DEBUG: NODE_ENV !== 'production',
  NODE_ENV,
}

export default env
