# Use a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --also=dev

# Copie o restante dos arquivos do projeto
COPY . .

# Compile o código TypeScript para JavaScript
RUN npx nest build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npx", "nest", "start"]
