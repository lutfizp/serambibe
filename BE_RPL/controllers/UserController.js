import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedRows = await User.destroy({
      where: {},
      truncate: true,
    });

    if (deletedRows > 0) {
      const [results, metadata] = await User.sequelize.query('ALTER TABLE User AUTO_INCREMENT = 1;');
      console.log('Reset auto-increment result:', results);
      console.log('Metadata:', metadata);
    }

    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.error('Error resetting auto-increment:', error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
