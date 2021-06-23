import { Request, Response, Router } from "express";

const route = Router();

// Ruta get: Listar tareas
route.get("/", (req: Request, res: Response) =>
  res.send(
    "Ejemplo de CRUD API con Express y Mongoose. Por favor utiliza un frontend para interactuar."
  )
);

// Ruta post: Agregar tarea
route.post("/:id", (req: Request, res: Response) => {
  //TODO
});

// Ruta put: Actualizar tarea
route.put("/:id", (req: Request, res: Response) => {
  //TODO
});

// Ruta delete: Eliminar tarea
route.delete("/:id", (req: Request, res: Response) => {
  //TODO
});

export default route;
