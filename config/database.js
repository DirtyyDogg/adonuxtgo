'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mongodb'),

  /*
  |--------------------------------------------------------------------------
  | mongodb
  |--------------------------------------------------------------------------
  |
  */
  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
  }
}
