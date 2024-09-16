import { Router } from "express";
import { getAll, get, save, update, remove } from "./index.js";
import { authMiddleware } from '../../middleware/authMiddleware.js'

export const router = Router();

router.get('/', authMiddleware, async (req, res) => {
    const data = await getAll(req.user.id);
    res.status(200).json({data});
});

router.get('/:id', authMiddleware, async (req, res) => {
    const data = await get(req.params.id, req.user.id);
    res.status(200).json({data});
});

router.post('/', authMiddleware, async (req, res) => {
    try {
        req.body.user_id = req.user.id;
        const { date, description, user_id, value } = req.body;
    
        const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
    
        const params = {
          date: formattedDate,
          description,
          user_id,
          value
        };
    
        await save(params);
    
        res.status(201).json({ message: 'Meta salva com sucesso' });
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    req.body.user_id = req.user.id;
    const data = await update(req.params.id, req.body, req.user.id);
    res.status(200).json({data});
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const data = await remove(req.params.id, req.user.id);
    res.status(200).json({data});
});



export default router;
