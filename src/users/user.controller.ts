import express from "express";
import { userService } from "./user.service";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);

async function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.json(await userService.getAll());
    } catch (err) {
        next(err);
    }
}

async function getById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.json(await userService.getById(parseInt(req.params.id)));
    } catch (err) {
        next(err);
    }
}

async function create(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.json(await userService.create(req.body));
    } catch (err) {
        next(err);
    }
}

async function update(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        await userService.update(parseInt(req.params.id), req.body);
        res.json({ message: "User updated successfully" });
    } catch (err) {
        next(err);
    }
}

async function _delete(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        await userService.delete(parseInt(req.params.id));
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        next(err);
    }
}

export default router;
