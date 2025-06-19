# Generator

**Generator** is a lightweight desktop application built with **Electron** and **Tailwind CSS**, offering the following features:

* ✅ **CPF Validation** (formatting and digit verification)
* 🔢 **CPF Generation** (valid CPFs in the `XXX.XXX.XXX-XX` format)
* 🔒 **Password Generation** (customizable with lowercase, uppercase, numbers, symbols, and adjustable length)

---

## 📋 Prerequisites

Before using **Generator**, make sure you have installed:

* [Node.js](https://nodejs.org/) (version 14 or higher)
* **Yarn** or **npm** (package manager)

---


## 🚀 Running in Development Mode

1. **Clone this repository**

   ```bash
   git clone https://github.com/JoaoGuilherme527/generator.git
   cd generator
   ```

2. **Install dependencies**

   * With Yarn:

     ```bash
     yarn install
     ```
   * Or with npm:

     ```bash
     npm install
     ```

3. **Start the application**

   ```bash
   yarn start
   # or
   npm run start
   ```

The application window will open automatically, and any changes in the source code will trigger hot reload.

---

## 📦 Building for Distribution

To package the app for Windows, macOS, or Linux:

```bash
# With Yarn:
yarn build

# Or with npm:
npm run build
```

The installers will be generated in the `dist/` folder, as configured by **electron-builder**.

---

## 🤝 Contributing

1. **Fork** this repository
2. Create a **branch** for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes:

   ```bash
   git commit -m "Add new feature"
   ```
4. **Push** to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request**

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
