// db.ts
import Dexie, { Table } from "dexie";
import { Workflow } from "./WorkspaceDB";
import { Changelog, Folder, Media, Tag, UserSettings } from "../types/dbTypes";

class WorkspaceDB extends Dexie {
  workflows!: Table<Workflow, string>;
  changelogs!: Table<Changelog, string>;
  media!: Table<Media, string>;
  folders!: Table<Folder, string>;
  tags!: Table<Tag, string>;
  userSettings!: Table<UserSettings, string>;

  constructor() {
    super("WorkspaceManagerDB");
    this.version(1)
      .stores({
        workflows: "&id, name, parentFolderID", // Primary key and indexed props
        changelogs: "&id, workflowID",
        media: "&id, workflowID",
        folders: "&id, name, parentFolderID",
        tags: "&name",
        userSettings: "&userID",
      })
      .upgrade((trans) => {
        // Here you can write logic to initialize or migrate data to the new 'media' table, if necessary
      });
  }
}

export const indexdb = new WorkspaceDB();
