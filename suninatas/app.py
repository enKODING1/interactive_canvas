import requests

url = 'http://suninatas.com/challenge/web04/web04.asp'
data = requests.get(url)
print(data)