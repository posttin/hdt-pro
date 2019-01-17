import express from 'express';
import account from './account';

const router = express.Router();
router.use('./account', router);

export default router;