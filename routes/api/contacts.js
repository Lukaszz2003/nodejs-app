import { Router } from "express"
import {
  createContacts,
  deleteContacts,
  indexContacts,
  showContacts,
  updateContacts,
  updateStatusContacts,
} from ("../../controllers/index.js");


export const router = Router();

router.get("/", indexContacts);
router.get("/:id", showContacts);
router.patch("/:id/favorite", updateStatusContacts);
router.post("/", contactPostSchema, createContacts);
router.put("/:id", contactPutSchema, updateContacts);
router.delete("/:id", deleteContacts);

module.exports = router;
