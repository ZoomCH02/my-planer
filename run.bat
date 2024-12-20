@echo off
:: Переменная для backend
set BACKEND_DIR=red-planner-back-end
:: Переменная для frontend
set FRONTEND_DIR=red-planner-front-end

:: Запуск backend
echo Запуск backend-сервера...
start cmd /k "cd /d %BACKEND_DIR% && npm install && npm run start:dev"

:: Запуск frontend
echo Запуск frontend-сервера...
start cmd /k "cd /d %FRONTEND_DIR% && npm install && npm run dev"

:: Вывод завершения
echo Серверы запущены. Backend в %BACKEND_DIR%, frontend в %FRONTEND_DIR%.
pause
