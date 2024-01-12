import sys
t = int(sys.stdin.readline())


for i in range(t) :
    i += i
    a,b = map(int,sys.stdin.readline().split())
    if 1000 >= a >= 1 and 1000 >= b >= 1 :
        print(a+b)


