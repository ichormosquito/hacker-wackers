import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const id = Math.floor(1000000 + Math.random() * 9000000);
        const user = await User.create({ username, email, password, id });
        const token = generateToken(user._id);
        const addToken = await User.updateOne({ email } , { token: token })
        res.status(201).json({ token: token });
    } catch (error) {
        res.status(400).json({ message: 'Registration failed' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            const username = await User.updateOne({ email } , { token: token })
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error });
    }
};


export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: 'Password reset successfully' });
};

export const getUserInfo = async (req, res) => {
    const { token } = req.body;
    try {
        const user = await User.findOne({ token: token });
        if (user) return res.status(200).json({ message: 'User is logged in.', user: user.username, id: user.id })
    } catch(error) {
        res.status(500).json({ message: 'Invalid token.' })
    }
}

export const returnAllUsers = async (req, res) => {
    const users = await User.find({});
    if (!users) return res.status(404).json({ message: 'No users registered' })
    res.json({ message: 'Users found', users });
}