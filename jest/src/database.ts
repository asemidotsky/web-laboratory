class Database {
    private items: number[] = [];

    public itemsCount = (): number => {
        return this.items.length;
    }
    public addItem = (item: number) => {
        this.items.push(item);
    }
}

const dbPrivate: Database = new Database();
export const db = dbPrivate;