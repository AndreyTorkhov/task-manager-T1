# Task Manager

Простой и быстрый менеджер задач с удобным UI. Проект построен по архитектуре FSD с соблюдением принципов SOLID. Задачи хранятся на сервере, управление состоянием реализовано через Zustand.

## 🌐 Продакшн
Frontend: https://task-manager-t1-andreytorkhovs-projects.vercel.app

Backend API: https://task-manager-t1-backend.vercel.app

## 🧠 Ключевые решения

- Используем FSD-архитектуру (Feature-Sliced Design) для разделения логики
- Все данные (задачи) хранятся в localStorage браузера
- Состояние и логика управления задачами инкапсулированы в Zustand-сторе
- Форма редактирования построена на `react-hook-form` + `zod`
- Используется `@admiral-ds/react-ui` для интерфейса
- Все стили — TailwindCSS
- Реализован сотрировка и фильтры по категории, статусу и приоритету

### ✨ Обновления

- Функионал создания и удаления задач, сортировка
- Backend реализован на Express с хранением задач в tasks.json
- Деплой backend-а на Vercel
- Загрузка задач и отправка форм — через REST API


## 🚀 Технологии

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://github.com/colinhacks/zod)
- [React Router v6](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Admiral DS](https://admiralds.github.io/react-ui/)
- [Vite](https://vitejs.dev/)
- [axios](https://www.axios.com/)
- [Vercal](https://vercel.com/)

## .env

Создайте .env в корне фронтенда:

```
VITE_API_URL=https://task-manager-t1-backend.vercel.app
```

## ⚙️ Локальный запуск

```bash
# Установка зависимостей
yarn install

# Запуск в dev-режиме
yarn dev
```

Приложение будет доступно на `http://localhost:5173`

## 🐳 Запуск в Docker (dev-режим)

```bash
# Сборка образа
docker build -t task-manager .

# Запуск контейнера
docker run -p 5173:5173 task-manager
```

Приложение будет доступно на `http://localhost:5173`

## Краткое описание применённой архитектуры

Проект реализован по Feature-Sliced Design (FSD) — модульному подходу, направленному на масштабируемость и читаемость:

- `shared/` — переиспользуемые утилиты, стили, конфиги

- `entities/` — доменные сущности (например, Task), содержащие бизнес-логику, типы и сторы

- `features/` — конкретные пользовательские действия (создание задачи, фильтрация и т.п.)

- `widgets/` - готовые UI-блоки, собранные из entities и features. Выступают как крупные строительные элементы страницы

- `pages/` — страницы приложения, объединяющие фичи и сущности

- `app/` — точка входа, роутинг, провайдеры, глобальные стили