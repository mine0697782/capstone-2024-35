const Employee = require('../models/Employee')
const mongoose = require('mongoose');


/**
 * GET /
 * employee page
 */


exports.employee = async (req, res) => {

    const messages = await req.flash('info');

    const locals = {
      title: "About - NodeJs",
      description: "Free NodeJS User Management System.",
    }

    let perPage = 12;
    let page = req.query.page || 1;


//페이지에 보여줄 작업자 수
    try {
      const employees = await Employee.aggregate([ { $sort: {updatedAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
      const count = await Employee.countDocuments({});

      res.render('employee/employee', {
        locals,
        employees,
        current: page,
        pages: Math.ceil(count / perPage),
        messages
      });
    } catch (error) {
      console.log(error);
    }
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
        req.body.user = req.user.id;
        await Employee.create(newEmployee);
        await req.flash('info', '새 작업자가 추가되었습니다.')

        res.redirect('/employee');
    } catch (error) {
        console.log(error);
    }
    
  }  

/**
 * GET /
 * 노동자 데이터
 *  */

  exports.viewEmployee = async (req, res) => {

    try{
      const employee = await Employee.findOne({ _id: req.params.id })

      const locals = {
        title: "View Employee Data",
        description: "Free NodeJs User Management System",
      };

      res.render('employee/viewemployee', {
        locals,
        employee
      })
    } catch(error) {
      console.log(error);
    }
  }