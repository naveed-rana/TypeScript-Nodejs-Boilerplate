import App from "./app";
import errorhandler  from "errorhandler";

//get env PORT from server or use 8080
const PORT = process.env.PORT || 8080;

//error handler midelware
if (process.env.NODE_ENV === 'development') {
  // only use in development
  App.use(errorhandler());
}


App.listen(PORT, () => {
  console.log("Express running on port " + PORT);
});
