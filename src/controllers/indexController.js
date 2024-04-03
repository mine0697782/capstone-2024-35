exports.getIndexPage = (req, res) => {
    res.render('index', { message: "메인 페이지입니다." });
  };
  