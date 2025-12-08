// 1. import con to access database
const con = require("./db_connect")
// 2. create function that creates entity table if doesn't exist already
// change this to my own table
async function createCharacterTable() {
  let sql = `
CREATE TABLE IF NOT EXISTS GameCharacter (
       character_id INT NOT NULL AUTO_INCREMENT,
       character_name VARCHAR(36) NOT NULL UNIQUE,
       character_design VARCHAR(36) NOT NULL,
       character_item VARCHAR(36) NOT NULL,
       player_id INT,
       CONSTRAINT characterPK PRIMARY KEY(character_id),
       CONSTRAINT playerFK FOREIGN KEY(player_id) REFERENCES player(player_id)
    );
  `
  await con.query(sql)
}
// 3. call function that creates table
createCharacterTable()

function getAllCharacter() {
  return character
}
//functions below fpor characters model file
//login function, CRUD
async function createcharacter(character) {
    let sql = `
        SELECT * FROM Character
        WHERE character_name="${character.character_name}"
    `
    let ccharacter = await con.query(sql)
    return ccharacter[0]
}
async function register(character) {
    let sql = `
        INSERT INTO player (character_name, character_design, character_item)
        VALUES("${character.character_name}", "${character.character_design}", "${character.character_item}")
    `
    await con.query(sql)
    let ccharacter=await login(character)
    return ccharacter
}

async function deletecharacter(character) {
    let sql = `
        DELETE FROM charcter WHERE
        character_name="${character.character_name}"
    `
    await con.query(sql)
}

async function updatecharacter_name(character) {
    let sql = `
        UPDATE character SET
        character_name= "${character.character_name}"
        WHERE character_name="${character.character_name}"
    `
    await con.query(sql)
}
module.exports = { createcharacter, register, deletecharacter, updatecharacter_name }
//functions above for characters model file
