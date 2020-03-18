oclif-web-ui
===============

This projects aims to be a drop-in replacement for [https://github.com/oclif/command](@oclif/command) in order to have a web UI for any CLI written with [https://oclif.io/](oclif)

# Motivation

I wrote many CLI tools for developers, because they are easy to use and develop (no hastling with UIs). That's why I also wrote some easy CLI tools for non-technical people, but as they often had no experience with CLIs, they had trouble understanding them at first.

That's when I got the idea to create a tool that automatically creates a nice Web UI for your CLI.

# Installation

`npm install --save oclif-web-ui` or `yarn add oclif-web-ui`

# Usage

Simply replace any occurence of `@oclif/command` with `oclif-web-ui` in your cli code. This should only affect import statements.

Afterwards, run your cli, your browser should open with yn UI view of your commands.

# How it works

In the base `Command` class I intercept the `run` command and pass the cli config, which contains all information about the cli (commands, plugins...) to a local server class which I then start locally. Afterwards I open a browser and a localhost application (served from the local server instance) uses the cli config to display a nice UI of all commands, flags, options and so on.


# TODO

* hooks are not run anymore
* Implement showing and executing flags
* Implement showing and executing arguments
* (UI-)Tests
* CLI should exit when users closes the browser-window

