const { v4: uuidv4 } = require("uuid");

let employes = [];

const getAllEmployes = (req, res) => {
  res.status(200).json({ employes });

  const addEmploye = (req, res) => {
    const employe = req.body;
    employe.id = uuidv4();
    employes.push(employes);
    res.status(200).json({ employe });
  };
};

const updateEmployes = (req, res) => {
  const employe = req.body;
  res.status(200).json({ employes });
};

const deleteEmployes = (req, res) => {
  const employe = req.body;
  res.status = req.body;
};
