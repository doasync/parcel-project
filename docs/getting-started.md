`---
id: getting-started
title: Getting started
---

### Choose your JavaScript editor

You need a JavaScript editor that can offer strong support for the latest JavaScript features. WebStorm a full-blown IDE that can handle modern JavaScript and much more. You can also try VSCode as a text editor and viewer, because it's light weight and fast and has a rich plug-in ecosystem.

### Install Node.js

Install the latest version of `node` and `npm`. You can use `nvm` that stands for Node Version Manager. As the name suggests, it helps you manage and switch between different Node versions. It is a command line utility and a bash script. Rather than working at the operating system level, `nvm` works at the level of an independent directory within your home directory. This means that you can install multiple self-contained versions of Node.js without affecting the entire system. So, if you already have node installed and you're concerned about upgrading and breaking existing projects, you can install `nvm` with only one command using the install script. Check out the [project's GitHub page](https://github.com/nvm-sh/nvm) for more details.

### Clone the repository

You need to have a copy the repository on your computer. You can use Git from the command line to clone the repository from Bitbucket. The references to all the packages that are used in the application are stored in `package.json` file. It's a Node's package manifest. It contains the name of the project, the initial version, a description, some scripts which we'll be using later to help automate our processes, and also a list of production and development dependencies with their versions.

### Install the packages

Once you have a `package.json` file, install the necessary `npm` packages. To do that, open up your command line (integrated in WebStorm). You can use the terminal built into our operating system, but the nice thing about using a built in terminal is that it opens by default in your project's root directory so you don't end up having to `cd` into there after opening a terminal. Run `yarn` to install the packages. This should take about a minute as it downloads all of the packages and places them within a folder called `node_modules`.

### Setup a project

When you have the sources of the application, you can just open the folder where they are stored and arrange them in a WebStorm project. A project is a folder with the source code, the libraries and tools you have installed, and various app configuration files (for example, `.editorconfig` or `.eslintrc.js`). You can configure settings on the project level, so that settings are applied to the current project only. These settings are stored in the `.idea` directory.
