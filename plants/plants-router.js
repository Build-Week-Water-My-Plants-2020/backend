const router = require('express').Router();
const Plants = require('./plants-model.js');

router.get('/', (req, res) => {
  console.log(req.user);
  Plants.findPlantsByUser(req.user.id)
  .then(plants => {
    res.json(plants);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get plants' });
  });
});

router.post('/', (req, res) => {
  const plantData = req.body;

  Plants.add(plantData)
  .then(plant => {
    res.status(201).json(plant);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new plant' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Plants.findById(id)
  .then(plant => {
    if (plant) {
      Plants.update(changes, id)
      .then(updatedPlant => {
        res.status(200).json(updatedPlant);
      });
    } else {
      res.status(404).json({ message: 'Could not find plant with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update plant' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Plants.remove(id)
  .then(deleted => {
    if (deleted) {
      console.log(deleted);
      res.status(200).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find plant with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete plant' });
  });
});

module.exports = router;