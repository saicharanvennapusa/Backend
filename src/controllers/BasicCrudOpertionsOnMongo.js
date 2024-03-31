
import { User } from '../models/UserModel.js'

const getallusers = async (req, res) => {

    try {
        const users = await User.find()
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        console.log(req);
        console.log(user);
    } catch (error) {
        res.status(400).json({ message: "User not found" })
    }
}

const addUser = async (req, res) => {
    const { username, email, firstname, lastname, password } = req.body
    console.log(req.body)
    try {
        const user = await User.create({
            username,
            email,
            password,
            firstname,
            lastname

        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getallusers, getUserById, addUser };