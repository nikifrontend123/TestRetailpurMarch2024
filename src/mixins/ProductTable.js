const ProductTable = {
    computed: {
        total() {
            let totalPrice = 0;
            for (let [index, size] of this.product.sizes.entries()) {
                totalPrice += size.price * this['quantity' + index];
            }

            return totalPrice;
        },
        calculateQty() {
            return (sizeIndex) => {
                let qtyTotal = 0;
                for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex] || 0;
                    qtyTotal += parseInt(quantity);
                }
                return qtyTotal;
            };
        },
        calculateTotal() {
            return (sizeIndex) => {
                let totalPrice = 0;
                for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex] || 0;
                    const price = this.product.sizes[sizeIndex].price;
                    totalPrice += quantity * price;
                }
                return totalPrice;
            };
        },
        calculateTotalQty() {
            let totalQty = 0;
            for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
                for (let sizeIndex = 0; sizeIndex < this.product.sizes.length; sizeIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex];
                    if (quantity) {
                        totalQty += parseInt(quantity);
                    }
                }
            }
            return totalQty;
        },
  
        skuCounter() {
            let count = 0;
            for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
                for (let sizeIndex = 0; sizeIndex < this.product.sizes.length; sizeIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex];
                    if (quantity) {
                        count++;
                    }
                }
            }
            return count;
        },
        calculateGrandTotal() {
            let grandTotal = 0;
            for (let sizeIndex = 0; sizeIndex < this.product.sizes.length; sizeIndex++) {
                grandTotal += this.calculateTotal(sizeIndex);
            }
            return grandTotal;
        },

        skuCount() {
            return this.product.colors.length * this.product.sizes.length;
        },
    },
    created() {
        for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
            this.quantities[colorIndex] = [];
            for (let sizeIndex = ''; sizeIndex < this.product.sizes.length; sizeIndex++) {
                this.quantities[colorIndex][sizeIndex] = '';
            }
        }
    },
}
export default ProductTable