require("dotenv").config();
const { s3 } = require("../config/aws");

const uploadImage = async (file) => {
  try {
    const archive = await s3
      .upload({
        Bucket: process.env.BLACKBLAZE_BUCKET,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
      .promise();

    return archive.Location;
  } catch (error) {}
};

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


module.exports = { uploadImage, deleteImage };
