import { HttpError } from "@/errors/httpError";
import { NextFunction, Request, Response } from "express";
import * as filter from "leo-profanity";
/**
 * @param {string} userPrompt
 * Validates userPrompt
 * - Check for empty string
 * - Check for max length (e.g., 200 characters)
 * - Check for min length (e.g., 5 characters)
 * - Check for strange characters (non-alphanumeric, except allowed punctuation)
 * - Check for valid characters (allow only certain characters)
 * - Check for NSFW content using `leo-profanity`
 * - Check for spam content (repeated characters or words)
 * - Check for excessive whitespace
 * - Check for SQL/JavaScript injection attempts
 *
 * @throws Error if validation fails
 */
const userPromptMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userPrompt = req.body.userPrompt;

  if (!userPrompt) {
    throw new HttpError("User prompt is required", 400);
  }

  const MIN_LENGTH = 2;
  //   const MAX_LENGTH = 1000;
  const ALLOWED_CHARACTERS = /^[a-zA-Z0-9\s.,!?'-]+$/;
  const SPAM_THRESHOLD = 5;

  try {
    // 1. Check for empty string
    if (!userPrompt.trim()) {
      throw new HttpError("Input is empty", 400);
    }

    // 2. Check for max length
    // if (userPrompt.length > MAX_LENGTH) {
    //   throw new Error(
    //     `Input exceeds maximum length of ${MAX_LENGTH} characters.`
    //   );
    // }

    // 3. Check for min length
    if (userPrompt.length < MIN_LENGTH) {
      throw new HttpError(
        `Input must be at least ${MIN_LENGTH} characters long.`,
        400
      );
    }

    // 4. Check for strange or invalid characters
    // if (!ALLOWED_CHARACTERS.test(userPrompt)) {
    //  throw new Error(
    //     "Input contains non-alphanumeric characters, except allowed punctuation."
    //   );
    // }

    // 5. Check for NSFW content using leo-profanity
    if (filter.check(userPrompt)) {
      throw new HttpError("Input contains NSFW content.", 400);
    }

    // const repeatedChars = /(\S)\1{4,}/; // Matches any character repeated more than SPAM_THRESHOLD
    // if (repeatedChars.test(userPrompt)) {
    //   throw new Error("Input contains spam-like repetitive characters.");
    // }

    // const repeatedWords = /\b(\w+)\b\s+\1\b/i; // Matches repeated words
    // if (repeatedWords.test(userPrompt)) {
    //   throw new Error("Input contains spam-like repetitive words.");
    // }

    // 7. Check for excessive whitespace
    if (/^\s+|\s+$|\s{2,}/.test(userPrompt)) {
      throw new HttpError("Input contains excessive whitespace.", 400);
    }

    // 8. Check for SQL/JavaScript injection attempts
    const injectionPatterns = [
      /(<script.*?>.*?<\/script>)/i, // Detects script tags
      /(drop\s+table|select\s+\*|insert\s+into|update\s+.+set)/i, // SQL patterns
      /(\balert\b|\bconsole\.log\b|\bdocument\.cookie\b)/i, // JS patterns
    ];
    if (injectionPatterns.some((pattern) => pattern.test(userPrompt))) {
      throw new HttpError(
        "Input contains SQL/JavaScript injection attempts.",
        400
      );
    }

    // If all checks pass
    next();
  } catch (error) {
    next(error);
  }
};

export default { userPromptMiddleware };
