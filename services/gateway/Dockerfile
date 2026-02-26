# Imagem base estável do Node.js
FROM node:20-alpine

# Cria o diretório da aplicação
WORKDIR /app

# Copia os manifestos de pacotes
COPY package*.json ./

# Instala as dependências (ajuste se usar npm ou yarn)
RUN npm install --omit=dev

# Copia o código fonte
COPY . .

# Comando de inicialização
CMD ["node", "index.js"]
