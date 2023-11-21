import * as service from "#services/index.js";

export async function verifyAgain(req, res, next) {
  try {
    const { email } = req.body;
    const user = await service.validateEmail(email);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.verify) {
      res.status(400).json({ message: "Verification has already been passed" });
      return;
    }
    await sendEmailVerificationToken({
      email,
      verificationToken: user.verificationToken,
    });
    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
