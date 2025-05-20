/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
	constructor(id, name, quantity, price) {
		this.ID = id;
		this.Name = name;
		this.Quantity = quantity;
		this.Price = price;
	};
	
	updateDetails(name, quantity, price) {
		this.Name = name;
		this.Quantity = quantity;
		this.Price = price;
	};

	displayDetails() {
		return `ID: ${this.ID}, Name: ${this.Name}, Quantity: ${this.Quantity}, Price: ${this.Price}`;
	};
};

// Jangan hapus kode di bawah ini!
export default Item;
