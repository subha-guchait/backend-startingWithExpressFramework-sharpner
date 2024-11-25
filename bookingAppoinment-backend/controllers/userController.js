const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const userDetails = req.body;
    if (!userDetails.phone || !userDetails.email) {
      throw new Error("Phone no and Email is Mandatory");
    }
    const data = await User.create(userDetails);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    console.log("sucessfully deleted");
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    await user.update(updatedUser, { where: { id: id } });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.json({ error: err });
  }
};
