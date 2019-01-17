# ServiceNow React Record Picker

Reference field is a key functionality for many ServiceNow applications. Especially when it comes to custom web apps and Service Portal.

This implementation is based on [react-select](https://www.react-select.com/) and [react-select-async-paginate](https://github.com/vtaits/react-select-async-paginate) libraries, so you can use all of their options and features in your ServiceNow applications.

The key idea for this reference field (record picker) implementation is to show how you can utilize React components for ServiceNow applications and create complex functionality with a few lines of code.

## Run Locally

1. Clone this repository
```bash
git clone https://github.com/vtaits/react-select-async-paginate.git
```
2. Install dependencies
```bash
npm install
```
3. Set up proxy to handle requests to your ServiceNow instance

In **package.json** add:
```json
"proxy": "https:<instance-name>.service-now.com"
```
4. Add your ServiceNow instance account and password by creating an `.env` file

In **.env** add:
```
REACT_APP_USER=<your-username>
REACT_APP_PASSWORD=<your-password>
```
5. Run React
```bash
npm start
```

You're all set 🙂