a,b,c = map(int,input().split())


max_number = max(a,b,c)

if a == b == c :
    print(10000 + a*1000)
elif a == b :
    print(1000 + a * 100)
elif a == c :
    print(1000 + a * 100)
elif b == c :
    print(1000 + c * 100)
else :
    print(max_number * 100)