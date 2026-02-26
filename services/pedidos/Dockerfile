# Usa uma versão leve do Node.js
FROM node:20-alpine

# Define onde o código ficará no container
WORKDIR /usr/src/app

# Copia apenas os arquivos de pacotes primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia o restante dos arquivos do repositório
COPY . .

# O comando para rodar a aplicação (ajuste conforme seu package.json)
CMD ["node", "index.js"]
