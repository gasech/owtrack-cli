import { google } from "googleapis";
import { Match } from "../models/Match.ts";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const range = "A2:I1000";

export const getData = async () => {
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  return response.data.values;
};

// [TODO]: Refactor this function to receive an array of values instead of Match.
export const appendData = async (match: Match) => {
  const heroesPlayed = match.heroesPlayed.join(",");

  const response = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          uuidv4(),
          match.result,
          match.mapType,
          match.map,
          match.role,
          heroesPlayed,
          "-",
          "-",
          match.replayCode ? match.replayCode : "-",
        ],
      ],
    },
  });

  return response.data;
};

// [TODO]: Refactor this function to receive an array of values instead of Match[].
export const updateData = async (matches: Match[]) => {
  const values = matches.map(match => {
    const heroesPlayed = match.heroesPlayed.join(",");

    return [
      match.id,
      match.result,
      match.mapType,
      match.map,
      match.role,
      heroesPlayed,
      "-",
      "-",
      match.replayCode ? match.replayCode : "-",
    ];
  });

  const response = await sheets.spreadsheets.values.update({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values,
    },
  });

  return response.data;
};

export const deleteData = async () => {
  const response = await sheets.spreadsheets.values.clear({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  return response.data;
};
