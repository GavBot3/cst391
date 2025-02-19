import { Router } from "express";
import * as EstatesController from "./estates.controller";

const router = Router();

router.route("/estates").get(EstatesController.readEstates);
// router.route("/estates/:id").get(EstatesController.readEstateById);
// router.route("/estates/owner/:ownerId").get(EstatesController.);
router.route("/estates").post(EstatesController.createEstate);
router.route("/estates").put(EstatesController.updateEstate);
router.route("/estates/:id").delete(EstatesController.deleteEstateById);

export default router;
