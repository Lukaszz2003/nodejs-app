export async function avatar(req, res) {
  const { path: tmpDir, originalname } = req.file;
  const { id } = req.user;

  const extension = originalname.split(".").reverse()[0];
  const newName = `${id}.${extension}`;
  const newPathAvatar = path.join(__dirname, "../public/avatars", newName);

  try {
    await convertingAvatars({ tmpDir });
    await fs.rename(tmpDir, newPathAvatar);

    const { avatarURL } = await service.updateAvatar({
      id,
      avatarURL: `/avatars/${newName}`,
    });

    res.status(200).json({ avatarURL });
  } catch (error) {
    fs.unlink(tmpDir);
    res.status(400).json({ message: error.message });
  }
}
