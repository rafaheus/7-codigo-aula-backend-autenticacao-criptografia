const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: '1234',
	database: 'aula_autenticacao_criptografia',
})

module.exports = pool
