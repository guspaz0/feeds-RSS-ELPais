db.createUser({
        user: 'gusta',
        pwd: 'probando2025',
        roles: [
            {
                role: 'readWrite',
                db: 'testDB',
            },
        ],
    });
db.createCollection('news', { capped: false });