import { Router, Request, Response } from 'express';
import { User } from '../models/user.js'; // Your user model
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Find user in the database
  const user = await User.findOne({ where: { username } });

  console.log('User:', user);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY as string, { expiresIn: '15m' });
  return res.json({ token });
});

export default router;
