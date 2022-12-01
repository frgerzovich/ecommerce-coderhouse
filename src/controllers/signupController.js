const postSignup = (req, res) => {
  const { user } = req;
  console.log(user);
  res.send("registro exitoso");
};

export { postSignup };
