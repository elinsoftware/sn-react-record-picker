# ServiceNow React Record Picker

Reference field is a key functionality for many ServiceNow applications. Especially when it comes to custom web apps and Service Portal.

This implementation is based on [react-select](https://www.react-select.com/) and [react-select-async-paginate](https://github.com/vtaits/react-select-async-paginate) libraries, so you can use all of their options and features in your ServiceNow applications.

The key idea for this reference field (record picker) implementation is to show how you can utilize React components for ServiceNow applications and create complex functionality with a few lines of code.

## Run Locally

1. Clone this repository
```bash
git clone https://github.com/elinsoftware/sn-react-record-picker.git
```
2. Install dependencies
```bash
npm install
```
3. Set up proxy to handle requests to your ServiceNow instance

In **package.json** add:
```json
"proxy": "https://<instance-name>.service-now.com"
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

You're all set to run React app locally 🙂

## Deploy to ServiceNow

1. Build the application package
```bash
npm run build
```
2. For each .js and .css file from build/static folder create a Style Sheet record in ServiceNow, copy the corresponding code.
3. Create UI page, set `Direct = True`. Copy HTML code from /build/index.html.
4. Replace inline javascript code in HTML with a reference to the `runtime~main` code from the corresponding Style Sheet. The reference link should look like `[style_sheet_sys_id].cssdbx`
3. Replace all other links with references to the corresponding Style Sheets.

Your updated UI page should look like this:
![uipage](/public/UI_page.png)

You just deployed a React application to ServiceNow. 

Open the UI page in a browser to see how the application works.

