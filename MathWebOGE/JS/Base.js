import { getCountProblemForVariant, getArrayObjectForSpecialVariants } from "./VariantFunctions.js"
import { searchObjectByProblem } from "./OtherFunctions.js"
import { searchObjectById } from "./OtherFunctions.js"

// Объекты - задачи
const allProblems =
    // Прототип: [0, '1.1']
    [
        
        { problem: '1.1', answer: 106, procent: 20, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/59'] },
        { problem: '1.2', answer: 0.9, procent: 35, type: 'Прямоугольный треугольник'},
        { problem: '1.3', answer: 0.4, procent: 30, type: 'Прямоугольный треугольник' },
        { problem: '1.4', answer: 16.4, procent: 70, type: 'Прямоугольный треугольник' },
        { problem: '1.5', answer: 86, procent: 40, type: 'Прямоугольный треугольник' },
        { problem: '1.6', answer: 1, procent: 60, type: 'Прямоугольный треугольник' },
        { problem: '1.7', answer: 26, procent: 35, type: 'Прямоугольный треугольник' },
        { problem: '1.8', answer: 66, procent: 45, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/61'] }, 
        { problem: '1.9', answer: 19, procent: 65, type: 'Прямоугольный треугольник' },
        { problem: '1.10', answer: 16, procent: 60, type: 'Прямоугольный треугольник' },
        { problem: '1.11', answer: 5.5, procent: 30, type: 'Трапеция' },
        { problem: '1.12', answer: 116, procent: 35, type: 'Параллелограмм' },
        { problem: '1.13', answer: 6, procent: 25, type: 'Параллелограмм' },
        { problem: '1.14', answer: 15, procent: 80, type: 'Параллелограмм' },
        { problem: '1.15', answer: 68, procent: 35, type: 'Ромб' },
        { problem: '1.16', answer: 16, procent: 30, type: 'Ромб' },
        { problem: '1.17', answer: 21, procent: 15, type: 'Окружность' },
        { problem: '1.18', answer: 198, procent: 20, type: 'Окружность' },
        { problem: '1.19', answer: 10.5, procent: 60, type: 'Окружность' },
        { problem: '1.20', answer: 47, procent: 40, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/63'] },
        { problem: '1.21', answer: 124, procent: 60, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/77'] },
        { problem: '1.22', answer: 30.25, procent: 70, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/98'] },
        { problem: '1.23', answer: 20, procent: 35, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/104'] },
        { problem: '1.24', answer: 3.5, procent: 70, type: 'Окружность' },
        { problem: '1.25', answer: 96, procent: 30, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/112'] },
        { problem: '1.26', answer: 119, procent: 65, type: 'Треугольник' },
        { problem: '1.27', answer: 0.5, procent: 30, type: 'Равнобедненный треугольник' },
        { problem: '1.28', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник' },
        { problem: '1.29', answer: 0.7, procent: 30, type: 'Равнобедненный треугольник' },
        { problem: '1.30', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник' },
        { problem: '1.31', answer: 132, procent: 30, type: 'Окружность' },
        { problem: '1.32', answer: 2, procent: 80, type: 'Равнобедненный треугольник' },
        { problem: '1.33', answer: 6, procent: 40, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/114'] },
        { problem: '1.34', answer: 20, procent: 70, type: 'Равнобедненный треугольник' },
        { problem: '1.35', answer: 90, procent: 50, type: 'Равносторонний треугольник' },
        { problem: '1.36', answer: 20, procent: 40, type: 'Прямоугольный треугольник' },
        { problem: '1.37', answer: 0.6, procent: 25, type: 'Прямоугольный треугольник' },
        { problem: '1.38', answer: 9, procent: 65, type: 'Прямоугольный треугольник' },
        { problem: '1.39', answer: 55, procent: 40, type: 'Прямоугольный треугольник' },
        { problem: '1.40', answer: 21, procent: 55, type: 'Прямоугольный треугольник' },
        { problem: '1.41', answer: 31, procent: 60, type: 'Прямоугольный треугольник' },
        { problem: '1.42', answer: 78, procent: 55, type: 'Прямоугольный треугольник' },
        { problem: '1.43', answer: 2, procent: 45, type: 'Трапеция' },
        { problem: '1.44', answer: 70, procent: 60, type: 'Параллелограмм' },
        { problem: '1.45', answer: 1.5, procent: 30, type: 'Параллелограмм' },
        { problem: '1.46', answer: 99, procent: 75, type: 'Параллелограмм' },
        { problem: '1.47', answer: 72, procent: 45, type: 'Ромб' },
        { problem: '1.48', answer: 51, procent: 45, type: 'Ромб' },
        { problem: '1.49', answer: 5, procent: 20, type: 'Окружность' },
        { problem: '1.50', answer: 78, procent: 30, type: 'Окружность' },
        { problem: '1.51', answer: 18.5, procent: 60, type: 'Окружность' },
        { problem: '1.52', answer: 4.5, procent: 45, type: 'Окружность' },
        { problem: '1.53', answer: 122, procent: 30, type: 'Окружность' },
        { problem: '1.54', answer: 103, procent: 40, type: 'Окружность' },
        { problem: '1.55', answer: 36, procent: 40, type: 'Окружность' },
        { problem: '1.56', answer: 56, procent: 35, type: 'Окружность' },
        { problem: '1.57', answer: 46, procent: 55, type: 'Окружность' },
        { problem: '1.58', answer: 122, procent: 60, type: 'Окружность' },
        { problem: '1.59', answer: 118, procent: 45, type: 'Окружность' },
        { problem: '1.60', answer: 63, procent: 55, type: 'Окружность' },
        { problem: '1.61', answer: 35, procent: 40, type: 'Окружность' },
        { problem: '1.62', answer: 91, procent: 40, type: 'Окружность' },
        { problem: '1.63', answer: 98, procent: 45, type: 'Окружность' },
        { problem: '1.64', answer: 33, procent: 40, type: 'Окружность' },
        { problem: '1.65', answer: 40, procent: 80, type: 'Окружность' },
        { problem: '1.66', answer: 39, procent: 25, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/60'] },
        { problem: '1.67', answer: 54, procent: 40, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/61'] },
        { problem: '1.68', answer: 84, procent: 35, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/64'] },
        { problem: '1.69', answer: 102, procent: 70, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/78'] },
        { problem: '1.70', answer: 2.25, procent: 75, type: 'Равнобедненный треугольник', solution: [1, 'https://t.me/c/1659326846/99'] },
        { problem: '1.71', answer: 12.5, procent: 40, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/105'] },
        { problem: '1.72', answer: 16, procent: 50, type: 'Треугольник', solution: [1, 'https://t.me/c/1659326846/113'] },
        { problem: '1.73', answer: 1, procent: 25, type: 'Треугольник' },
        { problem: '1.74', answer: 123, procent: 75, type: 'Треугольник' },
        { problem: '1.75', answer: 0.8, procent: 25, type: 'Равнобедненный треугольник' },
        { problem: '1.76', answer: 0.3, procent: 60, type: 'Равнобедненный треугольник' },
        { problem: '1.77', answer: 21, procent: 90, type: 'Равнобедненный треугольник' },
        { problem: '1.78', answer: 0.45, procent: 25, type: 'Равнобедненный треугольник' },
        { problem: '1.79', answer: 12, procent: 75, type: 'Равнобедненный треугольник' },
        { problem: '1.80', answer: 54, procent: 50, type: 'Равносторонний треугольник' },
        { problem: '1.81', answer: 20, procent: 40, type: 'Прямоугольный треугольник' },
        { problem: '1.82', answer: 102, procent: 30, type: 'Окружность' },
        { problem: '1.83', answer: 70, procent: 70, type: 'Окружность' },
        { problem: '1.84', answer: 32, procent: 30, type: 'Окружность' },
        { problem: '1.85', answer: 68, procent: 35, type: 'Окружность' },
        { problem: '1.86', answer: 75, procent: 30, type: 'Окружность' },
        { problem: '1.87', answer: 98, procent: 40, type: 'Окружность' },
        { problem: '1.88', answer: 3, procent: 80, type: 'Треугольник' },
        { problem: '1.89', answer: 82, procent: 80, type: 'Окружность' },
        { problem: '1.90', answer: 44, procent: 25, type: 'Окружность' },
        { problem: '1.91', answer: 138, procent: 50, type: 'Окружность' },
        { problem: '1.92', answer: 97, procent: 35, type: 'Окружность' },
        { problem: '1.93', answer: 2, procent: 80, type: 'Треугольник' },

        { problem: '2.1', answer: 15, procent: 25, type: 'Скалярное произведение' },
        { problem: '2.2', answer: 15, procent: 25, type: 'Скалярное произведение' },
        { problem: '2.3', answer: 15, procent: 25, type: 'Скалярное произведение' },
        { problem: '2.4', answer: 15, procent: 25, type: 'Скалярное произведение' },

        { problem: '3.1', answer: 15, procent: 25, type: 'Многогранник' },
        { problem: '3.2', answer: 12, procent: 30, type: 'Многогранник' },
        { problem: '3.3', answer: 112, procent: 70, type: 'Многогранник' },
        { problem: '3.4', answer: 8, procent: 50, type: 'Куб' },
        { problem: '3.5', answer: 12, procent: 40, type: 'Куб' },
        { problem: '3.6', answer: 90, procent: 60, type: 'Куб' },
        { problem: '3.7', answer: 45, procent: 60, type: 'Куб' },
        { problem: '3.8', answer: 60, procent: 60, type: 'Куб' },
        { problem: '3.9', answer: 90, procent: 60, type: 'Куб' },
        { problem: '3.10', answer: 18, procent: 45, type: 'Параллелепипед' },
        { problem: '3.11', answer: 0.8, procent: 65, type: 'Параллелепипед' },
        { problem: '3.12', answer: 35, procent: 40, type: 'Параллелепипед' },
        { problem: '3.13', answer: 357, procent: 80, type: 'Параллелепипед' },
        { problem: '3.14', answer: 30, procent: 40, type: 'Параллелепипед' },
        { problem: '3.15', answer: 42, procent: 45, type: 'Призма' },
        { problem: '3.16', answer: 4, procent: 50, type: 'Призма' },
        { problem: '3.17', answer: 60, procent: 100, type: 'Призма' },
        { problem: '3.18', answer: 45, procent: 60, type: 'Призма' },
        { problem: '3.19', answer: 60, procent: 55, type: 'Призма' },
        { problem: '3.20', answer: 12, procent: 55, type: 'Призма' },
        { problem: '3.21', answer: 74, procent: 35, type: 'Призма' },
        { problem: '3.22', answer: 37.5, procent: 35, type: 'Призма' },
        { problem: '3.23', answer: 60, procent: 70, type: 'Призма' },
        { problem: '3.24', answer: 12, procent: 65, type: 'Призма' },
        { problem: '3.25', answer: 66, procent: 65, type: 'Призма' },
        { problem: '3.26', answer: 5, procent: 70, type: 'Призма' },
        { problem: '3.27', answer: 184, procent: 50, type: 'Призма' },
        { problem: '3.28', answer: 2, procent: 35, type: 'Цилиндр' },
        { problem: '3.29', answer: 4.5, procent: 60, type: 'Комбинации тел' },
        { problem: '3.30', answer: 9, procent: 60, type: 'Комбинации тел' },
        { problem: '3.31', answer: 12, procent: 75, type: 'Цилиндр' },
        { problem: '3.32', answer: 50, procent: 75, type: 'Цилиндр' },
        { problem: '3.33', answer: 100, procent: 40, type: 'Цилиндр' },
        { problem: '3.34', answer: 2275, procent: 50, type: 'Цилиндр' },
        { problem: '3.35', answer: 15, procent: 30, type: 'Конус' },
        { problem: '3.36', answer: 60, procent: 65, type: 'Конус' },
        { problem: '3.37', answer: 1680, procent: 65, type: 'Конус' },
        { problem: '3.38', answer: 3, procent: 30, type: 'Конус' },
        { problem: '3.39', answer: 64, procent: 45, type: 'Конус' },
        { problem: '3.40', answer: 3, procent: 40, type: 'Конус' },
        { problem: '3.41', answer: 3, procent: 90, type: 'Конус' },
        { problem: '3.42', answer: 20.8, procent: 100, type: 'Конус' },
        { problem: '3.43', answer: 12.6, procent: 95, type: 'Конус' },
        { problem: '3.44', answer: 175, procent: 90, type: 'Конус' },
        { problem: '3.45', answer: 342, procent: 95, type: 'Конус' },
        { problem: '3.46', answer: 72, procent: 50, type: 'Параллелепипед' },
        { problem: '3.47', answer: 12, procent: 45, type: 'Призма' },
        { problem: '3.48', answer: 12, procent: 35, type: 'Призма' },
        { problem: '3.49', answer: 20, procent: 40, type: 'Параллелепипед' },
        { problem: '3.50', answer: 29, procent: 55, type: 'Пирамида' },
        { problem: '3.51', answer: 24, procent: 30, type: 'Пирамида' },
        { problem: '3.52', answer: 9800, procent: 80, type: 'Пирамида' },
        { problem: '3.53', answer: 2.5, procent: 55, type: 'Пирамида' },
        { problem: '3.54', answer: 3.5, procent: 95, type: 'Пирамида' },
        { problem: '3.55', answer: 16, procent: 70, type: 'Пирамида' },
        { problem: '3.56', answer: 1, procent: 30, type: 'Пирамида' },
        { problem: '3.57', answer: 19.5, procent: 55, type: 'Пирамида' },
        { problem: '3.58', answer: 14, procent: 60, type: 'Призма' },
        { problem: '3.59', answer: 32, procent: 80, type: 'Призма' },
        { problem: '3.60', answer: 42, procent: 45, type: 'Призма' },
        { problem: '3.61', answer: 12, procent: 50, type: 'Призма' },
        { problem: '3.62', answer: 8, procent: 40, type: 'Призма' },
        { problem: '3.63', answer: 10, procent: 50, type: 'Призма' },
        { problem: '3.64', answer: 6, procent: 95, type: 'Пирамида' },
        { problem: '3.65', answer: 3, procent: 45, type: 'Шар' },
        { problem: '3.66', answer: 4, procent: 35, type: 'Комбинации тел' },
        { problem: '3.67', answer: 2197, procent: 50, type: 'Комбинации тел' },
        { problem: '3.68', answer: 64, procent: 40, type: 'Комбинации тел' },
        { problem: '3.69', answer: 15, procent: 55, type: 'Комбинации тел' },
        { problem: '3.70', answer: 64, procent: 35, type: 'Комбинации тел' },
        { problem: '3.71', answer: 210, procent: 75, type: 'Комбинации тел' },
        { problem: '3.72', answer: 32768, procent: 65, type: 'Комбинации тел' },
        { problem: '3.73', answer: 75, procent: 40, type: 'Комбинации тел' },
        { problem: '3.74', answer: 72, procent: 50, type: 'Комбинации тел' },
        { problem: '3.75', answer: 20, procent: 65, type: 'Комбинации тел' },
        { problem: '3.76', answer: 50, procent: 60, type: 'Комбинации тел' },
        { problem: '3.77', answer: 188, procent: 35, type: 'Комбинации тел' },
        { problem: '3.78', answer: 171, procent: 25, type: 'Комбинации тел' },
        { problem: '3.79', answer: 5, procent: 60, type: 'Комбинации тел' },
        { problem: '3.80', answer: 1, procent: 45, type: 'Комбинации тел' },
        { problem: '3.81', answer: 32, procent: 45, type: 'Комбинации тел' },
        { problem: '3.82', answer: 90.5, procent: 80, type: 'Комбинации тел' },
        { problem: '3.83', answer: 24, procent: 25, type: 'Многогранник' },
        { problem: '3.84', answer: 3, procent: 30, type: 'Многогранник' },
        { problem: '3.85', answer: 80, procent: 70, type: 'Многогранник' },
        { problem: '3.86', answer: 1, procent: 50, type: 'Куб' },
        { problem: '3.87', answer: 2.5, procent: 40, type: 'Куб' },
        { problem: '3.88', answer: 90, procent: 60, type: 'Куб' },
        { problem: '3.89', answer: 45, procent: 60, type: 'Куб' },
        { problem: '3.90', answer: 60, procent: 60, type: 'Куб' },
        { problem: '3.91', answer: 90, procent: 60, type: 'Куб' },
        { problem: '3.92', answer: 18, procent: 45, type: 'Параллелепипед' },
        { problem: '3.93', answer: 0.6, procent: 65, type: 'Параллелепипед' },
        { problem: '3.94', answer: 110, procent: 40, type: 'Параллелепипед' },
        { problem: '3.95', answer: 667, procent: 80, type: 'Параллелепипед' },
        { problem: '3.96', answer: 60, procent: 40, type: 'Параллелепипед' },
        { problem: '3.97', answer: 24, procent: 45, type: 'Призма' },
        { problem: '3.98', answer: 4, procent: 50, type: 'Призма' },
        { problem: '3.99', answer: 60, procent: 100, type: 'Призма' },
        { problem: '3.100', answer: 45, procent: 60, type: 'Призма' },
        { problem: '3.101', answer: 20, procent: 55, type: 'Призма' },
        { problem: '3.102', answer: 13, procent: 55, type: 'Призма' },
        { problem: '3.103', answer: 86, procent: 35, type: 'Призма' },
        { problem: '3.104', answer: 12, procent: 35, type: 'Призма' },
        { problem: '3.105', answer: 60, procent: 70, type: 'Призма' },
        { problem: '3.106', answer: 12, procent: 65, type: 'Призма' },
        { problem: '3.107', answer: 28, procent: 65, type: 'Призма' },
        { problem: '3.108', answer: 5, procent: 70, type: 'Призма' },
        { problem: '3.109', answer: 180, procent: 50, type: 'Призма' },
        { problem: '3.110', answer: 5, procent: 35, type: 'Цилиндр' },
        { problem: '3.111', answer: 1.125, procent: 60, type: 'Комбинации тел' },
        { problem: '3.112', answer: 36, procent: 60, type: 'Комбинации тел' },
        { problem: '3.113', answer: 2, procent: 75, type: 'Цилиндр' },
        { problem: '3.114', answer: 72, procent: 75, type: 'Цилиндр' },
        { problem: '3.115', answer: 3, procent: 40, type: 'Цилиндр' },
        { problem: '3.116', answer: 375, procent: 50, type: 'Цилиндр' },
        { problem: '3.117', answer: 40, procent: 30, type: 'Конус' },
        { problem: '3.118', answer: 6, procent: 65, type: 'Конус' },
        { problem: '3.119', answer: 1680, procent: 65, type: 'Конус' },
        { problem: '3.120', answer: 14, procent: 30, type: 'Конус' },
        { problem: '3.121', answer: 25, procent: 45, type: 'Конус' },
        { problem: '3.122', answer: 1.5, procent: 40, type: 'Конус' },
        { problem: '3.123', answer: 2, procent: 90, type: 'Конус' },
        { problem: '3.124', answer: 13.5, procent: 100, type: 'Конус' },
        { problem: '3.125', answer: 2.4, procent: 95, type: 'Конус' },
        { problem: '3.126', answer: 63, procent: 90, type: 'Конус' },
        { problem: '3.127', answer: 3685, procent: 95, type: 'Конус' },
        { problem: '3.128', answer: 16, procent: 50, type: 'Параллелепипед' },
        { problem: '3.129', answer: 14, procent: 45, type: 'Призма' },
        { problem: '3.130', answer: 24, procent: 35, type: 'Призма' },
        { problem: '3.131', answer: 45, procent: 40, type: 'Параллелепипед' },
        { problem: '3.132', answer: 3, procent: 55, type: 'Пирамида' },
        { problem: '3.133', answer: 24, procent: 30, type: 'Пирамида' },
        { problem: '3.134', answer: 1200, procent: 80, type: 'Пирамида' },
        { problem: '3.135', answer: 6, procent: 55, type: 'Пирамида' },
        { problem: '3.136', answer: 4, procent: 95, type: 'Пирамида' },
        { problem: '3.137', answer: 32, procent: 70, type: 'Пирамида' },
        { problem: '3.138', answer: 9, procent: 30, type: 'Пирамида' },
        { problem: '3.139', answer: 3, procent: 55, type: 'Пирамида' },
        { problem: '3.140', answer: 8, procent: 60, type: 'Призма' },
        { problem: '3.141', answer: 10, procent: 90, type: 'Призма' },
        { problem: '3.142', answer: 10, procent: 45, type: 'Призма' },
        { problem: '3.143', answer: 3, procent: 50, type: 'Призма' },
        { problem: '3.144', answer: 16, procent: 40, type: 'Призма' },
        { problem: '3.145', answer: 6, procent: 50, type: 'Призма' },
        { problem: '3.146', answer: 7.5, procent: 95, type: 'Пирамида' },
        { problem: '3.147', answer: 10, procent: 45, type: 'Шар' },
        { problem: '3.148', answer: 64, procent: 35, type: 'Комбинации тел' },
        { problem: '3.149', answer: 512, procent: 50, type: 'Комбинации тел' },
        { problem: '3.150', answer: 49, procent: 40, type: 'Комбинации тел' },
        { problem: '3.151', answer: 10, procent: 55, type: 'Комбинации тел' },
        { problem: '3.152', answer: 8, procent: 35, type: 'Комбинации тел' },
        { problem: '3.153', answer: 42, procent: 75, type: 'Комбинации тел' },
        { problem: '3.154', answer: 29791, procent: 65, type: 'Комбинации тел' },
        { problem: '3.155', answer: 27, procent: 40, type: 'Комбинации тел' },
        { problem: '3.156', answer: 31.5, procent: 50, type: 'Комбинации тел' },
        { problem: '3.157', answer: 102, procent: 65, type: 'Комбинации тел' },
        { problem: '3.158', answer: 11, procent: 60, type: 'Комбинации тел' },
        { problem: '3.159', answer: 156, procent: 35, type: 'Комбинации тел' },
        { problem: '3.160', answer: 6, procent: 25, type: 'Комбинации тел' },
        { problem: '3.161', answer: 6, procent: 60, type: 'Комбинации тел' },
        { problem: '3.162', answer: 0.25, procent: 45, type: 'Комбинации тел' },
        { problem: '3.163', answer: 4, procent: 45, type: 'Комбинации тел' },
        { problem: '3.164', answer: 125, procent: 80, type: 'Комбинации тел' },
        { problem: '3.165', answer: 27, procent: 65, type: 'Комбинации тел' },
        { problem: '3.166', answer: 13, procent: 50, type: 'Призма' },
        { problem: '3.167', answer: 20, procent: 65, type: 'Комбинации тел' },
        { problem: '3.168', answer: 35, procent: 50, type: 'Параллелепипед' },
        { problem: '3.169', answer: 24, procent: 65, type: 'Комбинации тел' },
        { problem: '3.170', answer: 72, procent: 35, type: 'Призма' },




        { problem: '4.1', answer: 0.8, procent: 20, type: 'Классическая вероятность' },
        { problem: '4.2', answer: 0.74, procent: 30, type: 'Классическая вероятность' },
        { problem: '4.3', answer: 0.2, procent: 35, type: 'Классическая вероятность' },
        { problem: '4.4', answer: 0.16, procent: 45, type: 'Классическая вероятность' },
        { problem: '4.5', answer: 0.4, procent: 50, type: 'Классическая вероятность' },
        { problem: '4.6', answer: 0.25, procent: 35, type: 'Классическая вероятность' },
        { problem: '4.7', answer: 0.97, procent: 55, type: 'Классическая вероятность' },
        { problem: '4.8', answer: 0.55, procent: 30, type: 'Классическая вероятность' },
        { problem: '4.9', answer: 0.3, procent: 75, type: 'Классическая вероятность' },
        { problem: '4.10', answer: 0.35, procent: 75, type: 'Классическая вероятность' },
        { problem: '4.11', answer: 0.2, procent: 65, type: 'Классическая вероятность' },
        { problem: '4.12', answer: 0.92, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.13', answer: 0.88, procent: 70, type: 'Округление вероятности' },
        { problem: '4.14', answer: 0.97, procent: 90, type: 'Округление вероятности' },
        { problem: '4.15', answer: 0.6, procent: 25, type: 'Классическая вероятность' },
        { problem: '4.16', answer: 0.75, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.17', answer: 0.05, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.18', answer: 0.08, procent: 95, type: 'Классическая вероятность' },
        { problem: '4.19', answer: 0.5, procent: 65, type: 'Классическая вероятность' },
        { problem: '4.20', answer: 0.4, procent: 20, type: 'Классическая вероятность' },
        { problem: '4.21', answer: 0.65, procent: 30, type: 'Классическая вероятность' },
        { problem: '4.22', answer: 0.25, procent: 35, type: 'Классическая вероятность' },
        { problem: '4.23', answer: 0.4, procent: 45, type: 'Классическая вероятность' },
        { problem: '4.24', answer: 0.25, procent: 50, type: 'Классическая вероятность' },
        { problem: '4.25', answer: 0.25, procent: 35, type: 'Классическая вероятность' },
        { problem: '4.26', answer: 0.996, procent: 55, type: 'Классическая вероятность' },
        { problem: '4.27', answer: 0.46, procent: 30, type: 'Классическая вероятность' },
        { problem: '4.28', answer: 0.4, procent: 75, type: 'Классическая вероятность' },
        { problem: '4.29', answer: 0.2, procent: 75, type: 'Классическая вероятность' },
        { problem: '4.30', answer: 0.25, procent: 65, type: 'Классическая вероятность' },
        { problem: '4.31', answer: 0.86, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.32', answer: 0.89, procent: 70, type: 'Округление вероятности' },
        { problem: '4.33', answer: 0.98, procent: 90, type: 'Округление вероятности' },
        { problem: '4.34', answer: 0.5, procent: 25, type: 'Классическая вероятность' },
        { problem: '4.35', answer: 0.25, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.36', answer: 0.2, procent: 40, type: 'Классическая вероятность' },
        { problem: '4.37', answer: 0.2, procent: 95, type: 'Классическая вероятность' },
        { problem: '4.38', answer: 0.25, procent: 65, type: 'Классическая вероятность' },
        { problem: '4.39', answer: 0.125, procent: 70, type: 'Классическая вероятность' },
        { problem: '4.40', answer: 0.75, procent: 45, type: 'Классическая вероятность' },
        { problem: '4.41', answer: 0.994, procent: 75, type: 'Классическая вероятность' },
        { problem: '4.42', answer: 0.55, procent: 65, type: 'Сложение, умножение вероятностей' },
        { problem: '4.43', answer: 0.11, procent: 65, type: 'Сложение, умножение вероятностей' },
        { problem: '4.44', answer: 0.35, procent: 65, type: 'Сложение, умножение вероятностей' },
        { problem: '4.45', answer: 0.07, procent: 65, type: 'Сложение, умножение вероятностей' },





        { problem: '5.1', answer: 0.1, procent: 45, type: 'Классическая вероятность' },

        { problem: '5.2', answer: 0.96, procent: 75, type: 'Классическая вероятность' },

        { problem: '5.3', answer: 0.1024, procent: 55, type: 'Сложение, умножение вероятностей' },

        { problem: '5.4', answer: 0.16, procent: 30, type: 'Сложение, умножение вероятностей' },

        { problem: '5.5', answer: 0.027, procent: 35, type: 'Сложение, умножение вероятностей' },

        { problem: '5.6', answer: 0.9216, procent: 40, type: 'Сложение, умножение вероятностей' },

        { problem: '5.7', answer: 0.0042, procent: 75, type: 'Сложение, умножение вероятностей' },

        { problem: '5.8', answer: 0.04, procent: 45, type: 'Сложение, умножение вероятностей' },

        { problem: '5.9', answer: 0.0009, procent: 50, type: 'Сложение, умножение вероятностей' },

        { problem: '5.10', answer: 0.9975, procent: 65, type: 'Сложение, умножение вероятностей' },

        { problem: '5.11', answer: 0.488, procent: 55, type: 'Сложение, умножение вероятностей' },

        { problem: '5.12', answer: 0.33, procent: 70, type: 'Сложение, умножение вероятностей' },

        { problem: '5.13', answer: 0.039, procent: 70, type: 'Сложение, умножение вероятностей' },

        { problem: '5.14', answer: 0.78, procent: 80, type: 'Полная вероятность' },

        { problem: '5.15', answer: 0.025, procent: 50, type: 'Сложение, умножение вероятностей' },

        { problem: '5.16', answer: 0.069, procent: 65, type: 'Сложение, умножение вероятностей' },

        { problem: '5.17', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей' },

        { problem: '5.18', answer: 2, procent: 55, type: 'Сложение, умножение вероятностей' },

        { problem: '5.19', answer: 0.125, procent: 35, type: 'Классическая вероятность' },

        { problem: '5.20', answer: 0.125, procent: 35, type: 'Классическая вероятность' },

        { problem: '5.21', answer: 0.2, procent: 45, type: 'Условная вероятность' },

        { problem: '5.22', answer: 0.5, procent: 55, type: 'Условная вероятность' },

        { problem: '5.23', answer: 0.12, procent: 65, type: 'Условная вероятность' },

        { problem: '5.24', answer: 0.6, procent: 60, type: 'Условная вероятность' },

        { problem: '5.25', answer: 0.83, procent: 90, type: 'Полная вероятность' },

        { problem: '5.26', answer: 0.22, procent: 40, type: 'Предметы из ящика' },

        { problem: '5.27', answer: 0.05, procent: 45, type: 'Классическая вероятность' },

        { problem: '5.28', answer: 0.96, procent: 75, type: 'Классическая вероятность' },

        { problem: '5.29', answer: 0.0009, procent: 75, type: 'Сложение, умножение вероятностей' },

        { problem: '5.30', answer: 0.27, procent: 30, type: 'Сложение, умножение вероятностей' },

        { problem: '5.31', answer: 0.008, procent: 35, type: 'Сложение, умножение вероятностей' },

        { problem: '5.32', answer: 0.9604, procent: 40, type: 'Сложение, умножение вероятностей' },

        { problem: '5.33', answer: 0.0104, procent: 35, type: 'Сложение, умножение вероятностей' },

        { problem: '5.34', answer: 0.07, procent: 45, type: 'Сложение, умножение вероятностей' },

        { problem: '5.35', answer: 0.0064, procent: 50, type: 'Сложение, умножение вероятностей' },

        { problem: '5.36', answer: 0.9856, procent: 65, type: 'Сложение, умножение вероятностей' },

        { problem: '5.37', answer: 0.271, procent: 55, type: 'Сложение, умножение вероятностей' },

        { problem: '5.38', answer: 0.28, procent: 70, type: 'Сложение, умножение вероятностей' },

        { problem: '5.39', answer: 0.936, procent: 60, type: 'Сложение, умножение вероятностей' },

        { problem: '5.40', answer: 0.81, procent: 80, type: 'Полная вероятность' },

        { problem: '5.41', answer: 0.016, procent: 40, type: 'Сложение, умножение вероятностей' },

        { problem: '5.42', answer: 0.059, procent: 60, type: 'Сложение, умножение вероятностей' },

        { problem: '5.43', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей' },

        { problem: '5.44', answer: 3, procent: 55, type: 'Сложение, умножение вероятностей' },

        { problem: '5.45', answer: 0.125, procent: 35, type: 'Классическая вероятность' },

        { problem: '5.46', answer: 0.5, procent: 35, type: 'Классическая вероятность' },

        { problem: '5.47', answer: 0.2, procent: 45, type: 'Условная вероятность' },

        { problem: '5.48', answer: 0.5, procent: 50, type: 'Условная вероятность' },

        { problem: '5.49', answer: 0.08, procent: 65, type: 'Условная вероятность' },

        { problem: '5.50', answer: 0.36, procent: 80, type: 'Сложение, умножение вероятностей' },

        { problem: '5.51', answer: 0.85, procent: 90, type: 'Полная вероятность' },

        { problem: '5.52', answer: 0.24, procent: 40, type: 'Предметы из ящика' },








        { problem: '6.1', answer: -17, procent: 15, type: 'Линейные уравнения' },

        { problem: '6.2', answer: 2, procent: 40, type: 'Степенные уравнения' },

        { problem: '6.3', answer: 9, procent: 30, type: 'Степенные уравнения' },

        { problem: '6.4', answer: -1, procent: 20, type: 'Степенные уравнения' },

        { problem: '6.5', answer: 0.4, procent: 45, type: 'Линейные уравнения' },

        { problem: '6.6', answer: 12, procent: 30, type: 'Иррациональные уравнения' },

        { problem: '6.7', answer: 122, procent: 35, type: 'Иррациональные уравнения' },

        { problem: '6.8', answer: 8, procent: 90, type: 'Иррациональные уравнения' },

        { problem: '6.9', answer: -25, procent: 20, type: 'Логарифмические уравнения' },

        { problem: '6.10', answer: -1, procent: 45, type: 'Логарифмические уравнения' },

        { problem: '6.11', answer: 2, procent: 25, type: 'Логарифмические уравнения' },

        { problem: '6.12', answer: -42, procent: 50, type: 'Логарифмические уравнения' },

        { problem: '6.13', answer: 0.2, procent: 60, type: 'Логарифмические уравнения' },

        { problem: '6.14', answer: 10, procent: 80, type: 'Логарифмические уравнения' },

        { problem: '6.15', answer: -9, procent: 40, type: 'Показательные уравнения' },

        { problem: '6.16', answer: 6, procent: 50, type: 'Показательные уравнения' },

        { problem: '6.17', answer: 4.5, procent: 40, type: 'Показательные уравнения' },

        { problem: '6.18', answer: 1.5, procent: 55, type: 'Показательные уравнения' },

        { problem: '6.19', answer: 20, procent: 70, type: 'Логарифмические уравнения' },

        { problem: '6.20', answer: 5, procent: 75, type: 'Логарифмические уравнения' },

        { problem: '6.21', answer: -18, procent: 15, type: 'Линейные уравнения' },

        { problem: '6.22', answer: 1, procent: 40, type: 'Степенные уравнения' },

        { problem: '6.23', answer: 12, procent: 30, type: 'Степенные уравнения' },

        { problem: '6.24', answer: -9, procent: 20, type: 'Степенные уравнения' },

        { problem: '6.25', answer: -9, procent: 45, type: 'Линейные уравнения' },

        { problem: '6.26', answer: 25, procent: 40, type: 'Иррациональные уравнения' },

        { problem: '6.27', answer: 67, procent: 35, type: 'Иррациональные уравнения' },

        { problem: '6.28', answer: 6, procent: 95, type: 'Иррациональные уравнения' },

        { problem: '6.29', answer: -9, procent: 95, type: 'Иррациональные уравнения' },

        { problem: '6.30', answer: 12, procent: 20, type: 'Логарифмические уравнения' },

        { problem: '6.31', answer: -9.5, procent: 45, type: 'Логарифмические уравнения' },

        { problem: '6.32', answer: -96, procent: 50, type: 'Логарифмические уравнения' },

        { problem: '6.33', answer: 3, procent: 45, type: 'Логарифмические уравнения' },

        { problem: '6.34', answer: -14, procent: 65, type: 'Логарифмические уравнения' },

        { problem: '6.35', answer: 7, procent: 80, type: 'Логарифмические уравнения' },

        { problem: '6.36', answer: 6, procent: 50, type: 'Логарифмические уравнения' },

        { problem: '6.37', answer: 1, procent: 40, type: 'Показательные уравнения' },

        { problem: '6.38', answer: -1, procent: 55, type: 'Показательные уравнения' },

        { problem: '6.39', answer: 1.5, procent: 50, type: 'Показательные уравнения' },

        { problem: '6.40', answer: 0.4, procent: 45, type: 'Показательные уравнения' },

        { problem: '6.41', answer: -508, procent: 45, type: 'Логарифмические уравнения' },

        { problem: '6.42', answer: -1, procent: 30, type: 'Степенные уравнения' },

        { problem: '6.43', answer: 7, procent: 25, type: 'Логарифмические уравнения' },

        { problem: '6.44', answer: 8, procent: 25, type: 'Показательные уравнения' },

        { problem: '6.45', answer: -6, procent: 25, type: 'Показательные уравнения' },

        { problem: '6.46', answer: -40, procent: 40, type: 'Логарифмические уравнения' },

        { problem: '6.47', answer: -5, procent: 35, type: 'Логарифмические уравнения' },

        { problem: '6.48', answer: 4, procent: 25, type: 'Иррациональные уравнения' },

        { problem: '6.49', answer: -1, procent: 35, type: 'Линейные уравнения' },

        { problem: '6.50', answer: -3.4, procent: 55, type: 'Линейные уравнения' },

        { problem: '6.51', answer: 4, procent: 35, type: 'Иррациональные уравнения' },

        { problem: '6.52', answer: 11, procent: 25, type: 'Степенные уравнения' },

        { problem: '6.53', answer: 1, procent: 25, type: 'Иррациональные уравнения' },

        { problem: '6.54', answer: 58, procent: 45, type: 'Иррациональные уравнения' },

        { problem: '6.55', answer: 8, procent: 10, type: 'Логарифмические уравнения' },

        { problem: '6.56', answer: 7, procent: 25, type: 'Иррациональные уравнения' },

        { problem: '6.57', answer: 1.4, procent: 60, type: 'Степенные уравнения' },

        //{problem: '5.58', answer: 68, procent: 60, type: 'Логарифмические уравнения'},



        { problem: '7.1', answer: 25, procent: 20, type: 'Степени' },

        { problem: '7.2', answer: 16, procent: 35, type: 'Степени' },

        { problem: '7.3', answer: 27, procent: 60, type: 'Степени' },

        { problem: '7.4', answer: 4, procent: 55, type: 'Степени' },

        { problem: '7.5', answer: 243, procent: 50, type: 'Степени' },

        { problem: '7.6', answer: 7, procent: 75, type: 'Степени' },

        { problem: '7.7', answer: 1.5, procent: 60, type: 'Степени' },

        { problem: '7.8', answer: 0.8, procent: 80, type: 'Степени' },

        { problem: '7.9', answer: 12, procent: 80, type: 'Степени' },

        { problem: '7.10', answer: -18, procent: 35, type: 'Корни' },

        { problem: '7.11', answer: 2, procent: 15, type: 'Корни' },

        { problem: '7.12', answer: 2, procent: 40, type: 'Корни' },

        { problem: '7.13', answer: 0.2, procent: 50, type: 'Корни' },

        { problem: '7.14', answer: 690, procent: 45, type: 'Корни' },

        { problem: '7.15', answer: 5, procent: 55, type: 'Корни' },

        { problem: '7.16', answer: 2, procent: 45, type: 'Корни' },

        { problem: '7.17', answer: -3, procent: 40, type: 'Тригонометрия' },

        { problem: '7.18', answer: 21, procent: 60, type: 'Тригонометрия' },

        { problem: '7.19', answer: -12, procent: 40, type: 'Тригонометрия' },

        { problem: '7.20', answer: -0.7, procent: 70, type: 'Тригонометрия' },

        { problem: '7.21', answer: 0.8, procent: 70, type: 'Тригонометрия' },

        { problem: '7.22', answer: 8, procent: 50, type: 'Тригонометрия' },

        { problem: '7.23', answer: -21, procent: 85, type: 'Тригонометрия' },

        { problem: '7.24', answer: -8, procent: 60, type: 'Тригонометрия' },

        { problem: '7.25', answer: 3, procent: 70, type: 'Тригонометрия' },

        { problem: '7.26', answer: 4.5, procent: 70, type: 'Тригонометрия' },

        { problem: '7.27', answer: 1, procent: 70, type: 'Тригонометрия' },

        { problem: '7.28', answer: -3.5, procent: 75, type: 'Тригонометрия' },

        { problem: '7.29', answer: -0.5, procent: 70, type: 'Тригонометрия' },

        { problem: '7.30', answer: -6, procent: 25, type: 'Тригонометрия' },

        { problem: '7.31', answer: 59, procent: 35, type: 'Тригонометрия' },

        { problem: '7.32', answer: -13, procent: 40, type: 'Тригонометрия' },

        { problem: '7.33', answer: 14, procent: 45, type: 'Тригонометрия' },

        { problem: '7.34', answer: 4.8, procent: 60, type: 'Тригонометрия' },

        { problem: '7.35', answer: 2, procent: 30, type: 'Логарифмы' },

        { problem: '7.36', answer: 6, procent: 40, type: 'Логарифмы' },

        { problem: '7.37', answer: 3, procent: 55, type: 'Логарифмы' },

        { problem: '7.38', answer: 2, procent: 60, type: 'Логарифмы' },

        { problem: '7.39', answer: 0, procent: 65, type: 'Логарифмы' },

        { problem: '7.40', answer: 6, procent: 30, type: 'Логарифмы' },

        { problem: '7.41', answer: 2, procent: 70, type: 'Логарифмы' },

        { problem: '7.42', answer: 2, procent: 45, type: 'Логарифмы' },

        { problem: '7.43', answer: -0.5, procent: 60, type: 'Логарифмы' },

        { problem: '7.44', answer: -4, procent: 75, type: 'Логарифмы' },

        { problem: '7.45', answer: 64, procent: 20, type: 'Степени' },

        { problem: '7.46', answer: 25, procent: 35, type: 'Степени' },

        { problem: '7.47', answer: 128, procent: 60, type: 'Степени' },

        { problem: '7.48', answer: 1, procent: 55, type: 'Степени' },

        { problem: '7.49', answer: 59049, procent: 70, type: 'Степени' },

        { problem: '7.50', answer: 121, procent: 75, type: 'Степени' },

        { problem: '7.51', answer: 24.5, procent: 60, type: 'Степени' },

        { problem: '7.52', answer: 0.75, procent: 80, type: 'Степени' },

        { problem: '7.53', answer: 20, procent: 80, type: 'Степени' },

        { problem: '7.54', answer: 7, procent: 35, type: 'Корни' },

        { problem: '7.55', answer: 2.4, procent: 15, type: 'Корни' },

        { problem: '7.56', answer: 7, procent: 40, type: 'Корни' },

        { problem: '7.57', answer: 2, procent: 50, type: 'Корни' },

        { problem: '7.58', answer: 352, procent: 45, type: 'Корни' },

        { problem: '7.59', answer: 6, procent: 55, type: 'Корни' },

        { problem: '7.60', answer: 5, procent: 45, type: 'Корни' },

        { problem: '7.61', answer: -3.5, procent: 40, type: 'Корни' },

        { problem: '7.62', answer: 2, procent: 60, type: 'Тригонометрия' },

        { problem: '7.63', answer: -6, procent: 40, type: 'Тригонометрия' },

        { problem: '7.64', answer: 0.9, procent: 70, type: 'Тригонометрия' },

        { problem: '7.65', answer: -0.4, procent: 70, type: 'Тригонометрия' },

        { problem: '7.66', answer: 6, procent: 50, type: 'Тригонометрия' },

        { problem: '7.67', answer: -28, procent: 85, type: 'Тригонометрия' },

        { problem: '7.68', answer: 2, procent: 60, type: 'Тригонометрия' },

        { problem: '7.69', answer: 6, procent: 70, type: 'Тригонометрия' },

        { problem: '7.70', answer: 1.5, procent: 70, type: 'Тригонометрия' },

        { problem: '7.71', answer: 4, procent: 70, type: 'Тригонометрия' },

        { problem: '7.72', answer: -2.5, procent: 75, type: 'Тригонометрия' },

        { problem: '7.73', answer: -0.5, procent: 70, type: 'Тригонометрия' },

        { problem: '7.74', answer: 14, procent: 25, type: 'Тригонометрия' },

        { problem: '7.75', answer: 4, procent: 35, type: 'Тригонометрия' },

        { problem: '7.76', answer: -36, procent: 40, type: 'Тригонометрия' },

        { problem: '7.77', answer: 26, procent: 45, type: 'Тригонометрия' },

        { problem: '7.78', answer: 9.5, procent: 60, type: 'Тригонометрия' },

        { problem: '7.79', answer: 3, procent: 30, type: 'Логарифмы' },

        { problem: '7.80', answer: 2, procent: 40, type: 'Логарифмы' },

        { problem: '7.81', answer: 2, procent: 55, type: 'Логарифмы' },

        { problem: '7.82', answer: 2, procent: 60, type: 'Логарифмы' },

        { problem: '7.83', answer: 1, procent: 65, type: 'Логарифмы' },

        { problem: '7.84', answer: 4, procent: 30, type: 'Логарифмы' },

        { problem: '7.85', answer: 3, procent: 70, type: 'Логарифмы' },

        { problem: '7.86', answer: 13, procent: 45, type: 'Логарифмы' },

        { problem: '7.87', answer: -0.5, procent: 60, type: 'Логарифмы' },

        { problem: '7.88', answer: -3, procent: 75, type: 'Логарифмы' },

        { problem: '7.89', answer: 4, procent: 70, type: 'Тригонометрия' },

        { problem: '7.90', answer: 28, procent: 75, type: 'Степени' },




        { problem: '8.1', answer: 4, procent: 45, type: 'График функции' },

        { problem: '8.2', answer: 4, procent: 45, type: 'График функции' },

        { problem: '8.3', answer: 9, procent: 60, type: 'График функции' },

        { problem: '8.4', answer: 2, procent: 50, type: 'График функции' },

        { problem: '8.5', answer: 4, procent: 50, type: 'График функции' },

        { problem: '8.6', answer: 8, procent: 80, type: 'График функции' },

        { problem: '8.7', answer: 3, procent: 40, type: 'График производной' },

        { problem: '8.8', answer: 5, procent: 40, type: 'График производной' },

        { problem: '8.9', answer: 4, procent: 75, type: 'График производной' },

        { problem: '8.10', answer: -2, procent: 50, type: 'График производной' },

        { problem: '8.11', answer: 7, procent: 60, type: 'График производной' },

        { problem: '8.12', answer: 4, procent: 60, type: 'График производной' },

        { problem: '8.13', answer: 1, procent: 80, type: 'График производной' },

        { problem: '8.14', answer: 1, procent: 80, type: 'График производной' },

        { problem: '8.15', answer: 3, procent: 60, type: 'Эскиз функции' },

        { problem: '8.16', answer: -5, procent: 60, type: 'Эскиз функции' },

        { problem: '8.17', answer: -4, procent: 60, type: 'Эскиз функции' },

        { problem: '8.18', answer: 2, procent: 60, type: 'Эскиз функции' },

        { problem: '8.19', answer: 3, procent: 35, type: 'Геометрический смысл производной' },

        { problem: '8.20', answer: 0.25, procent: 35, type: 'Геометрический смысл производной' },

        { problem: '8.21', answer: -1.25, procent: 40, type: 'Геометрический смысл производной' },

        { problem: '8.22', answer: -0.25, procent: 40, type: 'Геометрический смысл производной' },

        { problem: '8.23', answer: 6, procent: 60, type: 'Физический смысл производной' },

        { problem: '8.24', answer: 18, procent: 65, type: 'Физический смысл производной' },

        { problem: '8.25', answer: -1, procent: 75, type: 'Сравнение значений тангенсов' },

        { problem: '8.26', answer: -1, procent: 75, type: 'Сравнение значений тангенсов' },

        { problem: '8.27', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает' },

        { problem: '8.28', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает' },

        { problem: '8.29', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает' },

        { problem: '8.30', answer: 3, procent: 80, type: 'Касательная параллельна или совпадает' },

        { problem: '8.31', answer: 20, procent: 80, type: 'Условие касания' },

        { problem: '8.32', answer: 7, procent: 85, type: 'Первообразная' },

        { problem: '8.33', answer: 3, procent: 85, type: 'Первообразная' },

        { problem: '8.34', answer: 3, procent: 85, type: 'Первообразная' },

        { problem: '8.35', answer: 20, procent: 80, type: 'Первообразная' },

        { problem: '8.36', answer: 6, procent: 100, type: 'Первообразная' },

        { problem: '8.37', answer: 6, procent: 100, type: 'Первообразная' },

        { problem: '8.38', answer: 3, procent: 45, type: 'График функции' },

        { problem: '8.39', answer: 3, procent: 45, type: 'График функции' },

        { problem: '8.40', answer: 6, procent: 60, type: 'График функции' },

        { problem: '8.41', answer: -4, procent: 50, type: 'График функции' },

        { problem: '8.42', answer: 4, procent: 50, type: 'График функции' },

        { problem: '8.43', answer: 5, procent: 80, type: 'График функции' },

        { problem: '8.44', answer: 4, procent: 40, type: 'График производной' },

        { problem: '8.45', answer: 9, procent: 40, type: 'График производной' },

        { problem: '8.46', answer: 3, procent: 75, type: 'График производной' },

        { problem: '8.47', answer: 4, procent: 50, type: 'График производной' },

        { problem: '8.48', answer: -1, procent: 60, type: 'График производной' },

        { problem: '8.49', answer: 9, procent: 60, type: 'График производной' },

        { problem: '8.50', answer: 3, procent: 80, type: 'График производной' },

        { problem: '8.51', answer: 4, procent: 80, type: 'График производной' },

        { problem: '8.52', answer: -1, procent: 60, type: 'Эскиз функции' },

        { problem: '8.53', answer: -7, procent: 60, type: 'Эскиз функции' },

        { problem: '8.54', answer: 3, procent: 60, type: 'Эскиз функции' },

        { problem: '8.55', answer: -2, procent: 60, type: 'Эскиз функции' },

        { problem: '8.56', answer: 0.6, procent: 35, type: 'Геометрический смысл производной' },

        { problem: '8.57', answer: 0.4, procent: 35, type: 'Геометрический смысл производной' },

        { problem: '8.58', answer: -0.2, procent: 40, type: 'Геометрический смысл производной' },

        { problem: '8.59', answer: -0.25, procent: 40, type: 'Геометрический смысл производной' },

        { problem: '8.60', answer: 6, procent: 60, type: 'Физический смысл производной' },

        { problem: '8.61', answer: 8, procent: 65, type: 'Физический смысл производной' },

        { problem: '8.62', answer: 2, procent: 75, type: 'Сравнение значений тангенсов' },

        { problem: '8.63', answer: 1, procent: 75, type: 'Сравнение значений тангенсов' },

        { problem: '8.64', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает' },

        { problem: '8.65', answer: 0, procent: 85, type: 'Касательная параллельна или совпадает' },

        { problem: '8.66', answer: 2, procent: 85, type: 'Касательная параллельна или совпадает' },

        { problem: '8.67', answer: -3, procent: 80, type: 'Касательная параллельна или совпадает' },

        { problem: '8.68', answer: 17, procent: 80, type: 'Условие касания' },

        { problem: '8.69', answer: 4, procent: 85, type: 'Первообразная' },

        { problem: '8.70', answer: 5, procent: 85, type: 'Первообразная' },

        { problem: '8.71', answer: 4, procent: 85, type: 'Первообразная' },

        { problem: '8.72', answer: 24, procent: 80, type: 'Первообразная' },

        { problem: '8.73', answer: 6.75, procent: 100, type: 'Первообразная' },

        { problem: '8.74', answer: 4.95, procent: 100, type: 'Первообразная' },

        { problem: '8.75', answer: -0.4, procent: 45, type: 'Геометрический смысл производной' },

        { problem: '8.76', answer: 5, procent: 60, type: 'График функции' },



        { problem: '9.1', answer: 25, procent: 40, type: 'Квадратичная формула' },

        { problem: '9.2', answer: 6, procent: 80, type: 'Квадратичная формула' },

        { problem: '9.3', answer: 4.27, procent: 75, type: 'Квадратичная формула' },

        { problem: '9.4', answer: 48, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.5', answer: 1.4, procent: 55, type: 'Квадратичная формула' },

        { problem: '9.6', answer: 6, procent: 90, type: 'Квадратичная формула' },

        { problem: '9.7', answer: 5, procent: 85, type: 'Квадратичная формула' },

        { problem: '9.8', answer: 17, procent: 25, type: 'Рациональная формула' },

        { problem: '9.9', answer: 4, procent: 35, type: 'Рациональная формула' },

        { problem: '9.10', answer: 88, procent: 20, type: 'Рациональная формула' },

        { problem: '9.11', answer: 340, procent: 45, type: 'Рациональная формула' },

        { problem: '9.12', answer: 312, procent: 50, type: 'Рациональная формула' },

        { problem: '9.13', answer: 506, procent: 60, type: 'Рациональная формула' },

        { problem: '9.14', answer: 220.5, procent: 65, type: 'Рациональная формула' },

        { problem: '9.15', answer: 12, procent: 35, type: 'Рациональная формула' },

        { problem: '9.16', answer: 12, procent: 90, type: 'Рациональная формула' },

        { problem: '9.17', answer: 5500, procent: 40, type: 'Иррациональная формула' },

        { problem: '9.18', answer: 0.72, procent: 45, type: 'Иррациональная формула' },

        { problem: '9.19', answer: 320, procent: 60, type: 'Иррациональная формула' },

        { problem: '9.20', answer: 15, procent: 55, type: 'Показательная формула' },

        { problem: '9.21', answer: 8, procent: 95, type: 'Показательная формула' },

        { problem: '9.22', answer: 9.2, procent: 100, type: 'Показательная формула' },

        { problem: '9.23', answer: 7, procent: 60, type: 'Логарифмическая формула' },

        { problem: '9.24', answer: 33, procent: 65, type: 'Логарифмическая формула' },

        { problem: '9.25', answer: 8.5, procent: 85, type: 'Логарифмическая формула' },

        { problem: '9.26', answer: 30, procent: 60, type: 'Тригонометрическая формула' },

        { problem: '9.27', answer: 60, procent: 70, type: 'Тригонометрическая формула' },

        { problem: '9.28', answer: 60, procent: 70, type: 'Тригонометрическая формула' },

        { problem: '9.29', answer: 42, procent: 65, type: 'Рациональная формула' },

        { problem: '9.30', answer: 8, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.31', answer: 14, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.32', answer: 0.18, procent: 85, type: 'Тригонометрическая формула' },

        { problem: '9.33', answer: 24, procent: 90, type: 'Рациональная формула' },

        { problem: '9.34', answer: 6000, procent: 90, type: 'Показательная формула' },

        { problem: '9.35', answer: 0.79, procent: 80, type: 'Рациональная формула' },

        { problem: '9.36', answer: 0.265, procent: 70, type: 'Рациональная формула' },

        { problem: '9.37', answer: 30, procent: 40, type: 'Квадратичная формула' },

        { problem: '9.38', answer: 20, procent: 80, type: 'Квадратичная формула' },

        { problem: '9.39', answer: 3.79, procent: 75, type: 'Квадратичная формула' },

        { problem: '9.40', answer: 42, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.41', answer: 0.4, procent: 55, type: 'Квадратичная формула' },

        { problem: '9.42', answer: 1, procent: 95, type: 'Квадратичная формула' },
        { problem: '9.43', answer: 4, procent: 95, type: 'Квадратичная формула' },

        { problem: '9.44', answer: 9, procent: 40, type: 'Рациональная формула' },
        { problem: '9.45', answer: 2.8, procent: 40, type: 'Рациональная формула' },
        { problem: '9.46', answer: 27.5, procent: 20, type: 'Рациональная формула' },
        

        { problem: '9.47', answer: 260, procent: 45, type: 'Рациональная формула' },

        { problem: '9.48', answer: 319, procent: 50, type: 'Рациональная формула' },

        { problem: '9.49', answer: 753, procent: 60, type: 'Рациональная формула' },

        { problem: '9.50', answer: 253, procent: 65, type: 'Рациональная формула' },

        { problem: '9.51', answer: 45, procent: 35, type: 'Рациональная формула' },

        { problem: '9.52', answer: 3.5, procent: 90, type: 'Рациональная формула' },

        { problem: '9.53', answer: 0.9, procent: 40, type: 'Иррациональная формула' },

        { problem: '9.54', answer: 0.98, procent: 45, type: 'Иррациональная формула' },

        { problem: '9.55', answer: 20, procent: 60, type: 'Иррациональная формула' },

        { problem: '9.56', answer: 10, procent: 55, type: 'Показательная формула' },

        { problem: '9.57', answer: 125, procent: 95, type: 'Показательная формула' },

        { problem: '9.58', answer: 9.9, procent: 100, type: 'Показательная формула' },

        { problem: '9.59', answer: 2.5, procent: 60, type: 'Логарифмическая формула' },

        { problem: '9.60', answer: 33, procent: 65, type: 'Логарифмическая формула' },

        { problem: '9.61', answer: 5.5, procent: 85, type: 'Логарифмическая формула' },

        { problem: '9.62', answer: 90, procent: 60, type: 'Тригонометрическая формула' },

        { problem: '9.63', answer: 90, procent: 70, type: 'Тригонометрическая формула' },

        { problem: '9.64', answer: 60, procent: 70, type: 'Тригонометрическая формула' },

        { problem: '9.65', answer: 2.1, procent: 65, type: 'Рациональная формула' },

        { problem: '9.66', answer: 10, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.67', answer: 12, procent: 50, type: 'Квадратичная формула' },

        { problem: '9.68', answer: 0.38, procent: 85, type: 'Тригонометрическая формула' },

        { problem: '9.69', answer: 105, procent: 90, type: 'Рациональная формула' },

        { problem: '9.70', answer: 5000, procent: 90, type: 'Показательная формула' },

        { problem: '9.71', answer: 0.47, procent: 80, type: 'Рациональная формула' },

        { problem: '9.72', answer: 0.445, procent: 70, type: 'Рациональная формула' },

        { problem: '9.73', answer: 90, procent: 75, type: 'Тригонометрическая формула' },

        { problem: '9.74', answer: 11.2, procent: 50, type: 'Логарифмическая формула' },



        { problem: '10.1', answer: 14, procent: 20, type: 'Движение по прямой' },

        { problem: '10.2', answer: 10, procent: 20, type: 'Движение по прямой' },

        { problem: '10.3', answer: 11, procent: 35, type: 'Движение по прямой' },

        { problem: '10.4', answer: 17, procent: 35, type: 'Движение по прямой' },

        { problem: '10.5', answer: 10, procent: 45, type: 'Движение по прямой' },

        { problem: '10.6', answer: 5, procent: 50, type: 'Движение по прямой' },

        { problem: '10.7', answer: 15, procent: 55, type: 'Движение по прямой' },

        { problem: '10.8', answer: 50, procent: 45, type: 'Движение по прямой' },

        { problem: '10.9', answer: 1, procent: 65, type: 'Движение по прямой' },

        { problem: '10.10', answer: 240, procent: 95, type: 'Движение по воде' },

        { problem: '10.11', answer: 14, procent: 40, type: 'Движение по воде' },

        { problem: '10.12', answer: 2, procent: 35, type: 'Движение по воде' },

        { problem: '10.13', answer: 9, procent: 45, type: 'Движение по воде' },

        { problem: '10.14', answer: 2, procent: 40, type: 'Движение по воде' },

        { problem: '10.15', answer: 3, procent: 55, type: 'Движение по воде' },

        { problem: '10.16', answer: 20, procent: 55, type: 'Движение по воде' },

        { problem: '10.17', answer: 756, procent: 80, type: 'Движение по воде' },

        { problem: '10.18', answer: 7, procent: 65, type: 'Движение по воде' },

        { problem: '10.19', answer: 20, procent: 70, type: 'Движение по воде' },

        { problem: '10.20', answer: 55, procent: 50, type: 'Движение по прямой' },

        { problem: '10.21', answer: 90, procent: 50, type: 'Движение по прямой' },

        { problem: '10.22', answer: 18, procent: 40, type: 'Смеси и сплавы' },

        { problem: '10.23', answer: 16, procent: 55, type: 'Смеси и сплавы' },

        { problem: '10.24', answer: 18, procent: 70, type: 'Смеси и сплавы' },

        { problem: '10.25', answer: 18, procent: 75, type: 'Смеси и сплавы' },

        { problem: '10.26', answer: 30, procent: 75, type: 'Смеси и сплавы' },

        { problem: '10.27', answer: 15, procent: 90, type: 'Смеси и сплавы' },

        { problem: '10.28', answer: 28, procent: 85, type: 'Смеси и сплавы' },

        { problem: '10.29', answer: 15, procent: 90, type: 'Смеси и сплавы' },

        { problem: '10.30', answer: 10, procent: 30, type: 'Проценты' },

        { problem: '10.31', answer: 27, procent: 80, type: 'Проценты' },

        { problem: '10.32', answer: 189, procent: 100, type: 'Проценты' },

        { problem: '10.33', answer: 20, procent: 45, type: 'Проценты' },

        { problem: '10.34', answer: 10, procent: 25, type: 'Производительность' },

        { problem: '10.35', answer: 16, procent: 25, type: 'Производительность' },

        { problem: '10.36', answer: 14, procent: 25, type: 'Производительность' },

        { problem: '10.37', answer: 10, procent: 65, type: 'Производительность' },

        { problem: '10.38', answer: 10, procent: 25, type: 'Производительность' },

        { problem: '10.39', answer: 25, procent: 65, type: 'Производительность' },

        { problem: '10.40', answer: 8, procent: 70, type: 'Производительность' },

        { problem: '10.41', answer: 30, procent: 65, type: 'Производительность' },

        { problem: '10.42', answer: 10, procent: 55, type: 'Производительность' },

        { problem: '10.43', answer: 78, procent: 75, type: 'Производительность' },

        { problem: '10.44', answer: 8.4, procent: 85, type: 'Совместная работа' },

        { problem: '10.45', answer: 14, procent: 20, type: 'Движение по прямой' },

        { problem: '10.46', answer: 60, procent: 20, type: 'Движение по прямой' },

        { problem: '10.47', answer: 9, procent: 35, type: 'Движение по прямой' },

        { problem: '10.48', answer: 19, procent: 35, type: 'Движение по прямой' },

        { problem: '10.49', answer: 10, procent: 45, type: 'Движение по прямой' },

        { problem: '10.50', answer: 3, procent: 50, type: 'Движение по прямой' },

        { problem: '10.51', answer: 15, procent: 55, type: 'Движение по прямой' },

        { problem: '10.52', answer: 60, procent: 45, type: 'Движение по прямой' },

        { problem: '10.53', answer: 1, procent: 65, type: 'Движение по прямой' },

        { problem: '10.54', answer: 360, procent: 95, type: 'Движение по прямой' },

        { problem: '10.55', answer: 13, procent: 40, type: 'Движение по воде' },

        { problem: '10.56', answer: 3, procent: 35, type: 'Движение по воде' },

        { problem: '10.57', answer: 20, procent: 45, type: 'Движение по воде' },

        { problem: '10.58', answer: 1, procent: 40, type: 'Движение по воде' },

        { problem: '10.59', answer: 1, procent: 55, type: 'Движение по воде' },

        { problem: '10.60', answer: 20, procent: 55, type: 'Движение по воде' },

        { problem: '10.61', answer: 630, procent: 80, type: 'Движение по воде' },

        { problem: '10.62', answer: 6, procent: 65, type: 'Движение по воде' },

        { problem: '10.63', answer: 22, procent: 70, type: 'Движение по воде' },

        { problem: '10.64', answer: 90, procent: 50, type: 'Движение по прямой' },

        { problem: '10.65', answer: 80, procent: 50, type: 'Движение по прямой' },

        { problem: '10.66', answer: 13, procent: 40, type: 'Смеси и сплавы' },

        { problem: '10.67', answer: 7, procent: 55, type: 'Смеси и сплавы' },

        { problem: '10.68', answer: 63, procent: 70, type: 'Смеси и сплавы' },

        { problem: '10.69', answer: 12, procent: 75, type: 'Смеси и сплавы' },

        { problem: '10.70', answer: 35, procent: 75, type: 'Смеси и сплавы' },

        { problem: '10.71', answer: 40, procent: 90, type: 'Смеси и сплавы' },

        { problem: '10.72', answer: 14, procent: 85, type: 'Смеси и сплавы' },

        { problem: '10.73', answer: 35, procent: 90, type: 'Смеси и сплавы' },

        { problem: '10.74', answer: 35, procent: 30, type: 'Проценты' },

        { problem: '10.75', answer: 43, procent: 80, type: 'Проценты' },

        { problem: '10.76', answer: 36, procent: 100, type: 'Проценты' },

        { problem: '10.77', answer: 10, procent: 45, type: 'Проценты' },

        { problem: '10.78', answer: 11, procent: 25, type: 'Производительность' },

        { problem: '10.79', answer: 11, procent: 25, type: 'Производительность' },

        { problem: '10.80', answer: 31, procent: 25, type: 'Производительность' },

        { problem: '10.81', answer: 20, procent: 65, type: 'Производительность' },

        { problem: '10.82', answer: 15, procent: 25, type: 'Производительность' },

        { problem: '10.83', answer: 25, procent: 65, type: 'Производительность' },

        { problem: '10.84', answer: 9, procent: 70, type: 'Производительность' },

        { problem: '10.85', answer: 26, procent: 65, type: 'Производительность' },

        { problem: '10.86', answer: 6, procent: 55, type: 'Совместная работа' },

        { problem: '10.87', answer: 72, procent: 75, type: 'Совместная работа' },

        { problem: '10.88', answer: 5.6, procent: 85, type: 'Совместная работа' },

        { problem: '10.89', answer: 52, procent: 65, type: 'Движение по прямой' },

        { problem: '10.90', answer: 7, procent: 60, type: 'Совместная работа' },

        { problem: '10.91', answer: 50, procent: 65, type: 'Смеси и сплавы' },

        { problem: '10.92', answer: 4, procent: 40, type: 'Движение по воде' },

        { problem: '10.93', answer: 18, procent: 55, type: 'Движение по воде' },

        { problem: '10.94', answer: 56, procent: 80, type: 'Совместная работа' },






        { problem: '11.1', answer: 13, procent: 35, type: 'Прямая' },

        { problem: '11.2', answer: -7, procent: 40, type: 'Прямая' },

        { problem: '11.3', answer: 12, procent: 30, type: 'Парабола' },

        { problem: '11.4', answer: 41, procent: 45, type: 'Парабола' },

        { problem: '11.5', answer: 61, procent: 30, type: 'Парабола' },

        { problem: '11.6', answer: -67, procent: 60, type: 'Парабола' },

        { problem: '11.7', answer: 0.2, procent: 15, type: 'Гипербола' },

        { problem: '11.8', answer: 0.75, procent: 40, type: 'Гипербола' },

        { problem: '11.9', answer: -15, procent: 65, type: 'Гипербола' },

        { problem: '11.10', answer: 0.15, procent: 65, type: 'Гипербола' },

        { problem: '11.11', answer: 6.5, procent: 40, type: 'Иррациональная функция' },

        { problem: '11.12', answer: 32, procent: 50, type: 'Иррациональная функция' },

        { problem: '11.13', answer: 8, procent: 25, type: 'Показательная функция' },

        { problem: '11.14', answer: 16, procent: 25, type: 'Показательная функция' },

        { problem: '11.15', answer: 61, procent: 45, type: 'Показательная функция' },

        { problem: '11.16', answer: -4, procent: 45, type: 'Показательная функция' },

        { problem: '11.17', answer: -3, procent: 25, type: 'Логарифмическая функция' },

        { problem: '11.18', answer: 4, procent: 20, type: 'Логарифмическая функция' },

        { problem: '11.19', answer: 2, procent: 50, type: 'Логарифмическая функция' },

        { problem: '11.20', answer: 16, procent: 55, type: 'Логарифмическая функция' },

        { problem: '11.21', answer: 3, procent: 65, type: 'Пересечение графиков' },

        { problem: '11.22', answer: -11, procent: 80, type: 'Пересечение графиков' },

        { problem: '11.23', answer: 4, procent: 65, type: 'Пересечение графиков' },

        { problem: '11.24', answer: 8, procent: 80, type: 'Пересечение графиков' },

        { problem: '11.25', answer: -10, procent: 85, type: 'Пересечение графиков' },

        { problem: '11.26', answer: 16, procent: 70, type: 'Пересечение графиков' },

        { problem: '11.27', answer: 11, procent: 35, type: 'Прямая' },

        { problem: '11.28', answer: 14, procent: 40, type: 'Прямая' },

        { problem: '11.29', answer: 20, procent: 30, type: 'Парабола' },

        { problem: '11.30', answer: 53, procent: 45, type: 'Парабола' },

        { problem: '11.31', answer: -13, procent: 30, type: 'Парабола' },

        { problem: '11.32', answer: 20, procent: 60, type: 'Парабола' },

        { problem: '11.33', answer: 0.1, procent: 15, type: 'Гипербола' },

        { problem: '11.34', answer: -2.96, procent: 65, type: 'Гипербола' },

        { problem: '11.35', answer: -0.25, procent: 65, type: 'Гипербола' },

        { problem: '11.36', answer: -0.25, procent: 40, type: 'Гипербола' },

        { problem: '11.37', answer: -2.4, procent: 50, type: 'Иррациональная функция' },

        { problem: '11.38', answer: 24.5, procent: 25, type: 'Иррациональная функция' },

        { problem: '11.39', answer: 16, procent: 25, type: 'Показательная функция' },

        { problem: '11.40', answer: 8, procent: 25, type: 'Показательная функция' },

        { problem: '11.41', answer: 29, procent: 45, type: 'Показательная функция' },

        { problem: '11.42', answer: 6, procent: 45, type: 'Показательная функция' },

        { problem: '11.43', answer: -4, procent: 25, type: 'Логарифмическая функция' },

        { problem: '11.44', answer: 3, procent: 20, type: 'Логарифмическая функция' },

        { problem: '11.45', answer: 1, procent: 50, type: 'Логарифмическая функция' },

        { problem: '11.46', answer: 64, procent: 55, type: 'Логарифмическая функция' },

        { problem: '11.47', answer: 4, procent: 65, type: 'Пересечение графиков' },

        { problem: '11.48', answer: -11, procent: 80, type: 'Пересечение графиков' },

        { problem: '11.49', answer: 5, procent: 65, type: 'Пересечение графиков' },

        { problem: '11.50', answer: 8, procent: 80, type: 'Пересечение графиков' },

        { problem: '11.51', answer: 8, procent: 85, type: 'Пересечение графиков' },

        { problem: '11.52', answer: 36, procent: 70, type: 'Пересечение графиков' },

        { problem: '11.53', answer: 7, procent: 55, type: 'Пересечение графиков' },

        { problem: '11.54', answer: 6, procent: 55, type: 'Пересечение графиков' },

        { problem: '11.55', answer: 5, procent: 25, type: 'Логарифмическая функция' },

        { problem: '11.56', answer: 27, procent: 40, type: 'Показательная функция' },

        { problem: '11.57', answer: 0.2, procent: 45, type: 'Гипербола' },

        { problem: '11.58', answer: -3, procent: 25, type: 'Логарифмическая функция' },




        { problem: '12.1', answer: 21, procent: 35, type: 'Степенная функция' },

        { problem: '12.2', answer: 19, procent: 35, type: 'Степенная функция' },

        { problem: '12.3', answer: -8, procent: 55, type: 'Степенная функция' },

        { problem: '12.4', answer: 1, procent: 50, type: 'Степенная функция' },

        { problem: '12.5', answer: 44, procent: 75, type: 'Степенная функция' },

        { problem: '12.6', answer: 25, procent: 40, type: 'Степенная функция' },

        { problem: '12.7', answer: 81, procent: 45, type: 'Степенная функция' },

        { problem: '12.8', answer: -77, procent: 65, type: 'Степенная функция' },

        { problem: '12.9', answer: 2, procent: 80, type: 'Степенная функция' },

        { problem: '12.10', answer: -4, procent: 85, type: 'Степенная функция' },

        { problem: '12.11', answer: -2, procent: 85, type: 'Степенная функция' },

        { problem: '12.12', answer: 117, procent: 50, type: 'Тригонометрическая функция' },

        { problem: '12.13', answer: 29, procent: 45, type: 'Тригонометрическая функция' },

        { problem: '12.14', answer: -5, procent: 60, type: 'Тригонометрическая функция' },

        { problem: '12.15', answer: 41, procent: 45, type: 'Тригонометрическая функция' },

        { problem: '12.16', answer: 14, procent: 65, type: 'Тригонометрическая функция' },

        { problem: '12.17', answer: 7, procent: 50, type: 'Показательная функция' },

        { problem: '12.18', answer: 0, procent: 100, type: 'Показательная функция' },

        { problem: '12.19', answer: -2, procent: 55, type: 'Логарифмическая функция' },

        { problem: '12.20', answer: -8.9, procent: 60, type: 'Логарифмическая функция' },

        { problem: '12.21', answer: -2, procent: 60, type: 'Логарифмическая функция' },

        { problem: '12.22', answer: 28, procent: 40, type: 'Логарифмическая функция' },

        { problem: '12.23', answer: 6, procent: 45, type: 'Логарифмическая функция' },

        { problem: '12.24', answer: 15, procent: 40, type: 'Логарифмическая функция' },

        { problem: '12.25', answer: 8, procent: 65, type: 'Логарифмическая функция' },

        { problem: '12.26', answer: 4, procent: 50, type: 'Логарифмическая функция' },

        { problem: '12.27', answer: 0.5, procent: 85, type: 'Произведение' },

        { problem: '12.28', answer: 7, procent: 75, type: 'Произведение' },

        { problem: '12.29', answer: -21, procent: 40, type: 'Произведение' },

        { problem: '12.30', answer: 3, procent: 60, type: 'Произведение' },

        { problem: '12.31', answer: -1, procent: 45, type: 'Произведение' },

        { problem: '12.32', answer: 1, procent: 45, type: 'Произведение' },

        { problem: '12.33', answer: 2, procent: 65, type: 'Произведение' },

        { problem: '12.34', answer: -3, procent: 70, type: 'Произведение' },

        { problem: '12.35', answer: -35, procent: 50, type: 'Произведение' },

        { problem: '12.36', answer: 6, procent: 80, type: 'Частное' },

        { problem: '12.37', answer: -15, procent: 80, type: 'Частное' },

        { problem: '12.38', answer: 42, procent: 60, type: 'Частное' },

        { problem: '12.39', answer: -1005, procent: 55, type: 'Степенная функция' },

        { problem: '12.40', answer: 3, procent: 35, type: 'Степенная функция' },

        { problem: '12.41', answer: 9, procent: 55, type: 'Степенная функция' },

        { problem: '12.42', answer: -2, procent: 50, type: 'Степенная функция' },

        { problem: '12.43', answer: 3, procent: 75, type: 'Степенная функция' },

        { problem: '12.44', answer: 1, procent: 40, type: 'Степенная функция' },

        { problem: '12.45', answer: 2.25, procent: 50, type: 'Степенная функция' },

        { problem: '12.46', answer: 22, procent: 65, type: 'Степенная функция' },

        { problem: '12.47', answer: 7, procent: 80, type: 'Степенная функция' },

        { problem: '12.48', answer: 3, procent: 85, type: 'Степенная функция' },

        { problem: '12.49', answer: 1, procent: 85, type: 'Степенная функция' },

        { problem: '12.50', answer: 180, procent: 50, type: 'Тригонометрическая функция' },

        { problem: '12.51', answer: 30, procent: 45, type: 'Тригонометрическая функция' },

        { problem: '12.52', answer: 32, procent: 60, type: 'Тригонометрическая функция' },

        { problem: '12.53', answer: -35, procent: 45, type: 'Тригонометрическая функция' },

        { problem: '12.54', answer: 12, procent: 65, type: 'Тригонометрическая функция' },

        { problem: '12.55', answer: 5, procent: 50, type: 'Показательная функция' },

        { problem: '12.56', answer: -8.25, procent: 100, type: 'Показательная функция' },

        { problem: '12.57', answer: 3, procent: 55, type: 'Логарифмическая функция' },

        { problem: '12.58', answer: -6.5, procent: 60, type: 'Логарифмическая функция' },

        { problem: '12.59', answer: 3, procent: 60, type: 'Логарифмическая функция' },

        { problem: '12.60', answer: 19, procent: 40, type: 'Логарифмическая функция' },

        { problem: '12.61', answer: 5, procent: 45, type: 'Логарифмическая функция' },

        { problem: '12.62', answer: -27, procent: 40, type: 'Логарифмическая функция' },

        { problem: '12.63', answer: 4, procent: 65, type: 'Логарифмическая функция' },

        { problem: '12.64', answer: 12, procent: 50, type: 'Логарифмическая функция' },

        { problem: '12.65', answer: 1.5, procent: 85, type: 'Произведение' },

        { problem: '12.66', answer: 9, procent: 75, type: 'Произведение' },

        { problem: '12.67', answer: -5, procent: 40, type: 'Произведение' },

        { problem: '12.68', answer: 5, procent: 60, type: 'Произведение' },

        { problem: '12.69', answer: 0.5, procent: 45, type: 'Произведение' },

        { problem: '12.70', answer: -0.5, procent: 45, type: 'Произведение' },

        { problem: '12.71', answer: 2, procent: 65, type: 'Произведение' },

        { problem: '12.72', answer: -6, procent: 70, type: 'Произведение' },

        { problem: '12.73', answer: 3, procent: 50, type: 'Произведение' },

        { problem: '12.74', answer: -14, procent: 80, type: 'Частное' },

        { problem: '12.75', answer: 16, procent: 80, type: 'Частное' },

        { problem: '12.76', answer: -10, procent: 60, type: 'Частное' },

        { problem: '12.77', answer: -5, procent: 40, type: 'Степенная функция' },

        { problem: '12.78', answer: 8, procent: 55, type: 'Логарифмическая функция' },

        { problem: '12.79', answer: 7, procent: 45, type: 'Степенная функция' },

        { problem: '12.80', answer: 8, procent: 75, type: 'Произведение' },

        { problem: '12.81', answer: -3, procent: 30, type: 'Степенная функция' },

        { problem: '12.82', answer: 3, procent: 60, type: 'Логарифмическая функция' },

        { problem: '12.83', answer: 10, procent: 30, type: 'Степенная функция' },

    ]



const themeProblems = {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: [], // Темы каждой задачи
    7: [], 8: [], 9: [], 10: [], 11: [], 12: []
}



const problems = ['-', [], [], [], [], [], [], [], [], [], [], [], []] // Все задания по номерам



allProblems.forEach(element => { // Распределение по ключу number
    const problemSplitString = element.problem.split('.') // problem = 3.25 --> ['3', '25']
    const [problem, number] = [+problemSplitString[0], +problemSplitString[1]]
    const thisType = element.type // Тип задачи
    const thisTypes = [] // Массив, где будут все текущие типы, которые были добавлены на данных момент


    element.id = 1000 * problem + number // id = 3025
    element.number = problem // 3
    problems[element.number].push(element) // problem[3].push(obj)

    if (element.solution){
        
        if (element.solution[0] === 1){ // Если есть СВОЕ решение
            element.solution = {have: true, link: element.solution[1]}
        }

        if (element.solution[0] === 0){  // Если есть ЧУЖОЕ решение
            element.solution = {have: false, numberPrototype: element.solution[1]}

            const numberPrototype = element.solution.numberPrototype // Номер прототипа
            const objectPrototype = searchObjectByProblem(numberPrototype, allProblems) // Находим объект прототипа       
            element.solution.objectPrototype = objectPrototype // Добавляем прототип
        }

        
    }


    
    const thisThemeObject = themeProblems[element.number] // Массив тем этой задачи [{name: 'уравнение', count: 3}, {name: 'неравенство', count: 4}...]
    for (let index = 0; index < thisThemeObject.length; index++) {
        thisTypes.push(thisThemeObject[index].name) // Добавляем имена
    }

    if (!thisTypes.includes(thisType)) {
        thisThemeObject.push({ name: thisType, count: 1 }) // Если новый тип - {name: 'НАЗВАНИЕ', count: 1}
    } else { // Иначе перебираем все прошлые темы - ищем эту неновую тему и делаем ++
        for (let index = 0; index < thisThemeObject.length; index ++) {
            if (thisType === thisThemeObject[index].name) thisThemeObject[index].count++
        }
    }
})






const specialVariants = ['-', // Специальные варианты
    { variant: ['1.31', '3.21', '4.27', '5.23', '6.49', '7.7', '8.3', '9.32', '10.89', '11.57', '12.25'], name: 'Досрок 2023 - резервный день' },
    { variant: ['1.6', '3.46', '4.39', '5.25', '6.6', '7.70', '8.17', '9.20', '10.90', '11.18', '12.4'], name: 'Досрок 2023' },
    { variant: ['1.56', '3.30', '4.3', '5.11', '6.48', '7.66', '8.56', '9.56', '10.16', '11.44', '12.77'], name: 'Основная волна 2022' },
    { variant: ['1.19', '1.25', '1.33', '1.46', '1.51', '1.73', '3.78', '3.79', '3.160', '3.161', '4.5', '4.24', '5.9', '5.35', '6.45', '7.37', '7.39', '7.83', '8.7', '8.44', '8.45', '9.12', '9.33', '9.69', '10.36', '10.38', '10.78', '10.79', '10.80', '11.23', '11.24', '11.51', '11.54', '12.8', '12.46'], name: 'Основная волна 2023' },
    { variant: ['1.17', '3.38', '4.9', '5.14', '6.9', '7.20', '8.59', '9.17', '10.24', '11.31', '12.33'], name: 'Резерв 2023' },
    { variant: ['1.20', '3.65', '4.44', '5.44', '6.24', '7.11', '8.11', '9.5', '10.8', '11.27', '12.65'], name: 'Резерв 2023 - резервный день' }]


specialVariants.forEach((variant, index) => {
    if (index !== 0) {
        const arrayObj = getArrayObjectForSpecialVariants(index)
        variant.countProblem = getCountProblemForVariant(arrayObj)
    }
})




const timeOnProblem = { // Время на задачу с каким-то номером
    1: [1, 1], 2: [1, 21], 3: [1, 21], 4: [0, 31], 5: [1, 31], 6: [0, 46], 7: [1, 11],
    8: [0, 41], 9: [2, 1], 10: [3, 1], 11: [2, 1], 12: [1, 21]
}



const secondBallArray = { // Словарь перевода баллов из первичной во вторичную
    0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27,
    6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
    11: 64, 12: 68
}



export { allProblems, problems, themeProblems, specialVariants, timeOnProblem, secondBallArray }
































