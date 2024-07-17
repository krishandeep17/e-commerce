import connectDB from "./config/db.js";
import products from "./data/products.js";
import users from "./data/users.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";

connectDB(); // Connect to MongoDB

// Import data into the database
async function importData() {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    // Insert sample data
    const createdUsers = await User.create(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.create(sampleProducts);

    console.log("Data imported successfully!");
    process.exit();
  } catch (error) {
    console.log(`Error importing data: ${error}`);
    process.exit(1);
  }
}

// Delete all data from the database
async function deleteAllData() {
  try {
    // Clear all data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("All data deleted successfully!");
    process.exit();
  } catch (error) {
    console.log(`Error deleting data: ${error}`);
    process.exit(1);
  }
}

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteAllData();
}
