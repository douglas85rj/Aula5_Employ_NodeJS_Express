const { v4: uuidv4 } = require("uuid");

let employes = [];

const getAllEmployes = (req, res) => {
  res.status(200).json(employes);
};
const addEmployes = (req, res) => {
  const employe = req.body;
  try {
    employe.id = uuidv4();
    employes.push(employe);
    res.status(200).json(employe);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployes = (req, res) => {
  const id = req.params.id;
  const employe = req.body;
  try {
    const index = employes.findIndex((e)=> e.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Employe not found" });
    }
    employes[index] = { ...employes[index], ...employe };
    res.status(200).json(employes[index]);n
   
  } catch {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployes = (req, res) => {
  const id = req.params.id;
  try {
    employes = employes.filter((e) => e.id !== id);
    res.status(200).json({ message: "Employe deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployes,
  addEmployes,
  updateEmployes,
  deleteEmployes,
};
