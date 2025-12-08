// 1. import con to access database
const con = require("./db_connect")
// 2. create function that creates entity table if doesn't exist already
// change this to my own table
async function createPlayerTable() {
  let sql = `
 CREATE TABLE IF NOT EXISTS Player (
       player_id INT NOT NULL AUTO_INCREMENT,
       username VARCHAR(36) NOT NULL UNIQUE,
       password VARCHAR(36) NOT NULL,
       email VARCHAR(255) NOT NULL UNIQUE,
       first_name VARCHAR(36) NOT NULL UNIQUE,
       last_name VARCHAR(36) NOT NULL UNIQUE,
       CONSTRAINT playerPK PRIMARY KEY(player_id)
    );
  `
  await con.query(sql)
}
// 3. call function that creates table
createPlayerTable()

function getAllPlayers() {
  return players
}
//functions below fpor characters model file
//login function, CRUD
async function login(player) {
    let sql = `
        SELECT * FROM Player
        WHERE username="${player.username}"
    `
    let cplayer = await con.query(sql)
    return cplayer[0]
}
async function register(player) {
    let sql = `
        INSERT INTO player (username, password, email, first_name, last_name)
        VALUES("${player.username}", "${player.password}", "${player.email}", "${player.first_name}", "${player.last_name}")
    `
    await con.query(sql)
    let cplayer=await login(player)
    return cplayer
}

async function deleteplayer(player) {
    let sql = `
        DELETE FROM player WHERE
        username="${player.username}"
    `
    await con.query(sql)
}

async function updatepassword(player) {
    let sql = `
        UPDATE player SET
        password= "${player.password}"
        WHERE username="${player.username}"
    `
    await con.query(sql)
}
module.exports = { getAllPlayers, login, register, deleteplayer, updatepassword }
//functions above for characters model file