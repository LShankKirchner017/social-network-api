const router = require("express").Router()
const { getThoughts, getThoughtById, createThought, udateThoughtById, deleteThougthById, addreaction, deleteReaction } = require('../../controllers/thoughtController')