import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";
import passport from "passport";

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});
//signup strategy

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (user) {
          console.log("User already exists");
          return done(null, false);
        }
        const newUser = {
          username: username,
          password: createHash(password),
          email: req.body.email,
        };

        User.create(newUser, (err, createdUser) => {
          if (err) {
            console.log("error in saving user: " + err);
            return done(err);
          }
          console.log(user);
          console.log("User registyration successful");
          return done(null, createdUser);
        });
      });
    }
  )
);

//login strategy

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("user not found with username " + username);
        return done(null, false);
      }

      if (!isValidPassword(user, password)) {
        console.log("Invalid password. Try Again :)");
        return done(null, false);
      }

      return done(null, user);
    });
  })
);

export default passport;
