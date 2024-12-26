const mongoose = require('mongoose');

const ProfileImageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
  },
  image: {
    data: Buffer, // Binary data for the image
    contentType: String, // MIME type (e.g., 'image/png', 'image/jpeg')
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProfileImage', ProfileImageSchema);
