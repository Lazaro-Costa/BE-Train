"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    res.send('Home Site');
});
router.post('/teste/:id', (req, res) => {
    const { id } = req.params;
    const obj = {
        recebido: req.body.nome,
        id
    };
    return res.status(http_status_codes_1.StatusCodes.OK).json(obj);
});
