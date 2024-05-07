const Worksite = require('../models/Worksite')
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage 
*/

exports.worksite = async (req, res) => {

  const messages = await req.flash('info');

  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }

  try {
    const worksites = await Worksite.find({})//.limit(1);
    res.render('worksite/worksite', { locals, messages, worksites } );
  } catch (error) {
    console.log(error);
  }

}

exports.addWorksite = async (req, res) => {
  const locals = {
    title: "Add New Worksite",
    description: "Free Nodejs User Management System.",
  }
  // console.log(req.user)
  res.render('worksite/addworksite', locals);
}

/**
* POST /
* 새로운 근무지 생성
*/

exports.postWorksite = async (req, res) => {
  console.log('post worksite req-body')
  console.log(req.body);

  const newWorksite = new Worksite({
      user: req.user._id,
      name: req.body.name,
      address: req.body.address,
      local: req.body.local,
      salary: req.body.salary,
      worktype: req.body.worktype,
      // date: req.body.date,
      date: new Date(),
      // hour: req.body.hour,
      end: new Date(),
      nopr: req.body.nopr,
      worksitenote: req.body.worksitenote,
  });

  try {
      req.body.user = req.user.id;
      await Worksite.create(newWorksite);
      await req.flash('info', '새 작업현장이 추가되었습니다.')

      res.redirect('/worksite');
  } catch (error) {
      console.log(error);
  }
  
}  

exports.showWorksite = async (req, res) => {
  const { id } = req.params;
  const worksite = await Worksite.findById(id).populate('hired')
  console.log(worksite)
  res.render('worksite/worksiteDetail', { worksite })
}

exports.matchToWorksite = async (req, res) => {
  console.log('match to worksite')

}