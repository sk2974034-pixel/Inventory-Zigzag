let products = [
    "Dell XPS 15 Laptop",
    "Dell Monitor",
    "Dell Keyboard",
    "Dell Mouse",
    "Dell G15 Gaming Laptop",
    "Dell Latitude 7420"
];

function displayInventory() {
    const listContainer = document.getElementById("inventoryList");
    const countBadge = document.getElementById("productCount");
    
    listContainer.innerHTML = "";
    countBadge.innerHTML = products.length + " Products";

    for (let i = 0; i < products.length; i++) {
        let li = document.createElement("li");
        li.className = "product-item";
        
        li.innerHTML = `
            <div class="product-info">
                <span class="product-icon">💻</span>
                <span class="product-name">${products[i]}</span>
            </div>
            <div class="status-indicator" title="In Stock"></div>
        `;
        
        listContainer.appendChild(li);
    }
}

function addProduct() {
    const input = document.getElementById("productInput");
    const productName = input.value.trim();
    
    if (productName === "") {
        showMessage("Please enter a product name!", "warning");
        return;
    }
    
    if (products.includes(productName)) {
        showMessage("Duplicate error: This product already exists in inventory.", "error");
        return;
    }
    
    products.push(productName);
    showMessage(`Success: "${productName}" added to inventory.`, "success");
    
    input.value = "";
    displayInventory();
}

function removeProduct() {
    const input = document.getElementById("productInput");
    const productName = input.value.trim();
    
    let index = products.indexOf(productName);
    
    if (index === -1) {
        showMessage("Error: Product not found in inventory.", "error");
    } else {
        products.splice(index, 1);
        showMessage(`Success: "${productName}" removed from inventory.`, "success");
        input.value = "";
        displayInventory();
    }
}

function checkProduct() {
    const input = document.getElementById("productInput");
    const productName = input.value.trim();
    
    if (productName === "") {
        showMessage("Please enter a product name to search.", "warning");
        return;
    }
    
    if (products.includes(productName)) {
        showMessage(`Product Available In Stock: "${productName}"`, "success");
    } else {
        showMessage(`Out Of Stock: "${productName}"`, "error");
    }
}

function showMessage(text, type) {
    const messageBox = document.getElementById("messageBox");
    
    messageBox.innerText = text;
    messageBox.className = "message-box show msg-" + type;
    
    setTimeout(function() {
        messageBox.className = "message-box";
    }, 4000);
}

window.onload = function() {
    displayInventory();
};
