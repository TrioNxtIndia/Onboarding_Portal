import bcrypt from 'bcrypt';
import User from '../models/User.js';

const authController = {
  async signup(req, res) {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Bad Request' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      res.status(200).json({ message: 'Authentication successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },
};

export default authController;
