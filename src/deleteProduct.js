export async function deleteProduct(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Something went wrong deleting");

        const data = await response.json();
        console.log("Deleted product response", data);
        return data;
    } catch (err) {
        console.error("Error deleting product:", err)
    }
}