"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const errorhandler_1 = require("errorhandler");
//get env PORT from server or use 8080
const PORT = process.env.PORT || 8080;
//error handler midelware
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app_1.default.use(errorhandler_1.default());
}
app_1.default.listen(PORT, () => {
    console.log("Express running on port " + PORT);
});
//# sourceMappingURL=server.js.map