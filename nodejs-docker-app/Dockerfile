# Этап 1: Сборка приложения
FROM node:20 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Этап 2: Запуск приложения
FROM node:20-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем установленные модули и исходный код из предыдущего этапа
COPY --from=build /app /app

# Открываем порт
EXPOSE 3000

# Определяем команду для запуска приложения
CMD ["node", "index.js"]
