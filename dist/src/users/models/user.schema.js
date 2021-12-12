"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    creationDate: Date,
});
//# sourceMappingURL=user.schema.js.map