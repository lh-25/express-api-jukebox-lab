const Track = require('../models/track')
const express = require('express')
const router = express.Router()


// CREATE - POST - /tracks
router.post('/', async (req,res) => {
  try {
    const addTrack = await Track.create(req.body)
    res.status(201).json(addTrack)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// READ - GET - /tracks
router.get('/', async (req, res) => {
  try {
    const getAllTracks = await Track.find()
    res.status(201).json(getAllTracks)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// READ - GET - /tracks/:trackId
router.get('/:trackId', async (req,res) => {
  try {
    const getTrack = await Track.findById(req.params.trackId)
    if (!getTrack) {
      res.status(404)
      throw new Error("Track not Found.");
    }
    res.status(200).json(getTrack)
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({error: error.message})
    } else {
      res.status(500).json({ error: error.message })
    }
  }
})



// UPDATE - PUT - /tracks/:trackId
router.put('/:trackId', async (req, res) => {
  try {
    const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, {new: true})
    if (!updatedTrack) {
      res.status(404)
      throw new Error("Track not found");
    } 
    res.status(200).json(updatedTrack.title)
  } catch (error) {
    if (res.status === 404) {
      res.json({error: error.message})
    } else {
      res.status(500).json({error: error.message})
    }
  }
})


// DELETE - DELETE - /tracks/:trackId
router.delete('/:trackId', async (req, res) => {
  try {
    const deleteTrack = await Track.findByIdAndDelete(req.params.trackId)
    if (!deleteTrack) {
      res.status(404).json({error: error.message})
      throw new Error("Track not found");
      
    }
    res.status(200).json(deleteTrack.title)
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({error: error.message})
    } else {
      res.status(500).json({error: error.message})
    }
  }
})



module.exports = router