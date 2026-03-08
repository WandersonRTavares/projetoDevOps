Entrega contínua de uma plataforma de pedidos baseada em microsserviços
Docker Compose → Kubernetes com monitoramento e integração contínua
Visão geral

Este projeto propõe a modernização da plataforma Pedidos Veloz por meio de práticas atuais de Cloud DevOps.
A solução mostra o progresso de um aplicativo baseado em microsserviços, desde um ambiente local com Docker Compose até uma implementação em Kubernetes, incluindo CI/CD, observabilidade e escalabilidade automática.

Arquitetura de Aplicação

A aplicação é formada por cinco elementos principais:

API Gateway - ponto de acesso para solicitações HTTP
Serviço de Pedidos – encarregado de gerar e consultar pedidos
Serviço de Pagamentos - incorporação ao sistema de pagamento
Serviço de Estoque - reserva e cancelamento de produtos
PostgreSQL - armazenamento de dados
Arquitetura simplificada:

Cliente
   |
API Gateway
   |
------------------------------
| Pedidos | Pagamentos | Estoque |
------------------------------
        |
     PostgreSQL

Tecnologias Utilizadas

Docker
Docker Compose
Kubernetes
Prometheus
Grafana
GitHub Actions
Node.js
PostgreSQL     

Ambiente Local utilizando Docker Compose

Para simplificar o desenvolvimento local, o ambiente pode ser iniciado com um único comando:
docker compose up -d
Serviços oferecidos:

Serviço                                      Porta
Gateway                                      3000
Pedidos                                      3001
Estoque                                      3002
Pagamentos                                   3003
PostgreSQL                                   5432

Containerização

Cada microsserviço tem seu próprio Dockerfile, o que assegura o isolamento e a portabilidade da aplicação.
As imagens são atualizadas e disponibilizadas no Docker Hub:

palitodf/pedidos:1.0.0 
palitodf/estoque:1.0.0
palitodf/pagamentos:1.0.0
palitodf/gateway:1.0.0

Orquestração com Kubernetes

Os manifests Kubernetes estão organizados na pasta:
k8s/
Estrutura:
k8s
 ├ base
 │   ├ namespace.yaml
 │   ├ configmap.yaml
 │   └ secret.yaml
 ├ pedidos
 ├ pagamentos
 ├ estoque
 └ postgres

Cada serviço possui:
Deployment
Service
Configuração de ambiente

Escalabilidade

O serviço pedidos emprega o Horizontal Pod Autoscaler (HPA) para realizar a escalabilidade automática com base no uso da CPU.

Observabilidade
A solução abrange o monitoramento com:
Prometheus
Grafana

O cluster Kubernetes é monitorado pelo Prometheus, que coleta métricas, enquanto o Grafana apresenta painéis em tempo real.

Os painéis de controle exibem:
utilização da CPU
consumo de memória
quantidade de pods
métricas de contêineres


CI/CD

O pipeline automatizado foi implementado com GitHub Actions.

Pipeline executa:
Checkout do código
Build das imagens Docker
Publicação de imagens
Deploy no Kubernetes


Execução do Projeto
1 – Ambiente local
docker compose up -d
2 – Deploy no Kubernetes
kubectl apply -f k8s/

Provas

O projeto abrange provas de execução:

Coleta de métricas pelo Prometheus
Grafana apresentando painéis de controle
Pods operando no cluster Kubernetes
Considerações finais
A solução exemplifica a implementação de práticas contemporâneas de DevOps, proporcionando maior confiabilidade, escalabilidade e observabilidade na aplicação de microsserviços.

