function calculateFinalAmount(totalAmount) {
    let discount = 0;

    // Determine the discount based on the totalAmount
    if (totalAmount > 500) {
        discount = totalAmount * 0.20; // 20% discount
    } else if (totalAmount >= 200 && totalAmount <= 500) {
        discount = totalAmount * 0.10; // 10% discount
    }

    // Calculate the final amount
    let finalAmount = totalAmount - discount;

    // Output the final amount
    return finalAmount;
}

// Example usage
let totalAmount = 600;
let finalAmount = calculateFinalAmount(totalAmount);
console.log(`Final amount: ${finalAmount}`); // Output: Final amount: 480


output-Final amount: 480
