#!/usr/bin/env node
import { Command } from "commander";
import { init } from "@/commands/init";

const program = new Command().name("krds").description("KRDS");

program.addCommand(init).parse();
