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

module.exports = uploadImage;
