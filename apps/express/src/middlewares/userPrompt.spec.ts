import { describe, expect, it, vi, vitest } from "vitest";

import userPromptMiddleware from "./userPrompt.middleware";
import { HttpError } from "src/errors/httpError";
import { Request, Response } from "express";

describe("Unit test for userPromptMiddleware", () => {
  it("should call next() if userPrompt is valid", () => {
    const req = {
      body: {
        userPrompt: "This is a valid prompt.",
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn();

    userPromptMiddleware.userPromptMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should throw an error if userPrompt is empty", () => {
    const req = {
      body: {
        userPrompt: "",
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn();

    expect(() => {
      userPromptMiddleware.userPromptMiddleware(req, res, next);
    }).toThrow(new HttpError("User prompt is required", 400));
  });

  it("should throw an error if userPrompt is null", () => {
    const req = {
      body: {
        userPrompt: null,
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn();

    expect(() => {
      userPromptMiddleware.userPromptMiddleware(req, res, next);
    }).toThrow(new HttpError("User prompt is required", 400));
  });

  it("should throw an error if userPrompt is undefined", () => {
    const req = {
      body: {
        userPrompt: undefined,
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn();

    expect(() => {
      userPromptMiddleware.userPromptMiddleware(req, res, next);
    }).toThrow(new HttpError("User prompt is required", 400));
  });
});
