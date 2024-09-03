import { select } from "@inquirer/prompts";
import { Command } from "commander";

export const init = new Command()
	.name("init")
	.description("initialize KRDS")
	.action(initialize);

async function initialize() {
	const answer = await select({
		message: "initialize KRDS",
		choices: ["style guide", "components"],
	});

	console.log(answer);
}
