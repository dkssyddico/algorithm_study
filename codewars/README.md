# Codewars progress report

## 1. Disemvowel Trolls (8 kyu)

### 21. 06. 03

### ✏️ Note

정규표현식을 이용해 푸는 문제  
처음엔 배열을 이용해서 풀려고 했으나 정규표현식으로 하는 것이 더 코드가 간단하다고 생각했다.  
굳이 for 문을 돌려야하나 라는 의문이 들어서 정규표현식으로 풀이  
submit 하니 정규표현식으로 푸는 방법이 best practice 였다 !  
덕분에 정규표현식에 대해서 공부할 수 있었고 개념도 어느정도 깨우친 듯 함!

---

</br>

## 2. Your order, please (6 kyu)

### 21. 06. 04 ~ 05

### ✏️ Note

문자열을 배열로 만들고 string.split(' ')  
그 배열에서 sort()를 실행하여 match(/\d/) 정규식으로 숫자를 찾고 숫자의 대소를 비교한다.  
그리고 다시 join(' ')으로 문장으로 만들어 준다 !
아직 정규식이 익숙하지 않다는 느낌이 든다.  
regex 사이트에서 연습할 것 !  
match, sort 복습

---

</br>

## 3. Opposite number (8 kyu)

### 21. 06. 06

### ✏️ Note

음수를 양수로 만들어주는 함수: Math.abs()

```
Math.abs(number)
```

양수를 음수로: number \* (-1)

---

</br>

## 4. Keep Hydrated (8 kyu)

### 21. 06. 07

### ✏️ Note

```
Math.floor()
```

다른 사람 풀이 보니까 그냥 0.5를 변수로 안넣고 바로 풀어버림.

---

</br>

## 5. Reversed Strings (8 kyu)

### 21. 06. 07

### ✏️ Note

array에서 reverse하기

---

</br>

## 6. Counting sheep (8 kyu)

### 21. 06. 0

### ✏️ Note

array 내 item에서 true 만 count 하는 문제  
나는 array에서 forEach로 하나하나 true/false를 판별했는데  
다른 사람 답을 보니

```
return arrayOfSheep.filter(Boolean).length;
```

이거 하나로 끝내버려서 감탄했다.  
array를 응용하는 쉬운 문제였는데 forEach 보단 저렇게 filter로 한 줄로 끝내버리는 게 정말 clever !!

---

</br>

## 7. (8 kyu)

### 21. 06. 0

### ✏️ Note
