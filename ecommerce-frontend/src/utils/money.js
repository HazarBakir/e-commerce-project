export function formatMoney(amountCents){
    return `$${(amountCents / 100.0).toFixed(2)}`;
}