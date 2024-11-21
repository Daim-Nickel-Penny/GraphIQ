1. Set Up and Understand Your Testing Environment

Before diving into testing, ensure your project is ready:

You've configured Vitest (vitest.config.ts) with Node.js as the environment.

Installed Supertest for HTTP requests testing.

Ensure TypeScript is configured correctly for both your app and tests. 2. Start with Unit Testing

Unit tests focus on individual pieces of logic, like services, utilities, or controllers, without external dependencies.

Steps:

Test Pure Functions (Utilities):

Identify reusable utility functions (if any).

Write simple tests for edge cases and expected outputs.

Example:

typescript

Copy code

// utils/math.ts

export const add = (a: number, b: number) => a + b;

// **tests**/utils/math.test.ts

import { add } from "../utils/math";

test("adds two numbers", () => {

expect(add(2, 3)).toBe(5);

});

Test Services:

Services are business logic functions, often interacting with models or databases.

Mock dependencies (like database calls) to focus only on service behavior.

Example:

typescript

Copy code

// services/userService.ts

export const getUserById = async (id: string) => {

if (!id) throw new Error("No ID provided");

return { id, name: "John Doe" }; // Mocked data

};

// **tests**/services/userService.test.ts

import { getUserById } from "../services/userService";

test("fetches user by ID", async () => {

const user = await getUserById("123");

expect(user).toEqual({ id: "123", name: "John Doe" });

});

test("throws error if ID is missing", async () => {

await expect(getUserById("")).rejects.toThrow("No ID provided");

}); 3. Test Middlewares

Middlewares process requests before they reach your routes. Test them independently by simulating req, res, and next.

Steps:

Mock req, res, and next objects to ensure middleware logic works as expected.

Example:

typescript

Copy code

// middleware/auth.ts

export const authMiddleware = (req: any, res: any, next: any) => {

if (!req.headers.authorization) {

return res.status(401).send("Unauthorized");

}

next();

};

// **tests**/middleware/auth.test.ts

import { authMiddleware } from "../middleware/auth";

test("returns 401 if no authorization header", () => {

const req = { headers: {} };

const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

const next = jest.fn();

authMiddleware(req, res, next);

expect(res.status).toHaveBeenCalledWith(401);

expect(res.send).toHaveBeenCalledWith("Unauthorized");

expect(next).not.toHaveBeenCalled();

}); 4. Test Controllers

Controllers handle request and response logic. Use Supertest to test them directly if they involve HTTP endpoints, or test them in isolation by mocking req and res.

Steps:

Write isolated tests for controllers.

Mock dependencies like services.

Test response codes and data.

Example:

typescript

Copy code

// controllers/userController.ts

export const getUser = async (req: any, res: any) => {

const user = { id: req.params.id, name: "John Doe" };

res.status(200).json(user);

};

// **tests**/controllers/userController.test.ts

import { getUser } from "../controllers/userController";

test("returns user data", async () => {

const req = { params: { id: "123" } };

const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

await getUser(req, res);

expect(res.status).toHaveBeenCalledWith(200);

expect(res.json).toHaveBeenCalledWith({ id: "123", name: "John Doe" });

}); 5. Test Routes

Routes are where everything comes together. Use Supertest to make HTTP requests to your routes and verify responses.

Steps:

Write integration tests using Supertest for routes.

Test your index.ts and router.ts setup.

Example:

typescript

Copy code

// routes/userRoutes.ts

import express from "express";

import { getUser } from "../controllers/userController";

const router = express.Router();

router.get("/user/:id", getUser);

export default router;

// index.ts

import express from "express";

import userRoutes from "./routes/userRoutes";

const app = express();

app.use("/api", userRoutes);

export default app;

// **tests**/routes/userRoutes.test.ts

import request from "supertest";

import app from "../index";

test("GET /api/user/:id", async () => {

const res = await request(app).get("/api/user/123");

expect(res.status).toBe(200);

expect(res.body).toEqual({ id: "123", name: "John Doe" });

}); 6. Test End-to-End (Optional)

End-to-End (E2E) tests check the entire system, including database interactions. For this:

Use a test database or mock database calls.

Run the app and make HTTP requests using Supertest. 7. Continuous Practice

Add tests for error cases (e.g., invalid inputs, database failures).

Refactor your app and keep tests updated.

Learn about mocking tools (like jest-mock or sinon) for deeper control over dependencies.

Summary of Your Testing Strategy

Start small: Test utilities and services (unit tests).

Move up: Test middlewares and controllers.

Tie it together: Test routes with Supertest.

Explore further: Add E2E tests for full coverage.
