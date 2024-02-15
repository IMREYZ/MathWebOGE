// Объекты - задачи
const allProblems = 

[   
    {problem: '1.1', answer: 106, procent: 20, type: 'Равнобедненный треугольник'},
    {problem: '1.2', answer: 0.9, procent: 35, type: 'Прямоугольный треугольник'},
    {problem: '1.3', answer: 0.4, procent: 30, type: 'Прямоугольный треугольник'},
    {problem: '1.4', answer: 16.4, procent: 70, type: 'Прямоугольный треугольник'},
    {problem: '1.5', answer: 86, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.6', answer: 1, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.7', answer: 26, procent: 35, type: 'Прямоугольный треугольник'},
    {problem: '1.8', answer: 66, procent: 45, type: 'Треугольник'},
    {problem: '1.9', answer: 19, procent: 65, type: 'Прямоугольный треугольник'},
    {problem: '1.10', answer: 16, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.11', answer: 5.5, procent: 30, type: 'Трапеция'},
    {problem: '1.12', answer: 116, procent: 35, type: 'Параллелограмм'},
    {problem: '1.13', answer: 6, procent: 25, type: 'Параллелограмм'},
    {problem: '1.14', answer: 15, procent: 80, type: 'Параллелограмм'},
    {problem: '1.15', answer: 68, procent: 35, type: 'Ромб'},
    {problem: '1.16', answer: 16, procent: 30, type: 'Ромб'},
    {problem: '1.17', answer: 21, procent: 15, type: 'Окружность'},
    {problem: '1.18', answer: 198, procent: 20, type: 'Окружность'},
    {problem: '1.19', answer: 10.5, procent: 60, type: 'Окружность'},
    {problem: '1.20', answer: 47, procent: 40, type: 'Равнобедненный треугольник'},
    {problem: '1.21', answer: 124, procent: 60, type: 'Треугольник'},
    {problem: '1.22', answer: 30.25, procent: 70, type: 'Равнобедненный треугольник'},
    {problem: '1.23', answer: 20, procent: 35, type: 'Треугольник'},
    {problem: '1.24', answer: 3.5, procent: 70, type: 'Окружность'},
    {problem: '1.25', answer: 96, procent: 30, type: 'Треугольник'},
    {problem: '1.26', answer: 119, procent: 65, type: 'Треугольник'},
    {problem: '1.27', answer: 0.5, procent: 30, type: 'Равнобедненный треугольник'},
    {problem: '1.28', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.29', answer: 0.7, procent: 30, type: 'Равнобедненный треугольник'},
    {problem: '1.30', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.31', answer: 132, procent: 30, type: 'Окружность'},
    {problem: '1.32', answer: 2, procent: 80, type: 'Равнобедненный треугольник'},
    {problem: '1.33', answer: 6, procent: 40, type: 'Треугольник'},
    {problem: '1.34', answer: 20, procent: 70, type: 'Равнобедненный треугольник'},
    {problem: '1.35', answer: 90, procent: 50, type: 'Равносторонний треугольник'},
    {problem: '1.36', answer: 20, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.37', answer: 0.6, procent: 25, type: 'Прямоугольный треугольник'},
    {problem: '1.38', answer: 9, procent: 65, type: 'Прямоугольный треугольник'},
    {problem: '1.39', answer: 55 , procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.40', answer: 21, procent: 55, type: 'Прямоугольный треугольник'},
    {problem: '1.41', answer: 31, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.42', answer: 78, procent: 55, type: 'Прямоугольный треугольник'},
    {problem: '1.43', answer: 2, procent: 45, type: 'Трапеция'},
    {problem: '1.44', answer: 70, procent: 60, type: 'Параллелограмм'},
    {problem: '1.45', answer: 1.5, procent: 30, type: 'Параллелограмм'},
    {problem: '1.46', answer: 99, procent: 75, type: 'Параллелограмм'},
    {problem: '1.47', answer: 72, procent: 45, type: 'Ромб'},
    {problem: '1.48', answer: 51, procent: 45, type: 'Ромб'},
    {problem: '1.49', answer: 5, procent: 20, type: 'Окружность'},
    {problem: '1.50', answer: 78, procent: 30, type: 'Окружность'},
    {problem: '1.51', answer: 18.5, procent: 60, type: 'Окружность'},
    {problem: '1.52', answer: 4.5, procent: 45, type: 'Окружность'},
    {problem: '1.53', answer: 122, procent: 30, type: 'Окружность'},
    {problem: '1.54', answer: 103, procent: 40, type: 'Окружность'},
    {problem: '1.55', answer: 36, procent: 40, type: 'Окружность'},
    {problem: '1.56', answer: 56, procent: 35, type: 'Окружность'},
    {problem: '1.57', answer: 46, procent: 55, type: 'Окружность'},
    {problem: '1.58', answer: 122, procent: 60, type: 'Окружность'},
    {problem: '1.59', answer: 118, procent: 45, type: 'Окружность'},
    {problem: '1.60', answer: 63, procent: 55, type: 'Окружность'},
    {problem: '1.61', answer: 35, procent: 40, type: 'Окружность'},
    {problem: '1.62', answer: 91, procent: 40, type: 'Окружность'},
    {problem: '1.63', answer: 98, procent: 45, type: 'Окружность'},
    {problem: '1.64', answer: 33, procent: 40, type: 'Окружность'},
    {problem: '1.65', answer: 40, procent: 80, type: 'Окружность'},
    {problem: '1.66', answer: 39, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.67', answer: 54, procent: 40, type: 'Треугольник'},
    {problem: '1.68', answer: 84, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.69', answer: 102, procent: 70, type: 'Треугольник'},
    {problem: '1.70', answer: 2.25, procent: 75, type: 'Равнобедненный треугольник'},
    {problem: '1.71', answer: 12.5, procent: 40, type: 'Треугольник'},
    {problem: '1.72', answer: 16, procent: 50, type: 'Треугольник'},
    {problem: '1.73', answer: 1, procent: 25, type: 'Треугольник'},
    {problem: '1.74', answer: 123, procent: 75, type: 'Треугольник'},
    {problem: '1.75', answer: 0.8, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.76', answer: 0.3, procent: 60, type: 'Равнобедненный треугольник'},
    {problem: '1.77', answer: 21, procent: 90, type: 'Равнобедненный треугольник'},
    {problem: '1.78', answer: 0.45, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.79', answer: 12, procent: 75, type: 'Равнобедненный треугольник'},
    {problem: '1.80', answer: 54, procent: 50, type: 'Равносторонний треугольник'},
    {problem: '1.81', answer: 20, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.82', answer: 102, procent: 30, type: 'Окружность'},
    {problem: '1.83', answer: 70, procent: 70, type: 'Окружность'},
    {problem: '1.84', answer: 32, procent: 30, type: 'Окружность'},
    {problem: '1.85', answer: 68, procent: 35, type: 'Окружность'},
    {problem: '1.86', answer: 75, procent: 30, type: 'Окружность'},
    {problem: '1.87', answer: 98, procent: 40, type: 'Окружность'},
    {problem: '1.88', answer: 3, procent: 80, type: 'Треугольник'},
    {problem: '1.89', answer: 82, procent: 80, type: 'Окружность'},
    {problem: '1.90', answer: 44, procent: 25, type: 'Окружность'},
    {problem: '1.91', answer: 138, procent: 50, type: 'Окружность'},
    {problem: '1.92', answer: 97, procent: 35, type: 'Окружность'},
    {problem: '1.93', answer: 2, procent: 80, type: 'Треугольник'},



    {problem: '2.1', answer: 15, procent: 25, type: 'Многогранник'},
    {problem: '2.2', answer: 12, procent: 30, type: 'Многогранник'},
    {problem: '2.3', answer: 112, procent: 70, type: 'Многогранник'},
    {problem: '2.4', answer: 8, procent: 50, type: 'Куб'},
    {problem: '2.5', answer: 12, procent: 40, type: 'Куб'},
    {problem: '2.6', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.7', answer: 45, procent: 60, type: 'Куб'},
    {problem: '2.8', answer: 60, procent: 60, type: 'Куб'},
    {problem: '2.9', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.10', answer: 18, procent: 45, type: 'Параллелепипед'},
    {problem: '2.11', answer: 0.8, procent: 65, type: 'Параллелепипед'},
    {problem: '2.12', answer: 35, procent: 40, type: 'Параллелепипед'},
    {problem: '2.13', answer: 357, procent: 80, type: 'Параллелепипед'},
    {problem: '2.14', answer: 30, procent: 40, type: 'Параллелепипед'},
    {problem: '2.15', answer: 42, procent: 45, type: 'Призма'},
    {problem: '2.16', answer: 4, procent: 50, type: 'Призма'},
    {problem: '2.17', answer: 60, procent: 100, type: 'Призма'},
    {problem: '2.18', answer: 45, procent: 60, type: 'Призма'},
    {problem: '2.19', answer: 60, procent: 55, type: 'Призма'},
    {problem: '2.20', answer: 12, procent: 55, type: 'Призма'},
    {problem: '2.21', answer: 74, procent: 35, type: 'Призма'},
    {problem: '2.22', answer: 37.5, procent: 35, type: 'Призма'},
    {problem: '2.23', answer: 60, procent: 70, type: 'Призма'},
    {problem: '2.24', answer: 12, procent: 65, type: 'Призма'},
    {problem: '2.25', answer: 66, procent: 65, type: 'Призма'},
    {problem: '2.26', answer: 5, procent: 70, type: 'Призма'},
    {problem: '2.27', answer: 184, procent: 50, type: 'Призма'},
    {problem: '2.28', answer: 2, procent: 35, type: 'Цилиндр'},
    {problem: '2.29', answer: 4.5, procent: 60, type: 'Комбинации тел'},
    {problem: '2.30', answer: 9, procent: 60, type: 'Комбинации тел'},
    {problem: '2.31', answer: 12, procent: 75, type: 'Цилиндр'},
    {problem: '2.32', answer: 50, procent: 75, type: 'Цилиндр'},
    {problem: '2.33', answer: 100, procent: 40, type: 'Цилиндр'},
    {problem: '2.34', answer: 2275, procent: 50, type: 'Цилиндр'},
    {problem: '2.35', answer: 15, procent: 30, type: 'Конус'},
    {problem: '2.36', answer: 60, procent: 65, type: 'Конус'},
    {problem: '2.37', answer: 1680, procent: 65, type: 'Конус'},
    {problem: '2.38', answer: 3, procent: 30, type: 'Конус'},
    {problem: '2.39', answer: 64, procent: 45, type: 'Конус'},
    {problem: '2.40', answer: 3, procent: 40, type: 'Конус'},
    {problem: '2.41', answer: 3, procent: 90, type: 'Конус'},
    {problem: '2.42', answer: 20.8, procent: 100, type: 'Конус'},
    {problem: '2.43', answer: 12.6, procent: 95, type: 'Конус'},
    {problem: '2.44', answer: 175, procent: 90, type: 'Конус'},
    {problem: '2.45', answer: 342, procent: 95, type: 'Конус'},
    {problem: '2.46', answer: 72, procent: 50, type: 'Параллелепипед'},
    {problem: '2.47', answer: 12, procent: 45, type: 'Призма'},
    {problem: '2.48', answer: 12, procent: 35, type: 'Призма'},
    {problem: '2.49', answer: 20, procent: 40, type: 'Параллелепипед'},
    {problem: '2.50', answer: 29, procent: 55, type: 'Пирамида'},
    {problem: '2.51', answer: 24, procent: 30, type: 'Пирамида'},
    {problem: '2.52', answer: 9800, procent: 80, type: 'Пирамида'},
    {problem: '2.53', answer: 2.5, procent: 55, type: 'Пирамида'},
    {problem: '2.54', answer: 3.5, procent: 95, type: 'Пирамида'},
    {problem: '2.55', answer: 16, procent: 70, type: 'Пирамида'},
    {problem: '2.56', answer: 1, procent: 30, type: 'Пирамида'},
    {problem: '2.57', answer: 19.5, procent: 55, type: 'Пирамида'},
    {problem: '2.58', answer: 14, procent: 60, type: 'Призма'},
    {problem: '2.59', answer: 32, procent: 80, type: 'Призма'},
    {problem: '2.60', answer: 42, procent: 45, type: 'Призма'},
    {problem: '2.61', answer: 12, procent: 50, type: 'Призма'},
    {problem: '2.62', answer: 8, procent: 40, type: 'Призма'},
    {problem: '2.63', answer: 10, procent: 50, type: 'Призма'},
    {problem: '2.64', answer: 6, procent: 95, type: 'Пирамида'},
    {problem: '2.65', answer: 3, procent: 45, type: 'Шар'},
    {problem: '2.66', answer: 4, procent: 35, type: 'Комбинации тел'},
    {problem: '2.67', answer: 2197, procent: 50, type: 'Комбинации тел'},
    {problem: '2.68', answer: 64, procent: 40, type: 'Комбинации тел'},
    {problem: '2.69', answer: 15, procent: 55, type:'Комбинации тел'},
    {problem: '2.70', answer: 64, procent: 35, type: 'Комбинации тел'},
    {problem: '2.71', answer: 210, procent: 75, type: 'Комбинации тел'},
    {problem: '2.72', answer: 32768, procent: 65, type: 'Комбинации тел'},
    {problem: '2.73', answer: 75, procent: 40, type: 'Комбинации тел'},
    {problem: '2.74', answer: 72, procent: 50, type: 'Комбинации тел'},
    {problem: '2.75', answer: 20, procent: 65, type: 'Комбинации тел'},
    {problem: '2.76', answer: 50, procent: 60, type: 'Комбинации тел'},
    {problem: '2.77', answer: 188, procent: 35, type: 'Комбинации тел'},
    {problem: '2.78', answer: 171, procent: 25, type: 'Комбинации тел'},
    {problem: '2.79', answer: 5, procent: 60, type: 'Комбинации тел'},
    {problem: '2.80', answer: 1, procent: 45, type: 'Комбинации тел'},
    {problem: '2.81', answer: 32, procent: 45, type: 'Комбинации тел'},
    {problem: '2.82', answer: 90.5, procent: 80, type: 'Комбинации тел'},
    {problem: '2.83', answer: 24, procent: 25, type: 'Многогранник'},
    {problem: '2.84', answer: 3, procent: 30, type: 'Многогранник'},
    {problem: '2.85', answer: 80, procent: 70, type: 'Многогранник'},
    {problem: '2.86', answer: 1, procent: 50, type: 'Куб'},
    {problem: '2.87', answer: 2.5, procent: 40, type: 'Куб'},
    {problem: '2.88', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.89', answer: 45, procent: 60, type: 'Куб'},
    {problem: '2.90', answer: 60, procent: 60, type: 'Куб'},
    {problem: '2.91', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.92', answer: 18, procent: 45, type: 'Параллелепипед'},
    {problem: '2.93', answer: 0.6, procent: 65, type: 'Параллелепипед'},
    {problem: '2.94', answer: 110, procent: 40, type: 'Параллелепипед'},
    {problem: '2.95', answer: 667, procent: 80, type: 'Параллелепипед'},
    {problem: '2.96', answer: 60, procent: 40, type: 'Параллелепипед'},
    {problem: '2.97', answer: 24, procent: 45, type: 'Призма'},
    {problem: '2.98', answer: 4, procent: 50, type: 'Призма'},
    {problem: '2.99', answer: 60, procent: 100, type: 'Призма'},
    {problem: '2.100', answer: 45, procent: 60, type: 'Призма'},
    {problem: '2.101', answer: 20, procent: 55, type: 'Призма'},
    {problem: '2.102', answer: 13, procent: 55, type: 'Призма'},
    {problem: '2.103', answer: 86, procent: 35, type: 'Призма'},
    {problem: '2.104', answer: 12, procent: 35, type: 'Призма'},
    {problem: '2.105', answer: 60, procent: 70, type: 'Призма'},
    {problem: '2.106', answer: 12, procent: 65, type: 'Призма'},
    {problem: '2.107', answer: 28, procent: 65, type: 'Призма'},
    {problem: '2.108', answer: 5, procent: 70, type: 'Призма'},
    {problem: '2.109', answer: 180, procent: 50, type: 'Призма'},
    {problem: '2.110', answer: 5, procent: 35, type: 'Цилиндр'},
    {problem: '2.111', answer: 1.125, procent: 60, type: 'Комбинации тел'},
    {problem: '2.112', answer: 36, procent: 60, type: 'Комбинации тел'},
    {problem: '2.113', answer: 2, procent: 75, type: 'Цилиндр'},
    {problem: '2.114', answer: 72, procent: 75, type: 'Цилиндр'},
    {problem: '2.115', answer: 3, procent: 40, type: 'Цилиндр'},
    {problem: '2.116', answer: 375, procent: 50, type: 'Цилиндр'},
    {problem: '2.117', answer: 40, procent: 30, type: 'Конус'},
    {problem: '2.118', answer: 6, procent: 65, type: 'Конус'},
    {problem: '2.119', answer: 1680, procent: 65, type: 'Конус'},
    {problem: '2.120', answer: 14, procent: 30, type: 'Конус'},
    {problem: '2.121', answer: 25, procent: 45, type: 'Конус'},
    {problem: '2.122', answer: 1.5, procent: 40, type: 'Конус'},
    {problem: '2.123', answer: 2, procent: 90, type: 'Конус'},
    {problem: '2.124', answer: 13.5, procent: 100, type: 'Конус'},
    {problem: '2.125', answer: 2.4, procent: 95, type: 'Конус'},
    {problem: '2.126', answer: 63, procent: 90, type: 'Конус'},
    {problem: '2.127', answer: 3685, procent: 95, type: 'Конус'},
    {problem: '2.128', answer: 16, procent: 50, type: 'Параллелепипед'},
    {problem: '2.129', answer: 14, procent: 45, type: 'Призма'},
    {problem: '2.130', answer: 24, procent: 35, type: 'Призма'},
    {problem: '2.131', answer: 45, procent: 40, type: 'Параллелепипед'},
    {problem: '2.132', answer: 3, procent: 55, type: 'Пирамида'},
    {problem: '2.133', answer: 24, procent: 30, type: 'Пирамида'},
    {problem: '2.134', answer: 1200, procent: 80, type: 'Пирамида'},
    {problem: '2.135', answer: 6, procent: 55, type: 'Пирамида'},
    {problem: '2.136', answer: 4, procent: 95, type: 'Пирамида'},
    {problem: '2.137', answer: 32, procent: 70, type: 'Пирамида'},
    {problem: '2.138', answer: 9, procent: 30, type: 'Пирамида'},
    {problem: '2.139', answer: 3, procent: 55, type: 'Пирамида'},
    {problem: '2.140', answer: 8, procent: 60, type: 'Призма'},
    {problem: '2.141', answer: 10, procent: 90, type: 'Призма'},
    {problem: '2.142', answer: 10, procent: 45, type: 'Призма'},
    {problem: '2.143', answer: 3, procent: 50, type: 'Призма'},
    {problem: '2.144', answer: 16, procent: 40, type: 'Призма'},
    {problem: '2.145', answer: 6, procent: 50, type: 'Призма'},
    {problem: '2.146', answer: 7.5, procent: 95, type: 'Пирамида'},
    {problem: '2.147', answer: 10, procent: 45, type: 'Шар'},
    {problem: '2.148', answer: 64, procent: 35, type: 'Комбинации тел'},
    {problem: '2.149', answer: 512, procent: 50, type: 'Комбинации тел'},
    {problem: '2.150', answer: 49, procent: 40, type: 'Комбинации тел'},
    {problem: '2.151', answer: 10, procent: 55, type: 'Комбинации тел'},
    {problem: '2.152', answer: 8, procent: 35, type: 'Комбинации тел'},
    {problem: '2.153', answer: 42, procent: 75, type: 'Комбинации тел'},
    {problem: '2.154', answer: 29791, procent: 65, type: 'Комбинации тел'},
    {problem: '2.155', answer: 27, procent: 40, type: 'Комбинации тел'},
    {problem: '2.156', answer: 31.5, procent: 50, type: 'Комбинации тел'},
    {problem: '2.157', answer: 102, procent: 65, type: 'Комбинации тел'},
    {problem: '2.158', answer: 11, procent: 60, type: 'Комбинации тел'},
    {problem: '2.159', answer: 156, procent: 35, type: 'Комбинации тел'},
    {problem: '2.160', answer: 6, procent: 25, type: 'Комбинации тел'},
    {problem: '2.161', answer: 6, procent: 60, type: 'Комбинации тел'},
    {problem: '2.162', answer: 0.25, procent: 45, type: 'Комбинации тел'},
    {problem: '2.163', answer: 4, procent: 45, type: 'Комбинации тел'},
    {problem: '2.164', answer: 125, procent: 80, type: 'Комбинации тел'},
    {problem: '2.165', answer: 27, procent: 65, type: 'Комбинации тел'},
    {problem: '2.166', answer: 13, procent: 50, type: 'Призма'},
    {problem: '2.167', answer: 20, procent: 65, type: 'Комбинации тел'},
    {problem: '2.168', answer: 35, procent: 50, type: 'Параллелепипед'},
    {problem: '2.169', answer: 24, procent: 65, type: 'Комбинации тел'},
    {problem: '2.170', answer: 72, procent: 35, type: 'Призма'},
    



    {problem: '3.1', answer: 0.8, procent: 20, type: 'Классическая вероятность'},
    {problem: '3.2', answer: 0.74, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.3', answer: 0.2, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.4', answer: 0.16, procent: 45, type: 'Классическая вероятность'},
    {problem: '3.5', answer: 0.4, procent: 50, type: 'Классическая вероятность'},
    {problem: '3.6', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.7', answer: 0.97, procent: 55, type: 'Классическая вероятность'},
    {problem: '3.8', answer: 0.55, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.9', answer: 0.3, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.10', answer: 0.35, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.11', answer: 0.2, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.12', answer: 0.92, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.13', answer: 0.88, procent: 70, type: 'Округление вероятности'},
    {problem: '3.14', answer: 0.97, procent: 90, type: 'Округление вероятности'},
    {problem: '3.15', answer: 0.6, procent: 25, type: 'Классическая вероятность'},
    {problem: '3.16', answer: 0.75, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.17', answer: 0.05, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.18', answer: 0.08, procent: 95, type: 'Классическая вероятность'},
    {problem: '3.19', answer: 0.5, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.20', answer: 0.4, procent: 20, type: 'Классическая вероятность'},
    {problem: '3.21', answer: 0.65, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.22', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.23', answer: 0.4, procent: 45, type: 'Классическая вероятность'},
    {problem: '3.24', answer: 0.25, procent: 50, type: 'Классическая вероятность'},
    {problem: '3.25', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.26', answer: 0.996, procent: 55, type: 'Классическая вероятность'},
    {problem: '3.27', answer: 0.46, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.28', answer: 0.4, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.29', answer: 0.2, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.30', answer: 0.25, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.31', answer: 0.86, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.32', answer: 0.89, procent: 70, type: 'Округление вероятности'},
    {problem: '3.33', answer: 0.98, procent: 90, type: 'Округление вероятности'},
    {problem: '3.34', answer: 0.5, procent: 25, type: 'Классическая вероятность'},
    {problem: '3.35', answer: 0.25, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.36', answer: 0.2, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.37', answer: 0.2, procent: 95, type: 'Классическая вероятность'},
    {problem: '3.38', answer: 0.25, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.39', answer: 0.125, procent: 70, type: 'Классическая вероятность'},
    {problem: '3.40', answer: 0.75, procent: 45, type: 'Классическая вероятность'},
    {problem: '3.41', answer: 0.994, procent: 75, type: 'Классическая вероятность'},



    {problem: '4.1', answer: 0.1, procent: 45, type: 'Классическая вероятность'},
    {problem: '4.2', answer: 0.96, procent: 75, type: 'Классическая вероятность'},
    {problem: '4.3', answer: 0.55, procent: 10, type: 'Сложение, умножение вероятностей'},
    {problem: '4.4', answer: 0.16, procent: 30, type: 'Сложение, умножение вероятностей'},
    {problem: '4.5', answer: 0.027, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.6', answer: 0.9216, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.7', answer: 0.0042, procent: 75, type: 'Сложение, умножение вероятностей'},
    {problem: '4.8', answer: 0.04, procent: 45, type: 'Сложение, умножение вероятностей'},
    {problem: '4.9', answer: 0.0009, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.10', answer: 0.9975, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.11', answer: 0.488, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.12', answer: 0.33, procent: 70, type: 'Сложение, умножение вероятностей'},
    {problem: '4.13', answer: 0.11, procent: 10, type: 'Полная вероятность'},
    {problem: '4.14', answer: 0.78, procent: 80, type: 'Полная вероятность'},
    {problem: '4.15', answer: 0.025, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.16', answer: 0.069, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.17', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей'},
    {problem: '4.18', answer: 2, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.19', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.20', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.21', answer: 0.2, procent: 45, type: 'Условная вероятность'},
    {problem: '4.22', answer: 0.5, procent: 55, type: 'Условная вероятность'},
    {problem: '4.23', answer: 0.12, procent: 65, type: 'Условная вероятность'},
    {problem: '4.24', answer: 0.6, procent: 60, type: 'Условная вероятность'},
    {problem: '4.25', answer: 0.83, procent: 90, type: 'Полная вероятность'},
    {problem: '4.26', answer: 0.22, procent: 40, type: 'Предметы из ящика'},
    {problem: '4.27', answer: 0.05, procent: 45, type: 'Классическая вероятность'},
    {problem: '4.28', answer: 0.96, procent: 75, type: 'Классическая вероятность'},
    {problem: '4.29', answer: 0.35, procent: 10, type: 'Сложение, умножение вероятностей'},
    {problem: '4.30', answer: 0.27, procent: 30, type: 'Сложение, умножение вероятностей'},
    {problem: '4.31', answer: 0.008, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.32', answer: 0.9604, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.33', answer: 0.0104, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.34', answer: 0.07, procent: 45, type: 'Сложение, умножение вероятностей'},
    {problem: '4.35', answer: 0.0064, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.36', answer: 0.9856, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.37', answer: 0.271, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.38', answer: 0.28, procent: 70, type: 'Сложение, умножение вероятностей'},
    {problem: '4.39', answer: 0.07, procent: 10, type: 'Полная вероятность'},
    {problem: '4.40', answer: 0.81, procent: 80, type: 'Полная вероятность'},
    {problem: '4.41', answer: 0.016, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.42', answer: 0.059, procent: 60, type: 'Сложение, умножение вероятностей'},
    {problem: '4.43', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей'},
    {problem: '4.44', answer: 3, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.45', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.46', answer: 0.5, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.47', answer: 0.2, procent: 45, type: 'Условная вероятность'},
    {problem: '4.48', answer: 0.5, procent: 50, type: 'Условная вероятность'},
    {problem: '4.49', answer: 0.08, procent: 65, type: 'Условная вероятность'},
    {problem: '4.50', answer: 0.36, procent: 80, type: 'Сложение, умножение вероятностей'},
    {problem: '4.51', answer: 0.85, procent: 90, type: 'Полная вероятность'},
    {problem: '4.52', answer: 0.24, procent: 40, type: 'Предметы из ящика'},
    {problem: '4.53', answer: 0.1024, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.54', answer: 0.039, procent: 70, type: 'Сложение, умножение вероятностей'},
    {problem: '4.55', answer: 0.0009, procent: 75, type: 'Сложение, умножение вероятностей'},
    {problem: '4.56', answer: 0.936, procent: 60, type: 'Сложение, умножение вероятностей'},




    {problem: '5.1', answer: -17, procent: 15, type: 'Линейные уравнения'},
    {problem: '5.2', answer: 2, procent: 40, type: 'Степенные уравнения'},
    {problem: '5.3', answer: 9, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.4', answer: -1, procent: 20, type: 'Степенные уравнения'},
    {problem: '5.5', answer: 0.4, procent: 45, type: 'Линейные уравнения'},
    {problem: '5.6', answer: 12, procent: 30, type: 'Иррациональные уравнения'},
    {problem: '5.7', answer: 122, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.8', answer: 8, procent: 90, type: 'Иррациональные уравнения'},
    {problem: '5.9', answer: -25, procent: 20, type: 'Логарифмические уравнения'},
    {problem: '5.10', answer: -1, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.11', answer: 2, procent: 25, type: 'Логарифмические уравнения'},
    {problem: '5.12', answer: -42, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.13', answer: 0.2, procent: 60, type: 'Логарифмические уравнения'},
    {problem: '5.14', answer: 10, procent: 80, type: 'Логарифмические уравнения'},
    {problem: '5.15', answer: -9, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.16', answer: 6, procent: 50, type: 'Показательные уравнения'},
    {problem: '5.17', answer: 4.5, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.18', answer: 1.5, procent: 55, type: 'Показательные уравнения'},
    {problem: '5.19', answer: 20, procent: 70, type: 'Логарифмические уравнения'},
    {problem: '5.20', answer: 5, procent: 75, type: 'Логарифмические уравнения'},
    {problem: '5.21', answer: -18, procent: 15, type: 'Линейные уравнения'},
    {problem: '5.22', answer: 1, procent: 40, type: 'Степенные уравнения'},
    {problem: '5.23', answer: 12, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.24', answer: -9, procent: 20, type: 'Степенные уравнения'},
    {problem: '5.25', answer: -9, procent: 45, type: 'Линейные уравнения'},
    {problem: '5.26', answer: 25, procent: 40, type: 'Иррациональные уравнения'},
    {problem: '5.27', answer: 67, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.28', answer: 6, procent: 95, type: 'Иррациональные уравнения'},
    {problem: '5.29', answer: -9, procent: 95, type: 'Иррациональные уравнения'},
    {problem: '5.30', answer: 12, procent: 20, type: 'Логарифмические уравнения'},
    {problem: '5.31', answer: -9.5, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.32', answer: -96, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.33', answer: 3, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.34', answer: -14, procent: 65, type: 'Логарифмические уравнения'},
    {problem: '5.35', answer: 7, procent: 80, type: 'Логарифмические уравнения'},
    {problem: '5.36', answer: 6, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.37', answer: 1, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.38', answer: -1, procent: 55, type: 'Показательные уравнения'},
    {problem: '5.39', answer: 1.5, procent: 50, type: 'Показательные уравнения'},
    {problem: '5.40', answer: 0.4, procent: 45, type: 'Показательные уравнения'},
    {problem: '5.41', answer: -508, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.42', answer: -1, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.43', answer: 7, procent: 25, type: 'Логарифмические уравнения'},
    {problem: '5.44', answer: 8, procent: 25, type: 'Показательные уравнения'},
    {problem: '5.45', answer: -6, procent: 25, type: 'Показательные уравнения'},
    {problem: '5.46', answer: -40, procent: 40, type: 'Логарифмические уравнения'},
    {problem: '5.47', answer: -5, procent: 35, type: 'Логарифмические уравнения'},
    {problem: '5.48', answer: 4, procent: 25, type: 'Иррациональные уравнения'},
    {problem: '5.49', answer: -1, procent: 35, type: 'Линейные уравнения'},
    {problem: '5.50', answer: -3.4, procent: 55, type: 'Линейные уравнения'},
    {problem: '5.51', answer: 4, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.52', answer: 11, procent: 25, type: 'Степенные уравнения'},
    {problem: '5.53', answer: 1, procent: 25, type: 'Иррациональные уравнения'},
    {problem: '5.54', answer: 58, procent: 45, type: 'Иррациональные уравнения'},
    {problem: '5.55', answer: 8, procent: 10, type: 'Логарифмические уравнения'},
    {problem: '5.56', answer: 7, procent: 25, type: 'Иррациональные уравнения'},
    {problem: '5.57', answer: 1.4, procent: 60, type: 'Степенные уравнения'},
    {problem: '5.58', answer: 68, procent: 60, type: 'Логарифмические уравнения'},
    {problem: '5.59', answer: -2, procent: 40, type: 'Степенные уравнения'},



    {problem: '6.1', answer: 25, procent: 20, type: 'Степени'},
    {problem: '6.2', answer: 16, procent: 35, type: 'Степени'},
    {problem: '6.3', answer: 27, procent: 60, type: 'Степени'},
    {problem: '6.4', answer: 4, procent: 55, type: 'Степени'},
    {problem: '6.5', answer: 243, procent: 50, type: 'Степени'},
    {problem: '6.6', answer: 7, procent: 75, type: 'Степени'},
    {problem: '6.7', answer: 1.5, procent: 60, type: 'Степени'},
    {problem: '6.8', answer: 0.8, procent: 80, type: 'Степени'},
    {problem: '6.9', answer: 12, procent: 80, type: 'Степени'},
    {problem: '6.10', answer: -18, procent: 35, type: 'Корни'},
    {problem: '6.11', answer: 2, procent: 15, type: 'Корни'},
    {problem: '6.12', answer: 2, procent: 40, type: 'Корни'},
    {problem: '6.13', answer: 0.2, procent: 50, type: 'Корни'},
    {problem: '6.14', answer: 690, procent: 45, type: 'Корни'},
    {problem: '6.15', answer: 5, procent: 55, type: 'Корни'},
    {problem: '6.16', answer: 2, procent: 45, type: 'Корни'},
    {problem: '6.17', answer: -3, procent: 40, type: 'Тригонометрия'},
    {problem: '6.18', answer: 21, procent: 60, type: 'Тригонометрия'},
    {problem: '6.19', answer: -12, procent: 40, type: 'Тригонометрия'},
    {problem: '6.20', answer: -0.7, procent: 70, type: 'Тригонометрия'},
    {problem: '6.21', answer: 0.8, procent: 70, type: 'Тригонометрия'},
    {problem: '6.22', answer: 8, procent: 50, type: 'Тригонометрия'},
    {problem: '6.23', answer: -21, procent: 85, type: 'Тригонометрия'},
    {problem: '6.24', answer: -8, procent: 60, type: 'Тригонометрия'},
    {problem: '6.25', answer: 3, procent: 70, type: 'Тригонометрия'},
    {problem: '6.26', answer: 4.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.27', answer: 1, procent: 70, type: 'Тригонометрия'},
    {problem: '6.28', answer: -3.5, procent: 75, type: 'Тригонометрия'},
    {problem: '6.29', answer: -0.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.30', answer: -6, procent: 25, type: 'Тригонометрия'},
    {problem: '6.31', answer: 59, procent: 35, type: 'Тригонометрия'},
    {problem: '6.32', answer: -13, procent: 40, type: 'Тригонометрия'},
    {problem: '6.33', answer: 14, procent: 45, type: 'Тригонометрия'},
    {problem: '6.34', answer: 4.8, procent: 60, type: 'Тригонометрия'},
    {problem: '6.35', answer: 2, procent: 30, type: 'Логарифмы'},
    {problem: '6.36', answer: 6, procent: 40, type: 'Логарифмы'},
    {problem: '6.37', answer: 3, procent: 55, type: 'Логарифмы'},
    {problem: '6.38', answer: 2, procent: 60, type: 'Логарифмы'},
    {problem: '6.39', answer: 0, procent: 65, type: 'Логарифмы'},
    {problem: '6.40', answer: 6, procent: 30, type: 'Логарифмы'},
    {problem: '6.41', answer: 2, procent: 70, type: 'Логарифмы'},
    {problem: '6.42', answer: 2, procent: 45, type: 'Логарифмы'},
    {problem: '6.43', answer: -0.5, procent: 60, type: 'Логарифмы'},
    {problem: '6.44', answer: -4, procent: 75, type: 'Логарифмы'},
    {problem: '6.45', answer: 64, procent: 20, type: 'Степени'},
    {problem: '6.46', answer: 25, procent: 35, type: 'Степени'},
    {problem: '6.47', answer: 128, procent: 60, type: 'Степени'},
    {problem: '6.48', answer: 1, procent: 55, type: 'Степени'},
    {problem: '6.49', answer: 59049, procent: 70, type: 'Степени'},
    {problem: '6.50', answer: 121, procent: 75, type: 'Степени'},
    {problem: '6.51', answer: 24.5, procent: 60, type: 'Степени'},
    {problem: '6.52', answer: 0.75, procent: 80, type: 'Степени'},
    {problem: '6.53', answer: 20, procent: 80, type: 'Степени'},
    {problem: '6.54', answer: 7, procent: 35, type: 'Корни'},
    {problem: '6.55', answer: 2.4, procent: 15, type: 'Корни'},
    {problem: '6.56', answer: 7, procent: 40, type: 'Корни'},
    {problem: '6.57', answer: 2, procent: 50, type: 'Корни'},
    {problem: '6.58', answer: 352, procent: 45, type: 'Корни'},
    {problem: '6.59', answer: 6, procent: 55, type: 'Корни'},
    {problem: '6.60', answer: 5, procent: 45, type: 'Корни'},
    {problem: '6.61', answer: -3.5, procent: 40, type: 'Корни'},
    {problem: '6.62', answer: 2, procent: 60, type: 'Тригонометрия'},
    {problem: '6.63', answer: -6, procent: 40, type: 'Тригонометрия'},
    {problem: '6.64', answer: 0.9, procent: 70, type: 'Тригонометрия'},
    {problem: '6.65', answer: -0.4, procent: 70, type: 'Тригонометрия'},
    {problem: '6.66', answer: 6, procent: 50, type: 'Тригонометрия'},
    {problem: '6.67', answer: -28, procent: 85, type: 'Тригонометрия'},
    {problem: '6.68', answer: 2, procent: 60, type: 'Тригонометрия'},
    {problem: '6.69', answer: 6, procent: 70, type: 'Тригонометрия'},
    {problem: '6.70', answer: 1.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.71', answer: 4, procent: 70, type: 'Тригонометрия'},
    {problem: '6.72', answer: -2.5, procent: 75, type: 'Тригонометрия'},
    {problem: '6.73', answer: -0.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.74', answer: 14, procent: 25, type: 'Тригонометрия'},
    {problem: '6.75', answer: 4, procent: 35, type: 'Тригонометрия'},
    {problem: '6.76', answer: -36, procent: 40, type: 'Тригонометрия'},
    {problem: '6.77', answer: 26, procent: 45, type: 'Тригонометрия'},
    {problem: '6.78', answer: 9.5, procent: 60, type: 'Тригонометрия'},
    {problem: '6.79', answer: 3, procent: 30, type: 'Логарифмы'},
    {problem: '6.80', answer: 2, procent: 40, type: 'Логарифмы'},
    {problem: '6.81', answer: 2, procent: 55, type: 'Логарифмы'},
    {problem: '6.82', answer: 2, procent: 60, type: 'Логарифмы'},
    {problem: '6.83', answer: 1, procent: 65, type: 'Логарифмы'},
    {problem: '6.84', answer: 4, procent: 30, type: 'Логарифмы'},
    {problem: '6.85', answer: 3, procent: 70, type: 'Логарифмы'},
    {problem: '6.86', answer: 13, procent: 45, type: 'Логарифмы'},
    {problem: '6.87', answer: -0.5, procent: 60, type: 'Логарифмы'},
    {problem: '6.88', answer: -3, procent: 75, type: 'Логарифмы'},
    {problem: '6.89', answer: 4, procent: 70, type: 'Тригонометрия'},
    {problem: '6.90', answer: 28, procent: 75, type: 'Степени'},
    {problem: '6.91', answer: 63, procent: 30, type: 'Тригонометрия'},
    {problem: '6.92', answer: 4, procent: 75, type: 'Логарифмы'},
    {problem: '6.93', answer: 2, procent: 45, type: 'Корни'},
    {problem: '6.94', answer: 9, procent: 65, type: 'Степени'},
    {problem: '6.95', answer: 1, procent: 85, type: 'Логарифмы'},




    {problem: '7.1', answer: 4, procent: 45, type: 'График функции'},
    {problem: '7.2', answer: 4, procent: 45, type: 'График функции'},
    {problem: '7.3', answer: 9, procent: 60, type: 'График функции'},
    {problem: '7.4', answer: 2, procent: 50, type: 'График функции'},
    {problem: '7.5', answer: 4, procent: 50, type: 'График функции'},
    {problem: '7.6', answer: 8, procent: 80, type: 'График функции'},
    {problem: '7.7', answer: 3, procent: 40, type: 'График производной'},
    {problem: '7.8', answer: 5, procent: 40, type: 'График производной'},
    {problem: '7.9', answer: 4, procent: 75, type: 'График производной'},
    {problem: '7.10', answer: -2, procent: 50, type: 'График производной'},
    {problem: '7.11', answer: 7, procent: 60, type: 'График производной'},
    {problem: '7.12', answer: 4, procent: 60, type: 'График производной'},
    {problem: '7.13', answer: 1, procent: 80, type: 'График производной'},
    {problem: '7.14', answer: 1, procent: 80, type: 'График производной'},
    {problem: '7.15', answer: 3, procent: 60, type: 'Эскиз функции'},
    {problem: '7.16', answer: -5, procent: 60, type: 'Эскиз функции'},
    {problem: '7.17', answer: -4, procent: 60, type: 'Эскиз функции'},
    {problem: '7.18', answer: 2, procent: 60, type: 'Эскиз функции'},
    {problem: '7.19', answer: 3, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.20', answer: 0.25, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.21', answer: -1.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.22', answer: -0.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.23', answer: 6, procent: 60, type: 'Физический смысл производной'},
    {problem: '7.24', answer: 18, procent: 65, type: 'Физический смысл производной'},
    {problem: '7.25', answer: -1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.26', answer: -1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.27', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает'},
    {problem: '7.28', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.29', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.30', answer: 3, procent: 80, type: 'Касательная параллельна или совпадает'},
    {problem: '7.31', answer: 20, procent: 80, type: 'Условие касания'},
    {problem: '7.32', answer: 7, procent: 85, type: 'Первообразная'},
    {problem: '7.33', answer: 3, procent: 85, type: 'Первообразная'},
    {problem: '7.34', answer: 3, procent: 85, type: 'Первообразная'},
    {problem: '7.35', answer: 20, procent: 80, type: 'Первообразная'},
    {problem: '7.36', answer: 6, procent: 100, type: 'Первообразная'},
    {problem: '7.37', answer: 6, procent: 100, type: 'Первообразная'},
    {problem: '7.38', answer: 3, procent: 45, type: 'График функции'},
    {problem: '7.39', answer: 3, procent: 45, type: 'График функции'},
    {problem: '7.40', answer: 6, procent: 60, type: 'График функции'},
    {problem: '7.41', answer: -4, procent: 50, type: 'График функции'},
    {problem: '7.42', answer: 4, procent: 50, type: 'График функции'},
    {problem: '7.43', answer: 5, procent: 80, type: 'График функции'},
    {problem: '7.44', answer: 4, procent: 40, type: 'График производной'},
    {problem: '7.45', answer: 9, procent: 40, type: 'График производной'},
    {problem: '7.46', answer: 3, procent: 75, type: 'График производной'},
    {problem: '7.47', answer: 4, procent: 50, type: 'График производной'},
    {problem: '7.48', answer: -1, procent: 60, type: 'График производной'},
    {problem: '7.49', answer: 9, procent: 60, type: 'График производной'},
    {problem: '7.50', answer: 3, procent: 80, type: 'График производной'},
    {problem: '7.51', answer: 4, procent: 80, type: 'График производной'},
    {problem: '7.52', answer: -1, procent: 60, type: 'Эскиз функции'},
    {problem: '7.53', answer: -7, procent: 60, type: 'Эскиз функции'},
    {problem: '7.54', answer: 3, procent: 60, type: 'Эскиз функции'},
    {problem: '7.55', answer: -2, procent: 60, type: 'Эскиз функции'},
    {problem: '7.56', answer: 0.6, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.57', answer: 0.4, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.58', answer: -0.2, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.59', answer: -0.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.60', answer: 6, procent: 60, type: 'Физический смысл производной'},
    {problem: '7.61', answer: 8, procent: 65, type: 'Физический смысл производной'},
    {problem: '7.62', answer: 2, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.63', answer: 1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.64', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает'},
    {problem: '7.65', answer: 0, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.66', answer: 2, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.67', answer: -3, procent: 80, type: 'Касательная параллельна или совпадает'},
    {problem: '7.68', answer: 17, procent: 80, type: 'Условие касания'},
    {problem: '7.69', answer: 4, procent: 85, type: 'Первообразная'},
    {problem: '7.70', answer: 5, procent: 85, type: 'Первообразная'},
    {problem: '7.71', answer: 4, procent: 85, type: 'Первообразная'},
    {problem: '7.72', answer: 24, procent: 80, type: 'Первообразная'},
    {problem: '7.73', answer: 6.75, procent: 100, type: 'Первообразная'},
    {problem: '7.74', answer: 4.95, procent: 100, type: 'Первообразная'},
    {problem: '7.75', answer: -0.4, procent: 45, type: 'Геометрический смысл производной'},
    {problem: '7.76', answer: 5, procent: 60, type: 'График функции'},
    {problem: '7.77', answer: 7, procent: 70, type: 'Касательная параллельна или совпадает'},


    {problem: '8.1', answer: 25, procent: 40, type: 'Квадратичная формула'},
    {problem: '8.2', answer: 6, procent: 80, type: 'Квадратичная формула'},
    {problem: '8.3', answer: 4.27, procent: 75, type: 'Квадратичная формула'},
    {problem: '8.4', answer: 48, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.5', answer: 1.4, procent: 55, type: 'Квадратичная формула'},
    {problem: '8.6', answer: 6, procent: 90, type: 'Квадратичная формула'},
    {problem: '8.7', answer: 5, procent: 85, type: 'Квадратичная формула'},
    {problem: '8.8', answer: 17, procent: 25, type: 'Рациональная формула'},
    {problem: '8.9', answer: 4, procent: 35, type: 'Рациональная формула'},
    {problem: '8.10', answer: 88, procent: 20, type: 'Рациональная формула'},
    {problem: '8.11', answer: 340, procent: 45, type: 'Рациональная формула'},
    {problem: '8.12', answer: 312, procent: 50, type: 'Рациональная формула'},
    {problem: '8.13', answer: 506, procent: 60, type: 'Рациональная формула'},
    {problem: '8.14', answer: 220.5, procent: 65, type: 'Рациональная формула'},
    {problem: '8.15', answer: 12, procent: 35, type: 'Рациональная формула'},
    {problem: '8.16', answer: 12, procent: 90, type: 'Рациональная формула'},
    {problem: '8.17', answer: 5500, procent: 40, type: 'Иррациональная формула'},
    {problem: '8.18', answer: 0.72, procent: 45, type: 'Иррациональная формула'},
    {problem: '8.19', answer: 320, procent: 60, type: 'Иррациональная формула'},
    {problem: '8.20', answer: 15, procent: 55, type: 'Показательная формула'},
    {problem: '8.21', answer: 8, procent: 95, type: 'Показательная формула'},
    {problem: '8.22', answer: 9.2, procent: 100, type: 'Показательная формула'},
    {problem: '8.23', answer: 7, procent: 60, type: 'Логарифмическая формула'},
    {problem: '8.24', answer: 33, procent: 65, type: 'Логарифмическая формула'},
    {problem: '8.25', answer: 8.5, procent: 85, type: 'Логарифмическая формула'},
    {problem: '8.26', answer: 30, procent: 60, type: 'Тригонометрическая формула'},
    {problem: '8.27', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.28', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.29', answer: 42, procent: 65, type: 'Рациональная формула'},
    {problem: '8.30', answer: 8, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.31', answer: 14, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.32', answer: 0.18, procent: 85, type: 'Тригонометрическая формула'},
    {problem: '8.33', answer: 24, procent: 90, type: 'Рациональная формула'},
    {problem: '8.34', answer: 6000, procent: 90, type: 'Показательная формула'},
    {problem: '8.35', answer: 0.79, procent: 80, type: 'Рациональная формула'},
    {problem: '8.36', answer: 0.265, procent: 70, type: 'Рациональная формула'},
    {problem: '8.37', answer: 30, procent: 40, type: 'Квадратичная формула'},
    {problem: '8.38', answer: 20, procent: 80, type: 'Квадратичная формула'},
    {problem: '8.39', answer: 3.79, procent: 75, type: 'Квадратичная формула'},
    {problem: '8.40', answer: 42, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.41', answer: 0.4, procent: 55, type: 'Квадратичная формула'},
    {problem: '8.42', answer: 1, procent: 90, type: 'Квадратичная формула'},
    {problem: '8.43', answer: 4, procent: 85, type: 'Квадратичная формула'},
    {problem: '8.44', answer: 9, procent: 25, type: 'Рациональная формула'},
    {problem: '8.45', answer: 2.8, procent: 35, type: 'Рациональная формула'},
    {problem: '8.46', answer: 27.5, procent: 20, type: 'Рациональная формула'},
    {problem: '8.47', answer: 260, procent: 45, type: 'Рациональная формула'},
    {problem: '8.48', answer: 319, procent: 50, type: 'Рациональная формула'},
    {problem: '8.49', answer: 753, procent: 60, type: 'Рациональная формула'},
    {problem: '8.50', answer: 253, procent: 65, type: 'Рациональная формула'},
    {problem: '8.51', answer: 45, procent: 35, type: 'Рациональная формула'},
    {problem: '8.52', answer: 3.5, procent: 90, type: 'Рациональная формула'},
    {problem: '8.53', answer: 0.9, procent: 40, type: 'Иррациональная формула'},
    {problem: '8.54', answer: 0.98, procent: 45, type: 'Иррациональная формула'},
    {problem: '8.55', answer: 20, procent: 60, type: 'Иррациональная формула'},
    {problem: '8.56', answer: 10, procent: 55, type: 'Показательная формула'},
    {problem: '8.57', answer: 125, procent: 95, type: 'Показательная формула'},
    {problem: '8.58', answer: 9.9, procent: 100, type: 'Показательная формула'},
    {problem: '8.59', answer: 2.5, procent: 60, type:  'Логарифмическая формула'},
    {problem: '8.60', answer: 33, procent: 65, type:  'Логарифмическая формула'},
    {problem: '8.61', answer: 5.5, procent: 85, type:  'Логарифмическая формула'},
    {problem: '8.62', answer: 90, procent: 60, type: 'Тригонометрическая формула'},
    {problem: '8.63', answer: 90, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.64', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.65', answer: 2.1, procent: 65, type: 'Рациональная формула'},
    {problem: '8.66', answer: 10, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.67', answer: 12, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.68', answer: 0.38, procent: 85, type: 'Тригонометрическая формула'},
    {problem: '8.69', answer: 105, procent: 90, type: 'Рациональная формула'},
    {problem: '8.70', answer: 5000, procent: 90, type: 'Показательная формула'},
    {problem: '8.71', answer: 0.47, procent: 80, type: 'Рациональная формула'},
    {problem: '8.72', answer: 0.445, procent: 70, type: 'Рациональная формула'},
    {problem: '8.73', answer: 90, procent: 75, type: 'Тригонометрическая формула'},
    {problem: '8.74', answer: 11.2, procent: 50, type: 'Логарифмическая формула'},
    {problem: '8.75', answer: 42, procent: 30, type: 'Квадратичная формула'},
    {problem: '8.76', answer: 2.4, procent: 60, type: 'Логарифмическая формула'},


    {problem: '9.1', answer: 14, procent: 20, type: 'Движение по прямой'},
    {problem: '9.2', answer: 10, procent: 20, type: 'Движение по прямой'},
    {problem: '9.3', answer: 11, procent: 35, type: 'Движение по прямой'},
    {problem: '9.4', answer: 17, procent: 35, type: 'Движение по прямой'},
    {problem: '9.5', answer: 10, procent: 45, type: 'Движение по прямой'},
    {problem: '9.6', answer: 5, procent: 50, type: 'Движение по прямой'},
    {problem: '9.7', answer: 15, procent: 55, type: 'Движение по прямой'},
    {problem: '9.8', answer: 50, procent: 45, type:'Движение по прямой' },
    {problem: '9.9', answer: 1, procent: 65, type: 'Движение по прямой'},
    {problem: '9.10', answer: 240, procent: 95, type: 'Движение по воде'},
    {problem: '9.11', answer: 14, procent: 40, type: 'Движение по воде'},
    {problem: '9.12', answer: 2, procent: 35, type: 'Движение по воде'},
    {problem: '9.13', answer: 9, procent: 45, type: 'Движение по воде'},
    {problem: '9.14', answer: 2, procent: 40, type: 'Движение по воде'},
    {problem: '9.15', answer: 3, procent: 55, type: 'Движение по воде'},
    {problem: '9.16', answer: 20, procent: 55, type: 'Движение по воде'},
    {problem: '9.17', answer: 756, procent: 80, type: 'Движение по воде'},
    {problem: '9.18', answer: 7, procent: 65, type: 'Движение по воде'},
    {problem: '9.19', answer: 20, procent: 70, type: 'Движение по воде'},
    {problem: '9.20', answer: 55, procent: 50, type: 'Движение по прямой'},
    {problem: '9.21', answer: 90, procent: 50, type: 'Движение по прямой'},
    {problem: '9.22', answer: 18, procent: 40, type: 'Смеси и сплавы'},
    {problem: '9.23', answer: 16, procent: 55, type: 'Смеси и сплавы'},
    {problem: '9.24', answer: 18, procent: 70, type: 'Смеси и сплавы'},
    {problem: '9.25', answer: 18, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.26', answer: 30, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.27', answer: 15, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.28', answer: 28, procent: 85, type: 'Смеси и сплавы'},
    {problem: '9.29', answer: 15, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.30', answer: 10, procent: 30, type: 'Проценты'},
    {problem: '9.31', answer: 27, procent: 80, type: 'Проценты'},
    {problem: '9.32', answer: 189, procent: 100, type: 'Проценты'},
    {problem: '9.33', answer: 20, procent: 45, type: 'Проценты'},
    {problem: '9.34', answer: 10, procent: 25, type: 'Производительность'},
    {problem: '9.35', answer: 16, procent: 25, type: 'Производительность'},
    {problem: '9.36', answer: 14, procent: 25, type: 'Производительность'},
    {problem: '9.37', answer: 10, procent: 65, type: 'Производительность'},
    {problem: '9.38', answer: 10, procent: 25, type: 'Производительность'},
    {problem: '9.39', answer: 25, procent: 65, type: 'Производительность'},
    {problem: '9.40', answer: 8, procent: 70, type: 'Производительность'},
    {problem: '9.41', answer: 30, procent: 65, type: 'Производительность'},
    {problem: '9.42', answer: 10, procent: 55, type: 'Производительность'},
    {problem: '9.43', answer: 78, procent: 75, type: 'Производительность'},
    {problem: '9.44', answer: 8.4, procent: 85, type: 'Совместная работа'},
    {problem: '9.45', answer: 14, procent: 20, type: 'Движение по прямой'},
    {problem: '9.46', answer: 60, procent: 20, type: 'Движение по прямой'},
    {problem: '9.47', answer: 9, procent: 35, type: 'Движение по прямой'},
    {problem: '9.48', answer: 19, procent: 35, type: 'Движение по прямой'},
    {problem: '9.49', answer: 10, procent: 45, type: 'Движение по прямой'},
    {problem: '9.50', answer: 3, procent: 50, type: 'Движение по прямой'},
    {problem: '9.51', answer: 15, procent: 55, type: 'Движение по прямой'},
    {problem: '9.52', answer: 60, procent: 45, type: 'Движение по прямой'},
    {problem: '9.53', answer: 1, procent: 65, type: 'Движение по прямой'},
    {problem: '9.54', answer: 360, procent: 95, type: 'Движение по прямой'},
    {problem: '9.55', answer: 13, procent: 40, type: 'Движение по воде'},
    {problem: '9.56', answer: 3, procent: 35, type: 'Движение по воде'},
    {problem: '9.57', answer: 20, procent: 45, type: 'Движение по воде'},
    {problem: '9.58', answer: 1, procent: 40, type: 'Движение по воде'},
    {problem: '9.59', answer: 1, procent: 55, type: 'Движение по воде'},
    {problem: '9.60', answer: 20, procent: 55, type: 'Движение по воде'},
    {problem: '9.61', answer: 630, procent: 80, type: 'Движение по воде'},
    {problem: '9.62', answer: 6, procent: 65, type: 'Движение по воде'},
    {problem: '9.63', answer: 22, procent: 70, type: 'Движение по воде'},
    {problem: '9.64', answer: 90, procent: 50, type: 'Движение по прямой'},
    {problem: '9.65', answer: 80, procent: 50, type: 'Движение по прямой'},
    {problem: '9.66', answer: 13, procent: 40, type: 'Смеси и сплавы'},
    {problem: '9.67', answer: 7, procent: 55, type: 'Смеси и сплавы'},
    {problem: '9.68', answer: 63, procent: 70, type: 'Смеси и сплавы'},
    {problem: '9.69', answer: 12, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.70', answer: 35, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.71', answer: 40, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.72', answer: 14, procent: 85, type: 'Смеси и сплавы'},
    {problem: '9.73', answer: 35, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.74', answer: 35, procent: 30, type: 'Проценты'},
    {problem: '9.75', answer: 43, procent: 80, type: 'Проценты'},
    {problem: '9.76', answer: 36, procent: 100, type: 'Проценты'},
    {problem: '9.77', answer: 10, procent: 45, type: 'Проценты'},
    {problem: '9.78', answer: 11, procent: 25, type: 'Производительность'},
    {problem: '9.79', answer: 11, procent: 25, type: 'Производительность'},
    {problem: '9.80', answer: 31, procent: 25, type: 'Производительность'},
    {problem: '9.81', answer: 20, procent: 65, type: 'Производительность'},
    {problem: '9.82', answer: 15, procent: 25, type: 'Производительность'},
    {problem: '9.83', answer: 25, procent: 65, type: 'Производительность'},
    {problem: '9.84', answer: 9, procent: 70, type: 'Производительность'},
    {problem: '9.85', answer: 26, procent: 65, type: 'Производительность'},
    {problem: '9.86', answer: 6, procent: 55, type: 'Совместная работа'},
    {problem: '9.87', answer: 72, procent: 75, type: 'Совместная работа'},
    {problem: '9.88', answer: 5.6, procent: 85, type: 'Совместная работа'},
    {problem: '9.89', answer: 52, procent: 65, type: 'Движение по прямой'},
    {problem: '9.90', answer: 7, procent: 60, type: 'Совместная работа'},
    {problem: '9.91', answer: 50, procent: 65, type: 'Смеси и сплавы'},
    {problem: '9.92', answer: 4, procent: 40, type: 'Движение по воде'},
    {problem: '9.93', answer: 18, procent: 55, type: 'Движение по воде'},
    {problem: '9.94', answer: 56, procent: 80, type: 'Совместная работа'},

    



    {problem: '10.1', answer: 13, procent: 35, type: 'Прямая'},
    {problem: '10.2', answer: -7, procent: 40, type: 'Прямая'},
    {problem: '10.3', answer: 12, procent: 30, type: 'Парабола'},
    {problem: '10.4', answer: 41, procent: 45, type: 'Парабола'},
    {problem: '10.5', answer: 61, procent: 30, type: 'Парабола'},
    {problem: '10.6', answer: -67, procent: 60, type: 'Парабола'},
    {problem: '10.7', answer: 0.2, procent: 15, type: 'Гипербола'},
    {problem: '10.8', answer: 0.75, procent: 40, type: 'Гипербола'},
    {problem: '10.9', answer: -15, procent: 65, type: 'Гипербола'},
    {problem: '10.10', answer: 0.15, procent: 65, type: 'Гипербола'},
    {problem: '10.11', answer: 6.5, procent: 40, type: 'Иррациональная функция'},
    {problem: '10.12', answer: 32, procent: 50, type: 'Иррациональная функция'},
    {problem: '10.13', answer: 8, procent: 25, type: 'Показательная функция'},
    {problem: '10.14', answer: 16, procent: 25, type: 'Показательная функция'},
    {problem: '10.15', answer: 61, procent: 45, type: 'Показательная функция'},
    {problem: '10.16', answer: -4, procent: 45, type: 'Показательная функция'},
    {problem: '10.17', answer: -3, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.18', answer: 4, procent: 20, type: 'Логарифмическая функция'},
    {problem: '10.19', answer: 2, procent: 50, type: 'Логарифмическая функция'},
    {problem: '10.20', answer: 16, procent: 55, type: 'Логарифмическая функция'},
    {problem: '10.21', answer: 3, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.22', answer: -11, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.23', answer: 4, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.24', answer: 8, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.25', answer: -10, procent: 85, type: 'Пересечение графиков'},
    {problem: '10.26', answer: 16, procent: 70, type: 'Пересечение графиков'},
    {problem: '10.27', answer: 11, procent: 35, type: 'Прямая'},
    {problem: '10.28', answer: 14, procent: 40, type: 'Прямая'},
    {problem: '10.29', answer: 20, procent: 30, type: 'Парабола'},
    {problem: '10.30', answer: 53, procent: 45, type: 'Парабола'},
    {problem: '10.31', answer: -13, procent: 30, type: 'Парабола'},
    {problem: '10.32', answer: 20, procent: 60, type: 'Парабола'},
    {problem: '10.33', answer: 0.1, procent: 15, type: 'Гипербола'},
    {problem: '10.34', answer: -2.96, procent: 65, type: 'Гипербола'},
    {problem: '10.35', answer: -0.25, procent: 65, type: 'Гипербола'},
    {problem: '10.36', answer: -0.25, procent: 40, type: 'Гипербола'},
    {problem: '10.37', answer: -2.4, procent: 50, type: 'Иррациональная функция'},
    {problem: '10.38', answer: 24.5, procent: 25, type: 'Иррациональная функция'},
    {problem: '10.39', answer: 16, procent: 25, type: 'Показательная функция'},
    {problem: '10.40', answer: 8, procent: 25, type: 'Показательная функция'},
    {problem: '10.41', answer: 29, procent: 45, type: 'Показательная функция'},
    {problem: '10.42', answer: 6, procent: 45, type: 'Показательная функция'},
    {problem: '10.43', answer: -4, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.44', answer: 3, procent: 20, type: 'Логарифмическая функция'},
    {problem: '10.45', answer: 1, procent: 50, type: 'Логарифмическая функция'},
    {problem: '10.46', answer: 64, procent: 55, type: 'Логарифмическая функция'},
    {problem: '10.47', answer: 4, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.48', answer: -11, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.49', answer: 5, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.50', answer: 8, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.51', answer: 8, procent: 85, type: 'Пересечение графиков'},
    {problem: '10.52', answer: 36, procent: 70, type: 'Пересечение графиков'},
    {problem: '10.53', answer: 7, procent: 55, type: 'Пересечение графиков'},
    {problem: '10.54', answer: 6, procent: 55, type: 'Пересечение графиков'},
    {problem: '10.55', answer: 5, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.56', answer: 27, procent: 40, type: 'Показательная функция'},
    {problem: '10.57', answer: 0.2, procent: 45, type: 'Гипербола'},
    {problem: '10.58', answer: -3, procent: 25, type: 'Логарифмическая функция'},



    {problem: '11.1', answer: 21, procent: 35, type: 'Степенная функция'},
    {problem: '11.2', answer: 19, procent: 35, type: 'Степенная функция'},
    {problem: '11.3', answer: -8, procent: 55, type: 'Степенная функция'},
    {problem: '11.4', answer: 1, procent: 50, type: 'Степенная функция'},
    {problem: '11.5', answer: 44, procent: 75, type: 'Степенная функция'},
    {problem: '11.6', answer: 25, procent: 40, type: 'Степенная функция'},
    {problem: '11.7', answer: 81, procent: 45, type: 'Степенная функция'},
    {problem: '11.8', answer: -77, procent: 65, type: 'Степенная функция'},
    {problem: '11.9', answer: 2, procent: 80, type: 'Степенная функция'},
    {problem: '11.10', answer: -4, procent: 85, type: 'Степенная функция'},
    {problem: '11.11', answer: -2, procent: 85, type: 'Степенная функция'},
    {problem: '11.12', answer: 117, procent: 50, type: 'Тригонометрическая функция'},
    {problem: '11.13', answer: 29, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.14', answer: -5, procent: 60, type: 'Тригонометрическая функция'},
    {problem: '11.15', answer: 41, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.16', answer: 14, procent: 65, type: 'Тригонометрическая функция'},
    {problem: '11.17', answer: 7, procent: 50, type: 'Показательная функция'},
    {problem: '11.18', answer: 0, procent: 100, type: 'Показательная функция'},
    {problem: '11.19', answer: -2, procent: 55, type: 'Логарифмическая функция'},
    {problem: '11.20', answer: -8.9, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.21', answer: -2, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.22', answer: 28, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.23', answer: 6, procent: 45, type: 'Логарифмическая функция'},
    {problem: '11.24', answer: 15, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.25', answer: 8, procent: 65, type: 'Логарифмическая функция'},
    {problem: '11.26', answer: 4, procent: 50, type: 'Логарифмическая функция'},
    {problem: '11.27', answer: 0.5, procent: 85, type: 'Произведение'},
    {problem: '11.28', answer: 7, procent: 75, type: 'Произведение'},
    {problem: '11.29', answer: -21, procent: 40, type: 'Произведение'},
    {problem: '11.30', answer: 3, procent: 60, type: 'Произведение'},
    {problem: '11.31', answer: -1, procent: 45, type: 'Произведение'},
    {problem: '11.32', answer: 1, procent: 45, type: 'Произведение'},
    {problem: '11.33', answer: 2, procent: 65, type: 'Произведение'},
    {problem: '11.34', answer: -3, procent: 70, type: 'Произведение'},
    {problem: '11.35', answer: -35, procent: 50, type: 'Произведение'},
    {problem: '11.36', answer: 6, procent: 80, type: 'Частное'},
    {problem: '11.37', answer: -15, procent: 80, type: 'Частное'},
    {problem: '11.38', answer: 42, procent: 60, type: 'Частное'},
    {problem: '11.39', answer: -1005, procent: 55, type: 'Степенная функция'},
    {problem: '11.40', answer: 3, procent: 35, type: 'Степенная функция'},
    {problem: '11.41', answer: 9, procent: 55, type: 'Степенная функция'},
    {problem: '11.42', answer: -2, procent: 50, type: 'Степенная функция'},
    {problem: '11.43', answer: 3, procent: 75, type: 'Степенная функция'},
    {problem: '11.44', answer: 1, procent: 40, type: 'Степенная функция'},
    {problem: '11.45', answer: 2.25, procent: 50, type: 'Степенная функция'},
    {problem: '11.46', answer: 22, procent: 65, type: 'Степенная функция'},
    {problem: '11.47', answer: 7, procent: 80, type: 'Степенная функция'},
    {problem: '11.48', answer: 3, procent: 85, type: 'Степенная функция'},
    {problem: '11.49', answer: 1, procent: 85, type: 'Степенная функция'},
    {problem: '11.50', answer: 180, procent: 50, type: 'Тригонометрическая функция'},
    {problem: '11.51', answer: 30, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.52', answer: 32, procent: 60, type: 'Тригонометрическая функция'},
    {problem: '11.53', answer: -35, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.54', answer: 12, procent: 65, type: 'Тригонометрическая функция'},
    {problem: '11.55', answer: 5, procent: 50, type: 'Показательная функция'},
    {problem: '11.56', answer: -8.25, procent: 100, type: 'Показательная функция'},
    {problem: '11.57', answer: 3, procent: 55, type: 'Логарифмическая функция'},
    {problem: '11.58', answer: -6.5, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.59', answer: 3, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.60', answer: 19, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.61', answer: 5, procent: 45, type: 'Логарифмическая функция'},
    {problem: '11.62', answer: -27, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.63', answer: 4, procent: 65, type: 'Логарифмическая функция'},
    {problem: '11.64', answer: 12, procent: 50, type: 'Логарифмическая функция'},
    {problem: '11.65', answer: 1.5, procent: 85, type: 'Произведение'},
    {problem: '11.66', answer: 9, procent: 75, type: 'Произведение'},
    {problem: '11.67', answer: -5, procent: 40, type: 'Произведение'},
    {problem: '11.68', answer: 5, procent: 60, type: 'Произведение'},
    {problem: '11.69', answer: 0.5, procent: 45, type: 'Произведение'},
    {problem: '11.70', answer: -0.5, procent: 45, type: 'Произведение'},
    {problem: '11.71', answer: 2, procent: 65, type: 'Произведение'},
    {problem: '11.72', answer: -6, procent: 70, type: 'Произведение'},
    {problem: '11.73', answer: 3, procent: 50, type: 'Произведение'},
    {problem: '11.74', answer: -14, procent: 80, type: 'Частное'},
    {problem: '11.75', answer: 16, procent: 80, type: 'Частное'},
    {problem: '11.76', answer: -10, procent: 60, type: 'Частное'},
    {problem: '11.77', answer: -5, procent: 40, type: 'Степенная функция'},
    {problem: '11.78', answer: 8, procent: 55, type: 'Логарифмическая функция'},
    {problem: '11.79', answer: 7, procent: 45, type: 'Степенная функция'},
    {problem: '11.80', answer: 8, procent: 75, type: 'Произведение'},
    {problem: '11.81', answer: -3, procent: 30, type: 'Степенная функция'},
    {problem: '11.82', answer: 3, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.83', answer: 10, procent: 30, type: 'Степенная функция'},
    {problem: '11.84', answer: 13, procent: 75, type: 'Произведение'},
    {problem: '11.85', answer: 7, procent: 65, type: 'Частное'},



    {problem: '12.1', procent: 40, type: 'Тригонометрия'},
    {problem: '12.2', procent: 50, type: 'Тригонометрия'},
    {problem: '12.3', procent: 35, type: 'Тригонометрия'},
    {problem: '12.4', procent: 50, type: 'Пок'},
    



    {problem: '13.1', procent: 40, type: 'Тригонометрия'},



    {problem: '14.1', procent: 40, type: 'Тригонометрия'},



    {problem: '15.1', procent: 40, type: 'Тригонометрия'},



    {problem: '16.1', procent: 40, type: 'Тригонометрия'},



    {problem: '17.1', procent: 40, type: 'Тригонометрия'},



    {problem: '18.1', procent: 40, type: 'Тригонометрия'},
]   



const themeProblems = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], // Темы каждой задачи
    7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [], 16: [], 17: [], 18: []}



const problems = ['-', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []] // Все задания по номерам




allProblems.forEach(element => { // Распределение по ключу number
    const problemSplit = element.problem.split('.') // problem = 3.25 --> [3, 25]

    element.id = +problemSplit[0] * 1000 + (+problemSplit[1]) // id = 3025
    element.number = +problemSplit[0] // 3
    problems[element.number].push(element) // problem[3].push(obj)


    const thisType = element.type // Тип задачи
    const thisThemeObject = themeProblems[element.number] // Массив тем этой задачи [{name: 'уравнение', count: 3}, {name: 'неравенство', count: 4}...]
    let thisTypes = [] // Массив, где будут все текущие типы, которые были добавлены на данных момент
    for (let index = 0; index < thisThemeObject.length; index ++) thisTypes.push(thisThemeObject[index].name) // Добавляем имена
    
    if (!thisTypes.includes(thisType)) thisThemeObject.push({name: thisType, count: 1}) // Если новый тип - {name: 'НАЗВАНИЕ', count: 1}
    else { // Иначе перебираем все прошлые темы - ищем эту неновую тему и делаем ++
        for (let index = 0; index < thisThemeObject.length; index ++) {
            if (thisType === thisThemeObject[index].name) thisThemeObject[index].count ++ 
        }
    }
})



function getNormalClass(text){ // Функция, которая возвращает класс без пробелов ('ААА, БББ' --> 'АААL_БББ')
    const splitText = text.split(' ') // Разделяем по пробелам
    if (splitText.length === 1) return text // |text| === 1 

    let result = '' 
    splitText.forEach((element, index) => result += element + (index !== splitText.length - 1 ? '_' : '')) // К каждому слову добавялем _, если слово не в конце
    result = result.replaceAll(',', 'L') // , --> L
    return result
}



function getSpecialClass(text){ return text.replaceAll('_', ' ').replaceAll('L', ',') } // 'АААL_БББ' --> 'ААА, БББ'



const specialVariants = ['-', // Специальные варианты
                        {variant: ['1.31', '2.21', '3.27', '4.23', '5.49', '6.7', '7.3', '8.32', '9.89', '10.57', '11.25'], name: 'Досрок 2023 - резерв'},
                        {variant: ['1.6', '2.46', '3.39', '4.25', '5.6', '6.70', '7.17', '8.20', '9.90', '10.18', '11.4'], name: 'Досрок 2023'},
                        {variant: ['1.56', '2.30', '3.3', '4.11', '5.48', '6.66', '7.56', '8.56', '9.16', '10.44', '11.77'], name: 'Основная волна 2022'},
                        {variant: ['1.19', '1.25', '1.33', '1.46', '1.51', '1.73', '2.78', '2.79', '2.160', '2.161', '3.5', '3.24', '4.9', '4.35', '5.45', '6.37', '6.39', '6.83', '7.7', '7.44', '7.45', '8.12', '8.33', '8.69', '9.36', '9.38', '9.78', '9.79', '9.80', '10.23', '10.24', '10.51', '10.54', '11.8', '11.46'], name: 'Основная волна 2023'}]


specialVariants.forEach((element, index) => {
    if (index !== 0){
        const thisVariant = element.variant
        const countProblem = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
        thisVariant.forEach(element => {
            const numberProblem = +element.split('.')[0]
            countProblem[numberProblem] ++
        })
    
        element.countProblem = countProblem
    }
})



function getArrayObjectForSpecialVariants(numberVariant){ // ['1.21', '3.32'] -> [{problem: '1.21' ....}, {problem: '3.32'....}]
    let resultArray = []
    const thisIdArray = specialVariants[numberVariant].variant // Массив строк id задач

    allProblems.forEach(element => { // Проходимся по всем задачам
        if (thisIdArray.includes(element.problem)) resultArray.push(element) // Если {n.m} in thisIdArray, добавляем задачу в thisIdArray
    })

    return resultArray

}



const timeOnProblem = { // Время на задачу с каким-то номером
    1: [1, 1], 2: [1, 21], 3: [0, 31], 4: [1, 31], 5: [0, 46], 6: [1, 11], 
    7: [0, 41], 8: [2, 1], 9: [3, 1], 10: [2, 1], 11: [1, 21]
}



const secondBallArray = { // Словарь перевода баллов из первичной во вторичную
    0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27,
    6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
    11: 64, 12: 66, 13: 68, 14: 70, 15: 72, 16: 74,
    17: 76, 18: 78, 19: 80, 20: 82, 21: 84, 22: 86, 23: 88,
    24: 90, 25: 92, 26: 94, 27: 96, 28: 98, 29: 100, 30: 100, 31: 100
}



function randomProblem(thisIndexProblem, thisCountProblem) { // thisCountProblem неповторяющих элементов из массива problems[thisIndexProblem]
    let result = []
    const myArray = problems[thisIndexProblem] // Масссив задач этого номера

    const start = getLocalStorage('fromAndTo').start // Min сложность
    const finish = getLocalStorage('fromAndTo').finish // Max сложномть
    

    function getRandomInt(numberIndex) { return Math.floor(Math.random() * Math.floor(numberIndex)) } // Рандомный индекс
    
    while (result.length !== thisCountProblem) { // Пока не хватает задач
        const randomIndex = getRandomInt(myArray.length) // Забираем индекс
        const randomElement = myArray[randomIndex] // Случайная задачи
        const procentThis = randomElement.procent // сложность этой задачи
        result.push(randomElement) // Добавляем задачу (задача остается, если: 1) result = set(result)   2) start <= procentThis <= finish)
        result = result.filter((element, index) => result.indexOf(element) === index && procentThis >= start && procentThis <= finish)
    }
    return result
}



function getObjectsFromAndTo(thisIndexProblem, start, finish){
    let result = []
    const myArray = problems[thisIndexProblem]

    myArray.forEach(element => {
        const thisProcent = element.procent
        if (thisProcent >= start && thisProcent <= finish) result.push(element)
    })

    return result
}



function withOutBadZero(text){ // Функция, которая убирает незнач. нули
    const resultText = text ? +text : ''
    return resultText
}



function randomVariant(countProblem){ // Генератор рандомного варинта
    let result = []
    for (let index = 1; index <= 18; index ++){
        const randomProblemArray = randomProblem(index, countProblem[index]) // Массив задач номера i
        randomProblemArray.forEach(element => result.push(element)) // Добавляем все эти задачи в итоговый массив
    }

    return result
}



function getStar(boolean){ // Функция, которая возвращает нужную звезду
    if (boolean) return '&#9733'
    else return '&#10032' 
}



function colorProcent(procent){ // Цвет задачи
    if (procent < 30) return 'greenColor1'
    else if (procent < 70) return 'yellowColor1'
    else return 'redColor1'

}



function deleteOldStats(){ // Удаление плохой статистики
    const stats = getLocalStorage('stats') // Наша статистика
    const newStats = []
    
    if (stats){ // Если статистика есть
        stats.forEach(element => {
            if (element.countProblem) {
                const newObj = element
                const thisStats = element.stats
                let newThisStats = []
                
                if (thisStats.length !== 19){
                    for (let index = 0; index < thisStats.length - 1; index ++) newThisStats.push(thisStats[index])
                    for (let index = 0; index < 19 - thisStats.length; index ++) newThisStats.push({right: 0, count: 0})
                    newThisStats.push(thisStats[thisStats.length - 1])
                    newObj.stats = newThisStats

                    const countProblem = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    const thisProblem = element.problems
                    
                    thisProblem.forEach(element => {
                        const numberProblem = +element.problem.split('.')[0]
                        countProblem[numberProblem] ++
                    })
                
                    newObj.countProblem = countProblem
                    
                    newStats.push(newObj)                    
                } else newStats.push(newObj)
            }
        })
        
        if (newStats.length > 0) setLocalStorage('stats', newStats)
    }
}



function problemHTMLvariant(problem) { // Вывод задания на HTML на вкладку variant
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер

    return `<div id = ${id} class="conteyner">
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star close"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg' >
        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
            </span>
            
        </div>
        
        <div class='conteynerSolution close'> </div>

    </div>`
} 




function getRightAnswerHTML(problem){ // Добавление "правильный ответ"
    const rightAnswer = String(problem.answer).replace('.', ',') // Правильный ответ

    return `<span class='showRightAnswer close'> 
        <span class='pokOtw'>Показать ответ: </span> 
        <span class='conteynerRightAnswer'> </span>
        <span class='rightAnswer close'>${rightAnswer} </span>
    </span>`
}



function problemHTMLstress(problem) { // Вывод задание на HTML на вкладку stress
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер

    return `<div id = ${id} class="conteynerStress" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img class='imgStress' src='/MathWebDemo/img/${problem.problem}.jpg'>
        <div class="answer gray1">

            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInputStress'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>
        </div>
    </div>`
}



function problemHTMLcurr(problem) { // Вывод задания на HTML на вкладку currSubject
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    

    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg'>
        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInputStress'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>
        </div>
    </div>`
}



function showRightAnswerHTML(){ // Показ правильного ответа
    document.addEventListener('click', (event) => { // Обработка события - нажание на "показать правильный ответ"
        if (event.target.classList[0] !== 'pokOtw') return // Если не кнопка "показать ответ" - выходим
        

        let fullConteyner = event.target.closest('.conteyner')
        if (!fullConteyner) fullConteyner = event.target.closest('.conteynerStress')

        const rightAnswer = fullConteyner.querySelector('.rightAnswer') // Правильный ответ (14, -4.51)
        const showAnswer = fullConteyner.querySelector('.pokOtw') // Текст-кнопка (Показать/Скрыть ответ)

        
        // close <--> show
        let boolValue
        if (rightAnswer.classList[1] === 'close' || rightAnswer.classList[2] === 'close' || rightAnswer.classList[3] === 'close'){
            rightAnswer.classList.remove('close')
            rightAnswer.classList.add('show')
            showAnswer.innerHTML = 'Скрыть ответ: '  
            boolValue = false

        } else {
            rightAnswer.classList.remove('show')
            rightAnswer.classList.add('close')
            showAnswer.innerHTML = 'Показать ответ: '
            boolValue = true
        }
        
        const idThisConteyner = +fullConteyner.id
        const thisObj = searchObjectById(idThisConteyner, allProblems)
                
        
        if (thisObj.number >= 12) {
            const thisImg = fullConteyner.querySelector('.rightPhoto')
            
            const height = +thisImg.height + 50
            const answerLine = fullConteyner.querySelector('.answer')
            
            !boolValue ? answerLine.style.height = `${height}px` : answerLine.style.height = `50px`
            !boolValue ? showAnswer.style.bottom = `${(height - 50) / 2 - 7}px` : showAnswer.style.bottom = `0px`            

            location.reload()
        }
    })



    document.addEventListener('click', event =>{
        if (event.target.classList[1] !== 'pokOtw2') return


        

        const conteyner = event.target.closest('.conteyner') // Контейнер правильного ответа
        const pokOtw2 = conteyner.querySelector('.pokOtw2')
        const rightPhoto = conteyner.querySelector('.rightPhoto') // Правильный ответ (14, -4.51)
        const img = conteyner.querySelector('.rightPhoto')
        const h = +img.naturalHeight

        
        
        if (rightPhoto.classList[1] === 'show' || rightPhoto.classList[3] === 'show') { 
            rightPhoto.classList.add('close')
            rightPhoto.classList.remove('show')

            pokOtw2.style.top = `${(h - 30) / 2}px`
            pokOtw2.innerHTML = 'Показать ответ:'
        }
        else if (rightPhoto.classList[1] === 'close' || rightPhoto.classList[3] === 'close') {
            rightPhoto.classList.add('show')
            rightPhoto.classList.remove('close')

            pokOtw2.style.top = ``
            pokOtw2.innerHTML = 'Скрыть ответ:'
        }

        
    })
}



function eventClickOnStar(){ // Функция, которая меняет звезду и special в LocalStr
    document.addEventListener('click', (event) => { // Обработка события - нажатие на звезду
        if (event.target.classList[0] !== 'star') return // Если не "звезда" - выходим
       
        let parent = event.target.closest('.conteyner') // Родитель звезды
        if (!parent) parent = event.target.closest('.conteynerStress') // Родитель звезды для другого названия
        
        const objSpecial = getLocalStorage('special') // Массив избранных задач
        const idThisParent = +parent.id // id звезды
        const thisBoolean = objSpecial[idThisParent] // Избранная задача или нет
        const resultBoolean = !thisBoolean // true <--> false

        objSpecial[idThisParent] = resultBoolean // true <--> false в objSpecial
        setLocalStorage('special', objSpecial) // objSpecial в LocalStr 'special'

        const starHTML = parent.querySelector('.star') // Звезда
        starHTML.innerHTML = getStar(resultBoolean) // Меняем звезду 
    })
}



function renderSpecial(){
    const specialArray = getLocalStorage('special')

    if (specialArray) {
        allProblems.forEach(element => {
            const thisId = element.id
            if (specialArray[thisId] === undefined) specialArray[thisId] = false
        })
    
        setLocalStorage('special', specialArray)
    }

    
}



renderSpecial()
eventClickOnStar()
showRightAnswerHTML()
deleteOldStats()
showSolutionHTML()



function getSpecialObject(){ // Забираем избранные задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач 
    let result = []

    allProblems.forEach(element => { // Перебираем все задачи
        const idThisProblem = element.id // id этой задачи
        if (objSpecial[idThisProblem]) result.push(element) // Если id: true --> добавляем
    })

    return result
}



function addW900(node, boolean){ // add/remove w900
    const thisNode = document.querySelector(node) // Наш компонент
    boolean ? thisNode.classList.add('w900') : thisNode.classList.remove('w900') // Если true - добавляем, иначе убираем
}



function sortProblem(thisSelect){ // Сортировка массива 'thisProblems'
    let sortedArray
    if (thisSelect === 'oldToNew') sortedArray = getThisProblems().sort((a, b) => a.id - b.id)
    else if (thisSelect === 'newToOld') sortedArray = getThisProblems().sort((a, b) => b.id - a.id)
    else if (thisSelect === 'easyToHard') sortedArray = getThisProblems().sort((a, b) => a.procent - b.procent)
    else if (thisSelect === 'hardToEasy') sortedArray = getThisProblems().sort((a, b) => b.procent - a.procent)
    //else if (thisSelect === '...'){
    //    const arrayProblem = getThisProblems()
    //    const proc = get..
    //    
    //    arrayProblem.forEach(element => element. = proc[element.id])
    //}


    setLocalStorage('thisProblems', sortedArray)
}



function createAndSaveColors(thisProblems){ // Создание и/или сохрание цветов
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'submit') return

        if (!getLocalStorage('color')){ // Если нет в LocalStr createAndSaveColors, добавить gray
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = 'gray'
            setLocalStorage('color', array)    
        }

        const conteynerFull = event.target.closest('.conteyner') // Контейнер всего задания
        const headerThisProblem = conteynerFull.querySelector('.number') // Верный ответ HTML
        const objInfo = getLocalStorage('color') // Объект {4001: gray, 4002: green, 4003: red...} 

        const idThisProblemHTML = conteynerFull.id // id Контейнера    
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems) // Сама задача по индексу
        const idThisProblem = thisProblem.id // id этой задачи

        objInfo[idThisProblem] = headerThisProblem.classList[1] // Изменение этой задачи
        setLocalStorage('color', objInfo) // Сохранение в LocalStr
    })
}



function currColor(thisProblems){ // Появление цвета в currSubject в случае обновления страницы

    // КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    const inputAll = document.querySelectorAll('.input') // Все input
    const submitAll = document.querySelectorAll('.submit') // Все sumbit
    const allParents = document.querySelectorAll('.conteyner') // Все контейнеры
    const allAnswer = document.querySelectorAll('.answer') // Все контейнеры answer

    if (getLocalStorage('color')){ // Если до этого были цвета карточек

        // Проходимся по всем текущий задачам
        thisProblems.forEach((element, count) => {  
            const thisColor = getLocalStorage('color')[element.id] // Текущий цвет
            const parent = allParents[count] // Родитель текущей задачи
            const idProblem = +parent.id // id родителя (для задачи 11.20 id = 11020)
            const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer') // Берем контейнер "показать ответ" у контейнера всей задачи
            
                       
            if (thisColor === 'green'){ // Если зеленый        
                backgroundByCurr(idProblem, 'green') // Устанавливаем зеленый цвет для задачи с id контейнера
                inputAll[count].readOnly = true // Работаем с input и sumbit [count]
                submitAll[count].disabled = true // Работаем с input и sumbit [count]
                submitAll[count].classList.remove('button:hover') // Работаем с input и sumbit [count]
                allAnswer[count].classList.add('white') // Добавляем белый цвет
             
            } else if (thisColor === 'red') { // Если красный
                backgroundByCurr(idProblem, 'red') // Устанавливаем красный цвет для задачи с id контейнера
                conteynerRightAnswer.innerHTML = getRightAnswerHTML(thisProblems[count]) // Добавляем 'показать ответ'
                allAnswer[count].classList.add('white') // Добавляем белый цвет

                const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer') // close --> show
                rightAnswer.classList.remove('close')
                rightAnswer.classList.add('show')

                const conteynerInputStress = parent.querySelector('.conteynerInputStress')
                conteynerInputStress.classList.add('conteynerInput')

            } else backgroundByCurr(idProblem, 'gray')          
        })
    }
}



function createAndSaveInputs(thisProblems){ // Создание и/или сохрание input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] !== 'input') return // Если событие - не кнопка input, то выходим
        
        if (!getLocalStorage('inputCurr')){ // Если нет в LocalStr currInfoShowRightAnswer, добавить
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = ''

            setLocalStorage('inputCurr', array)    
        }

        const conteynerFull = event.target.closest('.conteyner') // Контейнер всего задания
        const thisInput = conteynerFull.querySelector('.input') // Текущий input
        const objInfo = getLocalStorage('inputCurr') // Объект {4001: gray, 4002: green, 4003: red...}
        const idThisProblemHTML = conteynerFull.id // id этой карточки - id задачи (4030, 11021...)
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems) // Сама задача по индексу 
        const idThisProblem = thisProblem.id // id этой задачи

        objInfo[idThisProblem] = thisInput.value // Изменение этой задачи
        setLocalStorage('inputCurr', objInfo) // Сохранение в LocalStr
    })
}



function currInput(thisProblems){ // Появление input в currSubject в случае обновления страницы
    const inputAll = document.querySelectorAll('.input') // Берем все input со страницы, КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    const inputLocalStr = getLocalStorage('inputCurr')
    const thisProblemsFirst = getFirstProblem(thisProblems)

    if (inputLocalStr){ // Если до этого были введены ответы 
        // thisProblems и inputAll идут в одной сортрировке 

        thisProblemsFirst.forEach((element, count) => {
            const thisId = element.id // id Задачи
            const thisInput = inputLocalStr[thisId] // input этой задачи
            inputAll[count].value = thisInput // Передаем сохраненное значение
        })
    }
}



function eventSendAnswer(){ // Обработка события "отправить ответ"
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'submit') return // Если событие - не кнопка sumbit, то выходим

        const parent = event.target.closest('.conteyner') // Родители кнопки
        const answerText = parent.querySelector('.answer') // Весь блок answer (для add('white'))
        const answer = parent.querySelector('.input') // Дочерний input
        const answerInput = answer.value.replace(',', '.') // Value этого input
        const submit = parent.querySelector('.submit') // Дочерний sumbit
        const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer') // Дочерний контейнер "правильного ответа
        const id = +parent.id // Находим id контейнера-задачи
        const thisObject = searchObjectById(id, allProblems) // Находим объект
        const answerRight = thisObject.answer // Правильный ответ задачи
        const conteynerInputStress = parent.querySelector('.conteynerInputStress')
        

        if (answerInput !== ''){
                answerText.classList.add('white') // Добавлеяем белого в блюом случае

                if (String(answerRight) === answerInput) {
                    backgroundByCurr(id, 'green') // Ставим зеленый фон задаче с id как у контейнера
                    answer.readOnly = true // Меняем дочерние элементы
                    submit.disabled = true // Меняем дочерние элементы
                    submit.classList.remove('button:hover') // Меняем дочерний элементы
                    conteynerRightAnswer.innerHTML = '' // Убираем "показать ответ"
                    conteynerInputStress.classList.remove('conteynerInput')
                
                } else {
                    backgroundByCurr(id, 'red') // Ставим фон фон задаче с id как у контейнера
                    const currObject = searchObjectById(id, allProblems) // Находим объект текущей задачи
                    conteynerRightAnswer.innerHTML = getRightAnswerHTML(currObject) // В контейнер правильного ответа добавляем текст 
                    const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer') // show "Показать ответ"
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
                    conteynerInputStress.classList.add('conteynerInput')
            }
        }   
    })
}



function createAndSaveInfoAnswers(thisProblems){ // Создание и/или сохрание нажатия на "показать ответ"
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'pokOtw') return // Если не кнопка "показать ответ" - выходим 

        // Если нет в LocalStr currInfoShowRightAnswer, добавить
        if (!getLocalStorage('currInfoShowRightAnswer')){
            const array = {}
            for (let i = 0; i < thisProblems.length; i++) array[thisProblems[i].id] = false
    
            setLocalStorage('currInfoShowRightAnswer', array)    
        }

        const conteynerFull = event.target.closest('.conteyner') // Контейнер всего задания
        const rightAnswer = conteynerFull.querySelector('.rightAnswer') // Верный ответ HTML
        const objInfo = getLocalStorage('currInfoShowRightAnswer') // Объект {4001: true, 4002: false, 4003: false...}
        const idThisProblemHTML = conteynerFull.id // id задачи (11020, 3004 ...)
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems) // Сама задача по индексу 
        const idThisProblem = thisProblem.id // id этой задачи
        const arrayClassList = [...rightAnswer.classList]
        
        objInfo[idThisProblem] = (arrayClassList.includes('show')) // Изменение этой задачи
        setLocalStorage('currInfoShowRightAnswer', objInfo) // Сохранение в LocalStr
    })
}



function currInfoShowRightAnswer(thisProblems){ // Обновление информации "показать ответ" при обновлении
    const infoShowRightAnswer = getLocalStorage('currInfoShowRightAnswer') // Информация об Показании ответа

    if (infoShowRightAnswer){ // Если в LocalStr есть currInfoShowRightAnswer
        const allConteyner = [...document.querySelectorAll('.conteyner')] // Контейнеры всех задач

        thisProblems.forEach((element, count) => { // Проходимся по всем задачам
            const thisId = element.id // id Задачи
            const thisBoolean = infoShowRightAnswer[thisId] // true/false

            // Если true, то
            if (thisBoolean){
                const thisConteyner = allConteyner[count] // Текущий контейнер
                const thisInfoAnswer = thisConteyner.querySelector('.rightAnswer') // Ответ-HTML этого контейнера
                const thisPokOtw = thisConteyner.querySelector('.pokOtw') // Надпись-кнопка


                // close --> show
                thisInfoAnswer.classList.remove('close')
                thisInfoAnswer.classList.add('show')

                thisPokOtw.innerHTML = 'Скрыть ответ: '

                
                if (element.number >= 12) {
                    const thisImg = thisConteyner.querySelector('.rightPhoto')
                    const height = +thisImg.naturalHeight + 50
                    const answerLine = thisConteyner.querySelector('.answer')
                    const showAnswer = thisConteyner.querySelector('.pokOtw')

                    
                    
                    answerLine.style.height = `${height}px`
                    
                    showAnswer.style.bottom = `${(height - 50) / 2 - 7}px`
                }
            } 
        })
    }
}



function cleanUpLocalStorage(){ // Убирание из LocalStr
    const importantWord = ['record', 'special', 'stats', 'countVariant'] // Список неубераемых
    let importantArray = []

    importantWord.forEach(element => importantArray.push({key: element, value: getLocalStorage(element)}))
    localStorage.clear()
    
    importantArray.forEach(element => {if (element.value) setLocalStorage(element.key, element.value) })
}



function getThisProblems() { // Получаем текущий массив задач
    return getLocalStorage('thisProblems')
}



function searchObjectById(searchId, array){ // Ищем объект-задачу по id 
    for (let index = 0; index < array.length; index ++){
        if (array[index].id === +searchId) return array[index]
    }
}



function setLocalStorage(nameLocal, value){ // Запись в LocalStr
    localStorage.setItem(nameLocal, JSON.stringify(value))
}



function getLocalStorage(value){ // Получение из LocalStr
    return JSON.parse(localStorage.getItem(value))
}



function removeLocalStorage(value){ // Удаление из LocalStr
    localStorage.removeItem(value)
}



function background(color, index) { // Смена background цвета
    const allNumbers = document.querySelectorAll(".number") // Все верхние подконтейнеры контейнера
    const allAnswer = document.querySelectorAll(".answer") // Все нижние подконтейнеры контейнера
    
    allNumbers[index].classList.remove('gray', 'green', 'red') // Убираем все классы
    allNumbers[index].classList.add(color) // Добавляем нужный цвет
    
    if (allAnswer[index]) {
        allAnswer[index].classList.remove('gray1', 'green', 'red') // Убираем все классы
        if (color === 'gray') color = 'gray1'
        allAnswer[index].classList.add(color) // Добавляем нужный цвет
    }
}



function backgroundByCurr(id, color){ // Смена background цвета для currSubj
    const allConteyners = document.querySelectorAll('.conteyner') // Все контейнеры задач, КОТОРЫЕ ЕСТЬ СЕЙЧАС

    allConteyners.forEach(element => { // Перебираем все задачи
        if (+element.id === id){ // Если id задачи === нашему id, которое мы хотим найти, то
            const thisNumber = element.querySelector('.number') // Дочерний number
            const thisAnswer = element.querySelector('.answer') // Дочерний answer

            thisNumber.classList.remove('gray', 'green', 'red') // Убираем все классы
            thisNumber.classList.add(color) // Добавляем нужный цвет

            thisAnswer.classList.remove('gray1', 'green', 'red') // Убираем все классы
            if (color === 'gray') color = 'gray1'
            thisAnswer.classList.add(color) // Добавляем нужный цвет
        } 
    })
}



function summArray(array){ // Сумма массива
    let sum = 0
    array.forEach((element, index) =>{ if (index != 0) sum += element})
    return sum
}



function pushArrayCountProblem(){ // Массив количеств задач [-, 0, 1, 3, ....]
    const DOMarrayCountProblem = ['-', ...document.querySelectorAll('.countProblem')] // Все countProblem
    const arrayCountProblem = ['-'] // Результат

    DOMarrayCountProblem.forEach((element, index) => {if (index !== 0) arrayCountProblem.push(+element.value)}) // Если index != 0 => push
    return arrayCountProblem
}



function rounded(number){ // Округление до сотых
    return +number.toFixed(2);
}



function countProblemToNumber(value, start, finish){ // Присваение все input в index значение = value
    const allCountProblem = document.querySelectorAll('.countProblem')
    for (index = start; index <= finish; index ++) allCountProblem[index].value = value
}



function defaultBtnVariant(){ // Изменение кнопки variantBTN в обычную
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта

    variant.innerHTML = `Составить вариант (Выбрано заданий: 0)`
    variant.disabled = true
    variant.classList.add('animation:hover')
}



function changeBtnVariant(){ // Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта
    const arrayCountProblem = pushArrayCountProblem() // Массив кол-ва задач
    const summProblems = summArray(arrayCountProblem) // Количество задач всего

    const startBtn = document.querySelector('.start') // Min сложность элемент
    const finishBtn = document.querySelector('.finish') // Max сложность элемент
    const valueStart = +startBtn.value // Значение
    const valueFinish = +finishBtn.value // Значение

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0 // Если 0 задач выбрано --> false
    
    for (let index = 1; index <= 18; index ++){
        const problemsByDifficulty = getObjectsFromAndTo(index, valueStart, valueFinish) // Массив задач номера index с valueStart <= procent <= valueFinish
        if (problemsByDifficulty.length < arrayCountProblem[index]) variant.disabled = true // Если выбранных задач > возвожных задач --> disabled
    }

    variant.disabled ? variant.classList.add('boom') : variant.classList.remove('boom') // Эффект boom
}



function timeToArray(time){ // Функция для времени №1    '4:30:20 12 Февраля 2023' --> [4, 30, 20]
    let timeNew = ''
    let index = 0
    let flag = true

    while (flag) {
        timeNew += time[index]
        index += 1

        if (time[index] === ' ') flag = false
    }

    timeNew = timeNew.split(':')
    let timeArray = []
    timeNew.forEach((element, index) => {if (index < 3) timeArray.push(+element)})
    return timeArray
}



function deadLine(time, hour, minute, second){ // Функция для времени №2    '23:40:20 12 Февраля 2023' --> '00:10:20'
    const hoursMinuteSecondArray = timeToArray(time)
    const hoursDeadLine = addZero((hoursMinuteSecondArray[0] + hour + +(hoursMinuteSecondArray[1] >= (60 - minute))) % 24)
    const minuteDeadLine = addZero((hoursMinuteSecondArray[1] + minute + +(hoursMinuteSecondArray[2] >= (60 - second))) % 60)
    const secondDeadLine = addZero((hoursMinuteSecondArray[2] + second) % 60)
    return `${hoursDeadLine}:${minuteDeadLine}:${secondDeadLine}`
}



function addZero(node){ return +node < 10 ? '0' + node : node } // Функция для времени №3     '4' --> '04'; '23' --> '23'



function titleTime(thisTime, deadLine){ // Обратный отсчет времени     ('23:58:04', '00:03:50') --> '00:05:46'
    thisTime = thisTime.split(':') // Текущее время
    deadLine = deadLine.split(':') // DeadLine

    if (+thisTime[0] > +deadLine[0]) deadLine[0] = String(+deadLine[0] + 24) // Для случая с 23 и 00

    if (+`${thisTime[0]}${thisTime[1]}${thisTime[2]}` >= +`${deadLine[0]}${deadLine[1]}${deadLine[2]}`) return `00:00`
    
    const secondLeft = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1 // Кол-во секунд

    const result = `${addZero(parseInt(secondLeft / 3600))}:${addZero(parseInt(secondLeft / 60) % 60)}:${addZero(secondLeft % 60)}` // Результат
    return result 
}



function timeForSolution(thisTime, startTime){ // Время решения варианта 1:01 --> 4:56
    return titleTime(startTime, thisTime)
}



function deadLineNew(){ // Прошел ли дедлайн?   Если прошел, то true   Если еще нет, то false
    let thisTime = getTime('full') // Текущее время
    let deadLine = getLocalStorage('deadLine') // DeadLine

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 36000 && thisTime > 200000) deadLine += 240000 // Случай с 23 и 00
    return deadLine - thisTime <= 0 || deadLine - thisTime >= 110000 // Если разность <= 0 или >= 110_000 --> время вышло
}



function addPopUp(thisTextPopUp, answer, rightAnswers, secondBall, countPoint){ // Добавление PopUp на страницу
    const popUpBody = document.querySelector('.pop_up_body')
    const popUp = document.querySelector('.pop_up') 
    
    popUpBody.innerHTML += thisTextPopUp(answer, rightAnswers, secondBall, countPoint) 
    popUp.classList.add('active')
}



function textPopUpFullTest(countProblem, rightAnswers, secondBallArray){ // HTML PopUp контент для "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант

        return  `<div class='testEnd'> Тест завершен! </div> 
                <hr/>
                <div class='statsForEge1'>Общая информация</div>
                <div>Всего заданий: <span class='w900'>${countProblem}</span> </div> 
                <div>Решено верно:  <span class="greenColor w900"> ${rightAnswers} </span> </div>
                <div>Решено неверно: <span class="redColor w900"> ${countProblem - rightAnswers} </span></div>
                <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / countProblem * 100)}% </span></div>
                <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
                <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-11)»</div>
                <div>Первичных баллов: <span class='w900'>${rightAnswers}</span> </div>
                <div>Вторичных баллов: <span class='w900'>${secondBallArray[rightAnswers]}</span> </div>`

    }


function textPopUpFull(countProblem, rightAnswers, secondBallArray, countPoint){ // HTML PopUp контент для "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант
        
    return  `<div class='testEnd'> Тест завершен! </div> 
            <hr/>
            <div class='statsForEge1'>Общая информация</div>
            <div>Всего заданий: <span class='w900'>${countProblem}</span> </div> 
            <div>Решено верно:  <span class="greenColor w900"> ${rightAnswers} </span> </div>
            <div>Решено неверно: <span class="redColor w900"> ${countProblem - rightAnswers} </span></div>
            <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / countProblem * 100)}% </span></div>
            <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
            <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-12)»</div>
            <div>Первичных баллов: <span class='w900'>${countPoint}</span> </div>
            <div>Вторичных баллов: <span class='w900'>${secondBallArray[countPoint]}</span> </div>` 
        }



function textPopUp(countProblem, rightAnswers){ // HTML PopUp контент для НЕ "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант

    return `<div class='testEnd'> Тест завершен! </div> 
    <hr/>
    <div class='statsForEge1'>Общая информация</div>
    <div>Всего заданий: <span class='w900'>${countProblem}</span> </div> 
    <div>Верно решено: <span class='w900'>${rightAnswers} </span></div>
    <div>Неверно решено: <span class='w900'>${countProblem - rightAnswers} </span></div>
    <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / countProblem * 100)}% </span></div>
    <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>`
    
}



function endVariant(allProblemsMain, arrayCountProblem, isVariant, haveSecondPart){ // Конец варианта
    
    const timePlace = document.querySelector('.time1') // Место времени
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const acceptBtn = document.querySelector('.accept') // Кнопка принятия
    const popUpSecond = document.querySelector('.pop_up1') // PopUp - подтверждение

    const allAnswer = document.querySelectorAll('.answer') // Все answer
    const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
    const allParentsFirst = []
    const allParentsSecond = []

    const countFirstProblem = getFirstProblem(allProblemsMain).length  
    allParents.forEach((element, index) => {
        index < countFirstProblem ? allParentsFirst.push(element) : allParentsSecond.push(element)
    })

    const answer = getLocalStorage('answers') // Все ответы 
    const countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Количество верных задач
    let rightAnswers = 0 // Количество правильных ответов
    let countPoint = 0
  
    setLocalStorage('againVariant', 'afk') // Смена режима в afk

    timePlace.innerHTML = `<button class='time2'>Начать заново </button>`// Уведомление для пользователей за место времени
    iconText.innerHTML = 'Результат' 

    const arrayColors = []

    // 1 Часть
    answer.forEach((element, index) => { // Проходимся по массиву answer
        const thisObject = allProblemsMain[index] // Текущая задача
        const thisParent = allParentsFirst[index] // Родитель этой задачи
        const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
        const thisInput = thisParent.querySelector('.input')

        thisStar.classList.remove('close') // Удаляем close звезде
        thisInput.readOnly = true

        const thisAnswer = allAnswer[index]
        thisAnswer.classList.add('white') // Добавляем white

        // let textSolution = '<span class="solutionText"> Показать решение </span>'
        // thisAnswer.innerHTML += textSolution
        // const thisConteynerSolution = thisParent.querySelector('.conteynerSolution')
        // thisConteynerSolution.innerHTML += '<img src="/MathWebDemo/img/1.69.jpg">'
            
        if (element !== '' && +element.replace(',', '.') === thisObject.answer){ // Проверка на правильность ответа
            rightAnswers ++ // Количество правильных ответов ++ 
            countPoint ++
            countRightAnswer[thisObject.number] ++ // Количество правильных ответов задачи номера n ++
            background('green', index) // background - green
            arrayColors.push('green') // В массив цветов += green

        } else {
            background('red', index) // background - red
            arrayColors.push('red') // В массив цветов += red

            const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
            thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                
            const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
            rightAnswer.classList.remove('close')
            rightAnswer.classList.add('show')
        }
    })
    

    // 2 Часть
    const secondObject = getSecondProblem(allProblemsMain)
    secondObject.forEach((element, index) => {
        const parent = allParentsSecond[index]
        const answer = parent.querySelector('.answer')
        const radioButtons = parent.querySelector('.radioButtons')
        const answerText = parent.querySelector('.wwww')
        const thisStar = parent.querySelector('.star')
        const answerSecond = [...parent.querySelectorAll('.answerSecond')]

        const img = parent.querySelector('.rightPhoto')
        const answerConteyner = parent.querySelector('.answer')
        const height = +img.naturalHeight + 30
        console.log(height)
        

        
        
        answerConteyner.style.height = `${height}px`
        radioButtons.style.top = `${height / 2 - 20}px`
        answerText.style.bottom = `${(height - 30) / 2 - 7}px`
        

        thisStar.classList.remove('close')

        const checkedResult = getLocalStorage('resultPoints')[index]      
        const maxResult = pointsForProblem[element.number]

        const allRadioBtn = parent.querySelectorAll('.radio')
        allRadioBtn.forEach(element => {
            element.disabled = true
            if (+element.id === checkedResult) element.checked = true
        })
        

        answer.classList.add('white')
        answerSecond[0].classList.remove('black')
        answerSecond[1].classList.remove('black')
        radioButtons.classList.add('white')
        answerText.classList.add('white')


        if (checkedResult > 0 && checkedResult < maxResult) {
            background('orange', index + allParentsFirst.length)
            arrayColors.push('orange')
        }
        else if (checkedResult === maxResult) {
            background('green', index + allParentsFirst.length)
            arrayColors.push('green')
            rightAnswers ++
        } 
        else {
            background('red', index + allParentsFirst.length)
            arrayColors.push('red')
        }
        
        countRightAnswer[element.number] += checkedResult
        countPoint += checkedResult
    })
    

    setLocalStorage('colors', arrayColors) // Добавляем цвета в LocalStr

    

    
    // Сохранение для stats

    let infoLocalStorageObject = {} // Объект текущего варианта
    let arrayRightAnswer = [] // Массив статистики

    
    for (let i = 1; i <= 18; i++) arrayRightAnswer.push({right: countRightAnswer[i], count: arrayCountProblem[i] * pointsForProblem[i]}) // Для каждой задачи right, count
    let finalSum = 0
    arrayCountProblem.forEach((element, index) => {
        if (index !== 0) finalSum += element * pointsForProblem[index]
    })
    
    arrayRightAnswer.push({right: countPoint, count: finalSum}) // Для всего варианта right, count

    const stats = getLocalStorage('stats') // Массив вариантов
    const numberVariant = getLocalStorage('numberVariant') // Номер варианта
    let nameVariant

    if (!getLocalStorage('countVariant')) setLocalStorage('countVariant', 0)
    setLocalStorage('countVariant', getLocalStorage('countVariant') + 1)

    infoLocalStorageObject.stats = arrayRightAnswer // Добавляем в объект варианта статистику варианта
    infoLocalStorageObject.problems = getLocalStorage('variant') // Добавляем вариант
    infoLocalStorageObject.colors = getLocalStorage('colors') // Добавляем цвета
    infoLocalStorageObject.idVariant = getLocalStorage('countVariant') // Добавляем id задачи как len stats + 1
    infoLocalStorageObject.countProblem = arrayCountProblem // Количество проблем (для таблицы)

    if (numberVariant === null){ // Если из статистики
        const idPreviousVariant = getLocalStorage('idVariant') // id Варианта (прошлый вариант)
        let demoName

        if (idPreviousVariant !== null) {
            stats.forEach(variant => {
                if (variant.idVariant === idPreviousVariant) demoName = variant.name
            })
        }
        demoName.includes('Вариант') ? nameVariant = `Вариант ${infoLocalStorageObject.idVariant}` : nameVariant = demoName
        
    } else if (numberVariant !== 0 && numberVariant) nameVariant = specialVariants[numberVariant].name // Реал экзамен
    else nameVariant = `Вариант ${infoLocalStorageObject.idVariant}` // Рандом

    infoLocalStorageObject.name = nameVariant // Либо название, либо idVariant
    

    const arrayInfo = []
    if (stats) stats.forEach(element => arrayInfo.push(element)) // Проходимся по всем прошлым вариантам 
    arrayInfo.push(infoLocalStorageObject) // Добавялем текущий вариант
    setLocalStorage('stats', arrayInfo) // В LocalStr

    acceptBtn.disabled = true // Блокируем "завершить работу"

    // Смотрим на формат варианта, такой PopUp и выдаем (с "формат ЕГЭ (1-11) или без")
    let popUpMode
    if (!isVariant) popUpMode = textPopUp
    else if (haveSecondPart) popUpMode = textPopUpFull
    else popUpMode = textPopUpFullTest
    
    setTimeout(() => addPopUp(popUpMode, allProblemsMain.length, rightAnswers, secondBallArray, countPoint), 300)
    popUpSecond.classList.remove('active')

}



function time(allProblemsMain, arrayCountProblem, isVariant, haveSecondPart){ // Глобальная функция времени (variant)

    const timePlace = document.querySelector('.time1') // "Место времени"
    const title = document.querySelector('.titleVariant') // "Верхняя надпись"
    const timeFull = getTime('full') // Определяем текущее время
    
    // (Если нет deadLine или againVariant === afk) И вариант НЕ в просмотре, ставим новый deadLine и afk ==> deadLinePicked
        
    if ((!getLocalStorage('deadLine') || getLocalStorage('againVariant') === 'afk') && getLocalStorage('fromStats') !== 0.5 && getLocalStorage('secondPart') !== 0.5 && getLocalStorage('variantEnd') !== false){
        if (haveSecondPart) setLocalStorage('deadLine', deadLine(timeFull, 3, 55, 1))
        else setLocalStorage('deadLine', deadLine(timeFull, 0, 30, 1))
        setLocalStorage('againVariant', 'deadLinePicked')
        setLocalStorage('startTime', getTime('full'))
    }

    setInterval(() => { // setInterval раз в секунду
        const deadLine = getLocalStorage('deadLine') // Текущий deadLine
        
        if (getLocalStorage('againVariant') === 'deadLinePicked'){ // Если сейчас идет вариант (если нет, то "afk")
            title.innerHTML = titleTime(getTime('full'), deadLine) + ' осталось' // устанавливаем "верхнюю надпись"
            timePlace.innerHTML = getTime('full') + `, дедлайн: ${deadLine} (${titleTime(getTime('full'), deadLine)} осталось)`
        }
            
        // Конец дедлайна
        // 1 условие - если просмотр варианта; 2 условие - если закончился дедлайн; 3 условие - чтоб вызвался 1 раз
        if (haveSecondPart === false && !getLocalStorage('fromStats') && deadLineNew() && getLocalStorage('againVariant') !== 'afk'){
            endVariant(allProblemsMain, arrayCountProblem, isVariant, haveSecondPart) // Конец варианта
            title.innerHTML = 'Время вышло!' // Заголовок = 'Время вышло!'
        }

        if (haveSecondPart === true && !getLocalStorage('fromStats') && deadLineNew() && getLocalStorage('againVariant') !== 'afk'){
            window.location.pathname = `/MathWebDemo/HTML/secondPart.html`
            setLocalStorage('againVariant', 'afk') // Смена режима в afk
            setLocalStorage('variantEnd', false)


        }
    }, 1000)
}



function getFullDaysBeforeExam(day){ // осталось/остался дней/дня/день
    let first; let second
    if ((day >= 5 && day <= 20) || (day % 10 >= 5) || (day % 10 === 0)) {
        first = 'осталось'
        second = 'дней'
    } else if (day % 10 === 1){
        first = 'остался'
        second = 'день'
    } else {
        first = 'осталось'
        second = 'дня'
    }

    const days = daysBeforeExam()
    return `до ЕГЭ ${first} <span class='dayLeft'>${days}</span> ${second}`
}



function daysBeforeExam(){ // Дней до экзамена
    const EXAM = {year: 2024, month: 6, day: 1} // Костанта - день экзамена
    const thisDay = {year: getTime('y'), month: getTime('mo') + 1, day: getTime('d')} // Формируем текущий день
    const pogresh = 1

    const dayLeft = (EXAM.year - thisDay.year) * 365 + (EXAM.month - thisDay.month) * 30 + (EXAM.day - thisDay.day) + pogresh // Сколько дней осталось
    return dayLeft
}



function randomStress() { // Рандомный индекс массива allProblems (для stress)
    const array = getFirstProblem(allProblems)
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}



function getTime(value){ // Возвращение времени
    const date = new Date()

    if (value === 's') return addZero(date.getSeconds())
    else if (value === 'm') return addZero(date.getMinutes())
    else if (value === 'h') return addZero(date.getHours())
    else if (value === 'd') return addZero(date.getDate())
    else if (value === 'mo') return date.getMonth()
    else if (value === 'y') return addZero(date.getFullYear())
    else if (value === 'full') return `${getTime('h')}:${getTime('m')}:${getTime('s')} `
}



function equalArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false // Мас­си­вы раз­ной дли­ны не рав­ны

    for (let index = 0; index < firstArray.length; index ++) // Цикл по всем эле­мен­там
        if (firstArray[index] !== secondArray[index]) return false // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
  
    return true // Ина­че они рав­ны
}



// Для второй части


function showSolutionHTML(){
    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'solutionText' && event.target.classList[1] !== 'solutionText') return

        const conteyner = event.target.closest('.conteyner') // Контейнер правильного ответа
        const solutionText = conteyner.querySelector('.conteynerSolution')
        
        solutionText.classList.remove('close')
    })
}


function getFirstProblem(arrayProblem){
    const result = []

    arrayProblem.forEach(element => {
        if (element.number <= 11) result.push(element)
    })

    return result
}



function getSecondProblem(arrayProblem){
    const result = []

    arrayProblem.forEach(element => {
        if (element.number >= 12) result.push(element)
    })

    return result
}


const pointsForProblem = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 
                          12: 2, 13: 3, 14: 2, 15: 2, 16: 3, 17: 4, 18: 4}

   
                          

function problemHTMLvariantSecondPart(problem) { // Вывод задания на HTML на вкладку variant
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер

    return `<div id = ${id} class="conteyner">
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star close"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg' >
    </div>`
} 



function getRadioButtonForSecondPart(numberProblem, countThisProblem){
    const countPoint = pointsForProblem[numberProblem]

    let textResult = ''
    for (let index = countPoint; index >= 0; index --){
        textResult += `<input class="radio" type="radio" name="${countThisProblem}" id="${index}" > <span class='tR'>${index}</span>`
    }
    return textResult
}



function problemHTMLcheckSecond(problem, index) { // Вывод задания на HTML на вкладку second
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const rightAnswer = `<img class='rightPhoto' src='/MathWebDemo/img/${problem.problem}a.jpg'> </img>`

    
    

    return `<div id = ${id} class="conteyner qwer" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star close"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg'>

        <div class="answer answerSecond qqq">
                        <span class="answerSecondConteyner white">
                            <span class="wwww"> Ответ: </span>
                            <span class="answerSecond black">
                                ${rightAnswer}
                            </span>
                        </span> 

                        <span class="radioButtons">
                            ${getRadioButtonForSecondPart(problem.number, index)}
                        </span>
        </div>
    </div>`    
}

function problemHTMLcheckSecondVariant(problem, index) { // Вывод задания на HTML на вкладку second
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const rightAnswer = `<img class='rightPhoto close' src='/MathWebDemo/img/${problem.problem}a.jpg'> </img>`

    
    

    return `<div id = ${id} class="conteyner qwer" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star close"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg'>

        <div class="answer answerSecond qqq">
                        <span class="answerSecondConteyner white">
                            <span class="wwww pokOtw2"> Показать ответ: </span>
                            <span class="answerSecond black">
                                ${rightAnswer}
                            </span>
                        </span> 

                        <span class="radioButtons">
                            ${getRadioButtonForSecondPart(problem.number, index)}
                        </span>
        </div>
    </div>`    
}



function problemHTMLcurrSecond(problem) { // Вывод задания 2 части на HTML на вкладку currSubject
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const rightAnswer = `<img class='rightPhoto' src='/MathWebDemo/img/${problem.problem}a.jpg'> </img>`
    

    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWebDemo/img/${problem.problem}.jpg'>
        <div class="answer gray1 qqq1">
            <span class='conteynerRightAnswer '> 
                <span class='showRightAnswer1 '> 
                    <span class='pokOtw black4 black'>Показать ответ: </span> 
                    <span class='conteynerRightAnswer'> </span>
                    <span class='rightAnswer close' >${rightAnswer} </span>
                </span>

            </span>
        </div>
    </div>`
}