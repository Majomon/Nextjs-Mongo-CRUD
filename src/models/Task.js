import { Schema, model, models } from "mongoose";

/* Esquema es solo una definición */
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El tìtulo es requerido"],
      unique: true,
      /* Saca el espacio del principio y el final */
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripción es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/* El modelo es el que opera con la base de datos */

export default models.Task || model("Task", taskSchema);
