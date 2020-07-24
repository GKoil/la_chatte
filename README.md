# README #

## Использование
1. Установить зависимости
    ```
    yarn
    ```
2. Запустить отслеживание измененных файлов gulp
    ```
    yarn start
    ```

## Технологии
- БЭМ
  - Каждый блок стилей хранится в отдельном файле в директории `src/scss/components/страница`
  - Каждая страница html хранится в отдельном файле в директории `src/templates/страница`
  - Каждый блок html хранится в отдельном файле в директории `src/templates/components/страница`

## Миксины
Для использования: убедиться, что подключен mixins.scss в main.scss

1. Адаптивный шрифт
  - Прописать в scss файле ``@include adaptive-font (мин.значениеpx, разрешение экрана для минимального значения, макс.значениеpx, разрешение экрана для максимального значения)``
2. Кастомные @media выражения
  - @include before-mobile - `@media (max-width: 767px) {}`
  - @include before-tablet - `@media (max-width: 768px) {}`
  - @include after-tablet - `@media (min-width: 768px) {}`
  - @include after-desktop - `@media (min-width: 1200px) {}`