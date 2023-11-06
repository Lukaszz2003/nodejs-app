import { logout } from "#services/index.js";

export async function logout(req, res) {
  const { id } = req.user;
  try {
    await service.updateUserToken({ id, token: "" });
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
