const postLogin = (req, res) => {
  const { user } = req;
  console.log(user);
  res.send("inicion de sesion exitoso");
};

export { postLogin };
