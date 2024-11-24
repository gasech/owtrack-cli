import fs from "fs";
import os from "os";
import { Match } from "../models/Match";

export const storagePath = `/home/${os.userInfo().username}/.cache/owtrack/`;

export const readData = () => {
  let data;

  try {
    if (!checkIfPathExists()) {
      createDefaultData();
    }

    data = JSON.parse(fs.readFileSync(storagePath + "data.json", "utf8"));
  } catch (err) {
    console.error(err);
  }

  return data;
};

export const saveData = (matches: Match[]) => {
  const data = {
    matches: matches,
  };

  const convertedData = JSON.stringify(data, null, 4);

  try {
    fs.writeFileSync(storagePath + "data.json", convertedData);
  } catch (err) {
    console.error(err);
  }
};

export const checkIfPathExists = (): boolean => {
  try {
    if (fs.existsSync(storagePath)) return true;
  } catch (err) {
    console.log(err);
  }

  return false;
};

export const createDefaultData = () => {
  const defaultData = {
    matches: [],
  };

  try {
    fs.mkdirSync(storagePath, { recursive: true });
    fs.writeFileSync(
      storagePath + "data.json",
      JSON.stringify(defaultData, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
};
