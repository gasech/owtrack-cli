import chalk from "chalk";

export const log = (message: string) => {
  console.log(chalk.cyan(message));
};

export const error = (message: string) => {
  console.log(chalk.red(message));
};

export const warn = (message: string) => {
  console.log(chalk.yellow(message));
};

export const clear = () => {
  console.clear();
};
