const request = require('supertest');
const { intersect } = require('../../data/db-config');
const db = require('../../data/db-config');
const server = require('../server');

test('correct env var', () => {
    expect(process.env.DB_ENV).toBe("testing")
})