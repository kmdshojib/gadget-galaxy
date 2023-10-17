export const calculateTotalPrice = (items: any) => {
    return items.reduce((total: any, item: any) => {
        if (item.price !== null && item.quantity !== null) {
            return total + item.price * item.quantity;
        } else {
            return total;
        }
    }, 0);
};
