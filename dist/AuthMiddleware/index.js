"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json("user is not Authenticated");
};
//# sourceMappingURL=index.js.map