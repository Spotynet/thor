"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const fakePeople = [
  {
    id: 1,
    nombre: "Juan Perez",
    email: "juan.perez@example.com",
    area: "Ventas",
    cargo: "Gerente",
  },
  {
    id: 2,
    nombre: "Maria Lopez",
    email: "maria.lopez@example.com",
    area: "Marketing",
    cargo: "Analista",
  },
  {
    id: 3,
    nombre: "Carlos Ruiz",
    email: "carlos.ruiz@example.com",
    area: "Recursos Humanos",
    cargo: "Coordinador",
  },
  {
    id: 4,
    nombre: "Ana Torres",
    email: "ana.torres@example.com",
    area: "IT",
    cargo: "Desarrolladora",
  },
  {
    id: 5,
    nombre: "Pedro Garcia",
    email: "pedro.garcia@example.com",
    area: "Ventas",
    cargo: "Representante",
  },
  {
    id: 6,
    nombre: "Luisa Gomez",
    email: "luisa.gomez@example.com",
    area: "Finanzas",
    cargo: "Contadora",
  },
  {
    id: 7,
    nombre: "Sofia Martinez",
    email: "sofia.martinez@example.com",
    area: "Legal",
    cargo: "Abogada",
  },
  {
    id: 8,
    nombre: "Ricardo Ortiz",
    email: "ricardo.ortiz@example.com",
    area: "Operaciones",
    cargo: "Supervisor",
  },
  {
    id: 9,
    nombre: "Gloria Ramirez",
    email: "gloria.ramirez@example.com",
    area: "Marketing",
    cargo: "Especialista",
  },
  {
    id: 10,
    nombre: "Javier Diaz",
    email: "javier.diaz@example.com",
    area: "IT",
    cargo: "Administrador",
  },
  {
    id: 11,
    nombre: "Andrea Herrera",
    email: "andrea.herrera@example.com",
    area: "Ventas",
    cargo: "Ejecutiva",
  },
  {
    id: 12,
    nombre: "Samuel Vega",
    email: "samuel.vega@example.com",
    area: "Recursos Humanos",
    cargo: "Asistente",
  },
  {
    id: 13,
    nombre: "Carolina Blanco",
    email: "carolina.blanco@example.com",
    area: "Finanzas",
    cargo: "Gerente",
  },
  {
    id: 14,
    nombre: "David Castro",
    email: "david.castro@example.com",
    area: "IT",
    cargo: "Soporte Técnico",
  },
  {
    id: 15,
    nombre: "Natalia Peña",
    email: "natalia.pena@example.com",
    area: "Legal",
    cargo: "Consultora",
  },
  {
    id: 16,
    nombre: "Fernando Alvarez",
    email: "fernando.alvarez@example.com",
    area: "Marketing",
    cargo: "Director",
  },
  {
    id: 17,
    nombre: "Isabel Morales",
    email: "isabel.morales@example.com",
    area: "Finanzas",
    cargo: "Analista",
  },
  {
    id: 18,
    nombre: "Manuel Gomez",
    email: "manuel.gomez@example.com",
    area: "Ventas",
    cargo: "Ejecutivo",
  },
  {
    id: 19,
    nombre: "Raquel Torres",
    email: "raquel.torres@example.com",
    area: "Operaciones",
    cargo: "Coordinadora",
  },
  {
    id: 20,
    nombre: "Hugo Sanchez",
    email: "hugo.sanchez@example.com",
    area: "IT",
    cargo: "Ingeniero",
  },
  {
    id: 21,
    nombre: "Lucia Ramos",
    email: "lucia.ramos@example.com",
    area: "Recursos Humanos",
    cargo: "Especialista",
  },
  {
    id: 22,
    nombre: "Diego Molina",
    email: "diego.molina@example.com",
    area: "Legal",
    cargo: "Abogado",
  },
  {
    id: 23,
    nombre: "Adriana Fernandez",
    email: "adriana.fernandez@example.com",
    area: "Marketing",
    cargo: "Ejecutiva",
  },
  {
    id: 24,
    nombre: "Pablo Vargas",
    email: "pablo.vargas@example.com",
    area: "IT",
    cargo: "Administrador de Sistemas",
  },
  {
    id: 25,
    nombre: "Clara Jimenez",
    email: "clara.jimenez@example.com",
    area: "Finanzas",
    cargo: "Supervisora",
  },
];


const ColaboradoresPage = () => {
  const [filters, setFilters] = useState({
    nombre: "",
    email: "",
    area: "",
    cargo: "",
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  const filteredPeople = fakePeople.filter(
    (person) =>
      person.nombre.toLowerCase().includes(filters.nombre.toLowerCase()) &&
      person.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      person.area.toLowerCase().includes(filters.area.toLowerCase()) &&
      person.cargo.toLowerCase().includes(filters.cargo.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Lista de Colaboradores
      </h1>
      <div className="overflow-x-auto bg-gradient-to-br from-gray-100 to-white p-6 rounded shadow-lg">
        <table className="table-auto w-full border-collapse rounded overflow-hidden drop-shadow-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Área
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Cargo
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium uppercase">
                Detalles
              </th>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-6 py-2">
                <input
                  type="text"
                  placeholder="Filtrar por nombre"
                  value={filters.nombre}
                  onChange={(e) => handleFilterChange(e, "nombre")}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-2">
                <input
                  type="text"
                  placeholder="Filtrar por email"
                  value={filters.email}
                  onChange={(e) => handleFilterChange(e, "email")}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-2">
                <input
                  type="text"
                  placeholder="Filtrar por área"
                  value={filters.area}
                  onChange={(e) => handleFilterChange(e, "area")}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-2">
                <input
                  type="text"
                  placeholder="Filtrar por cargo"
                  value={filters.cargo}
                  onChange={(e) => handleFilterChange(e, "cargo")}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-2"></td>
            </tr>
          </thead>
          <tbody>
            {filteredPeople.map((person, index) => (
              <tr
                key={person.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-gray-200 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {person.nombre}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {person.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {person.area}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                  {person.cargo}
                </td>
                <td className="px-6 py-4 text-center">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors"
                    title="Ver detalles"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColaboradoresPage;
