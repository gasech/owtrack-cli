import inquirer from "inquirer";
import { init } from "../index";

export const askReturnMenu = async () => {
	const answer = await inquirer.prompt({
		name: "menu",
		type: "list",
		message: "Return to menu?",
		choices: [
			"Return to menu",
			"Quit"
		],
	});

	handleReturnMenu(answer.menu);
};

const handleReturnMenu = (answer: string) => {
	const choice = answer.replaceAll(" ", "_").toLowerCase();

	if (choice === "return_to_menu") return init();
	if (choice === "quit") return process.exit(0);
};
