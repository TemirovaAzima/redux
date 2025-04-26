export async function getAllProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Error fetching products");
        const data = await response.json();
        console.log("Fetched products", data)
        return data
    } catch (err) {
        console.error("Error", err)
    }
}