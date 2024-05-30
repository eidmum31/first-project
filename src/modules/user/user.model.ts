import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../app/config';
import bcrypt from 'bcrypt';
const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt));
  next();
});

UserSchema.post('save', function (doc, next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  doc.password = '';
  next();
});
const User = model<TUser>('User', UserSchema);
export default User;
