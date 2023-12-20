H, M = map(int, input().split())
num = int(input()) 

H += num // 60
M += num % 60

if M >= 60:
    H += 1
    M -= 60
if H >= 24:
    H -= 24

print(H,M)