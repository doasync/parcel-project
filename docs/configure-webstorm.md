---
id: configure-webstorm
title: Configure WebStorm
---

## Configure Project Structure

The top-level folder of the project is its content root. Within a content root, WebStorm can distinguish between the folders with the source code your edit and the folders with other types of content. By default, any folder is treated as source code. You can exclude folders that you don't need for development in order to increase the WebStorm performance. Excluded folders are ignored by code completion, navigation, and inspections. In the **Settings** dialog, click **Directories**, then select folders you need to exclude and click **Exclude** button. Check .gitignore file to get an idea what to exclude.


## Choose the JavaScript language version

WebStorm supports modern JavaScript and provides tight integration with various tools for web development. To get reliable and efficient coding assistance, you need to specify the language version that will be used in all JavaScript files of your application by default.

1. In the **Settings** dialog, under **Languages and Frameworks** choose **JavaScript** .
2. From the drop-down list, choose **Flow**, the highest language version. This version adds support for the Flow and JSX syntax, as well as the latest ECMAScript features with some proposals to the standard.
3. Specify an absolute path to the Flow executable. It's your local node_modules/flow-bin folder.

## Configure JavaScript Libraries

WebStorm uses libraries in order to enhance coding assistance. A library is a file or a set of files whose functions and methods are added to WebStorm's internal knowledge in addition to the functions and methods that are retrieved from the project code. If you find an unresolved method, for example, or want to improve code completion for a library that is too sophisticated for WebStorm static analysis you can configure TypeScript definitions as external libraries.

1. In the **Settings** dialog, under **Languages and Frameworks** click **JavaScript**, and then click **Libraries**.
2. Click **Download**, select the required library and click **Download and Install**.

## Configure Node.js Core library

To get code completion and reference resolution for Node.js core modules, like `fs` and `path`, you need to configure the Node.js Core library:
1. In the **Settings** dialog, under **Languages and Frameworks** click **Node.js and NPM**.
2. Select the **Coding assistance for Node.js** checkbox.

It's version-specific, so if you change the version of your Node.js, you need to select this checkbox again.

## Configure Webpack

WebStorm integrates with the webpack. This support improves coding assistance in JavaScript files by taking into account webpack module resolution and resolve aliases. It also provides code completion in webpack configuration files. You need to specify the webpack configuration file to use:

1. In the **Settings** dialog, under **Languages and Frameworks** click **JavaScript**, and then click **Webpack**.
2. On the Webpack page that opens, specify the location of the configuration file to use.

## Enable ESLint

WebStorm shows warnings and errors reported by ESLint right in the editor, as you type. In the **Settings** dialog, under **Languages and Frameworks** choose **JavaScript** and then under **Code Quality Tools** choose **ESLint**. On the ESLint page page that opens, select the **Enable** checkbox. If you followed the standard installation procedure, WebStorm detects Node.js and ESLint paths and fills in the fields itself.

## Enable Stylelint

In the **Settings** dialog, under **Languages and Frameworks** click **Stylesheets**, and then click **Stylelint**. Select the **Enable** checkbox to activate Stylelint. Specify the location of the stylelint package installed in the current project.
