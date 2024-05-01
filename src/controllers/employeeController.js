const Employee = require('../models/Employee')
const mongoose = require('mongoose');


/**
 * GET /
 * employee page
 */


exports.employee = async (req, res) => {
    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('employee/employee', locals);
  }

/**
 * GET /
 * 새로운 노동자 양식
 */

exports.addEmployee = async (req, res) => {
    const locals = {
      title: "Add New Employee",
      description: "Free Nodejs User Management System.",
    }
    res.render('employee/addemployee', locals);
  }

/**
 * POST /
 * 새로운 노동자 생성
 */

exports.postEmployee = async (req, res) => {

    console.log(req.body);

    const newEmployee = new Employee({
        name: req.body.name,
        sex: req.body.sex,
        local: req.body.local,
        RRN: req.body.RRN,
        phonenumber: req.body.phonenumber,
    });

    try {
        await Employee.create(newEmployee);
        res.redirect('/employee/addemployee');
    } catch (error) {
        console.log(error);
    }
    
  }  