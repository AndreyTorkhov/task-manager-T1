# Task Manager

Простой и быстрый менеджер задач с удобным UI. Проект построен по архитектуре FSD с соблюдением принципов SOLID. Все данные хранятся локально через `localStorage`, управление задачами реализовано через Zustand-хранилище.

## 🧠 Ключевые решения

- Используем FSD-архитектуру (Feature-Sliced Design) для разделения логики
- Все данные (задачи) хранятся в `localStorage` браузера
- Состояние и логика управления задачами инкапсулированы в Zustand-сторе
- Форма редактирования построена на `react-hook-form` + `zod`
- Используется `@admiral-ds/react-ui` для интерфейса
- Все стили — TailwindCSS
- Реализован фильтр по категории, статусу и приоритету

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