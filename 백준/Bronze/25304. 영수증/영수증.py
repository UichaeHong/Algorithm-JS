x = int(input())
n = int(input())
d = 0
for i in range(n) :
    i += 1
    a,b = map(int, input().split())
    c = a * b
    d += c
if x == d :
    print("Yes")
else :
    print("No")