// Get DOM elements
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const itemList = document.getElementById('itemList');
const clearAllBtn = document.getElementById('clearAllBtn');
const itemCounter = document.getElementById('itemCounter');

// Task 6: Function to update item counter
function updateCounter() {
    const itemCount = itemList.children.length;
    itemCounter.textContent = `Total items: ${itemCount}`;
}

// Task 1 & 2: Add item functionality
function addItem() {
    const itemText = itemInput.value.trim();
    
    // Task 2: Prevent empty items
    if (itemText === '') {
        alert('Item cannot be empty');
        return;
    }
    
    // Task 1: Create new li element
    const li = document.createElement('li');
    li.textContent = itemText;
    
    // Add a small delete indicator (optional, for better UX)
    li.title = 'Click to delete, double-click to mark as completed';
    
    // Append to the list
    itemList.appendChild(li);
    
    // Clear input field
    itemInput.value = '';
    
    // Task 6: Update counter
    updateCounter();
}

// Task 3 & 4: Event delegation on ul
itemList.addEventListener('click', function(event) {
    const target = event.target;
    
    // Check if clicked element is an li
    if (target.tagName === 'LI') {
        // Task 3: Delete item on single click
        target.remove(); // Using remove() method
        
        // Task 6: Update counter
        updateCounter();
    }
});

// Task 4: Double-click to toggle completed class
itemList.addEventListener('dblclick', function(event) {
    const target = event.target;
    
    // Check if double-clicked element is an li
    if (target.tagName === 'LI') {
        // Toggle completed class
        target.classList.toggle('completed');
    }
});

// Task 1: Add item when Add button is clicked
addBtn.addEventListener('click', addItem);

// Optional: Add item when Enter key is pressed in input
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Task 5: Clear All button functionality
clearAllBtn.addEventListener('click', function() {
    // Remove all list items
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    
    // Alternative: itemList.innerHTML = ''; // Simpler but doesn't use remove()
    
    // Task 6: Update counter
    updateCounter();
});

// Initialize counter on page load
updateCounter();