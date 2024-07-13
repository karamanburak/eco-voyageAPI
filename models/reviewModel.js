const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: [true, "Review must belong to a tour!"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user!"],
    },
  },
  {
    collection: "reviews",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
