'use strict';

exports.index = function(req, res){
  res.render('home/colors');
};

exports.pacman = function(req, res){
  res.render('games/pacman');
};

exports.painter = function(req, res){
  res.render('games/painter');
};
