from itertools import *

def r(n):
    return round(n, 2)


def factorial(n):
    fact = 1
    for i in range(2, n + 1):
        fact *= i

    return fact


def C(m, n):
    return factorial(n) // (factorial(m) * factorial(n - m))



def getAllCombinationsMunitsFromN(m, n):
    return [x for x in product([0, 1], repeat=n) if x.count(1) == m]



# array = [0, 1.72, 1.85]
def getWinSum(array, entry, betSum):
    n = len(array)
    allCount = 0
    allCom = getAllCombinationsMunitsFromN(entry, n)

    everyBet = betSum / C(entry, n)

    for cur in allCom:
        odds = 1
        for i in range(n):
            if cur[i] == 1:
                odds *= array[i]

        allCount += everyBet * odds

    return allCount




def getAllCaseWhereMentry(coefArray, entryNeed, entryHave, bet):
    n = len(coefArray)
    nameArray = [x[0] for x in coefArray]

    allCombinationsCurmEntry = getAllCombinationsMunitsFromN(entryHave, n)
    resultArray = []
    winCurMavgSum = 0

    for curCombinationsCurmEntry in allCombinationsCurmEntry:
        curBets = [coefArray[i] if curCombinationsCurmEntry[i] == 1 else [coefArray[i][0], 0] for i in range(n)]

        onlyCoefArray = [x[1] for x in curBets]
        curWinSum = getWinSum(onlyCoefArray, entryNeed, bet)

        resultArray += [{'bets': curBets, 'sum': curWinSum}]

    winCurMavgSum = r(sum(bet['sum'] for bet in resultArray) / C(entryHave, n))
    cleanWinCurMavgSum = r(winCurMavgSum - bet)

    print(f'{entryHave} заходов для системы {entryNeed} из {n}: средний выигрыш = {winCurMavgSum} ({"+" if cleanWinCurMavgSum >= 0 else ""}{cleanWinCurMavgSum}) ')

    for curBet in resultArray:
        sumWin = r(curBet['sum'])
        cleanWin = r(sumWin - bet)

        text = ''
        for x in curBet['bets']:
            text += f'{x[0]} (к. {x[1]}); '

        onlyCoefArray = [x[1] for x in curBet['bets']]


        print(f'{text}{onlyCoefArray}-> выигрыш: {sumWin} ({"+" if cleanWin >= 0 else ""}{cleanWin})')
    print()




def getAllCaseWithAllCurM(CoefArray, entryNeed, bet):
    n = len(array)

    for entryHave in range(entryNeed, n + 1):
        getAllCaseWhereMentry(CoefArray, entryNeed, entryHave, bet)









array = [
            ['TS 2:0', 1.85],
            ['MOUZ', 1.68],
            ['VIT 2:0', 1.91],
            ['NAVI', 1.46]
        ]

entryNeed = 3 # кол-во заходов
bet = 350 # сумма


getAllCaseWithAllCurM(array, entryNeed, bet)