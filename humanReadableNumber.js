

















n = int(input())
if(n % 10 == 0 or 11 <= n % 100 <= 14):
print(f'{n} программистов')
elif(n % 10 == 1):
print(f'{n} программист')
elif(2 <= n % 10 <= 4):
print(f'{n} программиста')
else:
print(f'{n} программистов')
