import service from "../../models/user.js";

export async function current(req, res) {
  const { email, subscription } = req.user;
  try {
    res.status(200).json({ email, subscription });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
