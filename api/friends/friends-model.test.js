const request = require('supertest');
const db = require('../../data/db-config');
const server = require('../server');

friend7 = {friend_name: "Gunther"}
friend8 = {friend_name: "Janice"}
friend9 = {friend_name: "Richard"}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=> {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

test('correct env var', () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe('db access functions', () => {
    
})