import fs from "fs/promises";
import path from "path";
import { Post } from "@/models/Post";

const FILE_PATH = path.join(process.cwd(), "data", "posts.json");

export const storage = {
    async getAll(): Promise<Post[]>{
        try{
            const data = await fs.readFile(FILE_PATH, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }, 

    async saveAll(posts: Post[]): Promise<void> {
        await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
        await fs.writeFile(FILE_PATH, JSON.stringify(posts, null, 2));
    },

    async getById(id: string): Promise<Post | undefined> {
    const posts = await this.getAll();
    return posts.find((post) => post.id === id);
    },

    async update(id: string, updatedData: Partial<Post>): Promise<void> {
    const posts = await this.getAll();
    const index = posts.findIndex((p) => p.id === id);

    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedData };
      await this.saveAll(posts);
    }
  },
};