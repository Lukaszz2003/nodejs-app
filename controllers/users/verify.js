import * as service from "#services/index.js";

export async function verify(req, res, next) {
  try {
    const { verificationToken } = req.params;
    const user = await service.findVerificationToken({ verificationToken });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await service.findUserIDandUpdateVerify({ id: user.id });
    res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
