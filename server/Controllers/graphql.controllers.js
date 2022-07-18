

class User {
    constructor({username, email, password}) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const UsersMap = {}

export const getUsers = ({campo, valor}) => {
    const Users = Object.values(UsersMap)
    if (campo && valor) {
        return Users.filter(p => p[campo] == valor)
    } else {
        return Users
    }
}

export const getUser = ({user}) => {
    const Users = Object.values(UsersMap)
    return Users.filter(p => p.username === user)
}

export const createUser = ({data}) => {
    const newUser = new User(data)
    UsersMap.append(newUser);
    return newUser
}
