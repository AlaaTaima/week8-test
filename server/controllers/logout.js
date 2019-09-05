const logoutUser = (req, res) => {
  res.clearCookie("access");
  res.redirect("/");
};

module.exports = { logoutUser };
