"use server";

import { google } from "googleapis";

export async function submitForm(formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const consent = formData.get("consent") === "on";

  if (!firstName || !lastName || !email || !consent) {
    return {
      success: false,
      message: "Please fill in all fields and provide consent.",
    };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || ""),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [firstName, lastName, email, consent, new Date().toISOString()],
        ],
      },
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you for signing up! We'll notify you when we launch.",
      };
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
