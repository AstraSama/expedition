# expedition

Objetivo
Desenvolver um sistema para gerenciar expedições científicas, pesquisadores,
e espécies descobertas. Nesta primeira etapa, você criará a API e configurará o
banco de dados conforme as especificações.
Dica: utilize o process.env.URI no mongo.connect do banco de dados, e para
teste, utilize o localhost, para deploy, utilize o mongodb atlas.
Estrutura dos Dados:

Explorer (Pesquisador)
    name: Nome do pesquisador (String)
    fieldOfStudy: Área de estudo (String)
    expeditionsParticipated: Quantidade de expedições que o
    pesquisador participou (Number)

Species (Espécie)
    name: Nome da espécie (String)
    discoveryLocation: Local de descoberta (String)
    rarity: Raridade da espécie (Number)
    documented: Indica se a espécie já foi documentada (Boolean, padrão false)

Expedition (Expedição)
    location: Local da expedição (String)
    date: Data da expedição (Date)
    participants: Array de ObjectIDs referenciando Explorers (para armazenar os pesquisadores participantes)
    speciesFound: Array de ObjectIDs referenciando Species (para registrar as espécies encontradas na expedição)

Funcionalidades
1. Explorer (Pesquisador)
Criar Pesquisador (store): Endpoint para criar um pesquisador.
Listar Pesquisadores (index): Endpoint para listar todos os
pesquisadores.
Listar Pesquisador específico (show): Endpoint para listar os
detalhes de um pesquisador, incluindo as espécies descobertas,
apresentadas como documentos completos.
Atualizar Pesquisador (update): Endpoint para atualizar os dados de
um pesquisador.
Deletar Pesquisador (destroy): Endpoint para deletar um
pesquisador.
2. Species (Espécie)
Criar Espécie (store): Endpoint para criar uma espécie.
Listar Espécies (index): Endpoint para listar todas as espécies.
Listar Espécie específica (show): Endpoint para listar os detalhes de
uma espécie.
Atualizar Espécie (update): Endpoint para atualizar os dados de uma
espécie.
Deletar Espécie (destroy): Endpoint para deletar uma espécie.
3. Expedition (Expedição)
Criar Expedição (store): Endpoint para criar uma expedição,
incluindo a lista de pesquisadores participantes e as espécies
encontradas.