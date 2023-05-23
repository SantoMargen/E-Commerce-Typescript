import { Request, Response, NextFunction } from "express";
import Role from "../db/models/Role";

interface RoleAttributes {
	id?: number;
	roleName?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface Result<T, U> {
	statusCode?: T;
	message?: T;
	data?: U;
}

const GetRoles = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const roles = await Role.findAll();
		const response: Result<string | number, RoleAttributes[]> = {
			statusCode: 200,
			message: "success",
			data: roles,
		};

		return res.status(200).json(response);
	} catch (error: any) {
		next(error);
	}
};

const CreaateRole = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { roleName } = req.body;
		const newRecord = await Role.create({ roleName });
		const response: RoleAttributes = newRecord;

		return res.status(201).json(response);
	} catch (error) {
		next(error);
	}
};

const GetRoleById = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { roleId } = req.params;
		const role = await Role.findByPk(roleId);
		if (!role) throw { name: "ROLE_NOTFOUND" };

		const response: RoleAttributes = role;

		return res.status(201).json(response);
	} catch (error) {
		next(error);
	}
};

const DeleteRole = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { roleId } = req.params;
		const role = await Role.findByPk(roleId);
		if (!role) throw { name: "ROLE_NOTFOUND" };

		const roleDeleted = await Role.destroy({ where: { id: roleId } });
		const response: Result<string | number, string> = {};
		if (roleDeleted === 1) {
			response.statusCode = 200;
			response.message = "success";
			response.data = "Role has been deleted";
		}

		return res.status(200).json(response);
	} catch (error: any) {
		next(error);
	}
};

const UpdateRole = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { roleId } = req.params;
		const { roleName } = req.body;
		const role = await Role.findByPk(roleId);
		if (!role) throw { name: "ROLE_NOTFOUND" };

		role.roleName = roleName;
		await Role.update(role, { where: { id: roleId } });

		const response: Result<string | number, string> = {
			statusCode: 200,
			message: "success",
			data: "Role has been updated",
		};

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

export default {
	GetRoles,
	CreaateRole,
	GetRoleById,
	DeleteRole,
	UpdateRole,
};
