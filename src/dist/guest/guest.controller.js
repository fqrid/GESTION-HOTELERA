"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestController = void 0;
const common_1 = require("@nestjs/common");
const guest_service_1 = require("./guest.service");
const create_guest_dto_1 = require("./dto/create-guest.dto");
const update_guest_dto_1 = require("./dto/update-guest.dto");
let GuestController = class GuestController {
    guestService;
    constructor(guestService) {
        this.guestService = guestService;
    }
    create(createGuestDto) {
        return this.guestService.create(createGuestDto);
    }
    findAll() {
        return this.guestService.findAll();
    }
    findOne(id) {
        return this.guestService.findOne(+id);
    }
    update(id, updateGuestDto) {
        return this.guestService.update(+id, updateGuestDto);
    }
    remove(id) {
        return this.guestService.remove(+id);
    }
};
exports.GuestController = GuestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guest_dto_1.CreateGuestDto]),
    __metadata("design:returntype", void 0)
], GuestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_guest_dto_1.UpdateGuestDto]),
    __metadata("design:returntype", void 0)
], GuestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestController.prototype, "remove", null);
exports.GuestController = GuestController = __decorate([
    (0, common_1.Controller)('guest'),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], GuestController);
//# sourceMappingURL=guest.controller.js.map