const { join } = require("path");
const express = require("express");
const { some } = require("lodash");
const router = express.Router();

const countries = require("../countries");
const shapes = [
  "default",
  "rounded",
  "square",
  "square_rounded",
  "hex",
  "mast",
];

// eslint-disable-next-line no-unused-vars
const flagHandler = (req, res, next) => {
  const { country, shape } = req.params;

  if (!some(countries, ["code", country.toUpperCase()])) {
    return res.status(404).end("Invalid country code");
  }

  if (!shapes.some((item) => item === shape)) {
    return res.status(404).end("Invalid flag shape");
  }

  res.sendFile(join(shape, `${country}.svg`), {
    root: "./flags",
  });
};

// eslint-disable-next-line no-unused-vars
router.get(
  "/:country",
  (req, res, next) => {
    req.params.shape = "default";
    next();
  },
  flagHandler
);

// eslint-disable-next-line no-unused-vars
router.get("/:country/:shape", flagHandler);

module.exports = router;
