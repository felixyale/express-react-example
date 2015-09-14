exports.index = function(req, res){
  res.render('index', {
    title: 'Express React Render',
    name: 'John'
  });
};
