import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required!'],
      minlength: [3, 'Name need to be longer!'],
      unique: true,
    },
  },
  { timestamps: true },
);

CategorySchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

CategorySchema.pre('validate', function(next) {
  next();
});

CategorySchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      createdAt: this.createdAt
    };
  },
};

CategorySchema.statics = {
  createCategory(args, user) {
    return this.create({
      ...args,
      user,
    });
  },
  list({ skip = 0, limit = 5 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
  },
};

export default mongoose.model('Category', CategorySchema);
