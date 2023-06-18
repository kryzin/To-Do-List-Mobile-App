import random

lista = []


def go_random(now):
    if now == 5:
        return 4
    if now == 1:
        return 2
    rand = random.randint(1, 10)
    if rand % 2 == 0:
        return now - 1
    else:
        return now + 1


print("lis się chowa...")
schowany = go_random(random.randint(2, 4))
lista.append(schowany)

while 1:
    guess = int(input("gdzie jest lis?\n"))
    if guess == schowany:
        print("znalazłeś lisa!")
        print(f"droga lisa: {lista}")
        break
    else:
        print("pudło!")
        schowany = go_random(schowany)
        lista.append(schowany)
    if guess == 0:
        print(f"stop gry! {lista}")
