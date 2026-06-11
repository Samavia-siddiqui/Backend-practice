import studentNames from "../models/studentModel.js"

export const getHome =  (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
  });
}

export  const getAllStudents = (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
    data: studentNames,
  });
}

export const addStudent = (req, res) => {

  console.log(req.params.indexNo)
  console.log(req.body.studentName3)

  studentNames[req.params.indexNo]= req.body.studentName3

  res.status(201).json({
    success: true,
    message: "data added successfully",
    data: studentNames,
  });
}

export  const updateStudent =(req, res) => {

  console.log(req.params.indexNo)
  console.log(req.body.studentName3)

  studentNames[req.params.indexNo]= req.body.studentName3

  res.status(200).json({
    success: true,
    message: "data updated successfully",
    data: studentNames,
  });
}

export const deleteStudent = (req, res) => {

  console.log(req.params.indexNo)
  studentNames.splice(req.params.indexNo,1)
  res.status(200).json({
    success: true,
    message: "data deleted successfully",
    data: studentNames,
  });
}