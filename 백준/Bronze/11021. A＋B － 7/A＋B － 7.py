import sys

t = int(input())

for i in range(int(t)) :
    i+=1
    a, b = map(int, sys.stdin.readline().split())
    c = 'Case #'
    d = a+b
    if 10 > a > 0 and 10 > b > 0 :
        print(f"{c}{i}: {d}")