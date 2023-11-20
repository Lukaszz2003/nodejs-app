import * as service from "#services/index.js";

export async function subscription(req, res) {
  const { id } = req.user;
  const { subscription } = req.body;
  try {
    const {
      _id,
      email,
      subscription: newSub,
    } = await service.updateSubscription({ id, subscription });
    res.status(200).json({ _id, email, subscription: newSub });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
