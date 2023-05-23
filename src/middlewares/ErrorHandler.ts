import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	interface Error {
		statusCode?: number;
		success?: boolean;
		message?: string;
	}
	const ResponseError: Error = {
		statusCode: 500,
		success: false,
		message: "internal server error",
	};
	switch (err.name) {
		case "SequelizeValidationError":
		case "SequelizeUniqueConstraintError":
			ResponseError.statusCode = 400;
			ResponseError.message = err.errors[0].message;
			res.status(400).json(ResponseError);
			break;
		case "UserNotFound":
			res.status(401).json({ message: "Invalid Email/Password" });
			break;
		case "ROLE_NOTFOUND":
			ResponseError.statusCode = 404;
			ResponseError.message = "Role not found";
			res.status(404).json(ResponseError);
			break;
		case "JsonWebTokenError":
			ResponseError.statusCode = 401;
			ResponseError.message = "Invalid Access Token";
			res.status(401).json(ResponseError);
			break;

		default:
			res.status(500).json(ResponseError);
			break;
	}
};

export default errorHandler;
