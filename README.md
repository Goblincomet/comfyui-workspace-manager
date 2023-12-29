# ☕️ ComfyUI Workspace Manager - Comfyspace

A ComfyUI custom node for project management to **centralize the management of all your workflows in one place**. Seamlessly switch between workflows, create and update them within a single workspace, like Google Docs.

If you have questions or suggestions, please join our [Discord Channel](https://discord.gg/bN9E8MnMT5)

## Installation

### [Option 1] via ComfyUI Manager (Preferred)

Simply search for “ComfyUI Workspace Manager”, install, and restart ComfyUI.

### [Option 2] via git

Like any other custom node installation, in your ComfyUI root folder

```
cd custom_nodes && git clone https://github.com/11cafe/comfyui-workspace-manager.git
```

and restart your ComfyUI.

It is recommended to do git clone than downloading zip folder, because you can get latest updates by `git pull`!

## Features

- 🔁Effortlessly switch between different workflows in your workspace.
- 🤏**Drag and drop** to insert subworkflows into current flow.
- Create and name workflows
- 🗂️Organize workflows with folders, 🏷️tags
- 📂Saves all your workflows in a single folder (now it's under `/ComfyUI/my_workflows`)
- 📑Quickly duplicate flow in right-click menu
- **Bulk import** workflows into your workspace
- 🕛Version control of workflow, never lose any changes (Upcoming)
- cloud sync & backup workspace so you will never lose your data (Upcoming!)
- One-click share workflow (Upcoming!)

switch between flows:

![switch flow (1)](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/79cbc1b5-9b1a-44c5-835a-8c6645409d9d)

🤏drag and drop to insert sub-workflow:

![drag drop file demo](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/4ab1949d-7fa8-403a-9d92-5d43ad568572)

🗂️Organize your workflows with folders:

<img width="397" alt="Screenshot 2023-12-28 at 11 20 01 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/b14ede49-8d2a-486e-a9e1-5e871864e4f7">

import flows:

![import flows](https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/884c8852-73c7-41d6-9179-7fb1fcea9d04)

duplicate flow by right click menu option:
<img width="385" alt="Screenshot 2023-12-29 at 9 58 26 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/b74c4405-8232-4e39-b995-3b4877d27c9e">

add tags to flow: <img width="500" alt="Screenshot 2023-12-13 at 1 54 04 AM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/6bf4d22b-f52a-4d23-8882-4a31162616f3">

Workflow operations: Manual Save, Download, Discard unsaved changes: 
<img width="500" alt="Screenshot 2023-12-29 at 9 59 57 PM" src="https://github.com/11cafe/comfyui-workspace-manager/assets/18367033/88c82672-ebf2-4feb-bf5b-74b447843c2c">


**Looking for colaborators and coworkers** to develop this ComfyUI project management tool. If you know React, Python or ML model deployment, please reach out to weixuanfu01@gmail.com We want to make it easy to **manage, share and deploy** ComfyUI project.

## FAQ

### Where are my workflow and workspace data stored?

🍺 All your workflows are now output to a folder in `/ComfyUI/my_workflows` ⚠️Note: this is a ONE-WAY sync folder, that will only reflect changes made from your ComfyUI workspace browser; If you add some files manually using your OS file system (e.g. Finder in MacOS, File Explorer in Windows), workspace manager will not be able to pickup those changes. You need to use the "Import" button in files side bar to add new files to workspace manager.

Our internal db data is stored in your disk under /ComfyUI/custom_nodes/comfyui-workspace-manager/db/

## Upcoming Features

1. 1-Click Install Models
   Often when you import a json workflow from online, it will show lots of missing nodes or models errors, we will provide easy one-click install for missing models from Hugging face and Civiti

2. Modular
   Modern software development project are all modularized, the whole system is broken down into different modules. In ComfyUI each custom node is a module and should be self contained and easy to install and depend on from other modules. So that the modules (custom nodes) can be easily reused across projects.
   ➡️ We need something like web bundler, e.g. webpack, vite. This will make each custom node self contained and has a clear definition of its dependency.

3. Multi workflow project
   Now you can only work on one workflow at a time, this limits the potential to build large scale workflows that consists multiple sub-workflows parts. Each workflow can be seen as a custom node. You should be able to easily convert one workflow into one custom node. You can reuse workflow/custom node across your project.
   ➡️ We need a cross workflow, project management tool, like VSCode editor

4. Cloud running / easy deployment
   Right now you need to have python and GPU server up to run ComfyUI or Automatic111, that’s really painful for people who do not own a GPU. You should be able to run UI independently without paying for GPU💰.
   ➡️ Share and deploy your workflow to cloud in 1click and other people can easily run in browser using cloud GPU with no setup. It should be as easy as running Google Docs or Figma.

## Dev

1. Clone ComfyUI
   `git clone https://github.com/comfyanonymous/ComfyUI`
   follow the install and setup instructions of ComfyUI README
2. Clone Workspace Manager
   in /ComfyUI folder

```
cd custom_nodes && git clone https://github.com/11cafe/comfyui-workspace-manager.git
```

3. npm install
   inside `/ComfyUI/custom_nodes/comfyui-workspace-manager`
   do `cd ui && npm install`
   this will install all node dependencies
4. build and run
   inside `/ComfyUI/custom_nodes/comfyui-workspace-manager/ui`
   `npm run build --watch`
   this command will watch for your file changes and automatically rebuild, you just need to refresh to see your changes in browser everyting you change some code
5. run ComfyUI server
   inside `/ComfyUI`
   do `python main.py` or `python3 main.py` depending on your version
