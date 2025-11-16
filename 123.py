from itertools import permutations

class Solution:
    @staticmethod
    def getString(position, N):
        return '.' * position + 'Q' + '.' * (N - position - 1)

    @staticmethod
    def getArray(arrayOfPositions):
        N = len(arrayOfPositions)
        return [Solution.getString(position, N) for position in arrayOfPositions]

    @staticmethod
    def checkPair(a, b):
        Da = a[0] - a[1]
        Db = b[0] - b[1]
        Sa = a[0] + a[1]
        Sb = b[0] + b[1]

        return Da != Db and Sa != Sb

    @staticmethod
    def getSolutions(n):
        res = []
        for x in permutations(range(n)):
            ar = [[x[i], i] for i in range(n)]
            f = True
            for i in range(n):
                for j in range(i + 1, n):
                    if not Solution.checkPair(ar[i], ar[j]):
                        f = False
                        break
                if not f:
                    break
            if f:
                res += [[ar[q][0] for q in range(n)]]

        return res

    @staticmethod
    def getAnswer(arrayOfPositions):
        return [Solution.getArray(x) for x in arrayOfPositions]

    @staticmethod
    def solveNQueens(n):
        return Solution.getAnswer(Solution.getSolutions(n))

# Тест
for solution in Solution.solveNQueens(10):
    for row in solution:
        print(row)
    print()
