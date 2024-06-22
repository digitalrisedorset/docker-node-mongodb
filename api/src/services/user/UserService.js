import { User } from '../../models/UserSchema.js'

export const UserService = {
    get: (id) => {
        console.log(`User service called ${id}`)
        return {
            userId: id,
            name: 'Peter',
            email: '<email>'
        }
    },

    create: (data) => User.create(data),

    update: () => {}
}