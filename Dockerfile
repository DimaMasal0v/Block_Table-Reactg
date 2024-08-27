# Этап 1: Сборка приложения
FROM node:14 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Устанавливаем переменную окружения для заголовка
ARG REACT_APP_TITLE
ENV REACT_APP_TITLE=${REACT_APP_TITLE}

# Добавляем аргумент сборки для даты запуска
ARG BUILD_DATE
ENV REACT_APP_BUILD_DATE=${BUILD_DATE}

# Собираем приложение
RUN npm run build

# Этап 2: Создание финального образа для продакшена
FROM node:14-slim

# Устанавливаем сервер для статических файлов
RUN npm install -g serve

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем результаты сборки из предыдущего этапа
COPY --from=build /app/build ./build

# Открываем порт
EXPOSE 3000

# Определяем команду для запуска контейнера
CMD ["serve", "-s", "build"]
