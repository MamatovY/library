# Используйте официальный Node.js образ
FROM node:18-alpine

# Устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходники и собираем приложение
COPY . .
RUN npm run build

# Устанавливаем команду для запуска приложения 
CMD ["npm", "start"]