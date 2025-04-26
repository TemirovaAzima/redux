export async function updateProductWithoutRedux({id, updatedProduct}) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        });
        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();
        console.log("Updated product", data);
        return data
    } catch (err) {
        console.error("Error updating product", err);
    }
}