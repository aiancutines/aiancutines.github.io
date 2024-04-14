const Student = require('../models/studentModel');

exports.saveStudent = async (req, res) => {
  try {
    const { stdnum, fname, lname, age } = req.body;
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
  } catch (error) {
    res.json({ inserted: false, error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { stdnum } = req.body;
    await Student.updateOne({ stdnum: stdnum }, { lname: 'Parker' });
    res.json({ updated: true });
  } catch (error) {
    res.json({ updated: false, error: error.message });
  }
};

exports.removeUser = async (req, res) => {
  try {
    const { stdnum } = req.body;
    await Student.deleteOne({ stdnum });
    res.json({ deleted: true });
  } catch (error) {
    res.json({ deleted: false, error: error.message });
  }
};

exports.removeAllUsers = async (req, res) => {
  try {
    await Student.deleteMany({});
    res.json({ deleted: true });
  } catch (error) {
    res.json({ deleted: false, error: error.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const { stdnum } = req.query;
    const user = await Student.find({ stdnum });
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Student.find({});
    res.json(members);
  } catch (error) {
    res.json({ error: error.message });
  }
};
