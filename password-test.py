import requests

url = "http://localhost:8080/auth/register"

username = input("username: ")
email = input("email: ")
password = input("password: ")

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

data = {
    "username": username,
    "email": email,
    "password": password
}

try:
    response = requests.post(url, json=data, headers=headers)
    print("Code:", response.status_code)
    print("Response:", response.text)
except requests.exceptions.RequestException as err:
    print("ERROR", err)