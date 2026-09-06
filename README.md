# NodeJS-Basic-Routes-Assignment5

A beginner-friendly Node.js Express assignment created to understand **basic routing, route parameters, multiple route parameters, query parameters, and request logging**.

## Tasks

1. **Basic Routes**
2. **Route Parameter (Dynamic Route)**
3. **Multiple Route Parameters**
4. **Query Parameters**
5. **Request–Response Understanding**

## Project Structure

```text
├── Express-Basics-Assignment
│   ├── server.js
│   └── package.json
│
├── Screenshots
│   ├── At-Browser-about.png
│   ├── At-Browser-contact.png
│   ├── At-Browser-home.png
│   ├── At-Browser-product-101-electronics.png
│   ├── At-Browser-search.png
│   ├── At-Browser-user-john.png
│   ├── At-Terminal-All-GET-Endpoints.png
│   └── Run-Server.png
│
└── README.md
```

## Concepts Used

- Node.js
- Express.js
- Express Routing
- `app.get()`
- Route Parameters
- `req.params`
- Query Parameters
- `req.query`
- Middleware
- `app.use()`
- `req.method`
- `req.url`
- `app.listen()`

## Tasks Performed

### Task 1 - Basic Routes

Created three basic GET routes using Express:

```text
GET /
GET /about
GET /contact
```

The responses are:

```text
Welcome to Home Page
This is About Page
This is Contact Page
```

### Task 2 - Route Parameter (Dynamic Route)

Created a dynamic route:

```text
GET /user/:name
```

Used `req.params.name` to receive the name dynamically from the URL.

Example:

```text
/user/john
```

Output:

```text
Hello john
```

### Task 3 - Multiple Route Parameters

Created a route with two dynamic parameters:

```text
GET /product/:id/:category
```

Used `req.params.id` and `req.params.category` to retrieve the values.

Example:

```text
/product/101/electronics
```

Output:

```text
Product ID: 101, Category: electronics
```

### Task 4 - Query Parameters

Created a search route:

```text
GET /search
```

Used `req.query.name` and `req.query.role` to read query parameters.

Example:

```text
/search?name=john&role=developer
```

Output:

```text
Name: john, Role: developer
```

### Task 5 - Request–Response Understanding

Added middleware to display the request method and URL in the terminal using:

```text
req.method
req.url
```

Example terminal output:

```text
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

## How to Run

Navigate to the assignment folder:

```bash
cd Express-Basics-Assignment
```

Install the required dependency:

```bash
npm install
```

Run the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:7777
```

## Routes

| Method | Route | Expected Output |
|---|---|---|
| GET | `/` | Welcome to Home Page |
| GET | `/about` | This is About Page |
| GET | `/contact` | This is Contact Page |
| GET | `/user/john` | Hello john |
| GET | `/product/101/electronics` | Product ID: 101, Category: electronics |
| GET | `/search?name=john&role=developer` | Name: john, Role: developer |

## Expected Output

```text
server is running on port 7777...

GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

## Author

**Sanika Kangane 👩🏻‍💻**
