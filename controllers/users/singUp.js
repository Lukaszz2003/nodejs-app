import { signup } from "#services/index.js";

export async function signup(req, res) {
  const { email, password } = req.body;
  try {
    const user = await service.validateEmail(email);
    if (user) {
      res.status(409).json({ message: "Email in use" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const result = await service.createUser({ email, password: hashPassword });

    res.status(201).json({
      user: {
        email: result.email,
        subscription: "starter",
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
