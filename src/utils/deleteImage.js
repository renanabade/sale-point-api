const deleteImage = async (link) => {
  if (!link) {
    return;
  }

  const parts = link.split("/");
  const path = parts[parts.length - 1];

  try {
    await s3
      .deleteObject({
        Bucket: process.env.BLACKBLAZE_BUCKET,
        Key: path,
      })
      .promise();
  } catch (error) {
    return error;
  }
};

module.exports = deleteImage;
