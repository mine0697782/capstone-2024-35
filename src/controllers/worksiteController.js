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