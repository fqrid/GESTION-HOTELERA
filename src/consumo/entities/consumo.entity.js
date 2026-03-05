"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumo = void 0;
var typeorm_1 = require("typeorm");
var estadia_entity_1 = require("../../estadia/entities/estadia.entity");
var Consumo = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('consumos')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _estadiaId_decorators;
    var _estadiaId_initializers = [];
    var _estadiaId_extraInitializers = [];
    var _estadia_decorators;
    var _estadia_initializers = [];
    var _estadia_extraInitializers = [];
    var _descripcion_decorators;
    var _descripcion_initializers = [];
    var _descripcion_extraInitializers = [];
    var _cantidad_decorators;
    var _cantidad_initializers = [];
    var _cantidad_extraInitializers = [];
    var _precioUnitario_decorators;
    var _precioUnitario_initializers = [];
    var _precioUnitario_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var Consumo = _classThis = /** @class */ (function () {
        function Consumo_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.estadiaId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _estadiaId_initializers, void 0));
            this.estadia = (__runInitializers(this, _estadiaId_extraInitializers), __runInitializers(this, _estadia_initializers, void 0));
            this.descripcion = (__runInitializers(this, _estadia_extraInitializers), __runInitializers(this, _descripcion_initializers, void 0));
            this.cantidad = (__runInitializers(this, _descripcion_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
            this.precioUnitario = (__runInitializers(this, _cantidad_extraInitializers), __runInitializers(this, _precioUnitario_initializers, void 0));
            this.total = (__runInitializers(this, _precioUnitario_extraInitializers), __runInitializers(this, _total_initializers, void 0));
            __runInitializers(this, _total_extraInitializers);
        }
        return Consumo_1;
    }());
    __setFunctionName(_classThis, "Consumo");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _estadiaId_decorators = [(0, typeorm_1.Column)({ name: 'estadia_id' })];
        _estadia_decorators = [(0, typeorm_1.ManyToOne)(function () { return estadia_entity_1.Estadia; }, function (estadia) { return estadia.consumos; }), (0, typeorm_1.JoinColumn)({ name: 'estadia_id' })];
        _descripcion_decorators = [(0, typeorm_1.Column)()];
        _cantidad_decorators = [(0, typeorm_1.Column)({ type: 'int' })];
        _precioUnitario_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 })];
        _total_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _estadiaId_decorators, { kind: "field", name: "estadiaId", static: false, private: false, access: { has: function (obj) { return "estadiaId" in obj; }, get: function (obj) { return obj.estadiaId; }, set: function (obj, value) { obj.estadiaId = value; } }, metadata: _metadata }, _estadiaId_initializers, _estadiaId_extraInitializers);
        __esDecorate(null, null, _estadia_decorators, { kind: "field", name: "estadia", static: false, private: false, access: { has: function (obj) { return "estadia" in obj; }, get: function (obj) { return obj.estadia; }, set: function (obj, value) { obj.estadia = value; } }, metadata: _metadata }, _estadia_initializers, _estadia_extraInitializers);
        __esDecorate(null, null, _descripcion_decorators, { kind: "field", name: "descripcion", static: false, private: false, access: { has: function (obj) { return "descripcion" in obj; }, get: function (obj) { return obj.descripcion; }, set: function (obj, value) { obj.descripcion = value; } }, metadata: _metadata }, _descripcion_initializers, _descripcion_extraInitializers);
        __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: function (obj) { return "cantidad" in obj; }, get: function (obj) { return obj.cantidad; }, set: function (obj, value) { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
        __esDecorate(null, null, _precioUnitario_decorators, { kind: "field", name: "precioUnitario", static: false, private: false, access: { has: function (obj) { return "precioUnitario" in obj; }, get: function (obj) { return obj.precioUnitario; }, set: function (obj, value) { obj.precioUnitario = value; } }, metadata: _metadata }, _precioUnitario_initializers, _precioUnitario_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Consumo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Consumo = _classThis;
}();
exports.Consumo = Consumo;
