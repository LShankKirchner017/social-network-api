const { Thought } = require("../models");

const getThoughts = () => {
    return Thought.find()
}

const getThoughtById = (thoughtId) => {
    return Thought.findOne({_id: thoughtId })
}

const createThought = (thoughtData) => {
    return Thought.create(thoughtData)
}

const updateThoughtById = (thoughtId, thoughtData) => {
    return Thought.findByIdAndUpdate({ _id: thoughtId}, thoughtdata, { new: true })
}

const deleteThoughtById = (thoughtId) => {
    return Thought.findByIdAndDelete({ _id: thoughtID })
}

const addReaction = (thoughtId, reactionData) => {
    return Thought.findByIdAndUpdate({ _id: thoughtId }, { $pull: { reactions: reactionId}}, { new: true })
}

const deleteReaction = (thoughtId, reactionId) => {
    return Thought.findByIdAndUpdate({ _id: thoughtId }, { $pull: { reactions: reactionId}}, { new: true })
}

module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    deleteReaction
}