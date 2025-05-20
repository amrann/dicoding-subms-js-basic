// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
};

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const order = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu'
  };
  orders.push(order);
};

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const getOrder = orders.find(order => order.id === orderId);

  if (getOrder) {
    getOrder.status = status;
  } else {
    console.log(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
  }

};

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const totalRevenue = orders
    .filter(order => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalPrice, 0);
  
  return totalRevenue;
};

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  
  if (index !== -1) {
    orders.splice(index, 1);
  } else {
    console.log(`Pesanan dengan ID ${id} tidak ditemukan.`);
  }
};

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
