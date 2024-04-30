
/**
 * GET /
 * Homepage 
*/

exports.worksite = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('worksite', locals);
}