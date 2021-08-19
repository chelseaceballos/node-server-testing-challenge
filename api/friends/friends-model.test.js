
const db = require('../../data/db-config');
const Friend = require('./friends-model');
const { notify } = require('./friends-router');

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
    
    describe('Friend.getAll', () => {
        test('resolves to an array of 6 friends', async () => {
            const friends = await Friend.getAll()
            expect(friends.length).toBe(6)
            expect(friends).toHaveLength(6)
        })
        test('resolves to correct object shapes', async () => {
            const friends = await Friend.getAll()
            expect(friends[0]).toHaveProperty('friend_id', 1)
            expect(friends[0]).toHaveProperty('friend_name', 'Chandler')

            expect(friends[1]).toMatchObject({ friend_id: 2, friend_name: "Joey"})
            expect(friends[2]).toMatchObject({ friend_id: 3, friend_name: "Monica"})
        })
    })
    
    describe("Friends.insert", () => {
        test('Adds a friend to table', async () => {
            //get friend using insert
            // assert new friend on db or that db have new length
            await Friend.insert(friend7)
            const rows = await db('friends')

            expect(rows).toHaveLength(7)
        })
        test('it resolves to a new friend on the db', async () => {
            const gunther = { friend_name: "Gunther" }
            const newFriend = await Friend.insert(gunther)
            expect(gunther).toMatchObject({ friend_name: "Gunther" })
        })
    })
})