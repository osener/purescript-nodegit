"use strict"

// module Node.Git.Repository

var nodegit = require("nodegit")

exports.open = function (path) {
  return function (success, error) {
    nodegit.Repository.open(path).done(success, error)
  }
}

exports.getBranchCommit = function (name) {
  return function (repo) {
    return function (success, error) {
      repo.getBranchCommit(name).done(success, error)
    }
  }
}

exports.getHeadCommit = function (repo) {
  return function (success, error) {
    repo.getHeadCommit().done(success, error)
  }
}

exports.getMasterCommit = function (repo) {
  return function (success, error) {
    repo.getMasterCommit().done(success, error)
  }
}

exports.getStatus = function (repo) {
  return function (success, error) {
    repo.getStatus().done(success, error)
  }
}

exports.head = function (repo) {
  return function (success, error) {
    repo.head().done(success, error)
  }
}
