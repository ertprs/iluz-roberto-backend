const routes = require("express").Router();
const authMiddlewares = require("./app/middlewares/auth");

const controllers = require("./app/controllers");

routes.post("/session", (req, res) => require('./app/controllers/SessionController').store(req,res));
routes.post("/login-token", (req, res) => require('./app/controllers/SessionController').by_token(req,res));
routes.post("/session_cli", (req, res) => require('./app/controllers/SessionCliController').store(req,res));
routes.use(authMiddlewares);

/**
 * PushNotification
 */
routes.get('/push_notification', (req, res) => require('./app/controllers/PushNotificationController').list(req, res))
routes.get('/push_notification/:id', (req, res) => require('./app/controllers/PushNotificationController').show(req, res))
routes.post("/push_notification", (req, res) => require('./app/controllers/PushNotificationController').store(req, res));
routes.put('/push_notification/:id',(req, res) => require('./app/controllers/PushNotificationController').update(req, res))
routes.delete('/push_notification/:id', (req, res) => require('./app/controllers/PushNotificationController').destroy(req, res))

/**
 * Pós venda
 */
routes.get('/pos_venda', (req, res) => require('./app/controllers/PosVendaController').list(req, res))
routes.get('/pos_venda/:id', (req, res) => require('./app/controllers/PosVendaController').show(req, res))
routes.post("/pos_venda", (req, res) => require('./app/controllers/PosVendaController').store(req, res));
routes.put('/pos_venda/:id',(req, res) => require('./app/controllers/PosVendaController').update(req, res))
routes.delete('/pos_venda/:id', (req, res) => require('./app/controllers/PosVendaController').destroy(req, res))

/**
 * Funcionários
 */
routes.get('/funcionario', (req, res) => require('./app/controllers/FuncionarioController').list(req, res))
routes.get('/funcionario/:id', (req, res) => require('./app/controllers/FuncionarioController').show(req, res))
routes.post("/funcionario", (req, res) => require('./app/controllers/FuncionarioController').store(req, res));
routes.put('/funcionario/:id',(req, res) => require('./app/controllers/FuncionarioController').update(req, res))
routes.delete('/funcionario/:id', (req, res) => require('./app/controllers/FuncionarioController').destroy(req, res))

/**
 * Clientes
 */
routes.get('/cliente', (req, res) => require('./app/controllers/ClienteController').list(req, res))
routes.get('/cliente/:id', (req, res) => require('./app/controllers/ClienteController').show(req, res))
routes.post("/cliente", (req, res) => require('./app/controllers/ClienteController').store(req, res));
routes.put('/cliente/:id', (req, res) => require('./app/controllers/ClienteController').update(req, res))
routes.delete('/cliente/:id', (req, res) => require('./app/controllers/ClienteController').destroy(req, res))

/**
 * Orçamentos
 */
routes.get('/orcamento', (req, res) => require('./app/controllers/OrcamentoController').list(req, res))
routes.get('/orcamento/:id', (req, res) => require('./app/controllers/OrcamentoController').show(req, res))
routes.post("/orcamento", (req, res) => require('./app/controllers/OrcamentoController').store(req, res));
routes.put('/orcamento/:id', (req, res) => require('./app/controllers/OrcamentoController').update(req, res))
routes.delete('/orcamento/:id', (req, res) => require('./app/controllers/OrcamentoController').destroy(req, res))

/**
 * Contratos
 */
routes.get('/contrato', (req, res) => require('./app/controllers/ContratoController').list(req, res))
routes.get('/contrato/:id', (req, res) => require('./app/controllers/ContratoController').show(req, res))
routes.post("/contrato", (req, res) => require('./app/controllers/ContratoController').store(req, res));
routes.put('/contrato/:id', (req, res) => require('./app/controllers/ContratoController').update(req, res))
routes.delete('/contrato/:id', (req, res) => require('./app/controllers/ContratoController').destroy(req, res))

//contrato (envio de documentos)
routes.get('/contrato_documento/:id', (req, res) => require('./app/controllers/ContratoController/ContratoDocumento').list(req, res))
routes.post('/contrato_documento', (req, res) => require('./app/controllers/ContratoController/ContratoDocumento').store(req, res))
routes.delete('/contrato_documento/:id', (req, res) => require('./app/controllers/ContratoController/ContratoDocumento').destroy(req, res))

//homologacao empresa
routes.get('/contrato_homo_empresa/:id', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoEmpresa').list(req, res))
routes.post('/contrato_homo_empresa', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoEmpresa').store(req, res))
routes.put('/contrato_homo_empresa/:id', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoEmpresa').update(req, res))
routes.delete('/contrato_homo_empresa/:id', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoEmpresa').destroy(req, res))

//homologacao cliente
routes.get('/contrato_homo_cliente/:id', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoCliente').list(req, res))
routes.post('/contrato_homo_cliente', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoCliente').store(req, res))
routes.delete('/contrato_homo_cliente/:id', (req, res) => require('./app/controllers/ContratoController/ContratoHomologacaoCliente').destroy(req, res))

//cliente (lista contrato pelo cliente)
routes.get('/contrato_cliente/:id', (req, res) => require('./app/controllers/ContratoController').listByUser(req, res))

/**
 * Entregas
 */
routes.get('/entrega', (req, res) => require('./app/controllers/EntregaController').list(req, res))
routes.get('/entrega/:id', (req, res) => require('./app/controllers/EntregaController').show(req, res))
routes.post("/entrega",(req, res) =>  require('./app/controllers/EntregaController').store(req, res));
routes.put('/entrega/:id', (req, res) => require('./app/controllers/EntregaController').update(req, res))
routes.delete('/entrega/:id', (req, res) => require('./app/controllers/EntregaController').destroy(req, res))

 /**
 * Financeiro
 */
routes.get('/financeiro', (req, res) => require('./app/controllers/FinanceiroController').list(req, res))
routes.get('/financeiro/:id', (req, res) => require('./app/controllers/FinanceiroController').show(req, res))
routes.post('/financeiro', (req, res) => require('./app/controllers/FinanceiroController').store(req, res))
routes.put('/financeiro/:id', (req, res) => require('./app/controllers/FinanceiroController').update(req, res))
routes.delete('/financeiro/:id', (req, res) => require('./app/controllers/FinanceiroController').destroy(req, res))

/**
 * Carros
 */
routes.get('/carro', (req, res) => require('./app/controllers/CarroController').list(req, res))
routes.get('/carro/:id', (req, res) => require('./app/controllers/CarroController').show(req, res))
routes.post('/carro', (req, res) => require('./app/controllers/CarroController').store(req, res))
routes.put('/carro/:id', (req, res) => require('./app/controllers/CarroController').update(req, res))
routes.delete('/carro/:id', (req, res) => require('./app/controllers/CarroController').destroy(req, res))

/**
 * Ordem
 */
routes.get('/ordem/funcionario/:id', (req, res) => require('./app/controllers/OrdemController').listByFuncionario(req, res))
routes.get('/ordem/cliente/:id', (req, res) => require('./app/controllers/OrdemController').listByCliente(req, res))
routes.get('/ordem', (req, res) => require('./app/controllers/OrdemController').list(req, res))
routes.get('/ordem/:id', (req, res) => require('./app/controllers/OrdemController').show(req, res))
routes.post('/ordem', (req, res) => require('./app/controllers/OrdemController').store(req, res))
routes.put('/ordem/:id', (req, res) => require('./app/controllers/OrdemController').update(req, res))
routes.delete('/ordem/:id', (req, res) => require('./app/controllers/OrdemController').destroy(req, res))
// ordem-diario-de-bordo
routes.get('/ordem_diario_bordo/:id', (req, res) => require('./app/controllers/OrdemController/OrdemDiarioDeBordo').list(req, res))
routes.post('/ordem_diario_bordo/:id', (req, res) => require('./app/controllers/OrdemController/OrdemDiarioDeBordo').store(req, res))
routes.delete('/ordem_diario_bordo/:id', (req, res) => require('./app/controllers/OrdemController/OrdemDiarioDeBordo').destroy(req, res))

routes.get('/ordem_carro/:id', (req, res) => require('./app/controllers/OrdemController/OrdemCarroController').list(req, res))
routes.post('/ordem_carro/:id', (req, res) => require('./app/controllers/OrdemController/OrdemCarroController').store(req, res))
routes.delete('/ordem_carro/:id', (req, res) => require('./app/controllers/OrdemController/OrdemCarroController').destroy(req, res))

routes.get('/ordem_equipamento/:id', (req, res) => require('./app/controllers/OrdemController/OrdemEquipamentoController').list(req, res))
routes.post('/ordem_equipamento/:id', (req, res) => require('./app/controllers/OrdemController/OrdemEquipamentoController').store(req, res))
routes.delete('/ordem_equipamento/:id', (req, res) => require('./app/controllers/OrdemController/OrdemEquipamentoController').destroy(req, res))

routes.get('/ordem_material', (req, res) => require('./app/controllers/OrdemController/OrdemMaterialController').listAll(req, res))
routes.get('/ordem_material/:id', (req, res) => require('./app/controllers/OrdemController/OrdemMaterialController').list(req, res))
routes.post('/ordem_material/:id', (req, res) => require('./app/controllers/OrdemController/OrdemMaterialController').store(req, res))
routes.put('/ordem_material/:id', (req, res) => require('./app/controllers/OrdemController/OrdemMaterialController').update(req, res))
routes.delete('/ordem_material/:id', (req, res) => require('./app/controllers/OrdemController/OrdemMaterialController').destroy(req, res))

routes.get('/ordem_funcionario/funcionario/:id', (req, res) => require('./app/controllers/OrdemController/OrdemFuncionarioController').listByUser(req, res))
routes.get('/ordem_funcionario/:id', (req, res) => require('./app/controllers/OrdemController/OrdemFuncionarioController').list(req, res))
routes.post('/ordem_funcionario/:id', (req, res) => require('./app/controllers/OrdemController/OrdemFuncionarioController').store(req, res))
routes.delete('/ordem_funcionario/:id', (req, res) => require('./app/controllers/OrdemController/OrdemFuncionarioController').destroy(req, res))

/**
 * equipamento
 */
routes.get('/equipamento', (req, res) => require('./app/controllers/EquipamentoController').list(req, res))
routes.get('/equipamento/:id', (req, res) => require('./app/controllers/EquipamentoController').show(req, res))
routes.post('/equipamento', (req, res) => require('./app/controllers/EquipamentoController').store(req, res))
routes.put('/equipamento/:id', (req, res) => require('./app/controllers/EquipamentoController').update(req, res))
routes.delete('/equipamento/:id', (req, res) => require('./app/controllers/EquipamentoController').destroy(req, res))

/**
 * material
 */
routes.get('/material', (req, res) => require('./app/controllers/MaterialController').list(req, res))
routes.get('/material/:id', (req, res) => require('./app/controllers/MaterialController').show(req, res))
routes.post('/material', (req, res) => require('./app/controllers/MaterialController').store(req, res))
routes.put('/material/:id', (req, res) => require('./app/controllers/MaterialController').update(req, res))
routes.delete('/material/:id', (req, res) => require('./app/controllers/MaterialController').destroy(req, res))

/**
 * material
 */
routes.get('/permissao', (req, res) => require('./app/controllers/PermissaoController').list(req, res))
routes.get('/permissao/:id', (req, res) => require('./app/controllers/PermissaoController').show(req, res))
routes.post('/permissao', (req, res) => require('./app/controllers/PermissaoController').store(req, res))
routes.put('/permissao/:id', (req, res) => require('./app/controllers/PermissaoController').update(req, res))
routes.delete('/permissao/:id', (req, res) => require('./app/controllers/PermissaoController').destroy(req, res))

/**
 * SUPORTE
 */
routes.get('/ticket', controllers.TicketController.index)
routes.get('/ticket/usuario/self', controllers.TicketController.self)
routes.get('/ticket/:id', controllers.TicketController.show)
routes.put('/ticket/:id', controllers.TicketController.update)
routes.post('/ticket', controllers.TicketController.store)
routes.put('/ticket/:id', controllers.TicketController.update)

module.exports = routes;
