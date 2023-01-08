// import bcrypt from 'bcrypt/bcrypt';
import bcrypt from 'bcrypt'

const data = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: true,
        },
        {
            name: 'Jane',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456', 10),
            isAdmin: false,
        },
    ]
}

export default data