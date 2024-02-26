import express from 'express';

const router = express.Router();

router.get('/auth/example', (req, res) => {
  res.send({msg: "examle is working"});
});

export { router as exampleRouter };