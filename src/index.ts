import express from "express";
import bodyParser from "body-parser";
import router from "./routes/Routes";
import errorHandler from "./middlewares/ErrorHandler";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use(errorHandler);

app.listen(3000, async () => {
	try {
		console.log("Successfully cleaned up all DB connections");
		console.log("App Running on port 3000");
	} catch (error) {
		console.log("Failed to cleanup DB connection ", error);
	}
});
